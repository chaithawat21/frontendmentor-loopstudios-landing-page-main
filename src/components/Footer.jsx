import React from 'react'
import logo from '../assets/images/logo.svg'
import facebook from '../assets/images/icon-facebook.svg'
import twitter from '../assets/images/icon-twitter.svg'
import pinterest from '../assets/images/icon-pinterest.svg'
import instagram from '../assets/images/icon-instagram.svg'

function Footer() {
  return (
    <footer className='flex flex-col bg-Black md:items-center md:text-center  '>
      <div className='flex flex-row justify-between gap-[2rem] items-center md:flex-wrap px-[5rem] py-[2rem] md:justify-center md:items-baseline '>
      <nav className='flex flex-col justify-end gap-[2rem] items-start md:items-center'>
        <img src={logo} alt="logo" />
        <ul className='flex flex-row gap-[2rem] font-Alata text-White h-[1rem] pb-[2rem] sm:flex-col sm:h-[17.5rem] '>
        <li className='cursor-pointer '><a href="#" className='hover:after:block hover:after:w-[50%] hover:after:h-[10px] hover:after:mx-auto   hover:after:content-[""] hover:after:border-b-[3px]'>About</a></li>
          <li className='cursor-pointer'><a href="#" className='hover:after:block hover:after:w-[50%] hover:after:h-[10px] hover:after:mx-auto   hover:after:content-[""] hover:after:border-b-[3px]'>Carees</a></li>
          <li className='cursor-pointer'><a href="#" className='hover:after:block hover:after:w-[50%] hover:after:h-[10px] hover:after:mx-auto   hover:after:content-[""] hover:after:border-b-[3px]'>Events</a></li>
          <li className='cursor-pointer'><a href="#" className='hover:after:block hover:after:w-[50%] hover:after:h-[10px] hover:after:mx-auto   hover:after:content-[""] hover:after:border-b-[3px]'>Products</a></li>
          <li className='cursor-pointer'><a href="#" className='hover:after:block hover:after:w-[50%] hover:after:h-[10px] hover:after:mx-auto   hover:after:content-[""] hover:after:border-b-[3px]'>Support</a></li>
        </ul>
        </nav>
      <div className='flex flex-col gap-[1.5rem]   md:items-center '>
        <div className='flex flex-row gap-[1rem] justify-end items-start  h-[2rem]   '>
          <img className='cursor-pointer hover:border-b-[3px] pb-[5px] object-contain object-top' src={facebook} alt="facebook" />
          <img className='cursor-pointer hover:border-b-[3px] pb-[5px] object-contain object-top' src={twitter} alt="twitter" />
          <img className='cursor-pointer hover:border-b-[3px] pb-[5px] object-contain object-top' src={pinterest} alt="pinterest" />
          <img className='cursor-pointer hover:border-b-[3px] pb-[5px] object-contain object-top' src={instagram} alt="instagram" />
        </div>
        <p className='font-Alata  text-VeryDarkGray text-[1rem] text-end '>© 2021 Loopstudios. All rights reserved.</p>
      </div>
      </div>
      <p className="attribution  font-Alata text-[.8rem] text-VeryDarkGray text-center pb-[.1rem] ">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="mailto:chaithawat.contact@gmail.com">Chaithawat Pinsuwan</a>.
    </p>
      
    </footer>
  )
}

export default Footer