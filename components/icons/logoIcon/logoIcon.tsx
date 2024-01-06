import { Props } from "../icon.dto";
import Image from "next/image";


function IconAnimation({className}:any){
    return(
        <Image src="/logo.webp" alt="Prometeus logo"
            width={100} height={100}
            priority={true}
            className={
                "absolute top-0 right-0 bottom-0 left-0 m-auto"
                + " " + className
            }/>
        );
    
}

export default function LogoIcon({className, sonsClassNames}:Props){
    const EXTRACLASSNAME = (className)?className:"";
    const EXTRA1 = (sonsClassNames.length > 1)?sonsClassNames[0]:"";
    return(
    <div className={""" " + 
        "relative w-20 h-20" 
        + " " + EXTRACLASSNAME}
        aria-label="logo">
        <IconAnimation className={EXTRA1} />
    </div>
    );
}