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

    <div className="bg-blue-900 text-center p-6">
      <h1 className="text-white">Getty: Conservation • Research • Foundation • Museum</h1>
      <h2 className="text-white">Swipe through the images using your touchpad or finger, then check out the resources below!</h2>
    </div>

    {/* <div className="flex justify-center">
      <Carousel />
    </div> */}




    <div className="flex justify-center bg-blue-900 py-0">
      <div className="carousel rounded-box">
        <div className="carousel-item">
          <img src={CollageGarland} alt="Collage" className="h-screen" />
        </div>

        <div className="carousel-item">
          <img src={StJoseph} alt="Collage" className="h-screen" />
        </div>

        <div className="carousel-item">
          <img src={Mira} alt="Mira" className="h-screen" />
        </div>

        <div className="carousel-item">
          <img src={Parasol} alt="Collage" className="h-screen" />
        </div>

        <div className="carousel-item">
          <img src={CanonTable} alt="Collage" className="h-screen" />
        </div>

        <div className="carousel-item">
          <img src={Kouros} alt="Collage" className="h-screen" />
        </div>

      </div>
    </div>

{/* Buttons */}

    <div
      className="bg-cover bg-center"
      style={{backgroundImage: `url(${Mira})`}}
    >
      <div className="bg-[hsla(0,0%,0%,0)]">
      <div className="flex justify-center items-center h-full">

      <div className="py-32 px-12 text-center text-white">
        <div>
          <a href="https://www.getty.edu/art/collection/search?open_content=true"><Button className="bg-rose-900 h-fit hover:bg-rose-700 text-2xl text-amber-300 border-1 border-amber-300 hover:border-amber-300">Open Access Images</Button></a>
        </div>

      </div>

      </div>
      </div>
    </div>

    <div className="p-1 bg-yellow-950"></div>

    <div
      className="bg-cover bg-center"
      style={{backgroundImage: `url(${JosephDetail})`}}
    >
      <div className="bg-[hsla(0,0%,0%,0)]">
      <div className="flex justify-center items-center h-full">

      <div className="py-32 px-12 text-center text-white">
        <div>
          <a href="https://www.getty.edu/research/exhibitions_events/online_exhibitions.html"><Button className="bg-rose-900 h-fit hover:bg-rose-700 text-2xl text-amber-300 border-1 border-amber-300 hover:border-amber-300">Online Exhibitions</Button></a>
        </div>

      </div>

      </div>
      </div>
    </div>

    <div className="p-1 bg-yellow-950"></div>

    <div
      className="bg-cover bg-center"
      style={{backgroundImage: `url(${ParasolDetail})`}}
    >
      <div className="bg-[hsla(0,0%,0%,0)]">
      <div className="flex justify-center items-center h-full">

      <div className="py-32 px-12 text-center text-white">
        <div>
          <a href="https://www.getty.edu/art/collection/search?department=Manuscripts"><Button className="bg-rose-900 h-fit hover:bg-rose-700 text-2xl text-amber-300 border-1 border-amber-300 hover:border-amber-300">Digitized Manuscripts</Button></a>
        </div>

      </div>

      </div>
      </div>
    </div>

    <div className="p-1 bg-yellow-950"></div>

    <div
      className="bg-cover bg-center"
      style={{backgroundImage: `url(${KourosDetail})`}}
    >
      <div className="bg-[hsla(0,0%,0%,0)]">
      <div className="flex justify-center items-center h-full">

      <div className="py-32 px-12 text-center text-white">
        <div>
          <a href="https://www.getty.edu/podcasts/"><Button className="bg-rose-900 h-fit hover:bg-rose-700 text-2xl text-amber-300 border-1 border-amber-300 hover:border-amber-300">Podcasts</Button></a>
        </div>

      </div>

      </div>
      </div>
    </div>

    <div className="p-1 bg-yellow-950"></div>

    <div
      className="bg-cover bg-center"
      style={{backgroundImage: `url(${CollageGarland})`}}
    >
      <div className="bg-[hsla(0,0%,0%,0)]">
      <div className="flex justify-center items-center h-full">

      <div className="py-32 px-12 text-center text-white">
        <div>
          <a href="https://www.getty.edu/art/"><Button className="bg-rose-900 h-fit hover:bg-rose-700 text-2xl text-amber-300 border-1 border-amber-300 hover:border-amber-300">Collection Highlights</Button></a>
        </div>

      </div>

      </div>
      </div>
    </div>

    <div className="p-1 bg-yellow-950"></div>

    <div
      className="bg-cover bg-center"
      style={{backgroundImage: `url(${CanonTableDetail})`}}
    >
      <div className="bg-[hsla(0,0%,0%,0)]">
      <div className="flex justify-center items-center h-full">

      <div className="py-32 px-12 text-center text-white">
        <div>
          <a href="https://artsandculture.google.com/streetview/the-j-paul-getty-museum/cwFdGYSXlaOg6w?sv_lng=-118.473493&sv_lat=34.0771277&sv_h=-18&sv_p=0&sv_pid=SQiOe6lNRxGuLEN-mwxVdA&sv_z=1"><Button className="bg-rose-900 h-fit hover:bg-rose-700 text-2xl text-amber-300 border-1 border-amber-300 hover:border-amber-300">Virtual Walk-through</Button></a>
        </div>

      </div>

      </div>
      </div>
    </div>


    </article>
    </>
  )
}

export default Getty;