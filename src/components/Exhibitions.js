import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from 'react-daisyui'

import ElectronicSuperhighway from './../imgs/ElectronicSuperhighway.jpg'
import Window from './../imgs/MetImgs/LaFargeWindow.jpeg'
import CollageGarland from "./../imgs/Getty/CollageGarland.jpg"




function Exhibitions() {
  return(
    <>
    <article className="prose max-w-none">

{/* backgroundImage */}
    <div className="bg-no-repeat bg-cover bg-center h-screen"
      style={{backgroundImage: `url(${ElectronicSuperhighway})`}}>
    <div className="bg-black/75 h-screen">


{/* Header */}
    <div className="bg-fuchsia-900 text-center p-6">
      <h1 className="text-white">Online Exhibitions</h1>
      <h2 className="text-white">Many museums around the world have exhibitions available online, both at their own sites, and on <a className="text-lime-300 hover:text-lime-500" href="https://artsandculture.google.com/partner">Google Arts & Culture.</a> <br /><br />These are just a few to start your explorations.</h2>
    </div>


{/* <Cards */}
    <div className="grid grid-cols-1 items-center md:grid-cols-3">


{/* The Met 1*/}
    <a className="no-underline" 
        href="https://artsandculture.google.com/search/exhibit?q=metropolitan%20museum%20of%20art">
        <div className="bg-white/50 rounded-lg m-1 hover:bg-black/75">
            <h2 className="text-center text-fuchsia-950 hover:text-fuchsia-400 p-6">The Metropolitan Museum of Art, Google Arts & Culture</h2>
        </div>
      </a>

{/* The Getty 1 */}
      <a className="no-underline" 
        href="https://artsandculture.google.com/search/exhibit?q=metropolitan%20museum%20of%20art">
        <div className="bg-black/75 rounded-lg m-1 hover:bg-white/50">
            <h2 className="text-center text-fuchsia-400 hover:text-fuchsia-950 p-6">Getty Online Exhibitions</h2>
        </div>
      </a>

{/* Getty Arts & Culture */}
      <a className="no-underline" 
        href="https://artsandculture.google.com/search/exhibit?p=the-j-paul-getty-museum">
        <div className="bg-black/75 rounded-lg m-1 hover:bg-white/50">
            <h2 className="text-center text-fuchsia-400 hover:text-fuchsia-950 p-6">The Getty, Google Arts & Culture</h2>
        </div>
      </a>

{/* Musee d'Orsay */}
    <a className="no-underline" 
      href="https://artsandculture.google.com/search/exhibit?p=the-j-paul-getty-museum">
      <div className="bg-black/75 rounded-lg m-1 hover:bg-white/50">
          <h2 className="text-center text-fuchsia-400 hover:text-fuchsia-950 p-6">Musée d'Orsay, Google Arts & Culture</h2>
      </div>
    </a>

{/* Van Gogh Museum */}
<a className="no-underline" 
      href="https://artsandculture.google.com/partner/van-gogh-museum">
      <div className="bg-black/75 rounded-lg m-1 hover:bg-white/50">
          <h2 className="text-center text-fuchsia-400 hover:text-fuchsia-950 p-6">Van Gogh Museum, Google Arts & Culture</h2>
      </div>
    </a>

{/* Uffizi */}
<a className="no-underline" 
      href="https://artsandculture.google.com/partner/uffizi-gallery">
      <div className="bg-black/75 rounded-lg m-1 hover:bg-white/50">
          <h2 className="text-center text-fuchsia-400 hover:text-fuchsia-950 p-6">Uffizi Gallery, Google Arts & Culture</h2>
      </div>
    </a>

{/* Picture buttons for white background */}
{/* The Met 2 */}
      {/* <a className="no-underline" 
        href="https://artsandculture.google.com/search/exhibit?q=metropolitan%20museum%20of%20art">
        <div className="bg-no-repeat bg-cover bg-center rounded-lg m-1"
          style={{backgroundImage: `url(${Window})`}}>
          <div className="bg-black/75 rounded-lg hover:bg-black/25">
            <h1 className="text-center text-white p-6">The Metropolitan Museum of Art</h1>
          </div>
        </div>
      </a> */}

{/* The Getty 2 */}
      {/* <a className="no-underline" 
        href="https://artsandculture.google.com/search/exhibit?q=metropolitan%20museum%20of%20art">
        <div className="bg-no-repeat bg-cover bg-center rounded-lg m-1"
          style={{backgroundImage: `url(${CollageGarland})`}}>
          <div className="bg-black/75 rounded-lg hover:bg-black/25">
            <h1 className="text-center text-white p-10">The Getty</h1>
          </div>
        </div>
      </a> */}





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









    </div>

{/* backgroundImage */}
    </div>
    </div>

    </article>
    </>
  )
}

export default Exhibitions;