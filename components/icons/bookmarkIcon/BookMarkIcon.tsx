"use client"
import { IoBookmarkOutline } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";
import useIcon from "@/hooks/icon/useIcon";
import { Props } from "../icon.dto";

function activo(){
    console.log("enviando datos a la base de datos");
}

function desactivo(){
    console.log("enviando datos a la base de datos");
}

function IconAnimation({className}:any){
    const {estado, activar} = useIcon(activo, desactivo);
    function handleClick(e:Event){
        e.preventDefault();
        activar();
    }
    if(!estado){
        return(
        <IoBookmarkOutline className={"text-black opacity-80 " + 
            "text-mv-icon-m md:text-pc-icon-m " +
            "md:hover:opacity-100 md:transition-all " +
            "absolute top-0 bottom-0 right-0 left-0  m-auto z-0 " +
            + " " + className}
            onClick={handleClick} 
            title="guardar"
            role="button"/>
        );
    }
    return(
    <IoBookmark  className={"text-black opacity-80 " + 
        "text-mv-icon-m md:text-pc-icon-m " +
        "md:hover:opacity-100 md:transition-all " +
        "absolute top-0 bottom-0 right-0 left-0  m-auto z-10 " +
        + " " + className}
        onClick={handleClick}
        title="eliminar"
        role="button"/>
        );
    
}

export default function BookMarkIcon({className, sonsClassNames}:Props){
    const EXTRACLASSNAME = (className)?className:"";
    const EXTRA1 = (sonsClassNames.length > 1)?sonsClassNames[0]:"";
    return(
    <div className={"" +
        "relative w-20 h-20 block" 
        + " " + EXTRACLASSNAME}
        aria-label="guardar"
        role="button">
        <IconAnimation className={EXTRA1} />
    </div>
    );
}