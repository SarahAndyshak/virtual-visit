import React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";

// const StyledHeader = styled.div`
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
// `

function Header() {
  return(
    <>
    {/* <div className="navbar bg-base-100"> */}
    <div className="navbar">

      {/* <div className="navbar-start"> */}
        
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-square">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {/* <li><a>Home</a></li> */}
            <li><Link to="/"><p>Home</p></Link></li>
            {/* <li><a>The Met</a></li> */}
            <li><Link to="/met">The Met</Link></li>
            <li><Link to="/manuscripts">Manuscripts</Link></li>
            <li><Link to="/getty">Getty</Link></li>
            <li><Link to="/exhibitions">Exhibitions</Link></li>
          </ul>
        </div>
        
        <Link to="/"><p className="btn btn-ghost normal-case text-xl">Virtual Visit</p></Link>
        
      </div>
    {/* </div> */}

    {/* <Link to="/"><p>Virtual Visit</p></Link> */}
    {/* <p>Virtual Visit</p> */}
    </>
  )
}

export default Header;