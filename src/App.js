import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Marketing from './components/Marketing/Marketing';
import Navbar from './components/Navbar/Navbar';
import Newsletter from './components/Newsletter/Newsletter';
import Newsletter2 from './components/Newsletter2/Newsletter2';
import Solution from './components/Solution/Solution';
import Technology from './components/Technology/Technology';
import Visitor from './components/Visitor/Visitor';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <HeroSection />
      <Newsletter />
      <Newsletter2 />
      <Solution />
      <Visitor />
      <Technology />
      <Marketing />
      <Footer />
    </div>
  );
}

export default App;
