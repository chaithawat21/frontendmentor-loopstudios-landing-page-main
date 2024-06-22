import React,{useState, useEffect} from 'react'
import interactive from '../assets/images/desktop/image-interactive.jpg'

import deepEarthDesktop from '../assets/images/desktop/image-deep-earth.jpg'
import nightArcadeDesktop from '../assets/images/desktop/image-night-arcade.jpg'
import soccerTeamDesktop from '../assets/images/desktop/image-soccer-team.jpg'
import gridDesktop from '../assets/images/desktop/image-grid.jpg'
import fromAboveDesktop from '../assets/images/desktop/image-from-above.jpg'
import pocketBorealisDesktop from '../assets/images/desktop/image-pocket-borealis.jpg'
import curiosityDesktop from '../assets/images/desktop/image-curiosity.jpg'
import fisheyeDesktop from '../assets/images/desktop/image-fisheye.jpg'

import deepEarthMobile from '../assets/images/mobile/image-deep-earth.jpg'
import nightArcadehMobile from '../assets/images/mobile/image-night-arcade.jpg'
import soccerTeamhMobile from '../assets/images/mobile/image-soccer-team.jpg'
import gridhMobile from '../assets/images/mobile/image-grid.jpg'
import fromAbovehMobile from '../assets/images/mobile/image-from-above.jpg'
import pocketBorealisMobile from '../assets/images/mobile/image-pocket-borealis.jpg'
import curiosityMobile from '../assets/images/mobile/image-curiosity.jpg'
import fisheyehMobile from '../assets/images/mobile/image-fisheye.jpg'



function LandingPage() {


  const [isScreens, setIsScreens] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsScreens(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <div className='flex flex-col'>
   <div className='flex flex-row mt-[5rem] justify-center md:flex-col md:mx-[2rem] sd:mx-[1rem]'>
        <img className='object-contain object-center relative z-0 left-[4rem] md:static' src={interactive} alt="interactive" />
        <section className='max-w-[39.25rem] bg-White relative z-10 right-[4rem] pl-[5rem] pt-[5rem] self-end md:static md:text-center md:pl-0 md:self-center md:pt-[2rem]'>
          <h1 className='font-JosefinSans font-light text-[3rem] leading-none md:text-[2rem]'>THE LEADER IN INTERACTIVE VR</h1>
          <p className='font-Alata text-DarkGray mt-[1rem]'>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
        </section>
      </div>
      <div className='flex flex-row justify-between items-center mx-[5rem] mt-[5rem] md:justify-center md:mx-[2rem] sm:mx-[1rem]'>
        <h2 className='font-JosefinSans  font-extralight text-[2.5rem]  '>OUR CREATIONS</h2>
        <button className='font-Alata font-thin tracking-[2px] px-[2rem] h-[2rem]  border-[1px] border-solid border-Black hover:bg-Black hover:text-White md:hidden' >SEE ALL</button>
      </div>
      <div className='grid grid-cols-4 justify-items-center gap-[1rem] mt-[3rem] mb-[5rem] mx-[5rem] md:grid-cols-1 md:mb-[2rem] md:mx-[2rem] sm:mx-[1rem] sm:mt-[2rem] ' >
        <figure className="relative cursor-pointer  text-White hover:text-VeryDarkGray ">
          <img className="object-contain object-center hover:opacity-[10%] " src={isScreens ?  deepEarthMobile : deepEarthDesktop} alt="deepEarth" />
          <figcaption className='absolute bottom-[1rem] left-[1rem] font-JosefinSans font-extralight text-[2rem] leading-none md:text-[1rem] '>DEEP<br />EARTH</figcaption>
        </figure>
        <figure className="relative cursor-pointer text-White hover:text-VeryDarkGray ">
          <img className="object-contain object-center hover:opacity-[10%] " src={isScreens ?  nightArcadehMobile : nightArcadeDesktop} alt="nightArcade  "  />
          <figcaption className='absolute bottom-[1rem] left-[1rem] font-JosefinSans font-extralight text-[2rem]  leading-none  md:text-[1rem] '>NIGHT<br />ARCADE</figcaption>
        </figure>
        <figure className="relative cursor-pointer text-White hover:text-VeryDarkGray ">
          <img className="object-contain object-center hover:opacity-[10%] " src={isScreens ?  soccerTeamhMobile : soccerTeamDesktop} alt="soccerTeam" />
          <figcaption className='absolute bottom-[1rem] left-[1rem] font-JosefinSans font-extralight text-[2rem]   leading-none md:text-[1rem]  '>SOCCER<br />TEAM VR</figcaption>
        </figure>
        <figure className="relative cursor-pointer text-White hover:text-VeryDarkGray ">
          <img className="object-contain object-center hover:opacity-[10%] " src={isScreens ?  gridhMobile : gridDesktop} alt="grid" />
          <figcaption className='absolute bottom-[1rem] left-[1rem] font-JosefinSans font-extralight text-[2rem]  leading-none md:text-[1rem]  '>THE<br />GRID</figcaption>
        </figure>
        <figure className="relative cursor-pointer text-White hover:text-VeryDarkGray ">
          <img className="object-contain object-center  hover:opacity-[10%]" src={isScreens ?  fromAbovehMobile : fromAboveDesktop} alt="fromAbove" />
          <figcaption className='absolute bottom-[1rem] left-[1rem] font-JosefinSans font-extralight text-[2rem]  leading-none md:text-[1rem]  '>FROM UP<br />ABOVE VR</figcaption>
        </figure>
        <figure className="relative cursor-pointer text-White hover:text-VeryDarkGray">
          <img className="object-contain object-center hover:opacity-[10%] " src={isScreens ?  pocketBorealisMobile : pocketBorealisDesktop} alt="pocketBorealis" />
          <figcaption className='absolute bottom-[1rem] left-[1rem] font-JosefinSans font-extralight text-[2rem] leading-none md:text-[1rem] '>POCKET<br />BOREALIS</figcaption>
        </figure>
        <figure className="relative cursor-pointer text-White hover:text-VeryDarkGray">
          <img className="object-contain object-center hover:opacity-[10%] " src={isScreens ?  curiosityMobile : curiosityDesktop} alt="pocketBorealis" />
          <figcaption className='absolute bottom-[1rem] left-[1rem] font-JosefinSans font-extralight text-[2rem] leading-none md:text-[1rem] '>THE<br />CURIOSITY</figcaption>
        </figure>
        <figure className="relative cursor-pointer text-White hover:text-VeryDarkGray">
          <img className="object-contain object-center hover:opacity-[10%] " src={isScreens ?  fisheyehMobile : fisheyeDesktop} alt="pocketBorealis" />
          <figcaption className='absolute bottom-[1rem] left-[1rem] font-JosefinSans font-extralight text-[2rem]  leading-none md:text-[1rem] '>MAKE IT<br />FISHEYE</figcaption>
        </figure>
        
      </div>
      <div className='flex justify-center mb-[5rem]'>
      <button className='hidden font-Alata font-thin tracking-[2px] px-[2rem] h-[2rem]  border-[1px] border-solid border-Black hover:bg-Black hover:text-White md:inline-block' >SEE ALL</button>
      </div>
    </div>
  )
}

export default LandingPage