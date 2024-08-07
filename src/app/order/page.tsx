import React from 'react'
import logo from '@/../public/images/logo.png'
import profileIcon from '@/../public/images/header/profileIcon.svg'
import arrowLeft from '@/../public/images/header/arrowLeft.svg'

import Image from 'next/image'
import { useUser } from '@supabase/auth-helpers-react'
import ResturantCard from './component/resturantCard'

export default function Page() {

    // const handelClick=()=>{
    //     console.log('kdkskd')
    // }
    // onClick={()=>console.log('dksksd')}
  return (
    <div className='flex flex-col w-full h-full'>
      {/* TODO MOVE TO COMPONENT */}
       <div className='w-full flex items-center h-[70px] bg-white border-b relative pr-4'>
        <div className='w-full flex items-center gap-[10px] justify-start pl-6'>
          <Image src={logo} alt="otentik Logo" className='cursor-pointer' height={49} width={49} />
          <span className="text-[1.5vw] font-mono cursor-pointer">Otentik </span>
        </div>
        <button
              className="flex  max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#EEEEEE] text-black gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
            >
              <div className="text-black" data-icon="Globe" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"
                  ></path>
                </svg>
              </div>
            </button>
                      </div>

      <div className=' flex items-center justify-center flex-col w-full h-full'>

        <div className='flex flex-col items-center  justify-center  pb-10'>
          <div className="text-[2.5vw] font-fontBold ">Choose your</div>
          <div className="text-[4vw] font-fontBold  bg-gradient-to-r from-blue-600 via-gray-500 to-slate-400  text-transparent bg-clip-text">Restaurant</div>
        </div>
       <ResturantCard/>
      </div>
    </div>
  )
}
