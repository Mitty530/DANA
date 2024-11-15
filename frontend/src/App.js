import Header  from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MobileMenu  from "./components/MobileMenu";
function App() {
  return (
    <div className="App">
        <MobileMenu />
        <Header />
        <Home />
        <Footer />

    </div>
  );
}

export default App;
