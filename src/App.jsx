import { useEffect, useState, lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./components/Loader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy load pages
const Index = lazy(() => import("./page/Index"));
const About = lazy(() => import("./page/About"));
const Whyus = lazy(() => import("./page/Whyus"));
const VisionMission = lazy(() => import("./page/VisionMission"));
const Infrastructure = lazy(() => import("./page/Infrastructure"));
const Clientele = lazy(() => import("./page/Clientele"));

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-us" element={<Whyus />} />
          <Route path="/our-vision-and-mission" element={<VisionMission />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/clientele" element={<Clientele />} />
          {/* You can lazy load more pages here */}
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}
