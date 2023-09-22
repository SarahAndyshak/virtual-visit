import React from "react";
import { Button } from 'react-daisyui'

import Versailles from "./../imgs/Versailles.jpeg"
import EiffelTower from "./../imgs/EiffelTowerPostcard.jpeg"
import PalazzoDelTe from "./../imgs/PalazzoDelTeGiants.jpeg"
import Oxford from "./../imgs/OxfordGarden.jpeg"
import Himeji from "./../imgs/Himeji.jpg"
import ISGCourtyard from "./../imgs/ISGCourtyard.jpg"
import DanceClass from "./../imgs/MetImgs/DegasDanceClass.jpeg"
import Theodosius from "./../imgs/MetImgs/TheodosiusWindow.jpeg"

function Tours() {
  return(
    <>
    <article className="prose max-w-none">
    
{/* Header */}
    <div className="bg-amber-200">
    <div
      className="w-full bg-no-repeat bg-cover bg-center"
      style={{backgroundImage: `url(${Versailles})`}}>
      <div className="bg-black/[0.7] py-36 px-12 text-center">
        <h1 className="text-amber-100">Virtual Tours</h1>
        <h2 className="text-amber-100">There are many types of virtual tours available. Some museums, monuments, and places of interest have used Google Street View to create virtual walk throughs, available on <a className="text-amber-300 hover:text-amber-500" href="https://artsandculture.google.com/partner">Google Arts & Culture.</a>
        <br /><br />
        People around the world have created virtual tours available on YouTube.
        <br /><br />
        These are just a few suggestions to start your explorations.</h2>
      </div>
    </div>

{/* Grid items */}
    <div className="grid grid-cols-1 gap-1 items-center my-1 md:grid-cols-2">
    
{/* Eiffel Tower */}
      <div 
      className="text-center p-20 bg-center"
      style={{backgroundImage: `url(${EiffelTower})`}}>
        <a href="https://artsandculture.google.com/partner/tour-eiffel"><Button className="bg-red-900 hover:bg-red-700 text-amber-200 border-1 border-amber-200 h-fit text-xl">Eiffel Tower</Button></a>
      </div>

{/* Palazzo del Te */}
      <div 
      className="text-center p-20 bg-cover"
      style={{backgroundImage: `url(${PalazzoDelTe})`}}>
        <a href="https://artsandculture.google.com/partner/palazzo-te"><Button className="bg-teal-900 hover:bg-teal-700 text-amber-200 border-1 border-amber-200 h-fit text-xl">Palazzo del Te</Button></a>
      </div>

{/* Versailles */}
      <div 
      className="text-center p-20 bg-cover"
      style={{backgroundImage: `url(${Versailles})`}}>
        <a href="https://artsandculture.google.com/partner/palace-of-versailles"><Button className="bg-lime-900 hover:bg-lime-700 text-amber-200 border-1 border-amber-200 h-fit text-xl">Palace of Versailles</Button></a>
      </div>

{/* Oxford Botanic Garden & Arboretum */}
    <div 
      className="text-center p-20 bg-cover bg-bottom"
      style={{backgroundImage: `url(${Oxford})`}}>
        <a href="https://artsandculture.google.com/partner/oxford-botanic-garden-and-arboretum"><Button className="bg-purple-900 hover:bg-purple-700 text-amber-200 border-1 border-amber-200 h-fit text-xl">Oxford Botanic Garden & Arboretum</Button></a>
      </div>

{/* Isabella Stewart Gardner Museum */}
    <div 
      className="text-center p-20 bg-cover bg-center"
      style={{backgroundImage: `url(${ISGCourtyard})`}}>
        <a href="https://artsandculture.google.com/streetview/isabella-stewart-gardner-museum/WgGwvp4sRb4yrw?sv_lng=-71.09891535715373&sv_lat=42.338619456354955&sv_h=280&sv_p=0&sv_pid=ielw90_WKZU0jZSQ82SIww&sv_z=1"><Button className="bg-pink-900 hover:bg-pink-700 text-amber-200 border-1 border-amber-200 h-fit text-xl">Isabella Stewart Gardner Museum</Button></a>
      </div>

{/* Himeji Castle */}
    <div 
      className="text-center p-20 bg-cover bg-center"
      style={{backgroundImage: `url(${Himeji})`}}>
        <a href="https://artsandculture.google.com/streetview/himeji-jo/IAHRTxrMYeWWXQ"><Button className="bg-sky-700 hover:bg-sky-500 text-amber-200 border-1 border-amber-200 h-fit text-xl">Himeji Castle</Button></a>
      </div>

{/* Met 5th Ave */}
    <div 
      className="text-center p-20 bg-cover bg-center"
      style={{backgroundImage: `url(${DanceClass})`}}>
        <a href="https://artsandculture.google.com/streetview/metropolitan-museum-of-art/KAFHmsOTE-4Xyw?sv_lng=-73.9624786&sv_lat=40.7803959&sv_h=322.9&sv_p=0&sv_pid=KeFx8oXHzeuY8L5rfepHaA&sv_z=1"><Button className="bg-emerald-900 hover:bg-emerald-700 text-amber-200 border-1 border-amber-200 h-fit text-xl">The Met 5th Avenue</Button></a>
      </div>

{/* Met Cloisters */}
    <div 
      className="text-center p-20 bg-cover bg-top"
      style={{backgroundImage: `url(${Theodosius})`}}>
        <a href="https://artsandculture.google.com/streetview/the-cloisters-museum-and-gardens/aAFFBxRsY3TilQ"><Button className="bg-red-900 hover:bg-red-700 text-amber-200 border-1 border-amber-200 h-fit text-xl">The Met Cloisters</Button></a>
      </div>

{/* close grid */}
    </div>

{/* Embed video */}
    <div className="flex justify-center">
{/* The Louvre */}
      <iframe className="mb-1 w-full aspect-video" src="https://www.youtube.com/embed/6vuFh6NNa70?si=p1F_Ssq0FYCcbvAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <div className="flex justify-center">
{/* Venice */}
      <iframe className="mb-1 w-full aspect-video" src="https://www.youtube.com/embed/0txBFbAuhLY?si=AZZAuAKhUFkTqDuK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <div className="flex justify-center">
{/* Olympic National Park */}
      <iframe className="mb-1 w-full aspect-video" src="https://www.youtube.com/embed/9frdQgL9WlQ?si=KhQUKTdWfXNKpFLz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

{/* background color */}
    </div>
    </article>
    </>
  )
}

export default Tours;