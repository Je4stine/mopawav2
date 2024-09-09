// import Carousel from './Carousel'

import { CarouselComponent } from "./Carousel"
import Sharing from './Sharing'
import Stations from "./Stations"
import Stat from './Stat'
import Usage from'./Usage'
import Venue from "./Venue"
import Contact from "../../components/Contact"

function Home() {
  return (
    <div>
     <CarouselComponent/>
     <Sharing/>
     <Stations/>
     <Stat/>
     <Usage/>
     <Venue/>
     <Contact/>
    </div>
  )
}

export default Home