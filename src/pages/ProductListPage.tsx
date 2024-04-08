import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar_components/Navbar";
import Newsletter from "../components/Newsletter";
import ProductList from "../components/ProductList_components/ProductList";

const ProductListPage = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <ProductList />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductListPage;
