import Footer from "./Footer";
import Header from "./Header";
import { motion } from "framer-motion";
import { ProductProvider } from "../Context/productContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }) {
  return (
    <ProductProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="bg-black min-h-screen text-white"
      >
        <ToastContainer toastClassName="dark-toast" position="top-center" />
        <Header />
        {children}
        <Footer />
      </motion.div>
    </ProductProvider>
  );
}
