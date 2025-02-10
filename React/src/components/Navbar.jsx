import React from 'react'
import { Link } from 'react-router-dom'

const NavbarMenu = [

    {id: 1, title:'Home', link:"/"},
    {id: 2, title:'Produtos', link:"/produtos"},
    {id: 3, title:'Contato', link:"/contato"}

]

const Navbar = () => {
  return (

    <>
    <ul className='flex gap-10'>
    {NavbarMenu.map((menu)=>(
        <li key={(menu.id)}>
            <Link to={menu.link}>{menu.title}</Link>
        </li>
    ))}
    </ul>
   
    </>
  )
}

export default Navbar