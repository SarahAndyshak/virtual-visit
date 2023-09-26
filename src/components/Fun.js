import React from "react";

import Cats from "./../imgs/KahlerMyWifesLovers.jpeg"


function Fun() {
  return(
    <>
    <article className="prose max-w-none">
      <div className="text-center">
        <h1>Fun Resources</h1>
        <h2>Just a few of the many fun and creative resources available online.</h2>
        <img className="mx-auto" src={Cats} alt="19th-century painting by Carl Kahler of 42 cats, entitled My Wife's Lovers"/>
      </div>
    
    </article>
    </>
  )
}

export default Fun;