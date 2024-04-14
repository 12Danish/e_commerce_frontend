import Navbar from "../components/Rendering/Navbar_components/Navbar";
import Announcements from "../components/Rendering/Announcements";
import Footer from "../components/Rendering/Footer";

import ProductList from "../components/Rendering/ProductList_components/ProductList";

const ProductListPage = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <ProductList />
      <Footer />
    </div>
  );
};

export default ProductListPage;
