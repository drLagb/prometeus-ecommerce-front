"use client"
import HomeIcon from "../icons/homeIcon/homeIcon";
import UserIcon from "../icons/userIcon/userIcon";
import ImageIcon from "../icons/imageIcon/imageIcon";
import SearchIcon from "../icons/searchIcon/searchIcon";
import BellIcon from "../icons/bellIcon/bellIcon";
import LogoIcon from "../icons/logoIcon/logoIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {v4} from "uuid";

interface NavBarPromp{
    className:string,
    sonsClassNames:Array<string>
}

const RUTAS = [
    {
        icon:HomeIcon,
        link:"/",
        text:"Inicio"
    },
    {
        icon:ImageIcon,
        link:"/imagenes",
        text:"Imagenes"
    },
    {
        icon:SearchIcon,
        link:"/buscar",
        text:"Buscar"
    },
    {
        icon:UserIcon,
        link:"/usuario",
        text:"Usuario"
    },
]

export function NavBar({className, sonsClassNames}:NavBarPromp){
    const path = usePathname();
    let first = (sonsClassNames.length >= 1)?sonsClassNames[0]:"";
    let second = (sonsClassNames.length >= 2)?sonsClassNames[1]:"";
    let thrid = (sonsClassNames.length >= 3)?sonsClassNames[2]:"";
    let fourth = (sonsClassNames.length >= 4)?sonsClassNames[3]:"";
    return(
    <nav className={`w-full bg-mainColor ${className}`}>
        <ul className={`list-none flex w-full md:w-["25vw"] justify-center ${first}`}>
            {RUTAS.map((item)=>{
                let activo = (path === item.link);
                let textColor = (activo)?"text-secondaryColor":"text-backgroundColor";
                return(
                    <li key={v4()} className={`flex justify-center w-full ${second}`}>
                        <Link href={item.link} className={
                            `flex items-center justify-center md:w-full ${thrid}`
                        }>
                            <item.icon className={(sonsClassNames.length > 0)?sonsClassNames[0]:"" + " " + fourth} sonsClassNames={[]} activo={activo}/>
                            <span className={`${textColor} hidden md:inline basis-7/12 ${fourth}`}>{item.text}</span>
                        </Link>
                    </li>
                );
            })}
        </ul>
    </nav>
    );
}

export function Header(){
    return(
        <header className={"bg-mainColor " +
            "w-full md:w-[23vw] md:h-[100vh] md:p-14 md:px-0 md:pr-0 " +
            "flex flex-col justify-around"}>
            <div className="flex justify-between px-10 pr-10">
                <LogoIcon className="" sonsClassNames={[]} />
                <BellIcon activo={false} className="" sonsClassNames={[]} notificaciones={20} />
            </div>
            <NavBar className="hidden md:inline" sonsClassNames={["flex-col "]}/>
        </header>
    );
}

export function Footer(){
    return(
        <footer  className="absolute w-full bottom-0 left-0 right-0">
            <NavBar className="md:hidden" sonsClassNames={[]}/>
        </footer>
    );
}