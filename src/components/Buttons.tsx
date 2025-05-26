"use client"
import { useEffect, useState } from "react";
import {motion} from 'framer-motion'

export default function Buttons() {
    const [Button, setButton] = useState(false);
    useEffect(()=>{
        const scrolloption = ()=>{
            setButton(window.scrollY >300);
        };
        window.addEventListener("scroll", scrolloption);
        return()=>window.removeEventListener("scroll", scrolloption);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    return (
        <>
        <section id="framework"/>

      {Button && (
        <motion.button
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        whileHover={{scale:1.2}}
        onClick={scrollToTop}
        className="bg-black text-white p-3 rounded-full shadow-lg fixed bottom-6 right-6 z-50"
        >
        </motion.button>
      )}
    </>
    )
}
