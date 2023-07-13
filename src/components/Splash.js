import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from 'react-daisyui'


function Splash() {
  return(
    <>
    <Link to="/met"><h1>The Metropolitan Museum of Art</h1></Link>
    <h1>Exhibits</h1>
    <h1>Video Tours</h1>
    <h1>Google Earth Tours</h1>
    <h1>Publications</h1>
    <h1>Fun Resources</h1>
    {/* test button */}
    <Button color="primary">Click me!</Button>
    </>
  )
}

export default Splash;