import Announcements from "../components/Rendering/Announcements";

import CheckoutForm from "../components/Rendering/CheckoutForm";
import Footer from "../components/Rendering/Footer";
import Navbar from "../components/Rendering/Navbar_components/Navbar";
const Checkout = () => {
  return (
    <>
      <Announcements />
      <Navbar />
      <CheckoutForm />
      <Footer />
    </>
  );
};

export default Checkout;
