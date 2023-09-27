import React from "react";
import { Button } from 'react-daisyui'

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
        className="h-72 bg-cover bg-center flex justify-center items-center rounded-lg"
        style={{backgroundImage: `url(${Window})`}}>
          <a href="https://artsandculture.google.com/search/exhibit?q=metropolitan%20museum%20of%20art"><Button className="bg-black/75 hover:bg-black/25 text-fuchsia-400 hover:text-white border-none p-3 h-fit text-lg">The Metropolitan Museum of Art</Button></a>
      </div>

{/* The Getty */}
      <div 
        className="h-72 bg-cover bg-center flex justify-center items-center rounded-lg"
        style={{backgroundImage: `url(${CollageGarland})`}}>
          <a href="https://artsandculture.google.com/search/exhibit?p=the-j-paul-getty-museum"><Button className="bg-black/75 hover:bg-black/25 text-fuchsia-400 hover:text-white border-none p-3 h-fit text-lg">The J. Paul Getty Museum</Button></a>
      </div>

{/* Nelson-Atkins */}
      <div 
        className="h-72 bg-cover bg-center flex justify-center items-center rounded-lg"
        style={{backgroundImage: `url(${Shuttlecock})`}}>
          <a href="https://artsandculture.google.com/partner/the-nelson-atkins-museum-of-art"><Button className="bg-black/75 hover:bg-black/25 text-fuchsia-400 hover:text-white border-none py-1 h-fit text-lg">The Nelson-Atkins Museum of Art</Button></a>
      </div>

{/* Musee d'Orsay */}
      <div 
        className="h-72 bg-cover bg-center flex justify-center items-center rounded-lg"
        style={{backgroundImage: `url(${Galette})`}}>
          <a href="https://artsandculture.google.com/partner/musee-dorsay-paris"><Button className="bg-black/75 hover:bg-black/25 text-fuchsia-400 hover:text-white border-none p-3 h-fit text-lg">Musée d'Orsay</Button></a>
      </div>

{/* Van Gogh Museum */}
      <div 
        className="h-72 bg-cover bg-center flex justify-center items-center rounded-lg"
        style={{backgroundImage: `url(${Sunflowers})`}}>
          <a href="https://artsandculture.google.com/partner/van-gogh-museum"><Button className="bg-black/75 hover:bg-black/25 text-fuchsia-400 hover:text-white border-none p-3 h-fit text-lg">Van Gogh Museum</Button></a>
      </div>

{/* Uffizi */}
      <div 
        className="h-72 bg-cover bg-center flex justify-center items-center rounded-lg"
        style={{backgroundImage: `url(${Venus})`}}>
          <a href="https://artsandculture.google.com/partner/uffizi-gallery"><Button className="bg-black/75 hover:bg-black/25 text-fuchsia-400 hover:text-white border-none p-3 h-fit text-lg">Uffizi Gallery</Button></a>
      </div>

{/* British Museum */}
      <div 
        className="h-72 bg-cover bg-center flex justify-center items-center rounded-lg"
        style={{backgroundImage: `url(${BritishMuseum})`}}>
          <a href="https://artsandculture.google.com/partner/the-british-museum"><Button className="bg-black/75 hover:bg-black/25 text-fuchsia-400 hover:text-white border-none p-3 h-fit text-lg">The British Museum</Button></a>
      </div>

{/* Rijksmuseum */}
      <div 
        className="h-72 bg-cover bg-center flex justify-center items-center rounded-lg"
        style={{backgroundImage: `url(${NightWatch})`}}>
          <a href="https://artsandculture.google.com/partner/rijksmuseum"><Button className="bg-black/75 hover:bg-black/25 text-fuchsia-400 hover:text-white border-none p-3 h-fit text-lg">Rijksmuseum</Button></a>
      </div>

{/* Versailles */}
      <div 
        className="h-72 bg-cover bg-center flex justify-center items-center rounded-lg"
        style={{backgroundImage: `url(${Versailles})`}}>
          <a href="https://artsandculture.google.com/partner/palace-of-versailles"><Button className="bg-black/75 hover:bg-black/25 text-fuchsia-400 hover:text-white border-none p-3 h-fit text-lg">Château de Versailles</Button></a>
      </div>

{/* The National Gallery, London */}
      <div 
        className="h-72 bg-cover bg-center flex justify-center items-center rounded-lg"
        style={{backgroundImage: `url(${Arnolfini})`}}>
          <a href="https://artsandculture.google.com/partner/the-national-gallery-london"><Button className="bg-black/75 hover:bg-black/25 text-fuchsia-400 hover:text-white border-none p-3 h-fit text-lg">The National Gallery, London</Button></a>
      </div>

{/* Gemaldegalerie, Staatliche Museen zu Berlin */}
      <div 
        className="h-72 bg-cover bg-center flex justify-center items-center rounded-lg"
        style={{backgroundImage: `url(${NetherlandishProverbs})`}}>
          <a href="https://artsandculture.google.com/partner/gemaldegalerie-staatliche-museen-zu-berlin"><Button className="bg-black/75 hover:bg-black/25 text-fuchsia-400 hover:text-white border-none p-3 h-fit text-lg">Gemäldegalerie, Staatliche Museen zu Berlin</Button></a>
      </div>

{/* Smithsonian National Portrait Gallery */}
      <div
        className="h-72 bg-cover bg-center flex justify-center items-center rounded-lg"
        style={{backgroundImage: `url(${GeorgeWashington})`}}>
          <a href="https://artsandculture.google.com/partner/national-portrait-gallery"><Button className="bg-black/75 hover:bg-black/25 text-fuchsia-400 hover:text-white border-none p-3 h-fit text-lg">Smithsonian National Portrait Gallery</Button></a>
      </div>

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