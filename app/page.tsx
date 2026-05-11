import Hero from "../components/Hero";
import Loader from "../components/Loader";
import Categories from "../components/Categories";
import ImpactMetrics from "../components/ImpactMetrics";
import FeaturedStories from "../components/FeaturedStories";
import AboutUs from "../components/AboutUs";
import GetInvolved from "../components/GetInvolved";
import Resources from "../components/Resources";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 selection:text-white">
      <Loader />
      <Hero />
      <ImpactMetrics />
      <FeaturedStories />
      <AboutUs />
      <Categories />
      <GetInvolved />
      <Resources />
      <Contact />
    </main>
  );
}