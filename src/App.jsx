import { useEffect, useState, lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./components/Loader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivacyPolicy from "./page/PrivacyPolicy";


// Lazy load pages
const Index = lazy(() => import("./page/Index"));
const About = lazy(() => import("./page/About"));
const Whyus = lazy(() => import("./page/Whyus"));
const VisionMission = lazy(() => import("./page/VisionMission"));
const Infrastructure = lazy(() => import("./page/Infrastructure"));
const Clientele = lazy(() => import("./page/Clientele"));
const ContactUs = lazy(() => import("./page/ContactUs"));
const MarbleCollection = lazy(() => import("./page/MarbleCollection"));
const MarbleCategory = lazy(() => import("./page/MarbleCategory"));
const TilesCollection = lazy(() => import("./page/TilesCollection"));
const TilesCategory = lazy(() => import("./page/TilesCategory"));
const Notfound = lazy(() => import("./page/Notfound"));

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
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/marble-collection" element={<MarbleCollection />} />
          <Route path="/marble-collection/:slug" element={<MarbleCategory />} />
          <Route path="/tiles-collections" element={<TilesCollection />} />
          <Route path="/tiles-collections/:slug" element={<TilesCategory />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/404" element={<Notfound />} />

          {/* You can lazy load more pages here */}
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}
