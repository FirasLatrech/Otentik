import React from "react";
import logo from "@/../public/images/logo.png";
import profileIcon from "@/../public/images/header/profileIcon.svg";
import takeInImage from "@/../public/images/order/takeinblack.svg";
import bgGreen from "@/../public/images/order/dots-green.png";
import bgRed from "@/../public/images/order/dots-pink.png";
import takeOutImage from "@/../public/images/order/takeoutblack.svg";
import arrowLeft from "@/../public/images/header/arrowLeft.svg";
import arrowRghit from "@/../public/images/header/arrow-left.svg";

import Image from "next/image";
import { useUser } from "@supabase/auth-helpers-react";
import Header from "./component/header";
import Link from "next/link";
import OptionsCards from "./component/OptionsCards";
import ResturantDetailsCard from "./component/ResturantDetailsCard";

export default function Page({ params }: { params: { orederId: string } }) {
    console.log(params, "params");
    // const handelClick=()=>{
    //     console.log('kdkskd')
    // }
    // onClick={()=>console.log('dksksd')}
    return (
        <div className="flex flex-col   ">
            {/* TODO MOVE TO COMPONENT */}

            <Header />
            <div className=" flex items-center justify-center flex-col gap-10 w-full h-full pt-20">
                <ResturantDetailsCard resturnatId={params?.orederId} />
                <div className="flex flex-col items-center  justify-center  pb-10">
                    <div className="text-[2.5vw] font-fontBold ">
                        Choisis ton
                    </div>
                    <div className="text-[4vw] font-fontBold  bg-gradient-to-r from-blue-600 via-gray-500 to-slate-400  text-transparent bg-clip-text">
                        Type de commande
                    </div>
                </div>

                <OptionsCards />
            </div>
        </div>
    );
}
