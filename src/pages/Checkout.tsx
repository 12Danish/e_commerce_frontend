import Announcements from "../components/Announcements";

import CheckoutForm from "../components/CheckoutForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar_components/Navbar";
const Checkout = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <CheckoutForm />
      <Footer />
    </div>
  );
};

export default Checkout;