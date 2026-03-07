import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminProducts from "./pages/admin/AdminProducts";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import { isAdminAuthenticated } from "./lib/adminAuth";
import { checkApiHealth } from "./lib/health";

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="flex flex-col min-h-screen w-full">
      {!isAdminRoute && <Navbar />}
      <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/products"
            element={
              <ProtectedRoute>
                <AdminProducts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <Navigate
                to={isAdminAuthenticated() ? "/admin/products" : "/admin/login"}
                replace
              />
            }
          />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

function App() {
  useEffect(() => {
    const runHealthCheck = async () => {
      const isHealthy = await checkApiHealth();

      if (!isHealthy) {
        console.warn("Backend API indisponível. Verifique se o serviço está rodando em VITE_API_URL.");
      }
    };

    void runHealthCheck();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
