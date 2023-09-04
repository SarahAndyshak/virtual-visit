// Following tutorial -- issue: maps slide from CarouselData, need to be able to change alt text and add link etc

import React, { Component } from "react";
import { CarouselData } from "./CarouselData";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";

import GarlandCollage from "./../imgs/Getty/CollageGarland.jpg"


class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === CarouselData.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };
  
  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? CarouselData.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
  };



  render() {
    return (
      <div className="mt-8">
        <div className="max-w-lg h-72 flex overflow-hidden relative">
          
          <AiOutlineLeft onClick={this.prevSlide} className='absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer' />
          
{/* This section brings in the image from CarouselData -- change to add multiples instead of using CarouselData? */}
          {CarouselData.map((slide, index) => {
            return (
              <img
                src={slide.image}
                alt={slide.altText}
                key={index}
                className={
                  index === this.state.currentSlide
                    ? "block w-full h-auto object-cover"
                    : "hidden"
                }
              />
            );
          })}




{/* This section adds the navigation dots */}
          <div className="absolute w-full flex justify-center bottom-0">
            {CarouselData.map((element, index) => {
              return (
                <div
                  className={
                    index === this.state.currentSlide
                      ? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                      : "h-2 w-2 bg-blue-300 rounded-full mx-2 mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    this.setCurrentSlide(index);
                  }}
                ></div>
              );
            })}
          </div>

          <AiOutlineRight onClick={this.nextSlide} className='absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer' />

          

        </div>
      </div>
    );
  }
}

export default Carousel;