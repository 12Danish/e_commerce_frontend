import Announcements from "../components/Announcements";
import CartBody from "../components/Cart_components/CartBody";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar_components/Navbar";

const Cart = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <CartBody />
      <Footer />
    </div>
  );
};

export default Cart;
