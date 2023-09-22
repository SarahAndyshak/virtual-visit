import React from "react";
import { Button } from 'react-daisyui'

import Shelf from "./../imgs/Shelf.jpg"


function Publications() {
  return(
    <>
    <article className="prose max-w-none">
    
{/* Header */}
    <div className="bg-lime-900 text-center p-6">
      <h1 className="text-amber-200">Publications</h1>
      <h2 className="text-amber-200">One of the best resources for finding online publications is through a library. Through a library, you will be able to access databases like <a className="text-amber-200 hover:text-amber-400"  href="https://www.worldcat.org/">WorldCat</a> and <a className="text-amber-200 hover:text-amber-400" href="https://www.jstor.org/">JSTOR.</a>
      <br/><br/>
      Here are some starting points for further research.</h2>
    </div>

{/* button grid */}
    <div
      className="w-full bg-no-repeat bg-cover bg-center"
      style={{backgroundImage: `url(${Shelf})`}}>
      <div className="bg-black/[0.7] py-6 px-12 text-center text-amber-200">
        <h2 className="text-amber-200">Many museums have made out of print publications and catalogue exhibits available online.</h2>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">

{/* MetPublications */}
          <a href="https://www.metmuseum.org/art/metpublications"><Button className="border-1 border-amber-200 bg-transparent text-amber-200 hover:bg-amber-100/20 hover:border-amber-200 hover:text-amber-400 h-fit">MetPublications</Button></a>

{/* Getty Publications */}
          <a href="https://www.getty.edu/publications/virtuallibrary/"><Button className="border-1 border-amber-200 bg-transparent text-amber-200 hover:bg-amber-100/20 hover:border-amber-200 hover:text-amber-400 h-fit">Getty Publications</Button></a>

{/* Library of Congress */}
          <a href="https://www.loc.gov/collections/"><Button className="border-1 border-amber-200 bg-transparent text-amber-200 hover:bg-amber-100/20 hover:border-amber-200 hover:text-amber-400 h-fit">Library of Congress</Button></a>

{/* BnF */}
          <a href="https://gallica.bnf.fr/accueil/en/content/accueil-en?mode=desktop"><Button className="border-1 border-amber-200 bg-transparent text-amber-200 hover:bg-amber-100/20 hover:border-amber-200 hover:text-amber-400 h-fit">Bibliothèque nationale de France</Button></a>

{/* British Library */}
          <a href="https://www.bl.uk/catalogues-and-collections/digital-collections"><Button className="border-1 border-amber-200 bg-transparent text-amber-200 hover:bg-amber-100/20 hover:border-amber-200 hover:text-amber-400 h-fit">British Library</Button></a>

{/* WDL */}
          <a href="https://www.loc.gov/collections/world-digital-library/about-this-collection/"><Button className="border-1 border-amber-200 bg-transparent text-amber-200 hover:bg-amber-100/20 hover:border-amber-200 hover:text-amber-400 h-fit">World Digital Library</Button></a>
        </div>
      </div>
    </div>

{/* Link grid */}
    <div className="bg-lime-200 text-center p-3">
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2">

{/* Heilbrunn */}
        <div className="bg-lime-900/20 px-6">
          <h3><a className="text-lime-900 hover:text-blue-500" href="https://www.metmuseum.org/toah">Heilbrunn Timeline of Art History</a></h3>
          <p className="text-lime-900">A resource from the Metropolitan Museum of Art with essays, timelines, and a place to find artworks by period, theme, and material.</p>
        </div>

{/* Khan Academy */}
        <div className="bg-lime-900/20 px-6">
          <h3 className="text-lime-900"><a className="text-lime-900 hover:text-blue-500" href="https://smarthistory.org/">Smarthistory</a></h3>
          <p className="text-lime-900"><a className="text-lime-900 hover:text-blue-500" href="https://smarthistory.org/">Smarthistory</a> collects essays and lessons about art history written by scholars. They have created <a className="text-lime-900 hover:text-blue-500" href="https://smarthistory.org/smarthistory-books/">free textbooks</a> based on these lessons. Many of the Smarthistory essays can be found on <a className="text-lime-900 hover:text-blue-500" href="https://www.khanacademy.org/">Khan Academy</a>, which collects lessons on many other subjects.</p>
        </div>

{/* JSTOR */}
        <div className="bg-lime-900/20 px-6">
          <h3 className="text-lime-900"><a className="text-lime-900 hover:text-blue-500" href="https://www.jstor.org/">JSTOR</a></h3>
          <p className="text-lime-900">JSTOR is a database of journals, books, images, and primary sources. For full access you may need to work with a library, but many of the materials are open acces.</p>
        </div>  

{/* BHA/RILA */}
        <div className="bg-lime-900/20 px-6">
          <h3 className="text-lime-900"><a className="text-lime-900 hover:text-blue-500" href="https://primo.getty.edu/primo-explore/search?vid=BHA">BHA & RILA</a></h3>
          <p className="text-lime-900">The Bibliography of the History of Art (BHA) and the Répertoire international de la littérature de l'art (RILA) do not provide access to materials online, but are searchable bibliographies covering publications in art history from 1975-2007.</p>
        </div>  

      </div>
    </div>


    </article>
    </>
  )
}

export default Publications;