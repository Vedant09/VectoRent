import './App.css';
import MainContent from './components/MainContent';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar'


export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainContent/>
      <InfoSection/>
      <Footer/>
    </div>
  );
}
