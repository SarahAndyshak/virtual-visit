import React from "react";
// import { Tooltip } from 'react-daisyui'

// import styled from "styled-components";
import Oxbow from "./../imgs/MetImgs/Oxbow.jpeg"
import Window from "./../imgs/MetImgs/LaFargeWindow.jpeg"
import Theodosius from "./../imgs/MetImgs/TheodosiusWindow.jpeg"
import DanceClass from "./../imgs/MetImgs/DegasDanceClass.jpeg"
import AmphoraDetail from "./../imgs/MetImgs/AmphoraDetail.png"
import RoughWaves from "./../imgs/MetImgs/RoughWaves.jpeg"
import SkyDetail from "./../imgs/MetImgs/SkyDetail.png"
import TunicDetail from "./../imgs/MetImgs/TunicDetail.png"



// Add open links in new tab?

// How to style background images
    // <div
    //   className="bg-cover bg-center text-white h-auto max-w-full m-0 p-6"
    //   style={{backgroundImage: `url(${Oxbow})`}}
    // >
    // <h2 className="text-white text-center">Downloadable Art</h2>
    // </div>

// How to insert image full width, responsive
      // <img src={Oxbow} className="h-auto max-w-full m-0"/>


function Met() {
  return (
    <>
    <article className="prose max-w-none">

{/* Heading banner */}
      <div className="bg-red-500 p-6 text-white">
        <h1 className="text-center text-white">The Metropolitan Museum of Art, NYC</h1>

        <p>The Metropolitan Museum of Art, founded in 1870, houses over 5,000 works of art in two locations: on 5th Avenue and at the Cloisters. The museum has an enormous amount of material available online, including virtual walk-throughs created with <a className="text-white" href="https://artsandculture.google.com/">Google Arts & Culture,</a> digitized works of art, educational resources, essays, and virtual exhibitions.</p>

        <p>Much of the Met's collection is in the <span className="tooltip underline text-white hover:text-blue-600" data-tip="materials in the public domain are not copyrighted, and can be used by the public">public domain</span>, so visitors can download and use certain images, materials, and data for their own use in accordance with the museum's <a className="text-white" href="https://www.metmuseum.org/about-the-met/policies-and-documents/image-resources">Open Access policy.</a></p>
      </div>


{/* Try turning this section into a carousel once the page is set up */}

{/* Online exibitions */}
      <div
        className="w-full bg-no-repeat bg-cover bg-center"
        style={{backgroundImage: `url(${Window})`}}
        >
        <div className="bg-[hsla(0,0%,0%,0.7)]">
        <div className="flex justify-center items-center h-full">

        <div className="text-center text-white p-6">
        <h2 className="text-center text-white">Online Exhibitions</h2>
        <h3 className="text-center text-white">Google Arts & Culture hosts several online exhibitions created by the Met. These are just a few samples, check out more on the site!</h3>

        <h3><a className="text-center text-yellow-500 hover:text-green-600" href="https://artsandculture.google.com/story/2wXR-pBlvVqAJQ">Making the Met</a></h3>
        <p>A multimedia exhibition celebrating the Met's 150th anniversary by recounting its history and showcasing highlights from its collection.</p>
        
        <h3><a className="text-center text-yellow-500 hover:text-green-600" href="https://artsandculture.google.com/story/ygURqUmRX42zJg">Behind the Scenes at The Costume Institute Conservation Lab</a></h3>
        <p>A look at how the historical clothing in the Met's collections are conserved and displayed.</p>

        <h3><a className="text-center text-yellow-500 hover:text-green-600" href="https://artsandculture.google.com/story/ggXBT3SK-gKWqA">Celebrating Asian and Pacific Islander Heritage</a></h3>
        <p>This exhibition highlights a few artistic contributions from AAPI artists featured in the Met's collection.</p>
        
        <h3><a className="text-center text-yellow-500 hover:text-green-600" href="https://artsandculture.google.com/story/OwVRKgZz3RFkSg">Before Yesterday We Could Fly: An Afrofuturist Period Room</a></h3>
        <p>Discover an installation work inspired by historical Seneca Village, which imagines what a future home could have looked like if the African American community had not been destroyed.</p>
      
        <h3><a className="text-center text-yellow-500 hover:text-green-600" href="https://artsandculture.google.com/story/kQUxmAo9GNvEJA">Pieter Bruegel's Harvesters</a></h3>
        <p>A closer look at the tiny details in one of Pieter Bruegel's paintings. This piece is also featured in <a className="text-white" href="https://www.bbc.co.uk/programmes/b07w9jg5">an episode of "Moving Pictures,"</a> created by BBC Radio 4</p>

        </div>
        </div>
        </div>

      </div>

{/* Oxbow and downloadables */}
      <div className="bg-yellow-500">
      <div className="inline-block">
        <img src={Oxbow} alt="Oxbow" className="px-6 mr-6 md:w-1/2 float-left" />
        
        <div className="p-6">
        <h2>Downloadable Art</h2>
        <p>You can search the <a href="https://www.metmuseum.org/art/the-collection">Met's collection</a> by title, keyword, artist, geographic region, historical period, material, and more, or you can look through curated collections available on the museum's site. <a href="https://www.metmuseum.org/art/collection/search?showOnly=highlights%7CwithImage&pageSize=0&sortBy=Relevance&sortOrder=asc&searchField=All">Highlights of the collection</a> have their own page, as do <a href="https://www.metmuseum.org/art/collection/search?showOnly=withImage%7CopenAccess&pageSize=0&sortBy=Relevance&sortOrder=asc&searchField=All">Open Access works</a> available for free download. Click on any of the works and you can learn much more about each piece in depth.</p>
      
        <h2>3D Printing Models</h2>
        <p>Want a copy of a sculptural work from the Met's collection? If you have access to a 3D printer, you can download files for free and print your own copy! In fact, the Met encourages visitors to create their own files for 3D models by photographing works in the public domain. You can download files from the Met's <a href="https://www.thingiverse.com/met/designs">thingiverse page</a> and search for more files created by visitors online.</p>
        </div>

      </div>
      </div>

{/* Heilbrunn- full width amphora banner */}
      <div className="text-center text-white bg-no-repeat bg-cover bg-center"
        style={{backgroundImage: `url(${AmphoraDetail})`}}
        >
        <div className="flex justify-center items-center h-full">
        <div className="bg-[hsla(0,0%,0%,0.7)] px-6 py-12">
          <h2 className="text-white">The Heilbrunn Timeline of Art History</h2>
          <p><a className="text-yellow-500 hover:text-green-600" href="https://www.metmuseum.org/toah">The Heilbrunn Timline of Art History</a> provides another way for visitors to easily <a className="text-yellow-500 hover:text-green-600" href="https://www.metmuseum.org/toah/works">find artworks by period, theme, and material,</a> but it also presents <a className="text-yellow-500 hover:text-green-600" href="https://www.metmuseum.org/toah/chronology">timelines</a> to help visitors visualize connections. Scholars connected to the museum have <a className="text-yellow-500 hover:text-green-600" href="https://www.metmuseum.org/toah/essays">written essays</a> about many specific works of art, as well as movements, themes, and time periods, all available on the Timeline.</p>
        </div>
        </div>
      </div>


{/* Publications and Google Arts & Culture */}
      <div className="bg-amber-200">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="p-6 md:w-1/2 ">
        <h2>MetPublications</h2>
        <p>Visitors can learn more about recent publications on <a className="" href ="https://www.metmuseum.org/art/metpublications">this part of the museum's site.</a> Many books, articles, magazines, and exhibition catalogues are available for free download or to be read online.</p>

        <h2>The Met on Google Arts & Culture</h2>
        <h3><a href="https://artsandculture.google.com/partner/the-metropolitan-museum-of-art">The Met Fifth Avenue</a> | <a className="" href="https://artsandculture.google.com/partner/the-cloisters-museum-and-gardens">The Cloisters</a></h3>
        <p>Each of the Met's locations has a dedicated page on Google Arts & Culture where visitors can find the virtual walk-throughs, highlights from the collection, and online exhibitions.</p>
        </div>
        <img src={RoughWaves} className="md:w-1/2 p-6"/>
      </div>
      </div>

{/* VanGogh Sky bannner */}
      <img src={SkyDetail} className="my-0"/>

{/* Virtual Walk-throughs, 2 columns */}
      <div className="bg-yellow-500 pt-6 text-center">
        <h1 className="">Virtual Walk-throughs</h1>
        <p>Google Arts & Culture presents a way to visit both the Met on Fifth Avenue and the Cloisters from anywhere you have internet!</p>

      <div className="flex flex-wrap md:flex-nowrap">
        <div className="bg-none px-6 md:w-1/2">
          <h2 className="text-center"><a href="https://artsandculture.google.com/streetview/metropolitan-museum-of-art/KAFHmsOTE-4Xyw?sv_lng=-73.9624786&sv_lat=40.7803959&sv_h=322.9&sv_p=0&sv_pid=KeFx8oXHzeuY8L5rfepHaA&sv_z=1">Walk Through the Met Fifth Avenue</a></h2>
          <img src={DanceClass} alt="Degas Dance Class"/>
          <p>The Met Fifth Avenue houses art from all over the world and many periods of history. Some sections of the museum feature entire buildings, like the Roman-era Temple of Dendur in the Egyptian wing.</p>
        </div>

        <div className="bg-none px-6 md:w-1/2">
          <h2 className="text-center"><a href="https://artsandculture.google.com/streetview/the-cloisters-museum-and-gardens/aAFFBxRsY3TilQ">Walk Through the Cloisters</a></h2>
          <img src={Theodosius} alt="Stained glass window"/>
          <p>The Cloisters, which opened in 1938, houses much of the Met's medieval European collection. The Cloisters takes its name from the elements of medieval <span className="tooltip underline text-green-700 hover:text-red-600" data-tip="a covered walkway around a square courtyard in an abbey">cloisters</span> incorported into its structure.</p>
        </div>
      </div>
      </div>

{/* Tunic banner */}
      <img src={TunicDetail} className="my-0"/>



{/* Experimental placements */}
      {/* className="w-full bg-no-repeat bg-cover bg-center"
        style={{backgroundImage: `url(${Window})`}} */}

{/* Publications and Google Arts & Culture -- VARIATION WITH FLEX*/}
{/* <div className="bg-amber-200">
      <div className="inline-block">
        <img src={RoughWaves} className="float-right md:w-1/2 ml-8"/>
        <div className="px-6 py-8 ">
        <h2>MetPublications</h2>
        <p>Visitors can learn more about recent publications on <a className="" href ="https://www.metmuseum.org/art/metpublications">this part of the museum's site.</a> Many books, articles, magazines, and exhibition catalogues are available for free download or to be read online.</p>

        <h2>The Met on Google Arts & Culture</h2>
        <h3><a href="https://artsandculture.google.com/partner/the-metropolitan-museum-of-art">The Met Fifth Avenue</a> | <a className="" href="https://artsandculture.google.com/partner/the-cloisters-museum-and-gardens">The Cloisters</a></h3>
        <p>Each of the Met's locations has a dedicated page on Google Arts & Culture where visitors can find the virtual walk-throughs, highlights from the collection, and online exhibitions.</p>
        </div>
      </div>
      </div> */}

{/* 3 blocks */}
      {/* <div className="flex flex-wrap md:flex-nowrap text-white">

        <div className="text-center bg-no-repeat bg-cover bg-center md:w-1/3"
          style={{backgroundImage: `url(${FieldDetail})`}}
        >
          <div className="flex justify-center items-center h-full">
          <div className="bg-[hsla(0,0%,0%,0.4)] px-4 py-4">
            <h2 className="text-white">MetPublications</h2>
            <p>Visitors can learn more about recent publications on <a className="text-white" href ="https://www.metmuseum.org/art/metpublications">this part of the museum's site.</a> Many books, articles, magazines, and exhibition catalogues are available for free download or to be read online.</p>
            </div>
            </div>
        </div>

        <div className="text-center bg-no-repeat bg-cover bg-center md:w-1/3"
          style={{backgroundImage: `url(${AmphoraDetail})`}}
          >
          <div className="flex justify-center items-center h-full">
          <div className="bg-[hsla(0,0%,0%,0.6)] px-4">
          <h2 className="text-white">The Heilbrunn Timeline of Art History</h2>
          <p><a className="text-white" href="https://www.metmuseum.org/toah">The Heilbrunn Timline of Art History</a> provides another way for visitors to easily <a className="text-white" href="https://www.metmuseum.org/toah/works">find artworks by period, theme, and material,</a> but it also presents <a className="text-white" href="https://www.metmuseum.org/toah/chronology">timelines</a> to help visitors visualize connections. Scholars connected to the museum have <a className="text-white" href="https://www.metmuseum.org/toah/essays">written essays</a> about many specific works of art, as well as movements, themes, and time periods, all available on the Timeline.</p>
          </div>
          </div>
        </div>

        <div className="text-center bg-no-repeat bg-cover bg-center md:w-1/3"
          style={{backgroundImage: `url(${WaveDetail})`}}
        >
          <div className="flex justify-center items-center h-full">
          <div className="bg-[hsla(0,0%,0%,0.6)] p-4">
            <h2 className="text-white">The Met on Google Arts & Culture</h2>
            <h3><a className="text-white" href="https://artsandculture.google.com/partner/the-metropolitan-museum-of-art">The Met Fifth Avenue</a> | <a className="text-white" href="https://artsandculture.google.com/partner/the-cloisters-museum-and-gardens">The Cloisters</a></h3>
            <p>Each of the Met's locations has a dedicated page on Google Arts & Culture where visitors can find the virtual walk-throughs, highlights from the collection, and online exhibitions.</p>
        </div>
        </div>
        </div>

      </div> */}

{/* 2 boxes */}
      {/* <div className="flex flex-wrap md:flex-nowrap text-white">

        <div className="text-center bg-no-repeat bg-cover bg-center md:w-1/2"
          style={{backgroundImage: `url(${FieldDetail})`}}
        >
          <div className="flex justify-center items-center h-full">
          <div className="bg-[hsla(0,0%,0%,0.4)] px-4 py-4">
            <h2 className="text-white">MetPublications</h2>
            <p>Visitors can learn more about recent publications on <a className="text-white" href ="https://www.metmuseum.org/art/metpublications">this part of the museum's site.</a> Many books, articles, magazines, and exhibition catalogues are available for free download or to be read online.</p>
          </div>
          </div>
        </div>
      
        <div className="text-center bg-no-repeat bg-cover bg-center md:w-1/2"
          style={{backgroundImage: `url(${WaveDetail})`}}
        >
          <div className="flex justify-center items-center h-full">
          <div className="bg-[hsla(0,0%,0%,0.6)] p-4">
            <h2 className="text-white">The Met on Google Arts & Culture</h2>
            <h3><a className="text-white" href="https://artsandculture.google.com/partner/the-metropolitan-museum-of-art">The Met Fifth Avenue</a> | <a className="text-white" href="https://artsandculture.google.com/partner/the-cloisters-museum-and-gardens">The Cloisters</a></h3>
            <p>Each of the Met's locations has a dedicated page on Google Arts & Culture where visitors can find the virtual walk-throughs, highlights from the collection, and online exhibitions.</p>
          </div>
          </div>
        </div>

      </div> */}


    </article>
    </>
  )
}

export default Met;