import { ExcerciseCard } from './ExcerciseCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StarsIcon from '@mui/icons-material/Stars';
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
  <ExcerciseCard img={exc4} title='Battle Rope' time='8 mins' cal='300 calories' desc='Battle rope exercises are great for building muscular strength and hypertrophy.' />,
  <ExcerciseCard img={exc5} title='Leg Press' time='12 mins' cal='190 calories' desc='The leg press is an excellent way to strengthen your legs and build muscle.' />,
  <ExcerciseCard img={exc6} title='Deadlift' time='8 mins' cal='260 calories' desc='Deadlifting can increase core strength, core stability and improve your posture as well as back muscle hypertrophy.' />,
];

const responsive = {

    Bigdesktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 3,
      slidesToSlide: 2,
      partialVisibilityGutter: 70
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 3,
      slidesToSlide: 2,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 540 },
      items: 2,
      slidesToSlide: 2,
      partialVisibilityGutter: 10
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 40
    }
  };

export const CardCarousel = () => {
  return (<div id='excercises' className='bg-secondary shadow-primary shadow-md border-t-[1px] border-primary my-10 mx-4 sm:mx-8 md:mx-14 lg:mx-16 xl:mx-20 rounded-xl py-4  md:py-6'>
    <h1 className='flex flex-col items-center justify-center font-heading uppercase text-xl md:text-2xl lg:text-4xl my-10 mx-2 md:mx-6 text-white  tracking-wider font-extrabold'>Popular Excercises <StarsIcon sx={{fontSize:45}} className='m-2 text-primary' /> </h1>
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
