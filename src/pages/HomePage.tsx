import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar_components/Navbar";
import TopSlider from "../components/Top_Slider_components/TopSlider";
import Slider1 from "../components/ProductSlider1_components/Slider1";
import Footer from "../components/Footer";
import Slider2 from "../components/ProductSlider2_components/Slider2";
import SaleSlider from "../components/SaleSlider";
import Categories from "../components/Categories_componenets/Categories";
const HomePage = () => {
  return (
    <>
      <Announcements />
      <Navbar />
      <TopSlider />
      <Slider1 />
      <Slider2 />
      <SaleSlider />
      <Categories />
      <Footer />
    </>
  );
};

export default HomePage;
