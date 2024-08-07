"use client"
import Image from 'next/image'
import React from 'react'
import logo from '@/../public/images/logo.png'
import arrowLeft from '@/../public/images/header/arrowLeft.svg'
import { useRouter } from 'next/navigation'
import { getResturant } from '@/app/api/resturnat'
interface WorkTime {
    start: string;
    end: string;
  }

  interface Restaurant {
    id: number;
    created_at: string;
    name: string;
    logo: string;
    position: string;
    work_time: WorkTime[];
  }
export default  function ResturantCard({data} :{data :Restaurant[]}) {
    console.log(data)
    const router = useRouter()
    const handelNavigate=()=>{
        console.log('dsds')
        router.push('order/15')
    }
    function isRestaurantOpen(work_time: WorkTime[]): { isOpen: boolean, nextOpenTime?: string, nextCloseTime?: string } {
        const now = new Date();
        const currentDay = now.getDay(); // Sunday - Saturday : 0 - 6
        const currentTime = now.toTimeString().substring(0, 5); // HH:MM format

        const todaysWorkTime = work_time[currentDay];
        if (!todaysWorkTime) {
          return { isOpen: false };
        }

        const { start, end } = todaysWorkTime;

        if (currentTime >= start && currentTime <= end) {
          return { isOpen: true, nextCloseTime: end };
        }

        // Find the next opening time
        for (let i = 1; i <= 7; i++) {
          const nextDay = (currentDay + i) % 7;
          const nextWorkTime = work_time[nextDay];
          if (nextWorkTime) {
            return { isOpen: false, nextOpenTime: nextWorkTime.start };
          }
        }

        return { isOpen: false };
      }
  return (
    <div className='bg-white w-[50%] h-[30vh] rounded-xl shadow-xl cursor-pointer overflow-hidden ' >
        {data?.map((item)=>{
            console.log(item)
            console.log(isRestaurantOpen(item?.work_time))
            const time=isRestaurantOpen(item?.work_time)
            // const isOpen
            return (
<div className='w-full border-b h-[70px] flex items-center justify-between gap-[10px] p-2  '>
    <div className='flex w-full gap-2' onClick={handelNavigate}>
    <Image src={item?.logo} alt="otentik Logo" height={33} width={33} className='flex w-[33px] h-[33px] object-cover  items-start justify-start' />
   <div>
   <span className=' font-fontBold text-[16px]'> {item?.name}</span>
        <div className='flex gap-2'>
            <div className='flex items-center gap-1'>
            <div className={`${time?.isOpen ? "bg-[rgb(153,_214,_65)]" : "bg-[rgb(240,_62,_81)]"} rounded-[10px] h-[5px] w-[5px]`}></div>
           <span className={`${time?.isOpen ? "text-[rgb(153,_214,_65)]" : "text-[rgb(240,_62,_81)]"}`}>
            {time.isOpen ? "Ouvert" :"Fermé"}
           </span>
            </div>
            <span>{time?.isOpen ? `Jusqu'a ${time?.nextCloseTime}` :`Jusqu'a ${time?.nextOpenTime}`}</span>
            </div>
   </div>

    </div>

    <div className='p-4'>
    <Image src={arrowLeft} alt='arrowLeft'   />
    </div>
    </div>
            )
        })}

</div>
  )
}
