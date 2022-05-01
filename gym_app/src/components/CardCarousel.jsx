import React from 'react'
import { ExcerciseCard } from './ExcerciseCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import exc1 from '../imgs/exc1.jpg'
import exc2 from '../imgs/exc2.jpg'
import exc3 from '../imgs/exc3.jpg'
import exc4 from '../imgs/exc4.jpg'
import exc5 from '../imgs/exc5.jpg'
import exc6 from '../imgs/exc6.jpg'

const carouselItems = [
  <ExcerciseCard img={exc1} title='Barbell Biceps Curl' time='10 mins' cal='190 calories' desc='This variation will allow you to curl more weight building more strength and mass.' />,
  <ExcerciseCard img={exc2} title='Dumbell Pushups' time='15 mins' cal='170 calories' desc='The dumbbell push-up is the strength workout and best for targeting upper body.' />,
  <ExcerciseCard img={exc3} title='Boxing' time='20 mins' cal='250 calories' desc='Boxing is an incredible full-body workout that can help you to build muscle.' />,
  <ExcerciseCard img={exc4} title='Battle Rope' time='8 mins' cal='300 calories' desc='Battle rope exercises are great for building muscular strength.' />,
  <ExcerciseCard img={exc5} title='Leg Press' time='12 mins' cal='190 calories' desc='The leg press is an excellent way to strengthen your legs.' />,
  <ExcerciseCard img={exc6} title='Deadlift' time='8 mins' cal='260 calories' desc='Deadlifting can increase core strength, core stability and improve your posture.' />,
];

const responsive = {

    Bigdesktop: {
      breakpoint: { max: 3000, min: 1264 },
      items: 4,
      slidesToSlide: 2,
      partialVisibilityGutter: 70
    },
    desktop: {
      breakpoint: { max: 1264, min: 1024 },
      items: 3,
      slidesToSlide: 2,
      partialVisibilityGutter: 70
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
      partialVisibilityGutter: 60
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 40
    }
  };

export const CardCarousel = () => {
  return (<div className='my-10 mx-2 md:mx-5 lg:mx-10'>
    <h1 className='text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl my-10 mx-2 md:mx-4  text-white tracking-wider font-semibold'>Popular Excercises</h1>
    <div className='relative pb-[30px] flex justify-center'>
  <Carousel
    additionalTransfrom={0}
    arrows
    removeArrowOnDeviceType={["tablet", "mobile"]}
    autoPlaySpeed={5000}
    centerMode={false}
    className=""
    containerClass="container"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite
    itemClass=""
    partialVisbile={true}
    keyBoardControl
    minimumTouchDrag={80}
    renderButtonGroupOutside={false}
    renderDotsOutside
    responsive={responsive}
    showDots
    sliderClass=""
    slidesToSlide={1}
    swipeable
  >
    {carouselItems}
  </Carousel>
</div>
</div>

    );
}
