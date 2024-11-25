// import Carousel from './Carousel'
import countapi from "countapi-js";
import { CarouselComponent } from "./Carousel";
import Sharing from "./Sharing";
import Stations from "./Stations";
import Stat from "./Stat";
import Usage from "./Usage";
import Venue from "./Venue";
import Contact from "../../components/Contact";
import { Helmet } from "react-helmet";
import { useRef } from "react";
import VideoAd from "./VideoAd";

function Home() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Homepage | Mopawa Software Limited</title>
        <meta
          name="description"
          content="Mopawa Software Limited is a power bank rental company based in Kenya, that deal in Portable rental power banks  "
        />
        <meta
          name="keywords"
          content="shared power bank, rental powerbank, mopawa, power bank"
        />
      </Helmet>

      <CarouselComponent scrollToContacts={scrollToContact} />
      <VideoAd />
      <Sharing />
      <Stations />
      <Stat />
      <Usage />
      <Venue />
      <Contact ref={contactRef} />
    </div>
  );
}

export default Home;
