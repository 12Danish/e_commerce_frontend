import { productDetail } from "../assets/data";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar_components/Navbar";
import SingleProductDetails from "../components/SingleProductDetails_components/SingleProductDetails";
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
