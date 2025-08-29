import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import ContactInfo from "@/components/Content/ContactInfo.json";
import data from "@/components/Content/hourCtaWidget.json";

const HourCta = () => {
  return (
    <div>
      <div className=" flex w-full  flex-col  items-center py-5 md:py-0">
        <div className="grid w-full overflow-hidden bg-main  px-4 md:px-20 lg:grid-cols-2">
          <div className="flex flex-col  items-start  justify-center gap-10 text-white ">
            <div
              className="w-full pt-4 text-center text-xl leading-snug md:pt-0  md:text-[38px]"
              dangerouslySetInnerHTML={{ __html: data.title }}
            ></div>
            <a
              id="cta-id"
              href={`tel:${ContactInfo.tel}`}
              className="flex    w-full justify-center px-0 md:text-4xl"
            >
              <div
                id="cta-id"
                className="flex w-full items-center justify-center gap-6 md:w-fit md:justify-start  "
              >
                <FaPhoneSquareAlt className="text-7xl" />

                <div
                  id="cta-id"
                  className="jsutify-center flex flex-col items-center  "
                >
                  <div
                    id="cta-id"
                    className="jsutify-center flex items-center text-left text-xl"
                  >
                    CALL TODAY
                  </div>
                  <div id="cta-id" className="mt-1 md:text-4xl ">
                    {ContactInfo.No}{" "}
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="mr-10 mt-4  flex   w-full items-center justify-center rounded-s-xl lg:mt-0 ">
            <Image
              src="/24service1.png"
              alt="image"
              width={10000}
              height={10000}
              className=" w-full object-cover md:h-[55vh]"
            />
            {/* <iframe
                  title="YouTube video player"
                  width="100%"
                  height="100%"
                  className=""
                  src="https://www.youtube.com/embed/"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourCta;
