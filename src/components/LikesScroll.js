import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import './LikesScroll.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 464, min: 0 },
    items: 2.2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2.2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

function LikesScroll() {
    return (
        <div className="main">
            <Carousel
  swipeable={true}
  draggable={true}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={false}
  keyBoardControl={true}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
  itemClass="carousel-item-padding-40-px"
>
  <div className="scrollContainer">
      <FavoriteBorderIcon style={{color:'red'}}/>
      <h1>456</h1>
      <p>Likes Everyday</p>
  </div>
  <div className="scrollContainer">
      <EventOutlinedIcon style={{color:'orange'}}/>
      <h1>745</h1>
      <p>Online Events</p>
  </div>
  <div className="scrollContainer">
      <GroupAddOutlinedIcon style={{color:'lightblue'}} />
      <h1>+10K</h1>
      <p>Users</p>
  </div>
  <div className="scrollContainer">
      <VideocamOutlinedIcon style={{color:'green'}} />
      <h1>+2</h1>
      <p>Views every day</p>
  </div>
</Carousel>
        </div>
    )
}

export default LikesScroll
