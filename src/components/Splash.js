import React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";
import { Button } from 'react-daisyui'

import WheatField from "./../imgs/MetImgs/VGWheatField.jpeg"
import Claricia from "./../imgs/Walters/WaltersClaricia.jpg"


function Splash() {
  return(
    <>
    <article className="prose max-w-none">

    <div className="bg-blue-500 text-white text-center p-6">
      <h2 className="text-white">Online exhibits, tours, and museum resources have been around for a while, but they got more attention during the early days of the 2020 Covid-19 pandemic. This site is a starting point for you to find fun and educational online resources. <br/><br/> Enjoy!</h2>
    </div>

{/* Navigation images */}
  <div className="bg-black p-1"></div>

    <div
      className="bg-cover bg-center"
      style={{backgroundImage: `url(${WheatField})`}}
    >
      <div className="py-44 text-center">
        <Link to="/met"><Button className="bg-blue-500 hover:bg-blue-300 text-2xl">The Metropolitan Museum of Art</Button></Link>
      </div>
    </div>

  <div className="bg-black p-1"></div>

    <div
      className="bg-cover bg-center"
      style={{backgroundImage: `url(${Claricia})`}}
    >
      <div className="py-44 text-center">
        <Link to="/manuscripts"><Button className="bg-green-700 hover:bg-green-500 text-2xl text-yellow-100 border-yellow-100">Digital Books and Manuscripts</Button></Link>
      </div>
    </div>
    


    {/* <Link to="/met"><h1>The Metropolitan Museum of Art</h1></Link> */}
    <h1>Exhibits</h1>
    <h1>Video Tours</h1>
    <h1>Google Earth Tours</h1>
    <h1>Publications</h1>
    <h1>Fun Resources</h1>

{/* Button block */}
    <div className="p-6 text-center">
      <Link to="/met"><Button className="bg-blue-500 m-1">The Metropolitan Museum of Art</Button></Link>

      <Link to="/manuscripts"><Button className="bg-green-700 m-1">Digial Books and Manuscripts</Button></Link>
      {/* test button */}
      <Button btn-primary>test!</Button>
    </div>

    </article>
    </>
  )
}

export default Splash;