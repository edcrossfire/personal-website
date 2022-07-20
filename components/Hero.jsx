import React from "react";
import Social from "../components/Social";

const Main = () => {
  return (
    <div id="home" className="box w-full h-full lg:h-[85vh] text-center">
        <div className="w-full h-full mx-auto p-2 py-16 flex flex-col justify-center items-center">
            <div>
                <p className="text-base tracking-wide font-Secondary py-2">Let&apos;s create something together</p>
                <h1 className="text-5xl lg:text-6xl tracking-tighter pt-4 pb-2 font-Primary font-bold capitalize">Hi, I&apos;m <span className="text-accent">Ed</span></h1>
                <h1 className="text-2xl lg:text-5xl tracking-tighter pb-2 font-Primary capitalize font-bold">User Experience &#40;UX&#41; Engineer</h1>
                <p className="pb-4 pt-1 m-auto font-Secondary text-base max-w-prose">I utilize the concepts learned from my engineering background to produce efficient code and build improved user experiences across products and places. I&apos;m currently open to contract work or full-time positions.</p>

            </div><Social /></div>
        <div className="hidden lg:flex lg:justify-start ">
          <a href="mailto:hi@edcartwright.com" className="-rotate-90 -mt-60 ml-16 font-Secondary">hi@edcartwright.com</a>
        </div>
    </div>
  )
}

export default Main