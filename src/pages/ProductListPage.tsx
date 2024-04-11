import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar_components/Navbar";

import ProductList from "../components/ProductList_components/ProductList";

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
