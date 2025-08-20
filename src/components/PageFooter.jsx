import React from 'react'
import { Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
function PageFooter() {
  return (
    <div>
    <Footer className='!bg-amber-900'>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <FooterTitle className='!text-amber-100' title="Company" />
            <FooterLinkGroup col className='!text-amber-100'>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Brand Center</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle className='!text-amber-100' title="help center" />
            <FooterLinkGroup className='!text-amber-100' col>
              <FooterLink href="#">Discord Server</FooterLink>
              <FooterLink href="#">Twitter</FooterLink>
              <FooterLink href="#">Facebook</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle className='!text-amber-100' title="legal" />
            <FooterLinkGroup className='!text-amber-100' col>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Licensing</FooterLink>
              <FooterLink href="#">Terms &amp; Conditions</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle className='!text-amber-100' title="download" />
            <FooterLinkGroup className='!text-amber-100' col>
              <FooterLink href="#">iOS</FooterLink>
              <FooterLink href="#">Android</FooterLink>
              <FooterLink href="#">Windows</FooterLink>
              <FooterLink href="#">MacOS</FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
        <div className="w-full bg-amber-950 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <FooterCopyright className='!text-amber-100' href="#" by="BookCoats™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon className='!text-amber-100' href="#" icon={BsFacebook} />
            <FooterIcon className='!text-amber-100' href="#" icon={BsInstagram} />
            <FooterIcon className='!text-amber-100' href="#" icon={BsTwitter} />
            <FooterIcon className='!text-amber-100' href="#" icon={BsGithub} />
            <FooterIcon className='!text-amber-100' href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>  
    </div>
  )
}

export default PageFooter
