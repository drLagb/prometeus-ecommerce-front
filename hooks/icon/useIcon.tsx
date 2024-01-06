import { useState, useEffect, useRef } from "react";
export default function useIcon(activo:Function, desactivo:Function){
    const fisrt = useRef(false);
    const [activate, setActivate] = useState(false);
    function cambiarEstado(){
        setActivate(estate => !estate);
    }
    useEffect(()=>{
        if(!fisrt.current){
            fisrt.current = true;
            return;
        }
        if(activate){
            activo();
            return;
        }
        desactivo();
    }, [activate]);
    return {
        activar:cambiarEstado,
        estado:activate
    }
}