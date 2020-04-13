import React from 'react'
import Link from 'next/link'

export const MenuList = () => (
    <ul className="header__menu">
      <li><Link href={"/"}><a>Inicio</a></Link></li>
      <li><Link href={"/servicios"}><a>Servicios</a></Link></li>
      <li><Link href={"/productos"}><a>Productos</a></Link></li>
      <li><Link href={"/blog"}><a>Blog</a></Link></li>
      <li><Link href={"contacto"}><a>Contacto</a></Link></li>
    </ul>
)