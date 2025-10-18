import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import data from "@/components/Content/Faq.json";
import { headers } from "next/headers";
import content from "@/components/Content/subDomainUrlContent.json";

const Faq = () => {
  const headersList = headers();
  const subdomain = headersList.get("x-subdomain");
  const contentData: { name: string } =
    content[subdomain as keyof typeof content];
  // console.log(value.split("-")[1])
  const abbrevation = subdomain?.split("-").pop()?.toUpperCase();
  const StateName = contentData?.name
    ? abbrevation
      ? `${contentData.name}, ${abbrevation}`
      : contentData.name
    : "Connecticut";
  return (
    <div className="mt-14 md:mt-20">
      <h2 className=" text-center text-3xl font-bold text-main">FAQs</h2>
      <div className="mt-5 flex flex-col items-center justify-center px-6">
        <Accordion
          type="multiple"
          defaultValue={["item-0"]}
          className="md:w-2/3 "
        >
          {data
            .sort(() => 0.5 - Math.random())
            .slice(0, 5)
            .map((items: any, index: number) => (
              <AccordionItem
                value={`item-${index + 1}`}
                className="no-underline"
                key={index}
              >
                <AccordionTrigger className="font-semibold hover:no-underline">
                  Q: {items?.FAQ.split("[location]").join(StateName)}
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  A: {items?.Answer.split("[location]").join(StateName)}
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
