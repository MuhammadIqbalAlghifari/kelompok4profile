"use client"
import { useEffect, useRef } from "react";
import ChairProducts from "./productsCarousel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { easeOut } from "framer-motion";

export default function BestSellingProductComponent() {

    let TittleAnimation, TabAnimation = useRef()

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const animateOnScroll = (element, {opacity, x, y}) => {
            gsap.fromTo(element, {opacity: 0, x, y}, {
                opacity: 1,
                duration: 1,
                x: 0,
                y: 0,
                delay: 0.2,
                ease: easeOut,
                scrollTrigger: {
                    trigger: element,
                    start: "top bottom",
                    end: "center center"
                }
            });
        }

        const animateOnDekstop = () => {
            animateOnScroll([TittleAnimation, TabAnimation], {opacity: 0, y: 10})
        }

        const animateOnMobile = () => {
            animateOnScroll([TittleAnimation, TabAnimation], {opacity: 0, y: 10})
        }

        const isDekstop = window.matchMedia("(min-width: 768px)").matches

        isDekstop ? animateOnDekstop() : animateOnMobile();

    }, [])

    return (
        <section className="bg-[#f5f5f5] py-16 px-8 lg:p-20 lg:gap-y-10 md:gap-y-8 gap-y-6 flex flex-col justify-center items-center">
            <h1 ref={el => {TittleAnimation = el}} className="lg:text-4xl md:text-3xl text-2xl text-black text-center font-bold">Best Selling Product</h1>
            <div ref={el => {TabAnimation = el}} className="flex justify-center gap-x-2 items-center rounded-full bg-gray-300 p-1 lg:text-base md:text-sm text-xs font-light">
                <p className="bg-white px-4 py-2 cursor-pointer rounded-full">Chair</p>
                <p className="px-4 py-2 cursor-pointer">Beds</p>
                <p className="px-4 py-2 cursor-pointer">Sofa</p>
                <p className="px-4 py-2 cursor-pointer">Lamp</p>
            </div>
            <ChairProducts/>
        </section>
    )
}