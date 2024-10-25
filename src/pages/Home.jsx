import AboutUs from "../components/AboutUs/AboutUs";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import Recipes from "../components/Recipes/Recipes";
import TestyMonials from "../components/TestyMonials/TestyMonials";
import WorkSection from "../components/WorkSection/WorkSection";

const Home = () => {
  return (
    <div>
      <Header />
      <WorkSection />
      <AboutUs />
      <WorkSection />
      <Recipes />
      <TestyMonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
