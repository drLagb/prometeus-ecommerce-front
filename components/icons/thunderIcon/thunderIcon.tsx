import { AiFillThunderbolt } from "react-icons/ai";
import { Props } from "../icon.dto";

function IconAnimation({ className }: any) {
  return (
    <AiFillThunderbolt
      className={
        "text-verdeColor cursor-default " +
        "text-mv-icon-s md:text-pc-icon-s " +
        "absolute top-0 bottom-0 right-0 left-0  m-auto z-0 " +
        "animate-in fade-in duration-700 " +
        " " +
        className
      }
      title="oferta"
    />
  );
}

export default function ThunderIcon({className, sonsClassNames}:Props){
    const EXTRACLASSNAME = (className)?className:"";
    const EXTRA1 = (sonsClassNames.length > 1)?sonsClassNames[0]:"";
    return(
    <div className={"" +
        "relative w-20 h-20 block" 
        + " " + EXTRACLASSNAME}
        aria-label="oferta">
        <IconAnimation className={EXTRA1} />
    </div>
  );
}
