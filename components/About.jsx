import React from "react";
import Image from "next/image";
import {MdQuestionAnswer} from "react-icons/md";

const About = () => {
  return (
    <div id="about" className="box">
        <section>
            <div className="py-8 px-4 sm:py-16 lg:px-6">
                <h2 className="mb-4 text-3xl tracking-tight font-Primary font-bold uppercase">About Me</h2>
                <div className="grid pt-8 text-left border-t md:gap-16 md:grid-cols-2">
                    <div>
                        <div className="mb-10">
                            <div className="flex space-x-3 items-center mb-4">
                                <div className="hidden lg:block"><MdQuestionAnswer size="20px" color="#BF6330" /></div>
                                <div className="sm:block lg:hidden"><MdQuestionAnswer size="20px" color="#BF6330" /></div>
                                <h3 className="text-lg font-Secondary font-bold">
                            Where have you worked?
                            </h3>
                            </div>
                            <p>Prior to self-employment, I worked for several large corporations including FirstEnergy, Westinghouse, and SAP.</p>
                        </div>
                        <div className="mb-10">
                            <div className="flex space-x-3 items-center mb-4">
                                <div className="hidden lg:block"><MdQuestionAnswer size="20px" color="#BF6330" /></div>
                                <div className="sm:block lg:hidden"><MdQuestionAnswer size="20px" color="#BF6330" /></div>
                                <h3 className="text-lg font-Secondary font-bold">
                            What are your hobbies?
                            </h3>
                            </div>
                            <p>Some may not consider it a hobby, but coffee is an essential part of my morning ritual. I enjoy the process of preparing it as much as drinking it. I rarely end a day without reading &#40;or listening to&#41; some of a good non-fiction book. Travel and adventure with my wife fill my free time, along with staying up-to-date on the latest in crypto/blockchain.</p>
                        </div>
                        <div className="mb-10">
                            <div className="flex space-x-3 items-center mb-4">
                                <div className="hidden lg:block"><MdQuestionAnswer size="20px" color="#BF6330" /></div>
                                <div className="sm:block lg:hidden"><MdQuestionAnswer size="20px" color="#BF6330" /></div>
                                <h3 className="text-lg font-Secondary font-bold">
                            What are your favorite books?
                            </h3>
                            </div>
                            <p>Some of my favorites include <em>Sapiens</em> by Yuval Noah Harari, <em>Optionality</em> by Richard Meadows, <em>Salt</em> by Mark Kurlansky, <em>The History of Money for Understanding Economics</em> by Vincent Lannoye, and <em>How the World Really Works</em> by Vaclav Smil.</p>
                        </div>
                    </div>
                    <div>
                        <div className="mb-10">
                            <div className="flex space-x-3 items-center mb-4">
                                <div className="hidden lg:block"><MdQuestionAnswer size="20px" color="#BF6330" /></div>
                                <div className="sm:block lg:hidden"><MdQuestionAnswer size="20px" color="#BF6330" /></div>
                                <h3 className="text-lg font-Secondary font-bold">
                            How did you learn to code?
                            </h3>
                            </div>
                            <p>I began learning to code back in my engineering classes during university, and continued to self-teach myself coding after college. Diving into learning more about development on blockchain and working with smart contracts really ignited my career shift focus into dev work.</p>
                        </div>
                        <div className="mb-10">
                            <div className="flex space-x-3 items-center mb-4">
                                <div className="hidden lg:block"><MdQuestionAnswer size="20px" color="#BF6330" /></div>
                                <div className="sm:block lg:hidden"><MdQuestionAnswer size="20px" color="#BF6330" /></div>
                                <h3 className="text-lg font-Secondary font-bold">
                            Where do you see the biggest opportunity in UX?
                            </h3>
                            </div>
                            <p>The biggest area of improvement I currently see in UX &#40;and the most exciting in my opinion&#41; is in the blockchain/crypto space. Web3 technology is the future, but has some distance to catch up to Web2 when it comes to the user experience.</p>
                        </div>
                        <div className="mb-10">
                            <div className="flex space-x-3 items-center mb-4">
                                <div className="hidden lg:block"><MdQuestionAnswer size="20px" color="#BF6330" /></div>
                                <div className="sm:block lg:hidden"><MdQuestionAnswer size="20px" color="#BF6330" /></div>
                                <h3 className="text-lg font-Secondary font-bold">
                            What&apos;s the craziest thing you&apos;ve done?
                            </h3>
                            </div>
                            <p>My wife and I set out on a multi-year adventure to travel around the U.S. in an RV while we worked from the road. It was definitely an eye-opening experience!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="skills" className=" pb-36">
            <div className="px-4 py-8 text-center lg:py-16 lg:px-6">
                <dl className="grid gap-8 sm:grid-cols-3">
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-4 text-3xl tracking-tight font-Primary font-bold uppercase">Languages</dt>
                        <dd className="tracking-widest">HTML</dd>
                        <dd className="tracking-widest">CSS</dd>
                        <dd className="tracking-widest">JavaScript</dd>
                        <dd className="tracking-widest">SQL</dd>
                        <dd className="tracking-widest">Python</dd>
                        <dd className="tracking-widest">Rust</dd>
                        <dd className="tracking-widest">English</dd>
                        <dd className="tracking-widest">Spanish</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-4 text-3xl tracking-tight font-Primary font-bold uppercase">Frameworks/Tools</dt>
                        <dd className="tracking-widest">NodeJS</dd>
                        <dd className="tracking-widest">React</dd>
                        <dd className="tracking-widest">NextJS</dd>
                        <dd className="tracking-widest">TailwindCSS</dd>
                        <dd className="tracking-widest">Anchor</dd>
                        <dd className="tracking-widest">Bootstrap</dd>
                        <dd className="tracking-widest">Figma</dd>
                        <dd className="tracking-widest">Vercel</dd>
                        <dd className="tracking-widest">VS Code</dd>
                        <dd className="tracking-widest">GitHub</dd>
                        <dd className="tracking-widest">WordPress</dd>
                        <dd className="tracking-widest">WooCommerce</dd>
                        <dd className="tracking-widest">Elementor</dd>
                        <dd className="tracking-widest">Shopify</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-4 text-3xl tracking-tight font-Primary font-bold uppercase">Concepts</dt>
                        <dd className="tracking-widest">Process Improvement</dd>
                        <dd className="tracking-widest">Lean Six Sigma</dd>
                        <dd className="tracking-widest">Data Analysis</dd>
                        <dd className="tracking-widest">Change Management</dd>
                        <dd className="tracking-widest">Project Management</dd>
                        <dd className="tracking-widest">User Research Methods</dd>
                        <dd className="tracking-widest">Problem Solving</dd>
                        <dd className="tracking-widest">Human Factors</dd>
                        <dd className="tracking-widest">Smart Contract Development</dd>
                    </div>
                </dl>
            </div>
        </section>
    </div>
  )
}

export default About