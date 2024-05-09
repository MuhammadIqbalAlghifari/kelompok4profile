"use client"
import { easeOut } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { FaCheck, FaCircle } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

export default function HeroComponent() {

    let TittleAnimation, ParagraphAnimation, InputAnimation = useRef()
    const CircleOneTwo = useRef()
    const CircleThreeFour = useRef()

    useEffect(() => {
        gsap.fromTo([TittleAnimation, ParagraphAnimation, InputAnimation], {opacity: 0}, {opacity: 1, ease: easeOut, duration: 1, stagger: 0.4, delay: 0.6})
        gsap.fromTo([CircleOneTwo.current.children, CircleThreeFour.current.children], {opacity: 0}, {opacity: 1, ease: easeOut, duration: 1, stagger: 0.4, delay: 0.6})
    }, [])

    return (
        <section className="w-full h-full">
            <img src="/landing-image.png" className="w-full lg:h-auto h-screen absolute object-cover -z-50"/>
            <main className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center px-5 md:-mt-0 -mt-20 h-screen">
                    <article className="flex flex-col justify-center items-center lg:gap-y-6 md:gap-y-4 gap-y-2.5">
                        <h1 ref={el => {TittleAnimation = el}} className="text-white max-w-4xl lg:text-[4.21rem] md:text-5xl text-3xl font-semibold lg:leading-normal md:leading-normal leading-normal text-center">Make Your Interior More Minimalistic & Modern</h1>
                        <p ref={el => {ParagraphAnimation = el}} className="text-gray-300 max-w-md lg:text-base md:text-sm text-xs text-center">Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
                        <div ref={el => {InputAnimation = el}} className="bg-gray-300 backdrop-blur-sm flex justify-center items-center bg-opacity-25 md:p-2 p-0.5 rounded-full">
                            <input className="bg-transparent text-white focus:outline-none md:placeholder:text-gray-300 placeholder:text-white border-none p-2 lg:text-base text-xs md:text-sm" placeholder="Search furniture"/>
                            <FiSearch className="w-full h-full cursor-pointer text-white p-2.5 bg-orange-500 rounded-full"/>
                        </div>
                    </article>
                </div>
                <main className="lg:flex hidden justify-between items-start w-full lg:pb-56 px-9">
                    <div ref={CircleOneTwo} className="flex justify-between w-1/6 mt-6 ml-16">
                        <FaCircle className="w-7 h-7 mt-5 bg-gray-300 cursor-pointer text-white backdrop-blur-sm bg-opacity-30 p-2 rounded-full"/>
                        <div className="flex group flex-col justify-center items-center gap-y-4 -mt-32">
                            <div className="flex rounded-full opacity-0 group-hover:opacity-100 transition duration-300 bg-gray-300 gap-x-2 backdrop-blur-sm bg-opacity-30 p-2 justify-center items-center">
                                <div className="bg-white cursor-pointer p-0.5 rounded-full">
                                    <FaCheck className="bg-orange-500 w-5 h-5 p-1 text-white rounded-full"/>
                                </div>
                                <div className="bg-white cursor-pointer p-0.5 rounded-full">
                                    <div className="bg-blue-600 p-1 w-5 h-5 rounded-full"/>
                                </div>
                                <div className="bg-white cursor-pointer p-0.5 rounded-full">
                                    <div className="bg-gray-500 p-1 w-5 h-5 rounded-full"/>
                                </div>
                            </div>
                            <FaCircle className="w-10 h-10 bg-gray-300 cursor-pointer text-white backdrop-blur-sm bg-opacity-30 p-3 rounded-full"/>
                        </div>
                    </div>
                    <div ref={CircleThreeFour} className="flex justify-between w-[45%]">
                        <FaCircle className="w-8 h-8 mt-16 ml-2 cursor-pointer bg-gray-300 text-white backdrop-blur-sm bg-opacity-30 p-3 rounded-full"/>
                        <FaCircle className="w-8 h-8 mt-28 cursor-pointer bg-gray-300 text-white backdrop-blur-sm bg-opacity-30 p-2 rounded-full"/>
                    </div>
                </main>
            </main>
        </section>
    )
}