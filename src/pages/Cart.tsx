import CartBody from "../components/Rendering/Cart_components/CartBody";
import Announcements from "../components/Rendering/Announcements";
import Footer from "../components/Rendering/Footer";
import Navbar from "../components/Rendering/Navbar_components/Navbar";

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
