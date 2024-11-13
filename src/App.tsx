import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Transition from "./components/Transition";
import About from "./routes/about";
import Article from "./routes/article";
import Blog from "./routes/blog";
import Checkout from "./routes/checkout";
import Error from "./routes/error";
import Guide from "./routes/guide";
import Home from "./routes/home";
import Order from "./routes/order";
import Privacy from "./routes/privacy";
import Product from "./routes/product";
import Subscribe from "./routes/subscribe";
import Support from "./routes/support";
import Sustainability from "./routes/sustainability";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Transition key={location.pathname}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/support" element={<Support />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Transition>
    </AnimatePresence>
  );
}

export default App;
