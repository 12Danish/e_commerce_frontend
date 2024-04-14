import Categories from "../components/Rendering/Categories_componenets/Categories";
import Navbar from "../components/Rendering/Navbar_components/Navbar";
import Slider1 from "../components/Rendering/ProductSlider1_components/Slider1";
import Announcements from "../components/Rendering/Announcements";
import Footer from "../components/Rendering/Footer";
import Slider2 from "../components/Rendering/ProductSlider2_components/Slider2";
import SaleSlider from "../components/Rendering/SaleSlider";
import TopSlider from "../components/Rendering/Top_Slider_components/TopSlider";
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
