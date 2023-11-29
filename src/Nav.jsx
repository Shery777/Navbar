import React, { useState } from 'react'
import "./Nav.css"
const Nav = () => {

  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

     <div className="container">
      <nav>
        <div className="child1"><img src="https://www.edifycit.com/images/logowhite.png" alt=""/></div>
        <div className="ul">
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
        >
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Courses</a></li>
          <li><a href="">Team</a></li>
          <li><a href="">Blogs</a></li>
          <li><a href="">News & Events</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Success Stories</a></li>
        </ul>
        <div className='div2'><button>Apply Now <i class="fa-solid fa-angle-right"></i></button></div>
        </div>
        <button className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (<i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-bars"></i>)}
        </button>
      </nav>
     </div>
    </>
  )
}
export default Nav
