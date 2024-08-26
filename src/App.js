import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <section className="pt-12">
          <div className="spacer"></div>
          <Routes>
            <Route path="/" element={<Home />} />



            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart/>} />
            {/*<Route path="/products" element={<Products/>} />*/}
            <Route path="/checkout" element={<Checkout/>} />
            {/*<Route path="/products/:id" element={<ProductDetail />} />*/}
          </Routes>
        </section>
        <Footer/>
        </Router>

    </>
  );
}

export default App;
