"use client"
import { FaUser } from "react-icons/fa";
import useIcon from "@/hooks/icon/useIcon";
import { LinkProps } from "../icon.dto";
import { act } from "react-dom/test-utils";

function activo(){
    console.log("enviando datos a la base de datos");
}

function desactivo(){
    console.log("enviando datos a la base de datos");
}

function IconAnimation({className, inicio}:any){
    const {estado} = useIcon(activo, desactivo, inicio=inicio);
    const color = (estado)?"text-secondaryColor ":"text-altBAckgroundColor ";
    return(
        <FaUser className={color + 
            "text-mv-icon-m md:text-pc-icon-m " +
            "md:hover:text-pc-icon-l  md:transition-all " +
            "absolute top-0 bottom-0 right-0 left-0  m-auto z-0 " +
            "animate-in fade-in duration-700 "
            + " " + className}
            title="cuenta"
            role="button"/>
        );
    
}

export default function UserIcon({className, sonsClassNames, activo}:LinkProps){
    const EXTRACLASSNAME = (className)?className:"";
    const EXTRA1 = (sonsClassNames.length > 1)?sonsClassNames[0]:"";
    return(
    <div className={"" +
        "relative w-20 h-20 block" 
        + " " + EXTRACLASSNAME}
        aria-label="cuenta"
        role="button">
        <IconAnimation className={EXTRA1} inicio={activo}/>
    </div>
    );
}