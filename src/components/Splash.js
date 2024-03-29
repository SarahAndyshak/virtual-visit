import React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";
import { Button } from 'react-daisyui'

import WheatField from "./../imgs/MetImgs/VGWheatField.jpeg"
import Claricia from "./../imgs/Walters/WaltersClaricia.jpg"
import GarlandCollage from "./../imgs/Getty/CollageGarland.jpg"
import ElectronicSuperhighway from "./../imgs/ElectronicSuperhighway.jpg"
import Versailles from "./../imgs/Versailles.jpeg"
import Shelf from "./../imgs/Shelf.jpg"
import Cats from "./../imgs/KahlerMyWifesLovers.jpeg"


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

{/* Virtual Tours */}
<div
      className="bg-cover bg-center"
      style={{backgroundImage: `url(${Versailles})`}}
    >
      <div className="py-44 text-center">
        <Link to="/tours"><Button onClick={() => window.scrollTo(0,0)}
        className="bg-amber-600 h-fit hover:bg-amber-500 text-2xl text-yellow-100 border-yellow-100">Virtual Tours</Button></Link>
      </div>
    </div>

    <div className="bg-amber-800 p-2"></div>

{/* Virtual Tours */}
    <div
      className="bg-cover bg-center"
      style={{backgroundImage: `url(${Shelf})`}}
    >
      <div className="py-44 text-center">
        <Link to="/publications"><Button onClick={() => window.scrollTo(0,0)}
        className="bg-cyan-800 h-fit hover:bg-cyan-600 text-2xl text-yellow-100 border-yellow-100">Publications</Button></Link>
      </div>
    </div>

    <div className="bg-cyan-950 p-2"></div>

{/* Fun */}
    <div
      className="bg-cover bg-center"
      style={{backgroundImage: `url(${Cats})`}}
    >
      <div className="py-44 text-center">
        <Link to="/fun"><Button onClick={() => window.scrollTo(0,0)}
        className="bg-red-900 h-fit hover:bg-red-700 text-2xl text-yellow-100 border-yellow-100">Fun Resources</Button></Link>
      </div>
    </div>

    <div className="bg-amber-900 p-2"></div>


{/* Button block */}
    <div className="p-6 text-center">
      <Link to="/met"><Button onClick={() => window.scrollTo(0,0)} className="bg-blue-500 text-yellow-100 h-fit m-1 hover:bg-blue-300">The Metropolitan Museum of Art</Button></Link>

      <Link to="/manuscripts"><Button onClick={() => window.scrollTo(0,0)} className="bg-green-700 text-yellow-100 hover:bg-green-500 h-fit m-1">Digital Books and Manuscripts</Button></Link>

      <Link to="/getty"><Button onClick={() => window.scrollTo(0,0)} className="bg-rose-500 text-yellow-100 h-fit m-1 hover:bg-rose-400">The Getty</Button></Link>

      <Link to="/exhibitions"><Button onClick={() => window.scrollTo(0,0)} className="bg-fuchsia-700 text-yellow-100 h-fit m-1 hover:bg-fuchsia-500">Online Exhibitions</Button></Link>

      <Link to="/tours"><Button onClick={() => window.scrollTo(0,0)} className="bg-amber-600 text-yellow-100 h-fit m-1 hover:bg-amber-500">Virtual Tours</Button></Link>

      <Link to="/publications"><Button onClick={() => window.scrollTo(0,0)} className="bg-cyan-800 text-yellow-100 h-fit m-1 hover:bg-cyan-600">Publications</Button></Link>

      <Link to="/fun"><Button onClick={() => window.scrollTo(0,0)} className="bg-red-900 text-yellow-100 h-fit m-1 hover:bg-red-700">Fun Resources</Button></Link>

    </div>

    </article>
    </>
  )
}

export default Splash;