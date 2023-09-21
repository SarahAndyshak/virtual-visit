import React from "react";
// import Carousel from "./Carousel";
import { Carousel } from "react-daisyui";
import { Button } from 'react-daisyui'


import CollageGarland from "./../imgs/Getty/CollageGarland.jpg"
import Mira from "./../imgs/Getty/MCMf143.jpg"
import CanonTable from "./../imgs/Getty/ArmenianCanonTable.jpg"
import Kouros from "./../imgs/Getty/GettyKouros.jpg"
import Parasol from "./../imgs/Getty/KimbeiParasol.jpg"
import StJoseph from "./../imgs/Getty/LaudatoStJoseph.jpg"

import CanonTableDetail from "./../imgs/Getty/CanonTableDetail.png"
import KourosDetail from "./../imgs/Getty/KourosDetail.png"
import JosephDetail from "./../imgs/Getty/JosephDetail.png"
import ParasolDetail from "./../imgs/Getty/ParasolDetail.png"


function Getty() {
  return(
    <>
    <article className="prose max-w-none">

{/* Header */}
    <div className="bg-blue-900 text-center p-6">
      <h1 className="text-white">Getty: Conservation • Research • Foundation • Museum</h1>
      <h2 className="text-white">Scroll through the slideshow for links to resources!</h2>
    </div>


{/* button carousel */}
    <div className="carousel w-screen h-screen">
      <div id="slide1" className="carousel-item relative w-screen">
        <div
          className="bg-cover bg-center w-screen"
          style={{backgroundImage: `url(${Mira})`}}
        >
          {/* <div className="py-32 text-center">
            <div>
              <a href="https://www.getty.edu/art/collection/search?open_content=true"><Button className="bg-rose-900 h-fit hover:bg-rose-700 text-2xl text-amber-300 border-1 border-amber-300 hover:border-amber-300">Open Access Images</Button></a>
            </div>
          </div> */}
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div>
              <a href="https://www.getty.edu/art/collection/search?open_content=true"><Button className="bg-rose-900 h-fit hover:bg-rose-700 text-2xl text-amber-300 border-1 border-amber-300 hover:border-amber-300">Open Access Images</Button></a>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide6" className="btn btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div> 

      <div id="slide2" className="carousel-item relative w-screen">
        <div
          className="bg-cover bg-top w-screen"
          style={{backgroundImage: `url(${StJoseph})`}}
        >
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div>
              <a href="https://www.getty.edu/research/exhibitions_events/online_exhibitions.html"><Button className="bg-rose-900 h-fit hover:bg-rose-700 text-2xl text-amber-300 border-1 border-amber-300 hover:border-amber-300">Online Exhibitions</Button></a>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> 

      <div id="slide3" className="carousel-item relative w-screen">
        <div
          className="bg-cover bg-top w-screen"
          style={{backgroundImage: `url(${Parasol})`}}
        >
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">            
            <div>
              <a href="https://www.getty.edu/art/collection/search?department=Manuscripts"><Button className="bg-rose-900 h-fit hover:bg-rose-700 text-2xl text-amber-300 border-1 border-amber-300 hover:border-amber-300">Digitized Manuscripts</Button></a>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a> 
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div> 

      <div id="slide4" className="carousel-item relative w-screen">
        <div
          className="bg-cover bg-top w-screen"
          style={{backgroundImage: `url(${Kouros})`}}
        >
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div>
              <a href="https://www.getty.edu/podcasts/"><Button className="bg-rose-900 h-fit hover:bg-rose-700 text-2xl text-amber-300 border-1 border-amber-300 hover:border-amber-300">Podcasts</Button></a>
            </div>
          </div>
        </div>        
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a> 
          <a href="#slide5" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide5" className="carousel-item relative w-screen">
        <div
          className="bg-cover bg-center w-screen"
          style={{backgroundImage: `url(${CollageGarland})`}}
        >
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div>
              <a href="https://www.getty.edu/art/"><Button className="bg-rose-900 h-fit hover:bg-rose-700 text-2xl text-amber-300 border-1 border-amber-300 hover:border-amber-300">Collection Highlights</Button></a>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a> 
          <a href="#slide6" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide6" className="carousel-item relative w-screen">
        <div
          className="bg-cover bg-center w-screen"
          style={{backgroundImage: `url(${CanonTable})`}}
        >
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div>
              <a href="https://artsandculture.google.com/streetview/the-j-paul-getty-museum/cwFdGYSXlaOg6w?sv_lng=-118.473493&sv_lat=34.0771277&sv_h=-18&sv_p=0&sv_pid=SQiOe6lNRxGuLEN-mwxVdA&sv_z=1"><Button className="bg-rose-900 h-fit hover:bg-rose-700 text-2xl text-amber-300 border-1 border-amber-300 hover:border-amber-300">Virtual Walk-through</Button></a>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide5" className="btn btn-circle">❮</a> 
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>

    </div>


    </article>
    </>
  )
}

export default Getty;