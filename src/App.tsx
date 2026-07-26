import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import PortfolioPage from "./pages/PortfolioPage";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/footer";
import { Toaster } from "sonner";

function App() {
  return (
    <ReactLenis
      root
      options={{
        duration: 3,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 1.5,
        infinite: false,
      }}
    >
      <Router>
        <Toaster />
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </ReactLenis>
  );
}

export default App;
