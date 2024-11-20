import Header  from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MobileMenu  from "./components/MobileMenu";
import AuthPage from "./components/AuthPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Guide from "./pages/Guide";
import Feature from "./pages/Feature";

function App() {
  return (
    <div className="App">
      <Router>
        <MobileMenu />
        <Header />

        {/* Routing starts here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/features" element={<Feature />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
