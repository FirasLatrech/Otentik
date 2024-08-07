"use client"
import Image from 'next/image'
import React from 'react'
import profileIcon from '@/../public/images/header/profileIcon.svg'
import takeInImage from '@/../public/images/order/takeinblack.svg'
import bgGreen from '@/../public/images/order/dots-green.png'
import bgRed from '@/../public/images/order/dots-pink.png'
import takeOutImage from '@/../public/images/order/takeoutblack.svg'
import arrowLeft from '@/../public/images/header/arrowLeft.svg'
import arrowRghit from '@/../public/images/header/arrow-left.svg'
import { usePathname, useRouter } from 'next/navigation'
function OptionsCards() {
    const router=useRouter()
    const pathName =usePathname()
    console.log(pathName)
    const handelCLick=(value:string)=>{
        console.log(value)
        router.push(`${pathName}/menu?place=${value}`)


    }
  return (
    <div className="flex  items-center gap-10">
    <div onClick={()=>handelCLick('surplace')} className="flex  items-center cursor-pointer flex-col justify-center gap-3  w-[200px] h-[200px]  bg-slate-400 rounded-lg"
     style={{
        background: `url(/images/order/dots-green.png), rgb(0, 220, 199)`,
        backgroundSize: 'cover', // Adjust as needed
        backgroundPosition: 'center' // Adjust as needed
      }}>

        <Image src={takeInImage} alt="takeInImage" className='h-[45%] w-[45%]'/>
        <span className="font-fontBold text-white text-[1.2vw]">Sur Place</span>

    </div>
    <div onClick={()=>handelCLick('emporte')} className="flex  items-center cursor-pointer flex-col justify-center gap-3  w-[200px] h-[200px]   rounded-lg "
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
  )
}

export default OptionsCards
