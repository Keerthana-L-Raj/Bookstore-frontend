import React from 'react'
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, SidebarLogo } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import {
  Avatar,
} from "flowbite-react";
import { GiBookshelf } from "react-icons/gi";
import { TbHomeFilled } from "react-icons/tb";
import { RiSettings2Fill } from "react-icons/ri";
import { IoBagHandleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

function AdminSidebar() {
  return (
    <div>
       <Sidebar aria-label="Sidebar with logo branding example" className='!bg-amber-300'>
      {/* <SidebarLogo href="#" img="/favicon.svg" imgAlt="Flowbite logo">
        Flowbite
      </SidebarLogo> */}
      <div className='pt-50'>
        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded size='xl'/>
      </div>
      <SidebarItems className='pt-10 pb-40'>
        <SidebarItemGroup className='ps-15'>
         <div className='flex' onClick={()=>window.location.href='/admin-home'}>
      <input type="radio" id='home' name='filter' className='mb-4 me-1 mt-1' />
      <label htmlFor="" className='flex'><TbHomeFilled className='me-1'/>Home</label>
    </div>
    <div className='flex' onClick={()=>window.location.href='/admin-books'}>
      <input type="radio" id='allbooks' name='filter' className='mb-4 me-1 mt-1' />    
      <label htmlFor="" className='flex'><GiBookshelf className='me-1'/>All Books</label>
    </div>
    <div className='flex' onClick={()=>window.location.href='/admin-careers'}>
      <input type="radio" id='careers' name='filter' className='mb-4 me-1 mt-1' />
      <label htmlFor="" className='flex'><IoBagHandleSharp className='me-1'/>Careers</label>
    </div>
    <div className='flex' onClick={()=>window.location.href='/admin-settings'}>
      <input type="radio" id='settings' name='filter' className='mb-4 me-1 mt-1.5' />
      <label htmlFor="" className='flex'><RiSettings2Fill className='me-1 mt-1'/>Settings</label>
    </div>
         
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
    </div>
  )
}

export default AdminSidebar
