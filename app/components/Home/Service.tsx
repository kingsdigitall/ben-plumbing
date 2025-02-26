import Image from "next/image";
import React from "react";
import data from "@/components/Content/TypesWidgetContent.json";
import content from "@/components/Content/subDomainUrlContent.json";
import { MdDoubleArrow } from "react-icons/md";
import Link from "next/link";
interface ServiceItem {
  imageUrl: string;
  slug: string;
  title: string;
  description: string;
}

interface ServiceData {
  title: string;
  p: string;
  lists: ServiceItem[];
}

const Service = ({value=""}: any) => {
  // console.log(content[value]);
  const contentData: { name: string } = content[value as keyof typeof content];
  // console.log(value.split("-")[1])
 const abbrevation = value?.split("-").pop()?.toUpperCase(); 
const StateName = contentData?.name ? (abbrevation ? `${contentData.name}, ${abbrevation}` : contentData.name) : "Connecticut";
  return (
    <div className=" px-4  md:px-10">
      <h2 className="text-first text-center text-3xl font-bold text-main">
        {data.title}
      </h2>

      <div
        className="mt-4 px-4  text-center "
        dangerouslySetInnerHTML={{ __html: data.p }}
      ></div>
      <div className="mb-10  hidden flex-wrap justify-center   gap-10 md:flex">
        {data.lists?.map((items: any, index: number) => (
          <div
            className=" 1 mt-10 w-[22rem] overflow-hidden rounded-3xl border  border-gray-300 shadow-md duration-300 ease-in hover:-translate-y-4"
            key={index}
          >
            <div className="flex h-60 justify-center object-cover">
              <Image
                aria-hidden="true"
                src={`/${items.imageUrl}`}
                alt={`${items.imageUrl.split(".")[0]}`}
                title={`${items.imageUrl.split(".")[0]}`}
                width="900"
                height="550"
                className="object-cover"
              />
            </div>
            <h3
              className={`1 mt-4 flex justify-start gap-2  px-4  text-xl font-bold text-minor `}
            >
              <MdDoubleArrow className="text-bold text-3xl " />
                <Link href={`/services/${items.slug}`}>{items.title.split("[location]").join(StateName)}</Link>
            </h3>
            <div
              className=" p-4 text-justify text-base"
              dangerouslySetInnerHTML={{ __html: items.description.split("[location]").join(StateName) }}
            ></div>
          </div>
        ))}
      </div>
      <div className="block md:hidden">
        {data.lists.map((items: any) => (
          <div
            className=" rounded-2xl border   p-3 shadow-xl"
            key={items?.title}
          >
            <div className="flex items-center justify-start gap-4">
              <div className="h-14 w-14 overflow-hidden rounded-full object-cover">
                <Image
                  aria-hidden="true"
                  src={`/${items.imageUrl}`}
                  alt={`${items.imageUrl.split(".")}`}
                  title={`${items.imageUrl.split(".")}`}
                  width="900"
                  height="550"
                  className="h-14 w-14 object-cover "
                />
              </div>
              <h2 className="w-[75%]  text-lg font-bold text-main">
                 <Link href={`/services/${items.slug}`}>{items.title.split("[location]").join(StateName)}</Link>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
