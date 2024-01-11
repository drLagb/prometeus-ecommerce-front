import { useEffect, useRef, useState } from "react"
import { User } from "../all"

interface secureUserInfo{
    id:number,
    nombre:string,
}

const EXAMPLE:secureUserInfo = {
    id:0,
    nombre:"pepito"
}

const Users:Array<User> = [
    {
        id:0,
        direccion:"calle 9",
        nombre:"Rubiu",
        cedula:1004685950,
        telefono:3017222568,
        email:"rani@gmail.com",
        contraseña:"pepe"
    },
    {
        id:1,
        direccion:"calle 9",
        nombre:"Ana Rodríguez",
        cedula:1004685950,
        telefono:3017222568,
        email:"rani@gmail.com",
        contraseña:"pepe"
    },{
        id:2,
        direccion:"calle 9",
        nombre:"Luis García",
        cedula:1004685950,
        telefono:3017222568,
        email:"rani@gmail.com",
        contraseña:"pepe"
    },{
        id:3,
        direccion:"calle 9",
        nombre:"Laura Martínez",
        cedula:1004685950,
        telefono:3017222568,
        email:"rani@gmail.com",
        contraseña:"pepe"
    },{
        id:4,
        direccion:"calle 9",
        nombre:"Pedro Sánchez",
        cedula:1004685950,
        telefono:3017222568,
        email:"rani@gmail.com",
        contraseña:"pepe"
    },{
        id:5,
        direccion:"calle 9",
        nombre:"Marta López",
        cedula:1004685950,
        telefono:3017222568,
        email:"rani@gmail.com",
        contraseña:"pepe"
    },{
        id:6,
        direccion:"calle 9",
        nombre:"Alejandro Fernández",
        cedula:1004685950,
        telefono:3017222568,
        email:"rani@gmail.com",
        contraseña:"pepe"
    },{
        id:7,
        direccion:"calle 9",
        nombre:"Isabel González",
        cedula:1004685950,
        telefono:3017222568,
        email:"rani@gmail.com",
        contraseña:"pepe"
    },{
        id:8,
        direccion:"calle 9",
        nombre:"Juan Ruiz",
        cedula:1004685950,
        telefono:3017222568,
        email:"rani@gmail.com",
        contraseña:"pepe"
    },{
        id:9,
        direccion:"calle 9",
        nombre:"Elena Navarro",
        cedula:1004685950,
        telefono:3017222568,
        email:"rani@gmail.com",
        contraseña:"pepe"
    },{
        id:10,
        direccion:"calle 9",
        nombre:"Roberto López",
        cedula:1004685950,
        telefono:3017222568,
        email:"rani@gmail.com",
        contraseña:"pepe"
    },{
        id:11,
        direccion:"calle 9",
        nombre:"María García",
        cedula:1004685950,
        telefono:3017222568,
        email:"rani@gmail.com",
        contraseña:"pepe"
    },

]

export function useAdminUser({id, email, cedula}:any){
    const [getData, setData] = useState(Users[0]);
    const [getInfo, setInfo] = useState({id, email, cedula});
    useEffect(()=>{
        let user = Users.findIndex((item)=>(
            (item.cedula === cedula || !cedula) &&
            (item.id === id || !id) &&
            (item.email === email || !email)
            )
        );
        setData(Users[user]);
    }, [getInfo]);
    return{
        getUser:getData,
        setUser:setInfo
    }
}

export function useUser({id}:any){
    const [getData, setData] = useState(EXAMPLE);
    const [getId, setId] = useState(id);
    useEffect(()=>{
        let user = Users.findIndex((item)=>item.id === id);
        let secureInfo:secureUserInfo = {
            id:Users[user].id,
            nombre:Users[user].nombre
        }
        setData(secureInfo);
    }, [getId]);
    return{
        getUser:getData,
        setUser:setId
    }
}

export function useVerifictionUser({email, contraseña}:any){
    const [getInfo, setInfo] = useState({email, contraseña});
    const {getUser, setUser} = useAdminUser({email});
    const resultado = useRef(false);
    useEffect(()=>{
        setUser(user =>{
            user.email = email;
            return user;
        });
        resultado.current = getUser === contraseña;
    }, [getInfo]);
    return {
        getVerification:resultado.current,
        setVerification:setInfo
    }
}