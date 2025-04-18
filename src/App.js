import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MainForm from "./components/MainForm";
import RecentSubmissions from "./components/RecentSubmissions";
import Faq from "./components/Faq";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Hero />
      <About />
      <MainForm />
      <RecentSubmissions />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
