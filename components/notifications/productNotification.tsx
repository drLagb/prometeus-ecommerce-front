"use client"
import { Product } from "@/hooks/all";
import useImage from "@/hooks/feching/useImage";
import useProduct from "@/hooks/feching/useProduct";
import useProductLink from "@/hooks/product/useProductLink";
import Link from "next/link";
import ArrowDonwIcon from "../icons/arrowDownIcon/arrowDownIcon";
import { usechronometer } from "@/hooks/utilities";

interface promp{
    className:string,
    sonsClassName:string,
    productId:number,
    time:number
}

export function ProductNotificationLoading(){
    return(
        <li className="list-none w-full md:w-pc-screen-mv h-mv-icon-l md:h-pc-icon-l bg-backgroundColor rounded-2xl" role="listitem">
            <div className="w-full h-mv-icon-l md:h-pc-icon-l flex items-center">
                <div className="flex basis-full" role="separator">
                    <div className="basis-1/6 flex justify-center items-center" role="separator">
                        <div className="rounded-full w-mv-icon-m h-mv-icon-m md:w-pc-icon-m md:h-pc-icon-m overflow-hidden bg-altBAckgroundColor animate-pulse duration-2000" role="none">
                        </div>
                    </div>
                    <div className="basis-5/6 px-2" role="separator">
                        <div className="w-[49vw] h-[3vh] sm:h-[5vh] md:w-[16.5vw] md:h-[3vh] bg-mainColor rounded-xl animate-pulse delay-2000 duration-2000">
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export function ProductNotification({className, sonsClassName, productId, time}:promp){
    const {getProduct} = useProduct({productId});
    const {getImage} = useImage({producto:getProduct});
    const {getHours, getMinutes} = usechronometer(time);
    const URL = useProductLink(getProduct);
    let hours = getHours();
    let minutes = getMinutes();
    return(
        <li className={"list-none " + "w-full md:w-pc-screen-mv h-mv-icon-l md:h-pc-icon-l bg-backgroundColor rounded-2xl"} role="listitem">
            <Link href={URL} className="w-full h-mv-icon-l md:h-pc-icon-l flex items-center" role="link">
                <div className="flex basis-full" role="separator">
                    <div className="basis-1/6 flex justify-center items-center" role="separator">
                        <div className="rounded-full w-mv-icon-m h-mv-icon-m md:w-pc-icon-m md:h-pc-icon-m overflow-hidden" role="none">
                            <img className="w-full" src={getImage.URL} alt={getImage.nombre} loading="lazy"/>
                        </div>
                    </div>
                    <div className="basis-5/6 flex justify-center items-center px-2" role="separator">
                        <div className="basis-1/2" role="separator">
                            <h4 className="text-mainColor pb-2" role="presentation">{getProduct.nombre}</h4>
                            <div className="flex items-center justify-between p-8 pb-0 py-0" role="separator">
                                <p role="presentation">${getProduct.precio}</p>
                                <ArrowDonwIcon className="basis-1/12" sonsClassNames={[]}/>
                            </div>
                        </div>
                        <div className="basis-1/2 flex items-center justify-end pr-5">
                            <p>{(hours > 1)?`${Math.floor(hours)} h `:""}{(minutes > 0)?`${Math.ceil(minutes)} min`:""}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    );
}