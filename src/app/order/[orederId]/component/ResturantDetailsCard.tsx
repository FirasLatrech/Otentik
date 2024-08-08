import Image from "next/image";
import React from "react";
import logo from "@/../public/images/logo.png";
import { getResturantById } from "@/app/api/resturnat";
import { restaurantOpen } from "@/utils/returantTime";
async function ResturantDetailsCard({ resturnatId }: { resturnatId: string }) {
    console.log(resturnatId);
    const resturantDetails = await getResturantById(resturnatId);
    console.log(resturantDetails, "getResturantById");
    const data = resturantDetails?.[0];
    console.log(data);

    const time = restaurantOpen(data?.work_time);
    console.log(time);
    return (
        <div className="bg-white w-[30vw] h-[15vh] rounded-xl shadow-xl cursor-pointer overflow-hidden ">
            <div className="w-full h-full  flex items-center justify-between gap-[10px] p-4 ">
                <div className="flex w-full h-full gap-2">
                    <Image
                        src={data?.logo}
                        alt="otentik Logo"
                        height={33}
                        width={33}
                        className="flex w-[33px] h-[33px] object-cover  items-start justify-start"
                    />
                    <div className="flex flex-col h-full justify-between pt-2">
                        <span className=" font-fontBold text-[16px ]">
                            {" "}
                            {data?.name}
                        </span>
                        <div className="flex flex-col gap-1 text-[15px]">
                            <span>{data?.position}</span>
                        </div>
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
            </div>
        </div>
    );
}

export default ResturantDetailsCard;
