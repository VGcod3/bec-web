/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from "next/image";
import { ibm_plex_mono_bold, capture_it, ibm_plex_mono } from "@/fonts";
import { useState } from 'react';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import * as Dialog from '@radix-ui/react-dialog';

import useSmoothScrollTo from '@/hooks/useSmoothScrollTo';
import Drawer from "@/components/Drawer";

import RButton from '@/components/RButton';

type MenuItem = {
    name: string;
    href: string;
};


const navigation: MenuItem[] = [
    {
        name: "Ціль",
        href: "#aim"
    },
    {
        name: "Про змагання",
        href: "#about"
    },
    {
        name: "Для компаній",
        href: "#companies"
    },
    {
        name: "Для студентів",
        href: "#students"
    },
    {
        name: "Організатори",
        href: "#orgs"
    },
    {
        name: "Партнери",
        href: "#partners"
    },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    const handleScrollClick = useSmoothScrollTo();


    return (
        <section className="min-h-screen w-full p-0 m-0 flex items-center justify-center">
            <Image src='/hero-bike.jpg' width={1920} height={1080} alt="hero photo" className="w-full h-full absolute hidden md:block object-cover" />

            <header className="p-6 flex w-full max-w-7xl mx-auto justify-between items-center absolute  z-20 top-0">
                <Image alt='logo' width={150} height={70} src={'/bec-logo.svg'} />

                <nav className="hidden lg:flex gap-14   ">
                    {
                        navigation.map(link => (
                            <span
                                onClick={() => handleScrollClick(link.href)}
                                key={link.href}
                                className={`${ibm_plex_mono_bold.className} cursor-pointer hover:text-bec-orange hover:scale-105`}>
                                {link.name}
                            </span>
                        ))
                    }
                </nav>


                <Dialog.Root >
                    <div className="flex lg:hidden relative top-2">
                        <Dialog.Trigger asChild>
                            <button
                                type="button"
                                className="-m-2.5 relative z-10 inline-flex items-center justify-center rounded-md p-2.5 text-white bg-transparent border-none"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <HamburgerMenuIcon className="h-7 w-7" aria-hidden="true" />
                            </button>
                        </Dialog.Trigger>
                    </div>
                    <Drawer setMobileMenuOpen={setMobileMenuOpen} navigation={navigation} mobileMenuOpen={mobileMenuOpen} />
                </Dialog.Root>
            </header>

            <div className="relative z-10 max-w-7xl mx-auto w-full flex-col-reverse md:flex-row flex justify-between items-center p-10">
                <div className="gap-3 flex flex-col">
                    <h1 className={`${capture_it.className} text-5xl text-center md:text-left md:text-6xl max-w-xl`}>BEST Engineering Competition</h1>
                    <h2 className={`${ibm_plex_mono_bold.className} text-center md:text-left text-2xl max-w-xl text-bec-orange font-mono`}>24-28 листопада 2023</h2>
                    <p className={`${ibm_plex_mono.className} max-w-md text-sm md:text-base text-center md:text-left mx-auto md:mx-0`}>
                        Це виклик для молодих інженерів, що надає можливість використати свої знання і навички для розв'язання реальних завдань.
                    </p>
                    <p className={`${ibm_plex_mono.className} max-w-md text-sm md:text-base text-center md:text-left mx-auto md:mx-0`}>
                        Суть змагань полягає в пошуку ідей і цікавих рішень в одній із двох категорій:
                        <br />
                        <span className={`${ibm_plex_mono_bold.className}`}>
                            Case Study (CS) та Innovative Design (ID).
                        </span>
                    </p>
                    <RButton />

                </div>

                <Image src='/logo3d.png' alt="3D Logo" width={315} height={320} className="lg:w-[35vw] max-w-[500px] max-h-[500px] w-4/5 h-auto mx-auto mt-20 mb-10 md:m-0" />
            </div>

        </section>
    )
}