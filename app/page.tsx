// "use client";
import Hero from "../sections/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../sections/About";
import Explore from "../sections/Explore";
import GetStarted from "../sections/GetStarted";
import WhatsNew from "../sections/WhatsNew";
import World from "../sections/World";
import Insights from "../sections/Insights";
import Feedback from "../sections/Feedback";

const page = () => {
  return (
    <>
      <Navbar />

      <div className="overflow-hidden">
        <Hero />
        <div className="relative">
          <About />
          <div className="z-0 gradient-03" />
          <Explore />
        </div>
        <div className="relative">
          <GetStarted />
          <div className="z-0 gradient-04"></div>
          <WhatsNew />
        </div>
        <World />
        <div className="relative">
          <Insights />
          <div className="z-0 gradient-04"></div>
          <Feedback />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default page;
