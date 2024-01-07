import { IoArrowDown } from "react-icons/io5";
import { Props } from "../icon.dto";


function IconAnimation({className}:any){
    return(
        <IoArrowDown className={"text-verdeColor cursor-default " + 
            "text-mv-icon-s md:text-pc-icon-s " +
            "absolute top-0 bottom-0 right-0 left-0  m-auto z-0 " +
            "animate-in fade-in duration-700 "
            + " " + className}
            title="bajo"/>
        );
    
}

export default function ArrowDownIcon({className, sonsClassNames}:Props){
    const EXTRACLASSNAME = (className)?className:"";
    const EXTRA1 = (sonsClassNames.length > 1)?sonsClassNames[0]:"";
    return(
    <div className={" " + 
        "relative w-20 h-20" 
        + " " + EXTRACLASSNAME}
        aria-label="bajo">
        <IconAnimation className={EXTRA1} />
    </div>
    );
}