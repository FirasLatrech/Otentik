"use client";
import Image from "next/image";
import React from "react";
import logo from "@/../public/images/logo.png";
import arrowLeft from "@/../public/images/header/arrowLeft.svg";
import { useRouter } from "next/navigation";
import { getResturant } from "@/app/api/resturnat";
import { restaurantOpen } from "@/utils/returantTime";
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
export default function ResturantCard({ data }: { data: Restaurant[] }) {
    console.log(data);
    const router = useRouter();
    const handelNavigate = (id: number) => {
        console.log("dsds");
        router.push(`order/${id}`);
    };

    return (
        <div className="bg-white w-[50%] h-[30vh] rounded-xl shadow-xl cursor-pointer overflow-hidden ">
            {data?.map((item) => {
                console.log(item);
                console.log(restaurantOpen(item?.work_time));
                const time = restaurantOpen(item?.work_time);
                // const isOpen
                return (
                    <div className="w-full border-b h-[70px] flex items-center justify-between gap-[10px] p-2  ">
                        <div
                            className="flex w-full gap-2"
                            onClick={() => handelNavigate(item?.id)}
                        >
                            <Image
                                src={item?.logo}
                                alt="otentik Logo"
                                height={33}
                                width={33}
                                className="flex w-[33px] h-[33px] object-cover  items-start justify-start"
                            />
                            <div>
                                <span className=" font-fontBold text-[16px]">
                                    {" "}
                                    {item?.name}
                                </span>
                                <div className="flex gap-2">
                                    <div className="flex items-center gap-1">
                                        <div
                                            className={`${
                                                time?.isOpen
                                                    ? "bg-[rgb(153,_214,_65)]"
                                                    : "bg-[rgb(240,_62,_81)]"
                                            } rounded-[10px] h-[5px] w-[5px]`}
                                        ></div>
                                        <span
                                            className={`${
                                                time?.isOpen
                                                    ? "text-[rgb(153,_214,_65)]"
                                                    : "text-[rgb(240,_62,_81)]"
                                            }`}
                                        >
                                            {time.isOpen ? "Ouvert" : "Fermé"}
                                        </span>
                                    </div>
                                    <span>
                                        {time?.isOpen
                                            ? `Jusqu'a ${time?.nextCloseTime}`
                                            : `Jusqu'a ${time?.nextOpenTime}`}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="p-4">
                            <Image src={arrowLeft} alt="arrowLeft" />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
