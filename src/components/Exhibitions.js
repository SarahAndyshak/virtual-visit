import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from 'react-daisyui'

import Window from './../imgs/MetImgs/LaFargeWindow.jpeg'
import CollageGarland from "./../imgs/Getty/CollageGarland.jpg"




function Exhibitions() {
  return(
    <>
    <article className="prose max-w-none">

{/* Header */}
    <div className="bg-fuchsia-900 text-center p-6">
      <h1 className="text-white">Online Exhibitions</h1>
      <h2 className="text-white">Many museums around the world have exhibitions available online, both at their own sites, and on Google Arts & Culture. <br /><br />These are just a few to start your explorations.</h2>
    </div>

{/* <Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3">

<label className="swap">
  <input type="checkbox" />
    <div className="swap-on">
      <div className="bg-no-repeat bg-cover bg-center m-1" style={{backgroundImage: `url(${Window})`}}>
        <div className="text-center justify items-center">
          <a href="https://artsandculture.google.com/search/exhibit?q=metropolitan%20museum%20of%20art"><Button className="bg-blue-500 h-fit hover:bg-blue-300">All Exhibitions</Button></a>
        </div>
      </div>
    </div>

    <div className="swap-off">
      <div className="bg-no-repeat bg-cover bg-center m-1" style={{backgroundImage: `url(${Window})`}}>
        <div className="text-center justify items-center">
          <h1 className="text-white">The Metropolitan Museum of Art</h1>
        </div>
      </div>
    </div>

    </label>

    <label className="swap">
  <input type="checkbox" />
    <div className="swap-on">
      <div className="bg-no-repeat bg-cover bg-center text-primary-content m-1" style={{backgroundImage: `url(${CollageGarland})`}}>
        <div className="p-6 text-center">
          <a href="https://artsandculture.google.com/search/exhibit?q=metropolitan%20museum%20of%20art"><Button className="bg-blue-500 h-fit hover:bg-blue-300">All Exhibitions</Button></a>
        </div>
      </div>
    </div>

    <div className="swap-off">
      <div className="bg-no-repeat bg-cover bg-center text-primary-content m-1" style={{backgroundImage: `url(${CollageGarland})`}}>
        <div className="p-6 text-center">
          <h1 className="text-white">The Metropolitan Museum of Art</h1>
        </div>
      </div>
    </div>

    </label>


      {/* <div className="bg-green-500 m-1">side 1</div>

      <div className="bg-blue-500 m-1">side 1</div>

      <div className="bg-red-500 m-1">side 1</div> */}







      {/* <div className="card bg-no-repeat bg-cover bg-center text-primary-content m-1" style={{backgroundImage: `url(${Window})`}}> */}
        {/* <div className="bg-[hsla(0,0%,0%,0.3)]">
        <div className="flex justify-center items-center h-full"> */}
          {/* <div className="card-body items-center text-center">
            <h2 className="card-title text-white">The Met</h2>
              <Link to="/met"><Button onClick={() => window.scrollTo(0,0)} 
              className="bg-blue-500 h-fit hover:bg-blue-300">Selected Exhibitions</Button></Link>
              <a href="https://artsandculture.google.com/search/exhibit?q=metropolitan%20museum%20of%20art"><Button className="bg-blue-500 h-fit hover:bg-blue-300">All Exhibitions</Button></a>
          </div> */}
        {/* </div>
        </div> */}
      {/* </div> */}

{/* Getty */}
      {/* <div className="card bg-no-repeat bg-cover bg-center text-primary-content m-1" style={{backgroundImage: `url(${CollageGarland})`}}>
        {/* <div className="bg-[hsla(0,0%,0%,0.3)]">
        <div className="flex justify-center items-center h-full"> */}
          {/* <div className="card-body items-center text-center">
            <h2 className="card-title text-white">The Getty</h2>
            <a href="https://www.getty.edu/research/exhibitions_events/online_exhibitions.html"><Button className="bg-rose-900 h-fit hover:bg-rose-700 text-2xl text-amber-300 border-1 border-amber-300 hover:border-amber-300">The Getty</Button></a>
          </div> */}
        {/* </div>
        </div> */}
      {/* </div> */}

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


{/* Test Swap Card */}
    {/* <label className="swap">
      <input type="checkbox" />
      <div className="swap-on">
        <div className="card bg-red-500 text-primary-content m-1">
          <div className="card-body">
            <h2 className="card-title">Side 1!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="swap-off">
        <div className="card bg-blue-500 text-primary-content m-1">
          <div className="card-body">
            <h2 className="card-title">Side 2!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

    </label> */}




    </div>

    </article>
    </>
  )
}

export default Exhibitions;