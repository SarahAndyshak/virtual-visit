import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from 'react-daisyui'

import ElectronicSuperhighway from './../imgs/ElectronicSuperhighway.jpg'
import Window from './../imgs/MetImgs/LaFargeWindow.jpeg'
import CollageGarland from "./../imgs/Getty/CollageGarland.jpg"
import Galette from "./../imgs/RenoirMoulinDeLaGalette.jpeg"
import Sunflowers from "./../imgs/VanGoghMuseumSunflowers.jpeg"
import Venus from "./../imgs/BotticelliBirthOfVenus.jpeg"
import Shuttlecock from "./../imgs/OldenburgShuttlecock.png"
import BritishMuseum from "./../imgs/BritishMuseumInterior.jpg"
import GeorgeWashington from "./../imgs/WashingtonDetail.jpg"
import Arnolfini from "./../imgs/ArnolfiniDetail.jpg"
import NightWatch from "./../imgs/RembrandtNightwatch.jpeg"
import NetherlandishProverbs from "./../imgs/BrueghelNetherlandishProverbs.jpeg"
import Versailles from "./../imgs/Versailles.jpeg"



function Exhibitions() {
  return(
    <>
    <article className="prose max-w-none">

{/* Background color */}
    <div className="bg-fuchsia-100 pb-1">

{/* Header */}
    <div className="bg-fuchsia-900 text-center p-6">
      <h1 className="text-white">Online Exhibitions</h1>
      <h2 className="text-white">Many museums around the world have exhibitions available online, both at their own sites, and on <a className="text-lime-300 hover:text-lime-500" href="https://artsandculture.google.com/partner">Google Arts & Culture.</a> <br /><br />These are just a few suggestions to start your explorations.</h2>
    </div>

{/* <Cards */}
    <div className="grid grid-cols-1 gap-1 p-1 items-center md:grid-cols-3">

{/* The Met */}
      <div 
        className="text-center p-20 bg-center bg-cover rounded-lg"
        style={{backgroundImage: `url(${Window})`}}>
          <a href="https://artsandculture.google.com/search/exhibit?q=metropolitan%20museum%20of%20art"><Button className="bg-black/75 hover:bg-black/25 text-fuchsia-400 hover:text-white border-none py-1 h-fit text-lg">The Metropolitan Museum of Art</Button></a>
      </div>
      
      {/* just button */}
      {/* <div 
        className="text-center bg-center bg-cover rounded-lg"
        style={{backgroundImage: `url(${Window})`}}>
          <a href="https://artsandculture.google.com/search/exhibit?q=metropolitan%20museum%20of%20art"><Button className="bg-black/75 hover:bg-black/25 text-fuchsia-400 hover:text-white border-none h-fit p-20 text-lg">The Metropolitan Museum of Art</Button></a>
      </div> */}
      
      {/* original try */}
      {/* <a className="no-underline" 
        href="https://artsandculture.google.com/search/exhibit?q=metropolitan%20museum%20of%20art">
        <div className="bg-no-repeat bg-cover bg-center rounded-lg"
          style={{backgroundImage: `url(${Window})`}}>
          <div className="bg-black/75 rounded-lg hover:bg-black/25">
            <h2 className="py-8 h-fit text-center text-fuchsia-400 hover:text-white">The Metropolitan Museum of Art</h2>
          </div>
        </div>
      </a> */}

{/* The Getty */}
      <div 
        className="text-center p-20 bg-center bg-cover rounded-lg"
        style={{backgroundImage: `url(${CollageGarland})`}}>
          <a href="https://artsandculture.google.com/search/exhibit?p=the-j-paul-getty-museum"><Button className="bg-black/75 hover:bg-black/25 text-fuchsia-400 hover:text-white border-none py-1 h-fit text-lg">The J. Paul Getty Museum</Button></a>
      </div>

      {/* <a className="no-underline" 
        href="https://artsandculture.google.com/search/exhibit?p=the-j-paul-getty-museum">
        <div className="bg-no-repeat bg-cover bg-center rounded-lg"
          style={{backgroundImage: `url(${CollageGarland})`}}>
          <div className="bg-black/75 rounded-lg hover:bg-black/25">
            <h2 className="py-8 h-fit text-center text-fuchsia-400 hover:text-white">The J. Paul Getty Museum</h2>
          </div>
        </div>
      </a> */}

{/* Nelson-Atkins */}
<div 
        className="text-center p-20 bg-center bg-cover rounded-lg"
        style={{backgroundImage: `url(${Shuttlecock})`}}>
          <a href="https://artsandculture.google.com/partner/the-nelson-atkins-museum-of-art"><Button className="bg-black/75 hover:bg-black/25 text-fuchsia-400 hover:text-white border-none py-1 h-fit text-lg">The Nelson-Atkins Museum of Art</Button></a>
      </div>

      {/* <a className="no-underline" 
        href="https://artsandculture.google.com/partner/the-nelson-atkins-museum-of-art">
        <div className="bg-no-repeat bg-cover bg-center rounded-lg"
          style={{backgroundImage: `url(${Shuttlecock})`}}>
          <div className="bg-black/75 rounded-lg hover:bg-black/25">
            <h2 className="py-8 h-fit text-center text-fuchsia-400 hover:text-white">The Nelson-Atkins Museum of Art</h2>
          </div>
        </div>
      </a> */}

{/* Musee d'Orsay */}
      <div 
        className="text-center p-20 bg-center bg-cover rounded-lg"
        style={{backgroundImage: `url(${Galette})`}}>
          <a href="https://artsandculture.google.com/partner/musee-dorsay-paris"><Button className="bg-black/75 hover:bg-black/25 text-fuchsia-400 hover:text-white border-none py-1 h-fit text-lg">Musée d'Orsay</Button></a>
      </div>

      {/* <a className="no-underline" 
        href="https://artsandculture.google.com/partner/musee-dorsay-paris">
          <div className="bg-no-repeat bg-cover bg-center rounded-lg"
            style={{backgroundImage: `url(${Galette})`}}>
            <div className="bg-black/75 rounded-lg hover:bg-black/25">
              <h2 className="py-8 h-fit text-center text-fuchsia-400 hover:text-white">Musée d'Orsay</h2>
            </div>
        </div>
      </a> */}

{/* Van Gogh Museum */}
      <div 
        className="text-center p-20 bg-center bg-cover rounded-lg"
        style={{backgroundImage: `url(${Sunflowers})`}}>
          <a href="https://artsandculture.google.com/partner/van-gogh-museum"><Button className="bg-black/75 hover:bg-black/25 text-fuchsia-400 hover:text-white border-none py-1 h-fit text-lg">Van Gogh Museum</Button></a>
      </div>

      {/* <a className="no-underline" 
        href="https://artsandculture.google.com/partner/van-gogh-museum">
        <div className="bg-no-repeat bg-cover bg-center rounded-lg"
            style={{backgroundImage: `url(${Sunflowers})`}}>
          <div className="bg-black/75 rounded-lg hover:bg-black/25">
            <h2 className="py-8 h-fit text-center text-fuchsia-400 hover:text-white">Van Gogh Museum</h2>
          </div>
        </div>
      </a> */}

{/* Uffizi */}
      <div 
        className="text-center p-20 bg-center bg-cover rounded-lg"
        style={{backgroundImage: `url(${Venus})`}}>
          <a href="https://artsandculture.google.com/partner/uffizi-gallery"><Button className="bg-black/75 hover:bg-black/25 text-fuchsia-400 hover:text-white border-none py-1 h-fit text-lg">Uffizi Gallery</Button></a>
      </div>

      {/* <a className="no-underline" 
        href="https://artsandculture.google.com/partner/uffizi-gallery">
        <div className="bg-no-repeat bg-cover bg-top rounded-lg"
          style={{backgroundImage: `url(${Venus})`}}>
          <div className="bg-black/75 rounded-lg hover:bg-black/25">
            <h2 className="py-8 h-fit text-center text-fuchsia-400 hover:text-white">Uffizi Gallery</h2>
          </div>
        </div>
      </a> */}

{/* British Museum */}
      <div 
        className="text-center p-20 bg-center bg-cover rounded-lg"
        style={{backgroundImage: `url(${BritishMuseum})`}}>
          <a href="https://artsandculture.google.com/partner/the-british-museum"><Button className="bg-black/75 hover:bg-black/25 text-fuchsia-400 hover:text-white border-none py-1 h-fit text-lg">The British Museum</Button></a>
      </div>

      {/* <a className="no-underline" 
        href="https://artsandculture.google.com/partner/the-british-museum">
        <div className="bg-no-repeat bg-cover bg-center rounded-lg"
          style={{backgroundImage: `url(${BritishMuseum})`}}>
          <div className="bg-black/75 rounded-lg hover:bg-black/25">
            <h2 className="py-8 h-fit text-center text-fuchsia-400 hover:text-white">The British Museum</h2>
          </div>
        </div>
      </a> */}

{/* Rijksmuseum */}
      <div 
        className="text-center p-20 bg-center bg-cover rounded-lg"
        style={{backgroundImage: `url(${NightWatch})`}}>
          <a href="https://artsandculture.google.com/partner/rijksmuseum"><Button className="bg-black/75 hover:bg-black/25 text-fuchsia-400 hover:text-white border-none py-1 h-fit text-lg">Rijksmuseum</Button></a>
      </div>

      {/* <a className="no-underline" 
        href="https://artsandculture.google.com/partner/rijksmuseum">
        <div className="bg-no-repeat bg-cover bg-center rounded-lg"
          style={{backgroundImage: `url(${NightWatch})`}}>
          <div className="bg-black/75 rounded-lg hover:bg-black/25">
            <h2 className="py-8 h-fit text-center text-fuchsia-400 hover:text-white">Rijksmuseum</h2>
          </div>
        </div>
      </a> */}

{/* Versailles */}
      <div 
        className="text-center p-20 bg-center bg-cover rounded-lg"
        style={{backgroundImage: `url(${Versailles})`}}>
          <a href="https://artsandculture.google.com/partner/palace-of-versailles"><Button className="bg-black/75 hover:bg-black/25 text-fuchsia-400 hover:text-white border-none py-1 h-fit text-lg">Château de Versailles</Button></a>
      </div>

      {/* <a className="no-underline" 
        href="https://artsandculture.google.com/partner/palace-of-versailles">
        <div className="bg-no-repeat bg-cover bg-center rounded-lg"
          style={{backgroundImage: `url(${Versailles})`}}>
          <div className="bg-black/75 rounded-lg hover:bg-black/25">
            <h2 className="py-8 h-fit text-center text-fuchsia-400 hover:text-white">Château de Versailles</h2>
          </div>
        </div>
      </a> */}

{/* The National Gallery, London */}
      <div 
        className="text-center p-20 bg-center bg-cover rounded-lg"
        style={{backgroundImage: `url(${Arnolfini})`}}>
          <a href="https://artsandculture.google.com/partner/the-national-gallery-london"><Button className="bg-black/75 hover:bg-black/25 text-fuchsia-400 hover:text-white border-none py-1 h-fit text-lg">The National Gallery, London</Button></a>
      </div>

      {/* <a className="no-underline" 
        href="https://artsandculture.google.com/partner/the-national-gallery-london">
        <div className="bg-no-repeat bg-cover bg-center rounded-lg"
          style={{backgroundImage: `url(${Arnolfini})`}}>
          <div className="bg-black/75 rounded-lg hover:bg-black/25">
            <h2 className="py-8 h-fit text-center text-fuchsia-400 hover:text-white">The National Gallery, London</h2>
          </div>
        </div>
      </a> */}

{/* Gemaldegalerie, Staatliche Museen zu Berlin */}
      <div 
        className="text-center p-20 bg-center bg-cover rounded-lg"
        style={{backgroundImage: `url(${NetherlandishProverbs})`}}>
          <a href="https://artsandculture.google.com/partner/gemaldegalerie-staatliche-museen-zu-berlin"><Button className="bg-black/75 hover:bg-black/25 text-fuchsia-400 hover:text-white border-none py-1 h-fit text-lg">Gemäldegalerie, Staatliche Museen zu Berlin</Button></a>
      </div>

      {/* <a className="no-underline" 
        href="https://artsandculture.google.com/partner/gemaldegalerie-staatliche-museen-zu-berlin">
        <div className="bg-no-repeat bg-cover bg-center rounded-lg"
          style={{backgroundImage: `url(${NetherlandishProverbs})`}}>
          <div className="bg-black/75 rounded-lg hover:bg-black/25">
            <h2 className="py-8 h-fit text-center text-fuchsia-400 hover:text-white">Gemäldegalerie, Staatliche Museen zu Berlin</h2>
          </div>
        </div>
      </a> */}

{/* Smithsonian National Portrait Gallery */}
      <div 
        className="text-center p-20 bg-center bg-cover rounded-lg"
        style={{backgroundImage: `url(${GeorgeWashington})`}}>
          <a href="https://artsandculture.google.com/partner/national-portrait-gallery"><Button className="bg-black/75 hover:bg-black/25 text-fuchsia-400 hover:text-white border-none py-1 h-fit text-lg">Smithsonian National Portrait Gallery</Button></a>
      </div>

      {/* <a className="no-underline" 
        href="https://artsandculture.google.com/partner/national-portrait-gallery">
        <div className="bg-no-repeat bg-cover bg-center rounded-lg"
          style={{backgroundImage: `url(${GeorgeWashington})`}}>
          <div className="bg-black/75 rounded-lg hover:bg-black/25">
            <h2 className="py-8 h-fit text-center text-fuchsia-400 hover:text-white">Smithsonian National Portrait Gallery</h2>
          </div>
        </div>
      </a> */}

{/* Close grid */}
    </div>

    <h2 className="text-center text-fuchsia-900">Take a look at more online exhibitions from museums around the world at <a className="text-lime-700 hover:text-lime-900" href="https://artsandculture.google.com/partner">Google Arts & Culture</a>!</h2>

{/* Close background color */}
    </div>

<div className="grid grid-cols-1 gap-1 items-center my-1 md:grid-cols-3">
  {/* Eiffel Tower */}


</div>



    </article>
    </>
  )
}

export default Exhibitions;