import React from 'react'
import { useInView } from 'react-intersection-observer'

export const Card = ({title, author, img, desc, isOdd}) => {
  const [ref, inView] = useInView({
    triggerOnce:true,
    rootMargin:'-100px 0px'
})
  return (
    <div className={`flex w-screen p-10  flex-wrap items-center justify-center border-b-4 ${isOdd ? 'text-tertiary' : 'flex-row-reverse bg-tertiary text-primary '} `}>
    <img ref={ref} className={`flex-1 transition-all duration-1000 rounded-sm object-cover ${inView ? ( isOdd ? 'translate-x-0 opacity-100' : 'translate-y-0 opacity-100') :  ( isOdd ? 'translate-x-[-100%] opacity-0' : 'translate-y-40 opacity-0')}  max-h-[500px] max-w-[800px] shadow-md shadow-background`} src={img} alt="" />
    <div ref={ref} className={`flex flex-1 transition-all duration-1000 items  ${inView ? ( isOdd ? 'translate-x-0 opacity-100' : 'translate-y-0 opacity-100') :  ( isOdd ? 'translate-x-[100%] opacity-0' : 'translate-y-40 opacity-0')} flex-col m-40`}>
    <h2 className={`lg:text-4xl md:text-3xl text-2xl hover:text-secondary cursor-pointer ${isOdd ? 'text-tertiary' : 'text-primary'} font-heading font-extrabold tracking-wide py-5 my-5 border-b-2  `}>{title}
        <span className='flex text-sm text-slate-500 mt-2'>
            By {author}
        </span>
    </h2>
    <p className='text-lg md:text-xl tracking-wider first-letter:text-4xl min-w-[500px] line-clamp-4 overflow-hidden text-ellipsis text-tertitary'>{desc}</p>
    </div>
    </div>
  )
}
