import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { RiLoginCircleLine } from "react-icons/ri";
function AdminHeader() {
  return (
    <div>
        <Navbar fluid rounded className='!bg-amber-950 fixed top-0 left-0 right-0'>
      <NavbarBrand href="https://flowbite-react.com">
        <img src="https://cdn.pixabay.com/photo/2018/04/24/11/32/book-3346785_1280.png" className="mr-3 h-6 sm:h-9" alt="ReadCoats logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-amber-100">ReadCoats</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button className='p-5 text-xl !bg-amber-200 text-dark'>Login<RiLoginCircleLine className='font-semibold ms-2' /></Button>
        <NavbarToggle />
      </div>
      {/* <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse> */}
    </Navbar>

    <marquee direction='left' className="mt-14 !bg-amber-100 p-3 fixed top-0">
      Welcome, Admin! You're all set to manage and monitor the system . Let's go to work! </marquee> 
    </div>
  )
}

export default AdminHeader
