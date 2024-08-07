"use client"
import Image from 'next/image'
import React from 'react'
import logo from '@/../public/images/logo.png'
import arrowLeft from '@/../public/images/header/arrowLeft.svg'
import { useRouter } from 'next/navigation'
export default function ResturantCard() {
    const router = useRouter()
    const handelNavigate=()=>{
        console.log('dsds')
        router.push('order/15')
    }
  return (
    <div className='bg-white w-[50%] h-[30vh] rounded-xl shadow-xl cursor-pointer overflow-hidden ' >
    <div className='w-full border-b h-[70px] flex items-center justify-between gap-[10px] p-2  '>
    <div className='flex w-full gap-2' onClick={handelNavigate}>
    <Image src={logo} alt="otentik Logo" height={33} width={33} className='flex w-[33px] h-[33px] object-cover  items-start justify-start' />
   <div>
   <span className=' font-fontBold text-[16px]'> Otentik Niort</span>
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

    <div className='p-4'>
    <Image src={arrowLeft} alt='arrowLeft'   />
    </div>
    </div>

</div>
  )
}
