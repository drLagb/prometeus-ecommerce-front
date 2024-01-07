"use client"
import useIcon from "@/hooks/icon/useIcon";
import { IoArrowForwardCircle } from "react-icons/io5";
import { Props } from "../icon.dto";


function IconAnimation({className}:any){
    const {estado, activar} = useIcon(()=>{}, ()=>{});
    function handleClick(e:Event){
        e.preventDefault();
        activar();
    }
    return(
        <IoArrowForwardCircle className={"text-backgroundColor " + 
            "text-mv-icon-m md:text-pc-icon-m " +
            "absolute top-0 bottom-0 right-0 left-0  m-auto z-0 " +
            "opacity-100 md:opacity-80 md:hover:opacity-100 " + 
            "active:text-secondaryColor transition-all"
            + " " + className}
            title="siguiente"
            onClick={handleClick}/>
        );
    
}

export default function ArrowRightIcon({className, sonsClassNames}:Props){
    const EXTRACLASSNAME = (className)?className:"";
    const EXTRA1 = (sonsClassNames.length > 1)?sonsClassNames[0]:"";
    return(
    <div className={ 
        "relative w-20 h-20" 
        + " " + EXTRACLASSNAME}
        aria-label="siguiente"
        role="button">
        <IconAnimation className={EXTRA1} />
    </div>
    );
}