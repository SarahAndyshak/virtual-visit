import React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";
import { Button } from 'react-daisyui'

import WheatField from "./../imgs/MetImgs/VGWheatField.jpeg"


function Splash() {
  return(
    <>
    <article className="prose max-w-none">

    <div className="bg-blue-500 text-white text-center">
      <p className="p-6">Online exhibits, tours, and museum resources have been around for a while, but they got more attention during the early days of the 2020 Covid-19 pandemic. This site is a starting point for you to find fun and educational online resources. <br/><br/> Enjoy!</p>
    </div>

{/* Add slideshow or gallery of some type */}

{/* Navigation images */}
    <div
      className="bg-cover bg-center"
      style={{backgroundImage: `url(${WheatField})`}}
    >
      <div className="p-24 text-center">
      <h1 className="text-center text-white">The Metropolitan Museum of Art, NYC</h1>      

      <h1><Link to="/met">The Metropolitan Museum of Art</Link></h1>

      <Link to="/met"><Button className="bg-blue-500 m-1">The Metropolitan Museum of Art</Button></Link>
      </div>
    </div>



    <Link to="/met"><h1>The Metropolitan Museum of Art</h1></Link>
    <h1>Exhibits</h1>
    <h1>Video Tours</h1>
    <h1>Google Earth Tours</h1>
    <h1>Publications</h1>
    <h1>Fun Resources</h1>

{/* Button block */}
    <div className="p-6">
    <Link to="/met"><Button className="bg-blue-500 m-1">The Metropolitan Museum of Art</Button></Link>
    {/* test button */}
    <Button btn-primary>test!</Button>
    </div>

    </article>
    </>
  )
}

export default Splash;