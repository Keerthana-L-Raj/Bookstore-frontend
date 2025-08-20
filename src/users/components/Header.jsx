import React, { useEffect, useState } from 'react';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Button, Dropdown, DropdownItem } from "flowbite-react";
import { Link } from 'react-router-dom';
import { IoMdLogIn } from "react-icons/io";
//import { Dropdown, DropdownItem } from "flowbite-react";

function Header() {
  const [token, setToken] = useState("");
  const [userImage, setUserImage] = useState("");

  useEffect(() => {
    let usertoken = sessionStorage.getItem("token");
    let userImg = sessionStorage.getItem("userImage");

    if (usertoken) {
      setToken(usertoken);
      setUserImage(userImg);
    }
  }, []);

  const serverURL = "http://localhost:4000"; // Replace with your server URL

  return (
    <div>
      <Navbar fluid rounded className='!bg-amber-950 fixed top-0 left-0 right-0'>
        <NavbarBrand href="/">
          <img
            src="https://cdn.pixabay.com/photo/2018/04/24/11/32/book-3346785_1280.png"
            className="mr-3 h-6 sm:h-9"
            alt="InkByte Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold !text-amber-100 dark:text-white">ReadCoats</span>
        </NavbarBrand>

        <div className="flex md:order-2">
          {token ? (
            <Dropdown
              inline
              label={
                <div className="p-[2px] bg-brown-600 rounded-full hover:bg-brown-700 transition duration-200">
                  <img
                    src={
                      !userImage
                        ? "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        : userImage.startsWith("https://lh3.googleusercontent.com")
                          ? userImage
                          : `${serverURL}/upload/${userImage}`
                    }
                    alt="user icon"
                    referrerPolicy='no-referrer'
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
              }
            >
              <Link to="/profile">
                <DropdownItem>Profile</DropdownItem>
              </Link>
              <DropdownItem onClick={() => {
                sessionStorage.clear();
                setToken("");
              }}>
                Log out
              </DropdownItem>
            </Dropdown>
          ) : (
            <Link to="/login">
              <Button className='p-5 text-xl !bg-amber-100 text-amber-950'>
                Login <IoMdLogIn className='text-4xl ms-3' />
              </Button>
            </Link>
          )}
          <NavbarToggle />
        </div>

        <NavbarCollapse>
          <NavbarLink as={Link} to="/" className='!text-amber-100' active>
            Home
          </NavbarLink>
          <NavbarLink as={Link} to="/allbooks" className='!text-amber-100'>
            Books
          </NavbarLink>
          <NavbarLink as={Link} to="/Careers" className='!text-amber-100'>
            Careers
          </NavbarLink>
          <NavbarLink as={Link} to="/contact" className='!text-amber-100'>
            Contact
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}

export default Header;
