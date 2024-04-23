import { useParams } from "react-router-dom"; // Import useParams
import Navbar from "../components/Rendering/Navbar_components/Navbar";
import Announcements from "../components/Rendering/Announcements";
import Footer from "../components/Rendering/Footer";

import ProductList from "../components/Rendering/ProductList_components/ProductList";

const ProductListPage = () => {
  const { type, type_name } = useParams(); // Get parameters from the URL

  return (
    <div>
      <Announcements />
      <Navbar />
      {/* Pass the parameters to the ProductList component */}
      <ProductList type={type} typeName={type_name} />
      <Footer />
    </div>
  );
};

export default ProductListPage;
