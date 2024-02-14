import './App.css';
import HeroSection from './components/HeroSection';
import Technology from './components/Technology';
import OurSolution from './components/OurSolution';
import Obsolescence from './components/Obsolescence';
import ContactForm from './components/ContactForm';
function App() {
  return (
    <div className="App">
    <HeroSection/>
    <Technology/>
    <OurSolution/>
    <Obsolescence/>
    <ContactForm/>
      
    </div>
  );
}

export default App;
