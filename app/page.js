import { Footer, Navbar } from "../components";
import { About, Explore, GetStarted, Hero, Insights, World } from "../sections";

const Page = () => (
  <div className="bg-sky overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Explore />
    <GetStarted />
    <World />
    <Insights />
    <Footer />
  </div>
);

export default Page;
