"use client"
import { IoPaperPlaneOutline } from "react-icons/io5";
import useIcon from "@/hooks/icon/useIcon";
import { LinkProps } from "../icon.dto";

function activo(){
    console.log("enviando datos a la base de datos");
}

function desactivo(){
    console.log("enviando datos a la base de datos");
}

function IconAnimation({className, inicio}:any){
    const {activar} = useIcon(activo, desactivo, inicio);
    function handleClick(e:Event){
        e.preventDefault();
        activar();
    }
    return(
    <IoPaperPlaneOutline  className={"text-black opacity-80 " + 
        "text-mv-icon-m md:text-pc-icon-m " +
        "md:hover:opacity-100 md:transition-all " +
        "absolute top-0 bottom-0 right-0 left-0  m-auto z-10 " +
        + " " + className}
        onClick={handleClick}
        title="compartir"
        role="button"/>
    );
    
}

export default function ShareIcon({className, sonsClassNames, activo}:LinkProps){
    const EXTRACLASSNAME = (className)?className:"";
    const EXTRA1 = (sonsClassNames.length > 1)?sonsClassNames[0]:"";
    return(
    <div className={"" +
        "relative w-20 h-20 block" 
        + " " + EXTRACLASSNAME}
        aria-label="compartir"
        role="button">
        <IconAnimation className={EXTRA1} inicio={activo}/>
    </div>
    );
}