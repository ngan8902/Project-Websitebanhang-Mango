import React from "react";

// reactstrap components
import { Container } from "reactstrap";

import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// // configure Swiper to use modules
// Swiper.use([Navigation, Pagination]);

export default function PageHeader() {


  React.useEffect(() => {
    
    var swiper = new Swiper('.blog-slider', {
      spaceBetween: 10,
      modules: [Navigation, Pagination],
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });
  })
  return (
    <div className="wapheader">
    <div className="blog-slider">
      <div className="blog-slider__wrp swiper-wrapper">
        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">

            <img src={require('../../assets/img/fashion1.jpg')} alt="" />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">26 December 2019</span>
            <div className="blog-slider__title">Lorem Ipsum Dolor</div>
            <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
            <a href="#" className="blog-slider__button">READ MORE</a>
          </div>
        </div>
        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            <img src={require('../../assets/img/fashion2.jpg')} alt="" />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">26 December 2019</span>
            <div className="blog-slider__title">Lorem Ipsum Dolor2</div>
            <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
            <a href="#" className="blog-slider__button">READ MORE</a>
          </div>
        </div>

        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            <img src={require('../../assets/img/fashion3.jpg')} alt="" />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">26 December 2019</span>
            <div className="blog-slider__title">Lorem Ipsum Dolor</div>
            <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
            <a href="#" className="blog-slider__button">READ MORE</a>
          </div>
        </div>

      </div>
      <div className="blog-slider__pagination"></div>
    </div>
  </div>
  );
}
