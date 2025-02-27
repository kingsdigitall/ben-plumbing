import React from "react";
import Banner from "@/app/components/Home/Banner";
import contentData from "@/components/Content/servicePage.json";
import Service from "@/app/components/Home/Service";
import NavbarState from "@/app/components/State/NavbarState";
import { headers } from "next/headers";
import ContactInfo from "@/components/Content/ContactInfo.json";
import Servicedata from "@/components/Content/TypesWidgetContent.json";
import content from "@/components/Content/subDomainUrlContent.json";

export function generateMetadata({ params }: { params: { services: string } }) {
  const serviceData: any = Servicedata.lists.find(
    (service) => service.slug === params.services,
  );
  const headersList = headers();
  const subdomain = headersList.get("x-subdomain");
  const Data: any = content[subdomain as keyof typeof content];
  return {
    title: {
      absolute: contentData.h1Banner,
    },
    description: `Need plumbing services in ${Data.name}? Contact VR Plumbing for quick, reliable service and affordable rates. Call us or request a quote today!`,
    alternates: {
      canonical: `https://${Data?.slug}.${ContactInfo.host}/services`,
    },
  };
}
const page = () => {
  const headersList = headers();
  const subdomain = headersList.get("x-subdomain");
  const contentDat: { name: string } =
    content[subdomain as keyof typeof content];
  const abbrevation = subdomain?.split("-")[1]?.toUpperCase();
  const StateName = contentDat?.name
    ? abbrevation
      ? `${contentDat.name}, ${abbrevation}`
      : contentDat.name
    : "USA";
  return (
    <div className="">
      <NavbarState />
      <div>
        <Banner
          h1={contentData.h1Banner}
          image={contentData.bannerImage}
          header={contentData.bannerQuote}
          p1={`Need plumbing services in ${contentDat.name}? Contact VR Plumbing for quick, reliable service and affordable rates. Call us or request a quote today!`}
        />
        {/* Content 1 */}
        <div className="">
          <div className="mt-20 text-center text-4xl text-minor">
            {contentData?.serviceTitle}
          </div>
          <Service value={subdomain} />
        </div>
        {/* Content 1 */}
      </div>
    </div>
  );
};

export default page;

// export function generateStaticParams() {
//   const cityData: any = Servicedata.lists;
//   return cityData.map((locations: any) => ({
//     State: locations.slug.toString(),
//   }));
// }
