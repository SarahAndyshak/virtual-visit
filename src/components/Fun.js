import React from "react";
import { Button } from "react-daisyui";

import Cats from "./../imgs/KahlerMyWifesLovers.jpeg"
import Bayeux from "./../imgs/BayeuxExample.png"
import PuzzleJug from "./../imgs/MiAPuzzleJug.jpeg"
import Mira from "./../imgs/Getty/MCMf143.jpg"
import ElectronicSuperhighway from "./../imgs/ElectronicSuperhighway.jpg"
import Venus from "./../imgs/BotticelliBirthOfVenus.jpeg"
import MetVase from "./../imgs/MetImgs/MetVase.jpeg"


function Fun() {
  return(
    <>
    <article className="prose max-w-none">

      <div className="bg-sky-700 text-center py-1">
        <h1 className="p-6 text-sky-100">Additional Fun Resources from around the Internet!</h1>
      </div>

{/* background color */}
      <div className="bg-sky-100 py-1">


{/* Tapestry Maker */}
      <div className="text-center">
      <a href="https://htck.github.io/bayeux/#!/"><img className= "mx-auto" src={Bayeux} alt="Create your own medieval images with the Historic Tale Construction Kit!" /></a>
        <a  href="https://htck.github.io/bayeux/#!/"><Button className="mb-12 bg-sky-700 hover:bg-transparent border-2 border-sky-700 hover:border-sky-700 text-xl text-sky-100 hover:text-sky-700">Historic Tale Construction Kit</Button></a>
      </div>

{/* Podcasts */}
      <div className="text-center bg-sky-700">
      <h1 className="text-sky-100 p-6">Podcasts & Videos!</h1>

    {/* open grid */}
        <div className="grid grid-cols-1 gap-1 items-center my-1 md:grid-cols-2 bg-sky-100">

      {/* The Object */}
          <div 
            className="h-72 bg-cover bg-center flex justify-center items-center"
            style={{backgroundImage: `url(${PuzzleJug})`}}>
            <a href="https://new.artsmia.org/the-object-podcast" className="text-center text-2xl text-white hover:text-sky-900 no-underline">
              <div className="bg-sky-900/[0.7] hover:bg-white/[0.5] border-2 hover:border-2 hover:border-sky-900 w-fit p-6 rounded-lg">
              The Object <br/>from the Minneapolis Institute of Art
              </div>
            </a>
          </div>

      {/* Getty Podcasts */}
          <div 
            className="h-72 bg-cover bg-center flex justify-center items-center"
            style={{backgroundImage: `url(${Mira})`}}>
            <a href="https://www.getty.edu/podcasts/" className="text-center text-2xl text-amber-200 hover:text-red-900 no-underline">
              <div className="bg-red-900/[0.7] hover:bg-amber-200/[0.5] border-2 border-amber-200 hover:border-2 hover:border-red-900 w-fit p-6 rounded-lg">
              Getty Podcasts
              </div>
            </a>
          </div>

      {/* Art Assignment */}
          <div 
            className="h-72 bg-cover bg-center flex justify-center items-center"
            style={{backgroundImage: `url(${Venus})`}}>
            <a href="https://www.youtube.com/@theartassignment" className="text-center text-2xl text-amber-200 hover:text-lime-900 no-underline">
              <div className="bg-lime-900/[0.7] hover:bg-amber-200/[0.5] border-2 border-amber-200 hover:border-2 hover:border-lime-900 w-fit p-6 rounded-lg">
              Art Assignment <br/>Discussions about Art and Art History
              </div>
            </a>
          </div>

      {/* Art21 */}
          <div 
            className="h-72 bg-cover bg-center flex justify-center items-center"
            style={{backgroundImage: `url(${ElectronicSuperhighway})`}}>
            <a href="https://art21.org/" className="text-center text-2xl text-teal-200 hover:text-fuchsia-900 no-underline">
              <div className="bg-fuchsia-900/[0.8] hover:bg-teal-200/[0.8] border-2 border-teal-200 hover:border-2 hover:border-fuchsia-900 w-fit p-6 rounded-lg">
              Art21 <br/>Interviews with Contemporary Artists
              </div>
            </a>
          </div>

    {/* close grid */}
        </div>
      </div>


{/* Downloadables */}
      <div className="text-center md:flex justify-center items-center bg-sky-700">
        <img src={MetVase} className="md:w-2/3 my-0" alt="Marble Roman vase from the Metropolitan Museum of Art" />
        <p className="text-sky-100 text-3xl px-2 pb-6">Download files and recreate works from the Metropolitan Museum of Art using 3-D printing files available at their <a className="text-lime-500 hover:text-amber-500" href="https://www.thingiverse.com/met/designs">thingiverse page</a></p>
      </div>

{/* My Wife's Lovers */}
      <div className="text-center py-6">
        <a href="https://en.wikipedia.org/wiki/My_Wife%27s_Lovers"><Button className="bg-sky-700 hover:bg-transparent border-2 border-sky-700 hover:border-sky-700 text-xl text-sky-100 hover:text-sky-700">My Wife's Lovers, by Carl Kahler</Button></a>
        {/* <h2 className="text-center"><a href="https://en.wikipedia.org/wiki/My_Wife%27s_Lovers"><i>My Wife's Lovers,</i> by Carl Kahler</a></h2> */}
        <img className="mx-auto" src={Cats} alt="19th-century painting by Carl Kahler of 42 cats, entitled My Wife's Lovers"/>
      </div>

{/* close background color     */}
    </div>

    </article>
    </>
  )
}

export default Fun;