import React, {useState} from "react";
import Image from "next/image";
import LOGO from "../public/images/ec-logo-transparent.png";
import {RiMenu4Fill, RiCloseFill} from "react-icons/ri";
import Link from "next/link";
import Social from "../components/Social";

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className="box flex justify-between p-5 pt-6 items-center z-[100]">
        <div className="w-11 object-contain cursor-pointer">
            <Image src={LOGO} alt="logo" />
        </div>
        <div onClick={handleNav} className="lg:hidden items-center cursor-pointer">
            <RiMenu4Fill size={25}/>
        </div>
        <div className="hidden lg:inline-flex">
            <ul className="uppercase flex space-x-6 items-baseline font-Secondary font-medium">
                <Link href="/#portfolio">
                    <li className="cursor-pointer">Portfolio</li>
                </Link>
                <Link href="/#about">
                    <li className="cursor-pointer">About</li>
                </Link>
                <Link href="/#skills">
                    <li className="cursor-pointer">Skills</li>
                </Link>
                <a href="/images/ed-cartwright-resume.pdf" download="ed-cartwright-resume.pdf">
                    <li className="cursor-pointer relative inline-block text-accent group focus:outline-none focus:ring">
                        <div className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-accent rounded-sm group-hover:translate-y-0 group-hover:translate-x-0"></div>
                        <div className="relative block px-3 py-2 bg-light border rounded-sm border-accent">Download Resume</div>
                    </li>
                </a>
            </ul>
        </div>

        <div className={nav ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-dark/70" : "fixed"}>
            <div className={nav 
                    ? "lg:hidden fixed right-0 top-0 w-[80%] md:w-[50%] lg:w-[25%] h-screen bg-light p-10 ease-in duration-150"
                    : "fixed right-[-100%] top-0 p-10 ease-in duration-150"
                    }>
                <div onClick={handleNav} className="flex justify-end w-full">
                    <div className="cursor-pointer">
                    <RiCloseFill size={25} />
                    </div>
                </div>
                <div className="flex flex-col h-5/6 justify-between">
                <ul className="grid place-items-center uppercase text-xl space-y-8 font-Primary font-medium pt-16">
                    <Link href="/#portfolio">
                        <li onClick={()=> setNav(false)} className="cursor-pointer">Portfolio</li>
                    </Link>
                    <Link href="/#about">
                        <li onClick={()=> setNav(false)} className="cursor-pointer">About</li>
                    </Link>
                    <Link href="/#skills">
                        <li onClick={()=> setNav(false)} className="cursor-pointer">Skills</li>
                    </Link>
                    <a href="/images/ed-cartwright-resume.pdf" download="ed-cartwright-resume.pdf">
                        <li onClick={()=> setNav(false)} className="cursor-pointer relative inline-block text-accent group focus:outline-none focus:ring">
                            <div className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-accent rounded-sm group-hover:translate-y-0 group-hover:translate-x-0"></div>
                            <div className="relative block px-3 py-2 bg-light border rounded-sm border-accent">Download Resume</div>
                        </li>
                    </a>
                </ul>
                </div>
                <div className="grid place-items-center pb-4"><Social /></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar