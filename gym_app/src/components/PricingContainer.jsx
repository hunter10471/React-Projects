import React from 'react'
import { PricingCard } from './PricingCard'
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';

const bronzeBenefits = ['Single Club Access','Monthly Fitness Assessment','All Equipment Access']
const silverBenefits = ['All Bronze Benefits','All Amnesties Included','All Club Unlimited Access','VIP Guest Privileges','Unlimited Training','20% Off Supplements']
const goldBenefits = ['All Silver Benefits','All Premimum Amnesties Included','Unlimited Premimum Team Training','Personalized Eating Plans From a Certified Nutritionist','30% Off Supplements']

export const PricingContainer = () => {
  return (
      <>
           <h1 id='memberships' className='flex flex-col justify-center items-center text-white  font-heading uppercase text-xl md:text-2xl lg:text-4xl mt-4 md:mt-0 mb-4 sm:mb-12 md:mb-14 lg:mb-20 mx-2 md:mx-6 text-center  tracking-wider font-extrabold'>Membership Plans <SportsGymnasticsIcon sx={{fontSize:45}} className='m-2 text-primary' /> </h1>
    <div  className='flex w-full justify-around flex-wrap'>
        <PricingCard popular={false} title={'bronze'} price={12} benefits={bronzeBenefits} />
        <PricingCard popular={true} title={'silver'} price={25} benefits={silverBenefits} />
        <PricingCard popular={false} title={'gold'} price={35} benefits={goldBenefits} />
    </div>
    </>
  )
}
