import React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";
import { Button } from 'react-daisyui'

import WheatField from "./../imgs/MetImgs/VGWheatField.jpeg"
import Claricia from "./../imgs/Walters/WaltersClaricia.jpg"
import GarlandCollage from "./../imgs/Getty/CollageGarland.jpg"
import ElectronicSuperhighway from "./../imgs/ElectronicSuperhighway.jpg"


function Splash() {


  return(
    <>
    <article className="prose max-w-none">

    <div className="bg-blue-500 text-white text-center p-6">
      <h2 className="text-white">Online exhibits, tours, and museum resources have been around for a while, but they got more attention during the early days of the 2020 Covid-19 pandemic. This site is a starting point for you to find fun and educational online resources. <br/><br/> Enjoy!</h2>
    </div>

{/* Navigation images */}
  {/* <div className="bg-yellow-100 p-1"></div> */}
{/* Met */}
    <div
      className="bg-cover bg-center"
      style={{backgroundImage: `url(${WheatField})`}}
    >
      <div className="py-44 text-center">
        <Link to="/met"><Button onClick={() => window.scrollTo(0,0)} 
        className="bg-blue-500 h-fit hover:bg-blue-300 text-2xl text-yellow-100 border-yellow-100">The Metropolitan Museum of Art</Button></Link>
      </div>
    </div>

{/* Books & MSS */}
  <div className="bg-lime-950 p-2"></div>

    <div
      className="bg-cover bg-center"
      style={{backgroundImage: `url(${Claricia})`}}
    >
      <div className="py-44 text-center">
        <Link to="/manuscripts"><Button onClick={() => window.scrollTo(0,0)}
        className="bg-green-700 h-fit hover:bg-green-500 text-2xl text-yellow-100 border-yellow-100">Digital Books and Manuscripts</Button></Link>
      </div>
    </div>
    
    <div className="bg-red-950 p-2"></div>

{/* Getty */}
    <div
      className="bg-cover bg-center"
      style={{backgroundImage: `url(${GarlandCollage})`}}
    >
      <div className="py-44 text-center">
        <Link to="/getty"><Button onClick={() => window.scrollTo(0,0)}
        className="bg-rose-500 h-fit hover:bg-rose-400 text-2xl text-yellow-100 border-yellow-100">Getty Museum</Button></Link>
      </div>
    </div>

    <div className="bg-yellow-950 p-2"></div>

{/* Exhibitions */}
    <div
      className="bg-cover bg-center"
      style={{backgroundImage: `url(${ElectronicSuperhighway})`}}
    >
      <div className="py-44 text-center">
        <Link to="/exhibitions"><Button onClick={() => window.scrollTo(0,0)}
        className="bg-fuchsia-700 h-fit hover:bg-fuchsia-500 text-2xl text-yellow-100 border-yellow-100">Online Exhibitions</Button></Link>
      </div>
    </div>

    <div className="bg-fuchsia-950 p-2"></div>



    <h1>Virtual Tours (YouTube, Google Earth)</h1>
    <h1>Publications</h1>
    <h1>Fun Resources</h1>

{/* Button block */}
    <div className="p-6 text-center">
      <Link to="/met"><Button onClick={() => window.scrollTo(0,0)} className="bg-blue-500 text-yellow-100 h-fit m-1 hover:bg-blue-300">The Metropolitan Museum of Art</Button></Link>

      <Link to="/manuscripts"><Button onClick={() => window.scrollTo(0,0)} className="bg-green-700 text-yellow-100 hover:bg-green-500 h-fit m-1">Digital Books and Manuscripts</Button></Link>

      <Link to="/getty"><Button onClick={() => window.scrollTo(0,0)} className="bg-rose-500 text-yellow-100 h-fit m-1 hover:bg-rose-400">The Getty</Button></Link>

      <Link to="/exhibits"><Button onClick={() => window.scrollTo(0,0)} className="bg-fuchsia-700 text-yellow-100 h-fit m-1 hover:bg-fuchsia-500">Online Exhibitions</Button></Link>

    </div>

    </article>
    </>
  )
}

export default Splash;