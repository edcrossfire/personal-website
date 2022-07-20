import React from "react";
import Image from "next/image";
import Link from "next/link";
import Social from "../components/Social";
import LOGO from "../public/images/ec-logo-transparent.png";

const Footer = () => {
  return (
    <footer>
    <div className="box px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3">
        <div className="w-11 object-contain cursor-pointer my-auto z-[-1]">
            <Link href="/">
            <Image src={LOGO} alt="logo" />
            </Link>
        </div>
        <div className="m-auto"><Social /></div>
        <p className="mt-4 lg:my-auto lg:text-right">
            &copy; 2022 | Ed Cartwright
        </p>
        </div>
    </div>
    </footer>
  )
}

export default Footer