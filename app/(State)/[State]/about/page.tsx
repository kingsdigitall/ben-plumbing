import Image from "next/image";
import Link from "next/link";
import React from "react";
import { headers } from "next/headers";
import { BiMailSend, BiSolidPhone, BiSolidTime } from "react-icons/bi";
import { BsBookmarkStarFill, BsFillPatchCheckFill } from "react-icons/bs";
import { FaCrown } from "react-icons/fa6";
import Banner from "@/app/components/Home/Banner";
import contentData from "@/components/Content/about.json";
import ContactInfo from "@/components/Content/ContactInfo.json";
import Affordable from "@/app/components/Widgets/Affordable";
import content from "@/components/Content/subDomainUrlContent.json";
import NavbarState from "@/app/components/State/NavbarState";
import contactInfo from "@/components/Content/ContactInfo.json";
interface AboutProps {
  subdomain: string;
}

export function generateMetadata({ params }: { params: { services: string } }) {
  const headersList = headers();
  const subdomain = headersList.get("x-subdomain") as
    | keyof typeof content
    | null;
  let subdomainKey = subdomain as any;
  if (subdomainKey?.includes("-")) {
    subdomainKey = subdomainKey.split("-").pop();
  }



  if (!subdomain || !(subdomain in content)) {
    // Handle the case where subdomain is null or not in content
    return <div>Error: Invalid subdomain</div>;
  }
  const Data: any = content[subdomain];
  return {
    title: {
      absolute: contentData.h1Banner,
    },
    description: `Need plumbing services in ${Data.name}? Contact Ben Franklin Plumbing for quick, reliable service and affordable rates. Contact us today at (833) 391-3581 or request a quote today!`,
    alternates: {
      canonical: `https://${Data.slug}.${ContactInfo.host}/about`,
    },
  };
}

const Page = async () => {
  // Fetch subdomain or any other server-side data here
  const headersList = headers();
  const subdomain = headersList.get("x-subdomain") as
    | keyof typeof content
    | null;
  let subdomainKey = subdomain as any;
  if (subdomainKey?.includes("-")) {
    subdomainKey = subdomainKey.split("-").pop();
  }

  
  if (!subdomain || !(subdomain in content)) {
    // Handle the case where subdomain is null or not in content
    return <div>Error: Invalid subdomain</div>;
  }
  const Data: any = content[subdomain];
  return (
    <div className="">
      <NavbarState />
      <div className="max-[1200px] flex flex-col items-center justify-center bg-white text-black">
        <div className="w-screen min-w-[375px] cursor-default text-lg md:w-full">
          {/* poster */}
          <Banner
            h1={contentData.h1Banner}
            image={contentData.bannerImage}
            header={contentData.bannerQuote}
            p1={`Need plumbing services in ${Data.name}? Contact Ben Franklin Plumbing for quick, reliable service and affordable rates. Contact us today at (833) 391-3581 or request a quote today!`}
          />
          {/* poster */}
          {/* -----------------------------------------About Start------------------------ */}
          <div className="mx-4 mt-6 print:hidden md:mx-10">
            {/* who */}
            <div className="my-20 grid w-full grid-cols-1 items-center justify-center gap-6 px-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <div className="text-">About </div>
                <div className="text-3xl font-bold">
                  Who We Are?
                  <br />
                </div>
                <div className="mt-6"></div>
                <div
                  className="text-justify"
                  
                >Welcome to Ben Franklin Plumbing, with over 15 years of exceptional service and expertise meet dedication to customer satisfaction in {Data.name}. Located in the heart of Connecticut, we specialize in delivering top-tier plumbing solutions for both residential and commercial properties. With a team of licensed, insured, and highly trained professionals, we’re committed to providing prompt, reliable, and affordable services that exceed expectations.<br/><br/>

                We understand that plumbing issues can disrupt your daily life, which is why our team of licensed and insured experts is dedicated to providing prompt, reliable, and affordable solutions tailored to your needs. Whether it’s a minor repair, a complex installation, or an urgent emergency, you can count on our experienced technicians to deliver seamless service every time. We’re not just about fixing problems; we’re about creating peace of mind by keeping your home or business’s plumbing in peak condition.</div>
              </div>
              <div className="w-full pt-10">
                <Image
                  src={`${contentData.h2Image}`}
                  className="rounded-lg border object-cover shadow-lg"
                  alt={contentData.h2Image.split(".")[0]}
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
            {/* who */}
          </div>
          {/* -----------------------------------------About End------------------------ */}
          <div className="bg-gray-100 px-6 py-12 ">
            <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-10 text-center lg:flex-row">
              <div className="lg:w-[40%]">
                <h2 className="text-3xl font-bold text-gray-800">
                Our Mission, Vision, and Expertise
                </h2>
               
                <a id="cta-id" href={`tel:${ContactInfo.tel}`}>
                  <button
                    id="cta-id"
                    className="mt-8 rounded-lg bg-minor px-6 py-3 text-white transition duration-700 ease-in hover:bg-main"
                  >
                    Call Now
                  </button>
                </a>
              </div>
              <div className="mt-8 flex flex-col justify-center gap-6 lg:flex-row ">
                {/* Affordable */}
                <div className="flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-md ">
                  {/* <div className="flex h-12 w-12 items-center justify-center rounded-full bg-minor/20 ">
            <GiReceiveMoney className=' text-xl'/>
            </div> */}
                  <h3 className="mt-4 text-lg font-bold text-gray-800">
                    Our Mission
                  </h3>
                  <div
                    className="mt-2 text-gray-600"
                    
                  >At Ben Franklin Plumbers, we deliver exceptional plumbing services in {Data.name} with a focus on swift solutions, top-notch workmanship, and customer satisfaction. Transparency and fair pricing are at the heart of everything we do.</div>
                </div>
                {/* Professional */}
                <div className="flex w-full max-w-sm flex-col items-center rounded-lg border border-main bg-white p-6 shadow-md">
                  {/* <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <GrUserWorker className='text-main text-xl'/>
            </div> */}
                  <h3 className="mt-4 text-lg font-bold text-gray-800">
                  Our Vision
                  </h3>
                  <div
                    className="mt-2 text-gray-600"
                   
                  >We aim to provide every home and business in {Data.name}, CT with safe and modern plumbing systems. By embracing innovation and exceptional service, we’re building a community of trust and reliability.</div>
                </div>
                {/* High Quality */}
                <div className="flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-md">
                  {/* <div className="flex h-12 w-12 items-center justify-center rounded-full bg-minor/20">
            <FaRegThumbsUp className=' text-xl'/>
            </div> */}
                  <h3 className="mt-4 text-lg font-bold text-gray-800">
                  Our Expertise
                  </h3>
                  <div
                    className="mt-2 text-gray-600">
                      From emergency repairs to water heater installations, our skilled team handles every plumbing need with precision. We combine advanced tools and techniques to ensure quality results and satisfied customers in {Data.name}, CT.
                    </div>
                </div>
              </div>
            </div>
          </div>
          {/* -----------------------------------------Conversation ------------------------ */}
          <div className="my-20">
            <div className="text-center text-4xl font-extrabold text-main">
              Let&apos;s Start a Conversation
            </div>
            <div className="mt-4 border-double text-center">
              <button
                id="cta-id"
                className="mt-3 rounded-lg bg-main px-4 py-3 font-bold tracking-wide text-white shadow-lg hover:bg-minor"
              >
                <a id="cta-id" href={`tel:${ContactInfo.tel}`}>
                  {ContactInfo.No}
                </a>
              </button>
            </div>
          </div>
          {/* -----------------------------------------Conversation End------------------------ */}
          {/* all */}
          <div className="mx-4 my-20 md:mx-20">
            <div className="text-3xl font-bold">
              <div className="flex justify-center gap-2">
                <FaCrown className="text-3xl text-main" />
                Areas We Serve
              </div>
            </div>
            <div
              className="mt-2 text-center text-xl"
              dangerouslySetInnerHTML={{
                __html: contentData.areaweserveSection.description,
              }}
            ></div>
            <div className="flex justify-center">
              <Link
                href={`${ContactInfo?.baseUrl}locations`}
                className="text-center text-xl font-bold text-main duration-150 ease-in hover:tracking-wide"
              >
                {contentData.areaweserveSection.linkText}
              </Link>
            </div>
          </div>
          {/* all */}
        </div>
      </div>
    </div>
  );
};

export default Page;
