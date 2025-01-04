import Image from "next/image";
import CountUp from "../Countup";
import CouterUpWithK from "../CouterUpWithK";
import { FaPhoneSquareAlt } from "react-icons/fa";
import locations from "@/app/components/locations.json";
import Link from "next/link";
import Banner from "./Banner";
import ContactInfo from "@/components/Content/ContactInfo.json";
import WhyChoose from "./WhyChoose";
import ProcessWidgetComponent from "./ProcessWidgetComponent";
import HourCta from "./HourCta";
import { MdOutlinePhoneCallback } from "react-icons/md";
import ReviewSlider from "@/app/components/ReviewSlider";
import homeData from "@/components/Content/home.json";
import Faq from "./Faq";
import ServiceSlider from "@/app/components/Home/ServiceSlider";
import CtaState from "../CtaState";
import Service from '@/app/components/Home/Service'
import Types from "../Widgets/Types";
import ReviewWidget from "../Widgets/ReviewWidget";

const Hero = () => {
  return (
    <div className="w-screen md:flex  md:w-full md:flex-col md:items-center md:justify-center overflow-hidden">
      <div className="w-full overflow-hidden text-lg  print:hidden  dark:bg-white dark:text-black">
        {/* poster */}
        <Banner
          h1={homeData.h1Banner}
          image={homeData.bannerImage}
          header={homeData.bannerQuote}
          p1={homeData.p1Banner}
        />
        {/* poster */}
        {/* Section 1 */}
        <div className="my-10 grid  grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-24">
          <div className="flex flex-col justify-center    ">
            <h2 className="text-first text-3xl font-bold">{homeData.h2}</h2>
            <div
              className="mt-4  text-justify"
              dangerouslySetInnerHTML={{ __html: homeData.p2 }}
            ></div>
          </div>
          <div className="">
            <Image
              height={10000}
              width={10000}
              src={`/${homeData.h2Image}`}
              className=" h-full w-full rounded-lg object-cover shadow-lg"
              alt={homeData.h2Image.split(".")[0]}
              title={homeData.h2Image.split(".")[0]}
            />
          </div>
        </div>
        {/* Section 1 */}
        {/* countUp */}
        {/* <div className="mt-16 flex flex-wrap items-center justify-around gap-4 bg-main py-8 text-center text-3xl font-bold text-white  ">
          <div className="">
            <CountUp end={35} /> Years Experience
          </div>
          <div className="">
            <CouterUpWithK end={40} />
            Happy Customers
          </div>
          <div className="">
            <CountUp end={40} /> Team Members
          </div>
          <div className="">
            <CouterUpWithK end={1} /> Reviews
          </div>
        </div> */}
        {/*  CountUp*/}
        {/* Section 2 */}
        <Types />
        
        {/* Section 2 */}
        {/* Cta */}
        {/* <div className="mt-20"></div>
        <CtaState  />  */}
        {/* Cta */}
        
        {/* Section 4 */}
        <WhyChoose data={homeData.whyChooseSection} />
        {/* Section 4 */}
        {/* Section 5 */}
        <div className="mt-14 grid w-full grid-cols-1 gap-6  px-6 md:mt-28 md:grid-cols-2 md:px-24 ">
        <div className=" h-fit">
          <Image
            height={1000}
            width={1000}
            src={`/${homeData?.h3Image}`}
            className="h-[400px] w-full  rounded-lg object-cover shadow-lg"
            alt={homeData?.h3Image.split(".")[0]}
          />
        </div>
        <div className=" flex w-full flex-col gap-3   ">
          <h2 className="text-3xl font-bold">{homeData.h3}</h2>

          <div
            className="mt-3  text-justify"
            dangerouslySetInnerHTML={{ __html: homeData?.p3 }}
          ></div>
          <a id='cta-id' href={`tel:${ContactInfo.tel}`} className="flex justify-center">
            <button id='cta-id' className="mt-6 rounded-lg bg-main px-6 py-2 text-xl font-bold text-white hover:translate-y-2 hover:bg-minor ">
              {ContactInfo.No}
            </button>
          </a>
        </div>
      </div>
        {/* Section 5 */}
        {/* TYPES */}
        {/* <div className="mt-20">
          <h2 className="text-first text-3xl font-bold text-center text-main">{homeData.serviceTtile}</h2>
          <p className="text-center px-4  mt-4 " dangerouslySetInnerHTML={{ __html: homeData.serviceDescription }}></p>
          <div className="block md:hidden"><ServiceSlider  /></div>
          <div className=" hidden md:block"> <Service/></div>
        
        </div> */}
        {/* TYPES*/}
        {/* CTA */}
        <div className="mt14 md:mt-20">
        <HourCta />
        </div>
        {/* CTA */}
        {/* FAQ */}
        <Faq data={homeData?.faq}/>
       
        {/* FAQ */}
        {/* Review */}
        
        <ReviewWidget/>
        {/* Review */}

        {/* -----------------------------------------Map End---------------------------- */}
        <div className="block w-full  ">
          <div className=" mt-20 overflow-hidden rounded-xl border">
            <iframe
              title="Google Map"
              height="350"
              width={"100%"}
              src={`https://maps.google.com/maps?q=+connecticut+usa&t=&z=6&ie=UTF8&iwloc=&output=embed`}
              loading="lazy"
            ></iframe>
          </div>
        </div>
        {/* -----------------------------------------Map End---------------------------- */}
      </div>
    </div>
  );
};

export default Hero;
