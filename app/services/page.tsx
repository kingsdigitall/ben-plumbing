import React from 'react'
import Banner from '../components/Home/Banner'
import contentData from '@/components/Content/servicePage.json'
import Service from '../components/Home/Service'
import { Metadata } from 'next'
import Navbar from '../components/Navbar'
import { headers } from 'next/headers'
import ContactInfo from '@/components/Content/ContactInfo.json'
import Calculator from '../components/State/Calculator'


export const metadata: Metadata = {
  title: {
    absolute: contentData.metaTitle,
  },
  description: contentData.metaDescription,
  alternates: {
    canonical: `${ContactInfo.baseUrl}services`
  },
}
const page = () => {

  return (
    <div className="">
    <Navbar/>
    <div>
     <Banner  h1={contentData.h1Banner}
          image={contentData.bannerImage}
          header={contentData.bannerQuote}
          p1={contentData.metaDescription}    />
          {/* Content 1 */}
          <div className="">
            <div className="mt-20 text-minor text-4xl text-center">{contentData?.serviceTitle}</div>
            <Service vlaue=""/>
            {/* <Calculator/> */}
          </div>
          {/* Content 1 */}
    </div>
    </div>
  )
}

export default page