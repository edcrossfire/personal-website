import React from 'react';
import Image from 'next/image';
import SCREENSHOT1 from "../public/images/portfolio-screenshot.jpg";
import SCREENSHOT2 from "../public/images/solanapay-shop.jpg";
import SCREENSHOT3 from "../public/images/algo-vote-screenshot.jpg";
import SCREENSHOT4 from "../public/images/crossfire-screenshot.jpg";
import SCREENSHOT5 from "../public/images/shoe-store-screenshot.jpg";
import SCREENSHOT6 from "../public/images/covid-tracker-screenshot.jpg";
import {FaGithub} from "react-icons/fa";
import {CgWebsite} from "react-icons/cg";
import {RiDashboardLine} from "react-icons/ri";

const Portfolio = () => {
  return (
    <div id="portfolio" className="box pb-32 pt-8">

            <div className="flex flex-col col-span-2 justify-between items-center pb-5">
                <h2 className="col-span-2 font-Primary uppercase font-bold text-3xl">Portfolio</h2>
                <p className="pb-4">See examples of my work:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 place-items-center">

            <div className="shadow-lg w-full h-40 rounded-md">
                <div className="flex justify-between col w-full h-full">
                    <div className="flex w-1/3 shadow-sm z-[-1]">
                        <Image className="object-cover h-full rounded-l-md" src={SCREENSHOT1} alt="screenshot" />
                    </div>
                    <div className="flex w-2/3 pl-3 pt-2 pb-2 pr-3 flex-col justify-center text-sm h-full">
                        <h3 className="font-Primary text-lg font-bold">This Website!</h3>
                        <h4 className="font-Secondary text-xs font-bold">NextJS | Tailwind CSS</h4>
                        <p className="font-Secondary text-sm pt-1 pb-1 lg:pr-4 leading-tight">My own portfolio website that you&apos;re viewing now. Built using NextJS and designed with Tailwind CSS.</p>
                        <ul className="flex space-x-3 pt-0.5">
                            <li><a href="https://github.com/edcrossfire/" target="_blank" rel="noreferrer"><FaGithub size={20} color="#BF6330"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="shadow-lg w-full h-40 rounded-md">
                <div className="flex justify-between col w-full h-full">
                    <div className="flex w-1/3 shadow-sm z-[-1]">
                        <Image className="object-cover h-full rounded-l-md" src={SCREENSHOT5} alt="screenshot" />
                    </div>
                    <div className="flex w-2/3 pl-3 pt-2 pb-2 pr-3 flex-col justify-center text-sm h-full">
                        <h3 className="font-Primary text-lg font-bold">eCommerce Store</h3>
                        <h4 className="font-Secondary text-xs font-bold">Sanity | Stripe</h4>
                        <p className="font-Secondary text-sm pt-1 pb-1 lg:pr-4 leading-tight">A fully functioning eCommerce site that utilizes Sanity as a headless CMS and integrates with Stripe API for payments.</p>
                        <ul className="flex space-x-3 pt-0.5">
                            <li><a href="https://github.com/edcrossfire/ecommerce-sanity.git" target="_blank" rel="noreferrer"><FaGithub size={20} color="#BF6330"/></a></li>
                            <li><a href="https://ecommerce-sanity-one.vercel.app/" target="_blank" rel="noreferrer"><CgWebsite size={20} color="#BF6330"/></a></li>
                            {/*<li><a href="https://ecommerce-shoe-store.sanity.studio/" target="_blank" rel="noreferrer"><RiDashboardLine size={20} color="#BF6330"/></a></li>*/}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="shadow-lg w-full h-40 rounded-md">
                <div className="flex justify-between col w-full h-full">
                    <div className="flex w-1/3 shadow-sm z-[-1]">
                        <Image className="object-cover h-full rounded-l-md" src={SCREENSHOT4} alt="screenshot" />
                    </div>
                    <div className="flex w-2/3 pl-3 pt-2 pb-2 pr-3 flex-col justify-center text-sm h-full">
                        <h3 className="font-Primary text-lg font-bold">Crossfire.Network</h3>
                        <h4 className="font-Secondary text-xs font-bold">WordPress | WooCommerce | Elementor</h4>
                        <p className="font-Secondary text-sm pt-1 pb-1 lg:pr-4 leading-tight">An eCommerce platform that modernizes international clients&apos; sales channels.</p>
                        <ul className="flex space-x-3 pt-0.5">
                            <li><a href="https://crossfire.network" target="_blank" rel="noreferrer"><CgWebsite size={20} color="#BF6330"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="shadow-lg w-full h-40 rounded-md">
                <div className="flex justify-between col w-full h-full">
                    <div className="flex w-1/3 shadow-sm z-[-1]">
                        <Image className="object-cover h-full rounded-l-md" src={SCREENSHOT2} alt="screenshot" />
                    </div>
                    <div className="flex w-2/3 pl-3 pt-2 pb-2 pr-3 flex-col justify-center text-sm h-full">
                        <h3 className="font-Primary text-lg font-bold">Solana Pay Shop</h3>
                        <h4 className="font-Secondary text-xs font-bold">TypeScript | Solana CLI</h4>
                        <p className="font-Secondary text-sm pt-1 pb-1 lg:pr-4 leading-tight">A point-of-sale web app that accepts payments via Solana and implements a loyalty program.</p>
                        <ul className="flex space-x-3 pt-0.5">
                            <li><a href="https://github.com/edcrossfire/solana-pay-store.git" target="_blank" rel="noreferrer"><FaGithub size={20} color="#BF6330"/></a></li>
                            <li><a href="https://solana-pay-store-iota-orcin.vercel.app/" target="_blank" rel="noreferrer"><CgWebsite size={20} color="#BF6330"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="shadow-lg w-full h-40 rounded-md">
                <div className="flex justify-between col w-full h-full">
                    <div className="flex w-1/3 shadow-sm z-[-1]">
                        <Image className="object-cover h-full rounded-l-md" src={SCREENSHOT3} alt="screenshot" />
                    </div>
                    <div className="flex w-2/3 pl-3 pt-2 pb-2 pr-3 flex-col justify-center text-sm h-full">
                        <h3 className="font-Primary text-lg font-bold">Algorand Voting App</h3>
                        <h4 className="font-Secondary text-xs font-bold">JavaScript | Python | Smart Contracts</h4>
                        <p className="font-Secondary text-sm pt-1 pb-1 lg:pr-4 leading-tight">Web app that implements WalletConnect and keeps track of votes on the Algorand blockchain.</p>
                        <ul className="flex space-x-3 pt-0.5">
                            <li><a href="https://github.com/edcrossfire/algo-vote-frontend.git" target="_blank" rel="noreferrer"><FaGithub size={20} color="#BF6330"/></a></li>
                            <li><a href="https://algo-vote-frontend.vercel.app/" target="_blank" rel="noreferrer"><CgWebsite size={20} color="#BF6330"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="shadow-lg w-full h-40 rounded-md">
                <div className="flex justify-between col w-full h-full">
                    <div className="flex w-1/3 shadow-sm z-[-1]">
                        <Image className="object-cover h-full rounded-l-md" src={SCREENSHOT6} alt="screenshot" />
                    </div>
                    <div className="flex w-2/3 pl-3 pt-2 pb-2 pr-3 flex-col justify-center text-sm h-full">
                        <h3 className="font-Primary text-lg font-bold">Covid-19 Tracker</h3>
                        <h4 className="font-Secondary text-xs font-bold">VueJS | External APIs</h4>
                        <p className="font-Secondary text-sm pt-1 pb-1 lg:pr-4 leading-tight">An app built with VueJS that connects to an external Covid-19 data API feed.</p>
                        <ul className="flex space-x-3 pt-0.5">
                            <li><a href="https://github.com/edcrossfire/covid-tracker.git" target="_blank" rel="noreferrer"><FaGithub size={20} color="#BF6330"/></a></li>
                            <li><a href="https://covid-tracker-plum.vercel.app/" target="_blank" rel="noreferrer"><CgWebsite size={20} color="#BF6330"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            </div>
    </div>
  )
}

export default Portfolio