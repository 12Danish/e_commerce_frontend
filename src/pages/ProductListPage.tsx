import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import ProductList from "../components/ProductList";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

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
