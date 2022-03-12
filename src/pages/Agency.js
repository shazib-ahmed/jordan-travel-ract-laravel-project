import React from 'react'
import BreadCrumb from '../component/breadcrumb/BreadCrumb'
import AboutSection from '../component/agency/AboutSection'
import CounterSection from '../component/agency/CounterSection'
import ServiceSection from '../component/agency/ServiceSection'
import FooterSection from '../component/footer/FooterSection'

const Agency = () => {
  return (
    <>
      <BreadCrumb />
      <AboutSection />
      <CounterSection />
      <ServiceSection/>
      <FooterSection />
    </>
  )
}

export default Agency;