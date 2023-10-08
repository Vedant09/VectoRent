import './App.css';
import MainContent from './MainContent';
import InfoSection from './InfoSection';
import Footer from './Footer';



function Searchbox(){
  return(
    <div className='navsearchbox'>
      <p></p>
      <input type="text" className='navtextbox'></input>
      <h1 className='h1search'>search</h1>
    </div>
  );
}

function Navbar(){
  return(
    <nav className='navbar'>
      <h1 className='nameVR'>VectoRent</h1>
      <Searchbox/>
      <ul className='navlinks'>
        <li>Home</li> 
        <li>Products</li>
        <li>About</li>
        <li>Pricing</li>
      </ul>
    </nav>
    
  );

}


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
