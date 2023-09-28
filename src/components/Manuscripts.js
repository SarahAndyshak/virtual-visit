import React from "react";
import { Button } from 'react-daisyui'

import Shelf from "./../imgs/Shelf.jpg"
import KellsDetail from "./../imgs/KellsDetail.png"
import ClariciaDetail from "./../imgs/Walters/ClariciaDetail.png"
import BookPlateDetail from "./../imgs/MetImgs/BookPlateDetail.png"
import MiraDE from "./../imgs/Getty/MCMf143.jpg"
import LibraryShelves from "./../imgs/LibraryInterior.jpg"
import MoralizedBible from "./../imgs/MorganMsM240f8r.jpeg"
import LaPorteDesReves from "./../imgs/LaPorteDesRevesBnF.jpeg"


function Manuscripts() {
  return(
    <>
    <article className="prose max-w-none">

{/* Page intro */}
    <div
      className="bg-cover bg-center"
      style={{backgroundImage: `url(${Shelf})`}}
    >
      {/* <div className="bg-[hsla(0,0%,0%,0.6)]"> */}
      <div className="bg-black/[0.6]">
      <div className="flex justify-center items-center h-full">

      <div className="py-44 px-12 text-center text-white">
        <h1 className="text-white">Manuscripts, Incunabula, Books</h1>
        <h2 className="text-white">More and more museums and libraries are digitizing their collections and making manuscripts, <span className="tooltip underline text-white hover:text-yellow-500" data-tip="incunabula are early printed books, typically printed before 1500 CE">incunabula</span>, and books available online. Many of the images from these works are in the public domain.</h2>
        <h2 className="text-white">Here are just a few resources to get started.</h2>
      </div>

      </div>
      </div>
    </div>

    <div className="bg-black p-1"></div>


{/* Individual manuscripts -- Book of Kells etc */}

    <div
      className="bg-cover bg-center"
      style={{backgroundImage: `url(${KellsDetail})`}}
    >
      <div className="flex justify-center items-center h-full">

      <div className="py-44 px-12 text-center text-white">
        <div>
          <a href="https://digitalcollections.tcd.ie/concern/works/hm50tr726?locale=en"><Button className="bg-cyan-900 h-fit hover:bg-cyan-700 text-2xl text-amber-300 border-1 border-amber-300 hover:border-amber-300">The Book of Kells</Button></a>
        </div>
      </div>
      </div>
    </div>


{/* Collections */}

{/* Walters Ex-Libris */}
    <div className="bg-lime-100 text-center md:flex justify-center items-center">
      <img
        src={ClariciaDetail}
        alt="Detail from the Claricia Psalter, Walters W.26"
        className="w-full md:w-1/3 my-0"
      />
      <div className="p-6 w-full md:w-2/3">
      <a href="https://manuscripts.thewalters.org/"><Button className="bg-green-700 h-fit hover:bg-green-500 text-2xl text-yellow-100 border-0">The Walters Ex Libris</Button></a>
        <p className="text-2xl"><a href="https://thewalters.org/">The Walters Art Museum</a> in Baltimore has created a fun interface where you can flip through the pages of their digitized manuscripts. Search their collection by book type, period, culture, region, and more!</p>
      </div>
    </div>

{/* MetPublications 2 */}
    <div
      className="bg-cover bg-center"
      style={{backgroundImage: `url(${BookPlateDetail})`}}
    >
      <div className="bg-black/[0.6]">
      <div className="flex justify-center items-center h-full">

      <div className="py-44 px-12 text-center text-white">
        <div className="text-center p-6">
        <a href="https://www.metmuseum.org/art/metpublications"><Button className="bg-red-700 h-fit hover:bg-red-500 text-2xl text-white border-0">Met Publications</Button></a>

        <p className="text-2xl">Books, magazines, and exhibition catalogues related to the <a className="text-white hover:text-red-500" href="https://www.metmuseum.org/">Metropolitan Museum of Art's</a> collection, available to download or read online.</p>
        </div>
      </div>

      </div>
      </div>
    </div>
    

{/* Getty */}
    <div className="bg-sky-100 text-center md:flex justify-center items-center">
      <div className="p-6 w-full md:w-2/3">
        <h1>The Getty</h1>

        <p className="text-2xl"><a href="https://www.getty.edu/">The Getty</a> in Los Angeles has digitized many of the manuscripts in its collection. Many of these images are in the public domain and open for creative use. You can also read many of their publications online.</p>

        {/* Buttons */}
        <a href="getty.edu/art/manuscripts/"><Button className="bg-sky-700 m-1 h-fit hover:bg-sky-500 text-2xl text-sky-100 border-0">Highlights from the Manuscript Collection</Button></a>

        <a href="https://www.getty.edu/art/collection/search?department=Manuscripts"><Button className="bg-sky-700 m-1 h-fit hover:bg-sky-500 text-2xl text-sky-100 border-0">Digitized Manuscripts</Button></a>

        <a href="https://www.getty.edu/research/publications/electronic_publications/"><Button className="bg-sky-700 m-1 h-fit hover:bg-sky-500 text-2xl text-sky-100 border-0">Digital Books</Button></a>
      </div>
      <img
        src={MiraDE}
        alt="Folio 143 from the Mira Calligraphiae Monumenta, showing a grotesque face and the letters D and E."
        className="w-full md:w-1/3 my-0"
      />
    </div>

{/* British Library */}
    <div className="bg-red-700 text-center text-white p-12">

      <h1 className="text-white">The British Library</h1>

      <p className="text-2xl">London's <a className="text-white" href="https://www.bl.uk/">British Library</a> has numerous collections, catalogues, and exhibitions on their site. Here are a few ways to start exploring!</p>
      
    {/* button block */}
      <a href="https://www.bl.uk/catalogues-and-collections/digital-collections"><Button className="bg-white m-1 h-fit hover:bg-red-200 text-xl text-red-700 border-0">All Digital Collections</Button></a>

      <a href="https://www.bl.uk/onlinegallery/ttp/accessiblettp.html"><Button className="bg-white m-1 h-fit hover:bg-red-200 text-xl text-red-700 border-0">Turning the Pages</Button></a>

      <a href="https://www.bl.uk/manuscripts/"><Button className="bg-white m-1 h-fit hover:bg-red-200 text-xl text-red-700 border-0">Digitised Manuscripts</Button></a>

      <a href="https://www.bl.uk/catalogues/illuminatedmanuscripts/welcome.htm"><Button className="bg-white m-1 h-fit hover:bg-red-200 text-xl text-red-700 border-0">Catalogue of Illuminated Manuscripts</Button></a>

      <a href="https://sounds.bl.uk/"><Button className="bg-white m-1 h-fit hover:bg-red-200 text-xl text-red-700 border-0">Sounds</Button></a>

      <a href="https://www.bl.uk/treasures-in-full"><Button className="bg-white m-1 h-fit hover:bg-red-200 text-xl text-red-700 border-0">Treasures in Full</Button></a>

      <a href="https://www.bl.uk/discover-and-learn/online-exhibitions"><Button className="bg-white m-1 h-fit hover:bg-red-200 text-xl text-red-700 border-0">Online Exhibitions</Button></a>

    </div> 

{/* Morgan Library */}
    <div className="bg-amber-100 text-center md:flex justify-center items-center">
      <img
        src={MoralizedBible}
        alt="Dedication page from the Moralized Bible of St. Louis"
        className="w-full md:w-1/3 my-0"
      />

      <div className="p-6 w-full md:w-2/3">
        <h1>The Morgan Library and Museum</h1>

        <p className="text-2xl">The <a href="https://www.themorgan.org/">Morgan Library and Museum</a> (New York City) provides visitors with commentary on many works in their collection, along with zoomable images.</p>

        <a href="https://www.themorgan.org/digital-facsimiles"><Button className="bg-yellow-700 m-1 h-fit hover:bg-yellow-500 text-2xl text-amber-100 border-0">Digital Facsimiles</Button></a>

        <a href="https://www.themorgan.org/online-exhibitions"><Button className="bg-yellow-700 m-1 h-fit hover:bg-yellow-500 text-2xl text-amber-100 border-0">Online Exhibitions</Button></a>

        <a href="https://www.themorgan.org/collection"><Button className="bg-yellow-700 m-1 h-fit hover:bg-yellow-500 text-2xl text-amber-100 border-0">Explore the Collection</Button></a>
      </div>
    </div>


{/* World Digital Library */}
    <div
      className="w-full bg-no-repeat bg-cover bg-center"
      style={{backgroundImage: `url(${LibraryShelves})`}}
    >
      <div className="bg-black/[0.7]">
      <div className="flex justify-center items-center h-full">

      <div className="text-center text-white p-12">
        
      <a href="https://www.loc.gov/collections/world-digital-library/about-this-collection/"><Button className="bg-transparent border-white-2 h-fit hover:bg-yellow-500 text-2xl text-white">The World Digital Library</Button></a>

        <p className="text-2xl">Hosted by the Library of Congress and created in connection with UNESCO and institutions around the world, the <a className="text-yellow-500 hover:text-green-600" href="https://www.loc.gov/collections/world-digital-library/about-this-collection/">World Digital Library</a> collects manuscripts and books along with newspapers, photos, prints, maps, sound recordings, and films. Although the project has ended and the materials have shifted to the Library of Congress's website, the materials are still available to the public.</p>
      </div>

      </div>  
      </div>

    </div>


{/* Gallica */}
    <div className="bg-lime-100 text-center md:flex justify-center items-center">
      <div className="p-6 w-full md:w-2/3">
        <a href="https://gallica.bnf.fr/accueil/en/content/accueil-en?mode=desktop"><Button className="bg-cyan-900 h-fit hover:bg-cyan-700 text-2xl text-lime-100 border-0 ">Gallica</Button></a>

        <p className="text-2xl"><a href="https://gallica.bnf.fr/accueil/en/content/accueil-en?mode=desktop">Gallica</a> is one of the digital libraries connected with the Bibliothèque nationale de France. Its resources are largely in the public domain. Visit this site for digitized manuscripts, incunabula, books, magazines, photographs, and music housed in the BnF's collection.</p>
      </div>

      <img
        src={LaPorteDesReves} 
        alt="Illustrated title page from La Portes des Rêves."
        className="w-full md:w-1/3 my-0"
      />
    </div>


    </article>
    </>
  )
}

export default Manuscripts;