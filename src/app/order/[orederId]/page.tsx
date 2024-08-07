import React from 'react'
import logo from '@/../public/images/logo.png'
import profileIcon from '@/../public/images/header/profileIcon.svg'
import takeInImage from '@/../public/images/order/takeinblack.svg'
import bgGreen from '@/../public/images/order/dots-green.png'
import bgRed from '@/../public/images/order/dots-pink.png'
import takeOutImage from '@/../public/images/order/takeoutblack.svg'
import arrowLeft from '@/../public/images/header/arrowLeft.svg'
import arrowRghit from '@/../public/images/header/arrow-left.svg'

import Image from 'next/image'
import { useUser } from '@supabase/auth-helpers-react'
import Header from './component/header'

export default function Page() {

    // const handelClick=()=>{
    //     console.log('kdkskd')
    // }
    // onClick={()=>console.log('dksksd')}
  return (
    <div className='flex flex-col   '>
      {/* TODO MOVE TO COMPONENT */}

        <Header/>
      <div className=' flex items-center justify-center flex-col gap-10 w-full h-full pt-20'>
      <div className='bg-white w-[30vw] h-[15vh] rounded-xl shadow-xl cursor-pointer overflow-hidden ' >

    <div className='w-full h-full  flex items-center justify-between gap-[10px] p-4 '>
    <div className='flex w-full h-full gap-2' >
    <Image src={logo} alt="otentik Logo" height={33} width={33} className='flex w-[33px] h-[33px] object-cover  items-start justify-start' />
   <div className='flex flex-col h-full justify-between pt-2'>
   <span className=' font-fontBold text-[16px ]'> Otentik Niort</span>
        <div  className='flex flex-col gap-1 text-[15px]'>
            <span>
            23, Rue Grenouilla
            </span>
            <span>
            47000 AGEN
            </span>
        </div>
        <div className='flex gap-2'>
            <div className='flex items-center gap-1'>
            <div className='bg-[rgb(153,_214,_65)] rounded-[10px] h-[5px] w-[5px]
'></div>
           <span className='text-green-500'>
            Ouvert
           </span>
            </div>
           <span>Jusqu'a 23:30</span>
        </div>
   </div>

    </div>


    </div>

</div>
        <div className='flex flex-col items-center  justify-center  pb-10'>
          <div className="text-[2.5vw] font-fontBold ">Choisis ton</div>
          <div className="text-[4vw] font-fontBold  bg-gradient-to-r from-blue-600 via-gray-500 to-slate-400  text-transparent bg-clip-text">Type de commande</div>
        </div>



        <div className="flex  items-center gap-10">
        <div className="flex  items-center cursor-pointer flex-col justify-center gap-3  w-[200px] h-[200px]  bg-slate-400 rounded-lg"
         style={{
            background: `url(/images/order/dots-green.png), rgb(0, 220, 199)`,
            backgroundSize: 'cover', // Adjust as needed
            backgroundPosition: 'center' // Adjust as needed
          }}>

            <Image src={takeInImage} alt="takeInImage" className='h-[45%] w-[45%]'/>
            <span className="font-fontBold text-white text-[1.2vw]">Sur Place</span>

        </div>
        <div className="flex  items-center cursor-pointer flex-col justify-center gap-3  w-[200px] h-[200px]   rounded-lg "
        style={{
            background: `url(/images/order/dots-pink.png), rgb(250, 74, 128)`,
            backgroundSize: 'cover', // Adjust as needed
            backgroundPosition: 'center' // Adjust as needed
          }}
          >
        <Image src={takeOutImage} alt="takeOutImage" className='h-[45%] w-[45%]'/>
            <span className="font-fontBold  text-white text-[1.2vw]"> A emporter</span>

        </div>
        </div>
      </div>
    </div>
  )
}
