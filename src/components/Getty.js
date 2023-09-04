import React from "react";
import Carousel from "./Carousel";


function Getty() {
  return(
    <>
    <article className="prose max-w-none">

    <div className="bg-blue-500 text-white text-center p-6">
      <h2 className="text-white">Getty slideshow</h2>
    </div>

    <div className="flex justify-center">
      <Carousel />
    </div>


    </article>
    </>
  )
}

export default Getty;