import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Community from './components/Community'
import Signup from './components/SignUp'
import Houses from '../src/RentType/Houses'
import Courts from '../src/RentType/Courts'
import Vehicles from '../src/RentType/Vehicles'
import Others from '../src/RentType/Others'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from './components/IndexPage';

export default function App() {
  return (
    <div className='main'>

<BrowserRouter>
      <Navbar />
        <Routes >
        <Route path='/' element={<IndexPage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/houses' element={<Houses/>}/>
          <Route path='/courts' element={<Courts/>}/>
          <Route path='/vehicles' element={<Vehicles/>}/>
          <Route path='/others' element={<Others/>}/>
        </Routes>
      <Footer />
</BrowserRouter>
    </div>
    
  );
}