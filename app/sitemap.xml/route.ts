// app/sitemap-index.xml.ts
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import contentData from "@/components/Content/ContactInfo.json";
import subdomainMap from "@/components/Content/subDomainUrlContent.json"; // keys = allowed subdomains
import serviceData from "@/components/Content/TypesWidgetContent.json";

export const dynamic = "force-dynamic";

// Helper function to fetch data from API with fallback
async function fetchWithFallback<T>(url: string, fallback: T): Promise<T> {
  try {
    const response = await fetch(url, {
      cache: "no-store",
      headers: {
        "Cache-Control": "no-cache",
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.warn("API fetch failed, using fallback:", error);
    return fallback;
  }
}

// Safely derive the slugs (fallback to [])
const ServiceSlug: string[] = Array.isArray(serviceData?.lists)
  ? serviceData.lists
      .map((item: any) => String(item?.slug || "").trim())
      .filter(Boolean)
  : [];

export async function GET() {
  const h = headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto =
    h.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");

  const [hostnameNoPort, port] = host.split(":");
  const firstLabel = hostnameNoPort.split(".")[0];
  const allowed = Object.keys(subdomainMap || {});
  const onSubdomain = allowed.includes(firstLabel);

  const makeOrigin = (h: string) => `${proto}://${h}${port ? `:${port}` : ""}`;
  const origin = makeOrigin(hostnameNoPort);
  const now = new Date().toISOString();

  // Build /service/[slug] entries for subdomains only
  const ServiceURL = ServiceSlug.map(
    (slug) => `
  <url>
    <loc>${origin}/service/${slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`,
  ).join("");

  // If we are on a subdomain: return that subdomain's own URL-set
  if (onSubdomain) {
    // Use static subdomain map directly instead of calling an API
    const currentSubdomain = (subdomainMap as any)[firstLabel] || null;

    // Generate neighborhood URLs if they exist
    let neighborhoodURL = "";
    if (currentSubdomain?.neighbourhoods) {
      const neighborhoods = String(currentSubdomain.neighbourhoods)
        .split("|")
        .map((n: string) => n.trim())
        .filter(Boolean);

      neighborhoodURL = neighborhoods
        .map((neighborhood: string) => {
          const neighborhoodSlug = neighborhood
            .toLowerCase()
            .replace(/\.+$/, "")
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9\-]/g, ""); // strip unsafe chars
          return `
  <url>
    <loc>${origin}/${neighborhoodSlug}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
        })
        .join("");
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${origin}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${origin}/about</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${origin}/contact</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${origin}/our-brands</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${origin}/service</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>${ServiceURL}${neighborhoodURL}
</urlset>`;

    return new NextResponse(xml, {
      headers: { "Content-Type": "application/xml" },
    });
  }

  // Otherwise (main domain): keep your original sitemap index unchanged
  const baseUrl = contentData.baseUrl; // e.g., "https://example.com/" (with trailing slash)
  const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}sitemap-main.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}sitemap-subdomains.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
</sitemapindex>`;

  return new NextResponse(indexXml, {
    headers: { "Content-Type": "application/xml" },
  });
}
