import React from 'react'
import { useRef } from 'react'
import { Card } from '../components/Card'
import { Hero } from '../components/Hero'
import {data} from '../data'
import { useInView } from 'react-intersection-observer'

export const Home = () => {    
  const blogs = useRef()
  const [ref, inView] = useInView({
      triggerOnce:true,
      rootMargin:'-100px 0px'
  })
  return (
   <div className="overflow-x-hidden w-full h-full bg-primary ">
   <Hero blogs={blogs} />
   <div ref={blogs} id='blogs' className='flex  items-center justify-center flex-col flex-wrap overflow-hidden'>
    <h1 ref={ref} className={`text-2xl md:text-3xl lg:text-4xl text-center font-heading font-extrabold transition-all duration-500 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-40 opacity-0'}  font-bold p-2 border-b-4 border-secondary mt-20 tracking-wider ` }>LATEST POSTS</h1>
        {
            data.map(element=>{
                return(
                    <Card author={element.author} title={element.title} desc={element.desc} img={element.img} isOdd={data.indexOf(element)%2===0} key={data.indexOf(element)} />
                )
            })
        }
    </div>
   </div>
  )
}


