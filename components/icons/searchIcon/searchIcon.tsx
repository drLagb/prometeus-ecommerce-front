"use client"
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import useIcon from "@/hooks/icon/useIcon";
import { LinkProps } from "../icon.dto";

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
    const color = (estado)?"text-secondaryColor ":"text-altBAckgroundColor ";
    return(
        <IoIosSearch className={color + 
            "text-mv-icon-m md:text-pc-icon-m " +
            "md:hover:text-pc-icon-l  md:transition-all " +
            "absolute top-0 bottom-0 right-0 left-0  m-auto z-0 " +
            "animate-in fade-in duration-700 "
            + " " + className}
            onClick={handleClick} 
            title="buscar"
            role="button"/>
        );
    
}

export default function SearchIcon({className, sonsClassNames, link}:LinkProps){
    const EXTRACLASSNAME = (className)?className:"";
    const EXTRA1 = (sonsClassNames.length > 1)?sonsClassNames[0]:"";
    return(
    <Link href={link} className={"" +
        "relative w-20 h-20" 
        + " " + EXTRACLASSNAME}
        aria-label="buscar"
        role="button">
        <IconAnimation className={EXTRA1} />
    </Link>
    );
}