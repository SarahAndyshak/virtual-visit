import React from "react";

import Cats from "./../imgs/KahlerMyWifesLovers.jpeg"
import Bayeux from "./../imgs/BayeuxExample.png"


function Fun() {
  return(
    <>
    <article className="prose max-w-none">
      <div className="text-center">
        <h1>Fun Resources!</h1>
      </div>

{/* Tapestry Maker */}
      <div>
        <h2 className="text-center"><a href="https://htck.github.io/bayeux/#!/"> Historic Tale Construction Kit</a></h2>
        <img className="mx-auto" src={Bayeux} alt="Create your own medieval images with the Historic Tale Construction Kit!" />
      </div>

{/* Podcasts */}
      <div>
        <h2 className="text-center">Podcasts & Videos!</h2>

      </div>

{/* Downloadables */}

{/* Window Swap */}

{/* My Wife's Lovers */}
      <div>
        <h2 className="text-center"><a href="https://en.wikipedia.org/wiki/My_Wife%27s_Lovers"><i>My Wife's Lovers,</i> by Carl Kahler</a></h2>
        <img className="mx-auto" src={Cats} alt="19th-century painting by Carl Kahler of 42 cats, entitled My Wife's Lovers"/>
      </div>
    
    </article>
    </>
  )
}

export default Fun;