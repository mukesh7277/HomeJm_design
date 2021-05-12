import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './card/Card'
import './Cards.css'
import bennyDayal from '../images/BenyDayal.jpg'
import vijayYesudas from '../images/vijay-yesudas.jpg'
import Andrea from '../images/andrea-jeremiah.jpg'
import Shilpa from '../images/shilpa-rao.jpg'


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1.1,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

function LikesScroll() {
    return (
        <div style={{marginTop:100}}>
            <div className="cardText">
                <h1>Upcomming Shows <div></div></h1>
                <p>View All</p>
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
      <Card name="Benny Dayal" image={bennyDayal} info="Folk"/>
  </div>
  <div >
      <Card name="Vijay Yesudas" image={vijayYesudas} info="Bolywood"/>
  </div>
  <div >
      <Card name="Andrea Jeremiah" image={Andrea} info="Folk"/>
  </div>
  <div >
      <Card name="Shilpa Rao" image={Shilpa} info="Folk"/>
  </div>
</Carousel>
        </div>
    )
}

export default LikesScroll
