import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useState } from 'react';
import { ImgModal } from './ImgModal';


export const EquipmentImgs = () => {

  const [img, SetImg] = useState(null)

  return (<div id='equipment' className='relative mb-[-2rem] sm:mb[-4rem] md:mb-[-8rem] lg:mb-[-10rem] mt-20 mx-6 sm:mx-10 md:mx-14 lg:mx-20'>
      <h1 className='flex flex-col justify-center items-center text-white  font-heading uppercase text-xl md:text-2xl lg:text-4xl my-10 mx-2 md:mx-6 text-center  tracking-wider font-extrabold'>Our Equipment <FitnessCenterIcon sx={{fontSize:45}} className='m-2 rotate-[135deg] text-primary' /> </h1>
      <ImageList variant="masonry" cols={3} gap={10}>
        <ImgModal img={img} />
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        className='cursor-pointer'
        src={`${item.img}?w=248&fit=crop&auto=format`}
        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt='equipment'
        loading="lazy"
        onClick={()=>SetImg(item.img)}
      />
    </ImageListItem>
  ))}
</ImageList>
              </div>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1637666095575-c460a3aae9f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
},
{
    img: 'https://images.unsplash.com/photo-1561140895-9d144461935e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
},
{
  img: 'https://images.unsplash.com/photo-1561402811-8cf986c35eec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=964&q=80',

},
{
    img: 'https://images.unsplash.com/photo-1588528402605-1f9d0eb7a6d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    
},
{
  img: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
        img: 'https://images.unsplash.com/photo-1547919307-1ecb10702e6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
        
    },
    {
      img: 'https://images.unsplash.com/photo-1582910184841-2135ce4421bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      
    },
  {
    img: 'https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1590239926044-4131f5d0654d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1091&q=80',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1604053756382-1238fac1b732?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1623428455276-c5243d302dbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1580086229554-1c2a34000456?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1105&q=80',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1637666161769-90fdb7db4eef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1590238868893-85f766f145fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    
  },
];