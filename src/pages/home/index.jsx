import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
// import HomeComponent from 'components/home-page/home-component';
import OurServices from 'components/home-page/our-services';
import OurProjects from 'components/home-page/our-projects';
import OurClients from 'components/home-page/our-clients';
import ContactUs from 'components/home-page/contact-us';
import Home from 'components/home-page/home';

const index = () => {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className='home'>
      {/* <HomeComponent /> */}
      <Home />
      <OurServices />
      <OurProjects />
      <OurClients />
      <ContactUs />
    </div>
  )
}

export default index