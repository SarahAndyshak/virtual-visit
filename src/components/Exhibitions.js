import React from "react";
import { Button, Card } from 'react-daisyui'

import Mastaba from './../imgs/MetImgs/Mastaba.jpeg'



function Exhibitions() {
  return(
    <>
    <article className="prose max-w-none">

    <div className="bg-fuchsia-900 text-center p-6">
      <h1 className="text-white">Online Exhibitions</h1>
      <h2 className="text-white">Many museums around the world have exhibitions available online, both at their own sites, and on Google Arts & Culture. <br /><br />These are just a few to start your explorations.</h2>
    </div>

    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={Mastaba} alt="Temple of Dendur" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div> 
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>


    </article>
    </>
  )
}

export default Exhibitions;