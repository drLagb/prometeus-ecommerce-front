type correo = `${string}@${string}`;

export interface Product{
    nombre:string,
    cantidad:number,
    precio:number,
    id:number,
    descripcion:string
}

export interface User{
    id:number,
    direccion:string,
    cedula:number,
    nombre:string,
    telefono:number,
    email:string,
    contraseña:correo
}

export interface TypeImage{
    id:number,
    tipo:string
}

export interface Image{
    id:number,
    nombre:string,
    URL:string,
    ancho:number,
    alto:number,
    tipo:TypeImage,
    producto?:number,
    usuario?:number
}