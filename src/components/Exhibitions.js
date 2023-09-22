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
      <a className="no-underline" 
        href="https://artsandculture.google.com/search/exhibit?q=metropolitan%20museum%20of%20art">
        <div className="bg-no-repeat bg-cover bg-center rounded-lg"
          style={{backgroundImage: `url(${Window})`}}>
          <div className="bg-black/75 rounded-lg hover:bg-black/25">
            <h2 className="py-8 h-fit text-center text-fuchsia-400 hover:text-white">The Metropolitan Museum of Art</h2>
          </div>
        </div>
      </a>

{/* The Getty */}
      <a className="no-underline" 
        href="https://artsandculture.google.com/search/exhibit?p=the-j-paul-getty-museum">
        <div className="bg-no-repeat bg-cover bg-center rounded-lg"
          style={{backgroundImage: `url(${CollageGarland})`}}>
          <div className="bg-black/75 rounded-lg hover:bg-black/25">
            <h2 className="py-8 h-fit text-center text-fuchsia-400 hover:text-white">The J. Paul Getty Museum</h2>
          </div>
        </div>
      </a>

{/* Musee d'Orsay */}
      <a className="no-underline" 
        href="https://artsandculture.google.com/partner/musee-dorsay-paris">
          <div className="bg-no-repeat bg-cover bg-center rounded-lg"
            style={{backgroundImage: `url(${Galette})`}}>
            <div className="bg-black/75 rounded-lg hover:bg-black/25">
              <h2 className="py-8 h-fit text-center text-fuchsia-400 hover:text-white">Musée d'Orsay</h2>
            </div>
        </div>
      </a>

{/* Van Gogh Museum */}
      <a className="no-underline" 
        href="https://artsandculture.google.com/partner/van-gogh-museum">
        <div className="bg-no-repeat bg-cover bg-center rounded-lg"
            style={{backgroundImage: `url(${Sunflowers})`}}>
          <div className="bg-black/75 rounded-lg hover:bg-black/25">
            <h2 className="py-8 h-fit text-center text-fuchsia-400 hover:text-white">Van Gogh Museum</h2>
          </div>
        </div>
      </a>

{/* Uffizi */}
      <a className="no-underline" 
        href="https://artsandculture.google.com/partner/uffizi-gallery">
        <div className="bg-no-repeat bg-cover bg-top rounded-lg"
          style={{backgroundImage: `url(${Venus})`}}>
          <div className="bg-black/75 rounded-lg hover:bg-black/25">
            <h2 className="py-8 h-fit text-center text-fuchsia-400 hover:text-white">Uffizi Gallery</h2>
          </div>
        </div>
      </a>

{/* Nelson-Atkins */}
      <a className="no-underline" 
        href="https://artsandculture.google.com/partner/the-nelson-atkins-museum-of-art">
        <div className="bg-no-repeat bg-cover bg-center rounded-lg"
          style={{backgroundImage: `url(${Shuttlecock})`}}>
          <div className="bg-black/75 rounded-lg hover:bg-black/25">
            <h2 className="py-8 h-fit text-center text-fuchsia-400 hover:text-white">The Nelson-Atkins Museum of Art</h2>
          </div>
        </div>
      </a>

{/* British Museum */}
      <a className="no-underline" 
        href="https://artsandculture.google.com/partner/the-british-museum">
        <div className="bg-no-repeat bg-cover bg-center rounded-lg"
          style={{backgroundImage: `url(${BritishMuseum})`}}>
          <div className="bg-black/75 rounded-lg hover:bg-black/25">
            <h2 className="py-8 h-fit text-center text-fuchsia-400 hover:text-white">The British Museum</h2>
          </div>
        </div>
      </a>

{/* Smithsonian National Portrait Gallery */}
      <a className="no-underline" 
        href="https://artsandculture.google.com/partner/national-portrait-gallery">
        <div className="bg-no-repeat bg-cover bg-center rounded-lg"
          style={{backgroundImage: `url(${GeorgeWashington})`}}>
          <div className="bg-black/75 rounded-lg hover:bg-black/25">
            <h2 className="py-8 h-fit text-center text-fuchsia-400 hover:text-white">Smithsonian National Portrait Gallery</h2>
          </div>
        </div>
      </a>

{/* The National Gallery, London */}
      <a className="no-underline" 
        href="https://artsandculture.google.com/partner/the-national-gallery-london">
        <div className="bg-no-repeat bg-cover bg-center rounded-lg"
          style={{backgroundImage: `url(${Arnolfini})`}}>
          <div className="bg-black/75 rounded-lg hover:bg-black/25">
            <h2 className="py-8 h-fit text-center text-fuchsia-400 hover:text-white">The National Gallery, London</h2>
          </div>
        </div>
      </a>

{/* Rijksmuseum */}
      <a className="no-underline" 
        href="https://artsandculture.google.com/partner/rijksmuseum">
        <div className="bg-no-repeat bg-cover bg-center rounded-lg"
          style={{backgroundImage: `url(${NightWatch})`}}>
          <div className="bg-black/75 rounded-lg hover:bg-black/25">
            <h2 className="py-8 h-fit text-center text-fuchsia-400 hover:text-white">Rijksmuseum</h2>
          </div>
        </div>
      </a>

{/* Gemaldegalerie, Staatliche Museen zu Berlin */}
      <a className="no-underline" 
        href="https://artsandculture.google.com/partner/gemaldegalerie-staatliche-museen-zu-berlin">
        <div className="bg-no-repeat bg-cover bg-center rounded-lg"
          style={{backgroundImage: `url(${NetherlandishProverbs})`}}>
          <div className="bg-black/75 rounded-lg hover:bg-black/25">
            <h2 className="py-8 h-fit text-center text-fuchsia-400 hover:text-white">Gemäldegalerie, Staatliche Museen zu Berlin</h2>
          </div>
        </div>
      </a>

{/* Versailles */}
      <a className="no-underline" 
        href="https://artsandculture.google.com/partner/palace-of-versailles">
        <div className="bg-no-repeat bg-cover bg-center rounded-lg"
          style={{backgroundImage: `url(${Versailles})`}}>
          <div className="bg-black/75 rounded-lg hover:bg-black/25">
            <h2 className="py-8 h-fit text-center text-fuchsia-400 hover:text-white">Château de Versailles</h2>
          </div>
        </div>
      </a>





{/* Test Card */}
{/* <div className="card bg-red-500 text-primary-content m-1">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div> */}

    {/* <a className="no-underline" href="https://artsandculture.google.com/search/exhibit?q=metropolitan%20museum%20of%20art">
      <div className="card bg-no-repeat bg-cover bg-center text-primary-content m-1" style={{backgroundImage: `url(${Window})`}}>
        <div className="card-body items-center text-center">
          <h1 className="card-title text-white">The Metropolitan Museum of Art</h1>
        </div>
      </div>
    </a> */}

{/* Met */}
      {/* <div className="card bg-no-repeat bg-cover bg-center text-primary-content m-1" style={{backgroundImage: `url(${Window})`}}>
        <div className="bg-[hsla(0,0%,0%,0.3)]">
        <div className="flex justify-center items-center h-full">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white">The Met</h2>
              <Link to="/met"><Button onClick={() => window.scrollTo(0,0)} 
              className="bg-blue-500 h-fit hover:bg-blue-300">Selected Exhibitions</Button></Link>
              <a href="https://artsandculture.google.com/search/exhibit?q=metropolitan%20museum%20of%20art"><Button className="bg-blue-500 h-fit hover:bg-blue-300">All Exhibitions</Button></a>
          </div>
        </div>
        </div>
      </div> */}

{/* Getty */}
      {/* <div className="card bg-no-repeat bg-cover bg-center text-primary-content m-1" style={{backgroundImage: `url(${CollageGarland})`}}>
        <div className="bg-[hsla(0,0%,0%,0.3)]">
        <div className="flex justify-center items-center h-full">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white">The Getty</h2>
            <a href="https://www.getty.edu/research/exhibitions_events/online_exhibitions.html"><Button className="bg-rose-900 h-fit hover:bg-rose-700 text-2xl text-amber-300 border-1 border-amber-300 hover:border-amber-300">The Getty</Button></a>
          </div>
        </div>
        </div>
      </div> */}


{/* Close grid */}
    </div>

    <h2 className="text-center text-fuchsia-900">Take a look at more online exhibitions from museums around the world at <a className="text-lime-700 hover:text-lime-900" href="https://artsandculture.google.com/partner">Google Arts & Culture</a>!</h2>

{/* Close background color */}
    </div>

    </article>
    </>
  )
}

export default Exhibitions;