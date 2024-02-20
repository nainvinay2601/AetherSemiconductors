import './App.css';
import HeroSection from './components/HeroSection';
import Partners from './components/Partners';
import WhoWeAre from './components/WhoWeAre';
import Technology from './components/Technology';
// import OurSolution from './components/OurSolution';
// import Obsolescence from './components/Obsolescence';
// import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    <HeroSection/>
    <Partners/>
    <WhoWeAre/>
    <Technology/>
    {/* <OurSolution/> */}
    {/* <Obsolescence/> */}
    <Footer/>
    {/* <ContactForm/> */}
      
    </div>
  );
}

export default App;
