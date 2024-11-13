import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
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
import Support from "./routes/support";
import Sustainability from "./routes/sustainability";

function App() {
  return (
    <>
      <ScrollToTop />
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
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
