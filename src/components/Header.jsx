import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import hamburger from '../assets/images/icon-hamburger.svg'
import close from '../assets/images/icon-close.svg'

function Header() {
  const [isDropDown, setIsDropDown] = useState(true);

  const toggle = () => {
    setIsDropDown(!isDropDown);
  };


  return (
    <header className='bg-hero-desktop sm:bg-hero-mobile bg-no-repeat bg-top bg-cover pb-[3rem] bg-black `} ' >
      <nav className='flex flex-row justify-between gap-[1rem] px-[5rem] py-[3rem] sm:px-[1rem] sm:py-[2rem]  md:px-[1rem] md:py-[2rem]  '>
        <img className='object-contain object-top pt-[1rem]' src={logo} alt="logo" />
        <img className={` hidden  object-contain object-top pt-[1.5rem] cursor-pointer ${isDropDown ? 'sm:inline-block md:inline-block' : 'sm:hidden md:hidden'}`} onClick={toggle} src={hamburger} alt="hamburger" />

        <ul className={` flex flex-row gap-[2rem] font-Alata text-White pt-[1rem] h-[1rem] sm:hidden md:hidden`}>
          <li className='cursor-pointer '><a href="#" className='hover:after:block hover:after:w-[50%] hover:after:h-[10px] hover:after:mx-auto   hover:after:content-[""] hover:after:border-b-[3px]'>About</a></li>
          <li className='cursor-pointer'><a href="#" className='hover:after:block hover:after:w-[50%] hover:after:h-[10px] hover:after:mx-auto   hover:after:content-[""] hover:after:border-b-[3px]'>Carees</a></li>
          <li className='cursor-pointer'><a href="#" className='hover:after:block hover:after:w-[50%] hover:after:h-[10px] hover:after:mx-auto   hover:after:content-[""] hover:after:border-b-[3px]'>Events</a></li>
          <li className='cursor-pointer'><a href="#" className='hover:after:block hover:after:w-[50%] hover:after:h-[10px] hover:after:mx-auto   hover:after:content-[""] hover:after:border-b-[3px]'>Products</a></li>
          <li className='cursor-pointer'><a href="#" className='hover:after:block hover:after:w-[50%] hover:after:h-[10px] hover:after:mx-auto   hover:after:content-[""] hover:after:border-b-[3px]'>Support</a></li>
        </ul>
      </nav>
      <div className='max-w-[35rem]  border-solid border-[3px] px-[2rem] py-[2rem] mt-[4rem] mx-[5rem] mb-[2rem] sm:px-[1rem] sm:py-[1rem] sm:my-[6rem] sm:mx-[1rem] md:px-[1rem] md:py-[1rem] md:my-[6rem] md:mx-[1rem] md:max-w-[25rem] '>
        <p className='font-JosefinSans text-White text-[4rem] font-light leading-none sm:text-[2.5rem] sm:leading-[3rem] md:text-[2.75rem] md:leading-[3rem] '>IMMERSIVE<br />EXPERIENCES<br />THAT DELIVER</p>
      </div>

      <div className={`bg-black ${isDropDown ? 'hidden' : 'inline-block'}   h-screen w-full  absolute z-20 top-0 pt-[3rem] px-[1rem]  `}>
        <div className='flex flex-row justify-between'>
        <img className='object-contain object-top ' src={logo} alt="logo" />
        <img className={`   object-contain object-top pt-[.5rem] cursor-pointer `} onClick={toggle} src={close} alt="close" />
        </div>
        <ul className={` flex flex-col gap-[1rem] font-JosefinSans text-White pt-[7rem] h-[1rem] text-[2rem] font-light `}>
          <li className='cursor-pointer '><a href="#" >ABOUT</a></li>
          <li className='cursor-pointer'><a href="#" >CAREERS</a></li>
          <li className='cursor-pointer'><a href="#" >EVENTS</a></li>
          <li className='cursor-pointer'><a href="#">PRODUCTS</a></li>
          <li className='cursor-pointer'><a href="#" >SUPPORST</a></li>
        </ul>
      </div>


    </header>
  )
}

export default Header