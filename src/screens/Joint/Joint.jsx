import "./Joint.css";
import ProfitTable from "./Table";
import Services from "./Services";
import Payment from "./Payment";
import Investor from "./Investor";
import Other from "./Other";
import Hero from "./Hero";
import Partners from "./Partners";
import Outlets from "./Outlets";
import FloatingActionButton from "./FloatingActionButton";
import Cards from "./Cards";

function Joint() {
  return (
    <div className=" relative">
      <Hero />
      <Cards />
      <Payment />
      <Investor />
      <Services />
      <Other />
      <ProfitTable />
      <Partners />
      <Outlets />
      <FloatingActionButton />
    </div>
  );
}

export default Joint;
