// import Carousel from './Carousel'
import React, { useRef } from 'react';

import { CarouselComponent } from "./Carousel"
import Sharing from './Sharing'
import Stations from "./Stations"
import Stat from './Stat'
import Usage from'./Usage'
import Venue from "./Venue"
import Contact from "../../components/Contact"

function Home() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
     <CarouselComponent scrollToContacts={scrollToContact}/>
     <Sharing/>
     <Stations/>
     <Stat/>
     <Usage/>
     <Venue/>
     <Contact ref={contactRef}/>
    </div>
  )
}

export default Home