"use client"
import { easeOut } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import items from "../data/items";

export default function HeroComponent() {

    let TittleAnimation, ParagraphAnimation, InputAnimation = useRef()

    useEffect(() => {
        gsap.fromTo([TittleAnimation, ParagraphAnimation, InputAnimation], {opacity: 0}, {opacity: 1, ease: easeOut, duration: 1, stagger: 0.4, delay: 0.6})
    }, [])

    const [query, setQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setQuery(value);

        const results = items.filter(item =>
        item.name.toLowerCase().includes(value)
        );
        setFilteredItems(results);
    };

    return (
        <section id="home" className="w-full h-full">
            <img src="/umtas.jpg" className="w-full lg:h-auto h-screen brightness-50 fixed object-cover -z-50"/>
            <main className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center px-5 h-screen">
                    <article className="flex flex-col justify-center items-center lg:gap-y-6 sm:-mt-0 -mt-28 md:gap-y-4 gap-y-2.5">
                        <h1 ref={el => {TittleAnimation = el}} className="text-white max-w-4xl lg:text-[4.21rem] md:text-5xl text-3xl font-semibold lg:leading-normal md:leading-normal leading-normal text-center">Biodata Kelompok 4</h1>
                        <p ref={el => {ParagraphAnimation = el}} className="text-gray-300 max-w-md lg:text-base md:text-sm text-xs text-center">Website ini dibuat khusus untuk menampilkan biodata dari kelompok 4 dan memenuhi tugas interaksi manusia dan komputer</p>
                        <div ref={el => {InputAnimation = el}} className="bg-gray-300 backdrop-blur-sm flex justify-center items-center bg-opacity-25 md:p-2 p-0.5 rounded-full">
                            <input value={query} onChange={handleSearch} className="bg-transparent text-white focus:outline-none md:placeholder:text-gray-300 placeholder:text-white border-none p-2 lg:text-base text-xs md:text-sm" placeholder="Cari biodata kelompok 4"/>
                            <FiSearch className="w-full h-full cursor-pointer text-white p-2.5 bg-orange-500 rounded-full"/>
                        </div>
                        {query && (
                            <ul className="bg-white p-4 rounded-md text-black ">
                            {filteredItems.map(item => (
                                <a href={item.href}><li key={item.id}>{item.name}</li></a>
                            ))}
                            </ul>
                        )}
                    </article>
                </div>
            </main>
        </section>
    )
}