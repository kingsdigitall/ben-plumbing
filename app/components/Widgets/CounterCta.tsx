import React from "react";
import CountUp from "../Countup";
import CouterUpWithK from "../CouterUpWithK";
import ContactInfo from "@/components/Content/ContactInfo.json";
import { IoCallSharp } from "react-icons/io5";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { VscPreview } from "react-icons/vsc";
import { FaAward } from "react-icons/fa";
import Image from "next/image";

const CounterCta = () => {
  return (
   
    <div className="mt-20  text-white relative">
    <div className="">

    </div>
    <div className="item-center flex flex-col justify-around items-center px-4 md:px-10 py-10 md:flex-row md:py-10 relative bg-black/70 z-20">
      <div className="max-w-4xl mx-auto text-center relative ">
        {/* <div className="w-fit rounded-full border border-white p-1 px-2 text-sm  font-semibold text-minor">
          NUMBER TALKS
        </div> */}
        <div className="mt-2 text-4xl">
        Book Your <span className="text-minor">Appointment </span> Today with Ben Franklin Plumbers for Quality Service
        </div>
        <div className="mt-4">
        Don’t let plumbing issues disrupt your day – Ben Franklin Plumbing is here to provide you with fast, reliable, and affordable solutions. Whether you&apos;re dealing with a leaky faucet, or clogged drain, or need a complete system overhaul, our team of expert plumbers in West Hartford, CT, is ready to serve you.
        </div>
        <div className="mt-6  gap-4 flex justify-center ">
          <div className="flex flex-col text-lg  border px-4 py-2 bg-white rounded-md">
            <div className=" font-bold text-main">
              <a href={`tel:${ContactInfo.tel}`}>{ContactInfo.No}</a>
            </div>
          </div>
        </div>
      </div>
   
    </div>
 <div className="absolute bottom-0 left-0 top-0  right-0 ">
  <Image
    height={1000}
    width={1000}
    className="w-full h-full object-cover object-center "
    src="/plumbing-repair-service-min.jpg"
    alt="counter-cta"
  />
 </div>
  </div>
  );
};

export default CounterCta;
