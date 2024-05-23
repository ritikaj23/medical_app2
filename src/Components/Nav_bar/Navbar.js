import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

 

const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [showDropdown, setShowDropdown] = useState(false);

    const handleLogout = (e) => {

      e.preventDefault()

        setIsLoggedIn(false);

        sessionStorage.removeItem("email");

        sessionStorage.removeItem("name");

        sessionStorage.removeItem("phone");

        sessionStorage.removeItem("auth-token");

        window.location.reload();

    }
    const handleDropdown = () => { 

        setShowDropdown(!showDropdown); 
  
      } 

   
    useEffect(() => {

      const storedemail = sessionStorage.getItem("email");

      if (storedemail) {

            setIsLoggedIn(true);

          }

        }, []);

  return (

    <nav>

   {isLoggedIn?(

          <>

          <li onClick={handleDropdown}>

            <p>Welcome, user</p>  

            {showDropdown && (

                <ul className="dropdown-menu">

                  <li>

                    <Link to="/profile">Your Profile</Link>

                  </li>

                  <li>

                    <Link to="/reports">Your Reports</Link>

                  </li>

                </ul>

              )}

              </li>

            <li className="link">

              <button className="btn2" onClick={handleLogout}>

                Logout

              </button>

            </li>

           

          </>

        ) : (

          <>

            <li className="link">

              <Link to="/signup">

                <button className="btn1">Sign Up</button>

              </Link>

            </li>

            <li className="link">

              <Link to="/login">

                <button className="btn1">Login</button>

              </Link>

            </li>

          </>

        )}

   

    </nav>

  );

};

 

export default Navbar;