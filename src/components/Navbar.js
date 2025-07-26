// // components/Navbar.js
// import React from 'react';
// import './Navbar.css';

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">MySite</div>
//       <ul className="nav-links">
//         <li><a href="/home">Home</a></li>
//         <li><a href="/">Register</a></li>
//         <li><a href="/login">Login</a></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
// import React from 'react';
// import './Navbar.css';

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">MySite</div>

//       {/* Toggle checkbox for hamburger */}
//       <input type="checkbox" id="toggle" />
//       <label htmlFor="toggle" className="hamburger">&#9776;</label>

//       <ul className="nav-links">
//         <li><a href="/home">Home</a></li>
//         <li><a href="/">Register</a></li>
//         <li><a href="/login">Login</a></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status from localStorage
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user); // true if user exists
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    window.location.href = '/login';
  };

  return (
    <nav className="navbar">
      <div className="logo">MySite</div>
      <input type="checkbox" id="toggle" />
      <label htmlFor="toggle" className="hamburger">&#9776;</label>

      <ul className="nav-links">
        {isLoggedIn ? (
          <>
            <li><a href="/home">Home</a></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><a href="/">Register</a></li>
            <li><a href="/login">Login</a></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
