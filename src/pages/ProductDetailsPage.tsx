import { productDetail } from "../assets/data";
import Announcements from "../components/Rendering/Announcements";
import Footer from "../components/Rendering/Footer";
import Navbar from "../components/Rendering/Navbar_components/Navbar";
import SingleProductDetails from "../components/Rendering/SingleProductDetails_components/SingleProductDetails";
const ProductDetailsPage = () => {
  return (
    <div>
      {/*Appending these components which I have defined */}
      <Announcements />
      <Navbar />
      {/*Mapping the details of the element received within the JSON Response to  SingleProductDetails Component 
       which will handle the data as per requirement
      */}
      {productDetail.map((product) => (
        <SingleProductDetails product={product} key={product.id} />
      ))}
      {/*Adding these components which I have defined */}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
