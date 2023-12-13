import React from 'react'
import { Link} from 'react-router-dom'


export default function Navbars(){
  return(
    <div>
    <nav>
      <div className='wrapper'>
        <div className='logo'>
        <Link to="/">VectoRent</Link>
        </div>
      <ul className="nav-links">
      <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/community">Community</Link>  </li>
      </ul >
      </div>
  </nav>
  </div>


)
}



// export default function Navbar(){
//     return (
//         <BrowserRouter>
//           <header>
//             <Link className="site-logo" to="/">VectoRent</Link>
//             <nav>
//               <Link to="/about">About</Link>
//               <Link to="/login">Login</Link>
//               <Link to="/community">Community</Link>
//             </nav>
//           </header>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/about' element={<About/>}/>
//           <Route path='/login' element={<Login/>}/>
//           <Route path='/community' element={<Community/>}/>
//         </Routes>
//       </BrowserRouter>
//       );
// }

// export default function Navbars(){
//   return(
// <nav>
//   <div className="wrapper">
//       <div className="logo">
//         <a href='/'>VectoRent</a>
//       </div>
//       <ul className="nav-links">
//         <li><a href="/">Home</a></li>
//         <li><a href="/about">About</a></li>
//         <li><a href="/community">Community</a></li>
//         <li><a href="/login">Login</a></li>
//       </ul>
//     </div>
// </nav>
//  )}