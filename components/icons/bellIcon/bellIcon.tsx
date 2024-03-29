"use client"
import { FaBell } from "react-icons/fa";
import useIcon from "@/hooks/icon/useIcon";
import { LinkProps } from "../icon.dto";

interface BellProps extends LinkProps{
    notificaciones:number
}

function IconAnimation({className, estado, activar}:any){
    function handleClick(e:Event){
        e.preventDefault();
        activar();
    }
    const color = (estado)?"text-secondaryColor ":"text-altBAckgroundColor ";
    return(
        <FaBell className={color + 
            "text-mv-icon-m md:text-pc-icon-m " +
            "absolute top-0 bottom-0 right-0 left-0  m-auto z-0 " +
            "transition-all "
            + " " + className}
            onClick={handleClick} 
            title="notificaciones"
            role="button"/>
        );
    
}

export default function BellIcon({className, sonsClassNames, activo, notificaciones}:BellProps){
    let inicio:boolean = activo;
    const {estado, activar} = useIcon(()=>{}, ()=>{}, inicio);
    let numeroNotificacion = 20;
    const AFTER = (!estado)?`after:content-['${notificaciones.toString()}'] after:absolute after:w-10 after:h-6 after:bg-secondaryColor after:rounded-xl ` +
    "after:bg-center after:top-10 after:left-10 after:right-0 after:bottom-0 ":"";
    const EXTRACLASSNAME = (className)?className:"";
    const EXTRA1 = (sonsClassNames.length > 1)?sonsClassNames[0]:"";
    return(
    <div className={"text-white text-center " + 
        "relative w-20 h-20 block "  +
        "after:animate-in after:zoom-in duration-1000 " +
        AFTER +
        + " " + EXTRACLASSNAME}
        aria-label="notificaciones"
        role="button">
        <IconAnimation className={EXTRA1} estado={estado} activar={activar}/>
    </div>
    );
}