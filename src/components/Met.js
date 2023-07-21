import React from "react";
import { Button } from 'react-daisyui'

// import styled from "styled-components";
import Amphora from "./../imgs/MetImgs/Amphora.jpeg"
import BhairavaHead from "./../imgs/MetImgs/BhairavaHead.jpeg"
import Book from "./../imgs/MetImgs/Book.jpeg"
import Cradleboard from "./../imgs/MetImgs/Cradleboard.jpeg"
import Dancer from "./../imgs/MetImgs/DegasDancer.jpeg"
import Dress from "./../imgs/MetImgs/DinnerDress.jpeg"
import Window from "./../imgs/MetImgs/LaFargeWindow.jpeg"
import Mastaba from "./../imgs/MetImgs/Mastaba.jpeg"
import Oxbow from "./../imgs/MetImgs/Oxbow.jpeg"
import Tunic from "./../imgs/MetImgs/Tunic.jpeg"
import WheatFields from "./../imgs/MetImgs/VGWheatField.jpeg"

function Met() {
  return (
    
    // May need to separate article className for each section
    // include smooth scrolling between sections? possibly subdirectory to sections
    // open links in new tab?
    // replace <> with <StyledMet>?

    <>
    <article className="prose max-w-none">
      <div className="bg-red-500 p-6">
        <h1 className="text-center text-white">The Metropolitan Museum of Art, NYC</h1>

        <p>The Metropolitan Museum of Art, founded in 1870, houses over 5,000 works of art in two locations: on 5th Avenue and at the Cloisters. The museum has an enormous amount of material available online, including virtual walk-throughs created with <a href="https://artsandculture.google.com/">Google Arts & Culture,</a> digitized works of art, educational resources, essays, and virtual exhibitions.</p>

        <p>Much of the Met's collection is in the public domain, so visitors can download and use certain images, materials, and data for their own use in accordance with the museum's <a href="https://www.metmuseum.org/about-the-met/policies-and-documents/image-resources">Open Access policy.</a></p>
      {/* add a tooltip definition of public domain */}
      </div>

{/* How to style background images */}
      {/* <div
        className="bg-cover bg-center text-white h-auto max-w-full m-0 p-6"
        style={{
          backgroundImage: `url(${Oxbow})`
        }}
      >
      <h2 className="text-white text-center">Downloadable Art</h2>
      </div> */}

{/* How to insert image */}
      {/* <img 
        src={Oxbow}
        className="h-auto max-w-full m-0"
      /> */}

{/* Create slideshow here? */}

      <div className="inline-block bg-blue-500 pr-6">
        <img src={Oxbow} className="mr-6 md:w-1/2 float-left" />

          <h2>Downloadable Art</h2>
          <p>You can search the <a href="https://www.metmuseum.org/art/the-collection">Met's collection</a> by title, keyword, artist, geographic region, historical period, material, and more, or you can look through curated collections available on the museum's site. <a href="https://www.metmuseum.org/art/collection/search?showOnly=highlights%7CwithImage&pageSize=0&sortBy=Relevance&sortOrder=asc&searchField=All">Highlights of the collection</a> have their own page, as do <a href="https://www.metmuseum.org/art/collection/search?showOnly=withImage%7CopenAccess&pageSize=0&sortBy=Relevance&sortOrder=asc&searchField=All">Open Access works</a> available for free download. Click on any of the works and you can learn much more about each piece in depth.</p>
      
          <h2>3D Printing Models</h2>
          <p>Want a copy of a sculptural work from the Met's collection? If you have access to a 3D printer, you can download files for free and print your own copy! In fact, the Met encourages visitors to create their own files for 3D models by photographing works in the public domain. You can download files from the Met's <a href="https://www.thingiverse.com/met/designs">thingiverse page</a> and search for more files created by visitors online.</p>

      </div>

      {/* <img src={Amphora} className="m-0 md:w-1/2 float-right" /> */}


      <h2>Online Exhibitions</h2>
      {/* Make this a slideshow? */}
      <p>Google Arts & Culture hosts several online exhibitions created by the Met. These are just a few samples, check out more on the site!</p>
      {/* add linked image for each, colored background */}

      <h3>Making the Met</h3>
      <a href ="https://artsandculture.google.com/story/2wXR-pBlvVqAJQ"></a>
      <p>A multimedia exhibition celebrating the Met's 150th anniversary by recounting its history and showcasing highlights from its collection.</p>

      <h3>Pieter Bruegel's Harvesters</h3>
      <a href="https://artsandculture.google.com/story/kQUxmAo9GNvEJA"></a>
      <p>A closer look at the tiny details in one of Pieter Bruegel's paintings.</p>
      {/* Add a link to the BBC's related radio program */}
      <p>This piece is also featured in an episode of "Moving Pictures," created by BBC Radio 4</p>
      <a href="https://www.bbc.co.uk/programmes/b07w9jg5"></a>

      <h3>Before Yesterday We Could Fly: An Afrofuturist Period Room</h3>
      <p>Discover an installation work inspired by historical Seneca Village, which imagines what a future home could have looked like if the African American community had not been destroyed.</p>
      <a href="https://artsandculture.google.com/story/OwVRKgZz3RFkSg"></a>

      <h3>Behind the Scenes at The Costume Institute Conservation Lab</h3>
      <p>A look at how the historical clothing in the Met's collections are conserved and displayed.</p>
      <a href="https://artsandculture.google.com/story/ygURqUmRX42zJg"></a>

      <h3>Celebrating Asian and Pacific Islander Heritage</h3>
      <p>This exhibition highlights a few artistic contributions from AAPI artists featured in the Met's collection.</p>
      <a href="https://artsandculture.google.com/story/ggXBT3SK-gKWqA"></a>

      <h2>Virtual Walk-throughs</h2>
      {/* Side-by-side images and links, hover enlarge/color */}
      <p>Google Arts & Culture presents a way to visit both the Met on Fifth Avenue and the Cloisters from anywhere you have internet!</p>
      
      <p>The Met Fifth Avenue houses art from all over the world and many periods of history. Some sections of the museum feature entire buildings, like the Roman-era Temple of Dendur in the Egyptian wing.</p>
      <a href="https://artsandculture.google.com/streetview/metropolitan-museum-of-art/KAFHmsOTE-4Xyw?sv_lng=-73.9624786&sv_lat=40.7803959&sv_h=322.9&sv_p=0&sv_pid=KeFx8oXHzeuY8L5rfepHaA&sv_z=1">The Met Fifth Avenue</a>
      
      <p>The Cloisters, which opened in 1938, houses much of the Met's medieval European collection. The Cloisters takes its name from the elements of medieval cloisters incorported into its structure.</p>
      {/* Add tooltip defining cloister */}
      <a href="https://artsandculture.google.com/streetview/the-cloisters-museum-and-gardens/aAFFBxRsY3TilQ">The Cloisters</a>

      <h2>MetPublications</h2>
      <p>Visitors can learn more about recent publications on <a href ="https://www.metmuseum.org/art/metpublications">this part of the museum's site.</a> Many books, articles, magazines, and exhibition catalogues are available for free download or to be read online.</p>

      <h2>The Heilbrunn Timeline of Art History</h2>
      <h3>Artworks | Timelines | Essays</h3>
      <p><a href="https://www.metmuseum.org/toah">The Heilbrunn Timline of Art History</a> provides another way for visitors to easily <a href="https://www.metmuseum.org/toah/works">find artworks by period, theme, and material,</a> but it also presents <a href="https://www.metmuseum.org/toah/chronology">timelines</a> to help visitors visualize connections. Scholars connected to the museum have <a href="https://www.metmuseum.org/toah/essays">written essays</a> about many specific works of art, as well as movements, themes, and time periods, all available on the Timeline.</p>

      <h2>The Met on Google Arts & Culture</h2>
      <h3>The Met Fifth Avenue | The Cloisters</h3>
      <p>Each of the Met's locations has a dedicated page on Google Arts & Culture where visitors can find the virtual walk-throughs, highlights from the collection, and online exhibitions.</p>
      {/* replace with linked images, spin from image to text */}
      <a href="https://artsandculture.google.com/partner/the-metropolitan-museum-of-art"><h3>The Met Fifth Avenue</h3></a>
      <a href="https://artsandculture.google.com/partner/the-cloisters-museum-and-gardens"><h3>The Cloisters</h3></a>

      </article>
    </>
    // replace with </StyledMet>
  )
}

export default Met;