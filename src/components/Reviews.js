import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Review from './card/Review'
import vijayYesudas from '../images/vijay-yesudas.jpg'
import Andrea from '../images/andrea-jeremiah.jpg'
import Shilpa from '../images/shilpa-rao.jpg'


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 464, min: 0 },
    items: 1.03,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.03,
    slidesToSlide: 1 // optional, default to 1.
  }
};

function Reviews() {
    return (
        <div style={{marginTop:100,marginBottom:50}}>
            <div className="cardText">
                <h1>Reviews <div></div></h1>
                <p>1/12</p>
            </div>
            <Carousel
  swipeable={true}
  draggable={true}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  keyBoardControl={true}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
  itemClass="carousel-item-padding-40-px"
>
  <div>
      <Review image={vijayYesudas} name="Hellen Jummy" info="PALO ALTO, CA" desc="Lodjt dgdd jsyghfc gcygc ,hughfgc jhugfhf uggdd hhhd dygdiuhf ug cug fefgefh guygfhfey uegfgfchcy euh."/>
  </div>
  <div >
      <Review image={Shilpa} name="Isaac Oluwatemilorun" info="PALO ALTO, CA" desc="Lodjt dgdd jsyghfc gcygc ,hughfgc jhugfhf uggdd hhhd dygdiuhf ug cug fefgefh guygfhfey uegfgfchcy euh."/>
  </div>
  <div >
      <Review image={Andrea} name="Hellen Jummy" info="PALO ALTO, CA" desc="Lodjt dgdd jsyghfc gcygc ,hughfgc jhugfhf uggdd hhhd dygdiuhf ug cug fefgefh guygfhfey uegfgfchcy euh."/>
  </div>
</Carousel>
        </div>
    )
}

export default Reviews
