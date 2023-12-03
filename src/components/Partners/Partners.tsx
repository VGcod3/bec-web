/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */

import { capture_it } from "@/fonts";
import React from "react";

const PartnersLogo = ({ children }: { children: React.ReactElement }) => {
    return (
        <div className="col-span-1 flex items-center justify-center">
            {children}
        </div>
    )
}

const partners_row_1 = ['Dialog', 'Squad', 'Rozkvit', 'DataArt']
const partners_row_2 = ['SAMBAG', 'Truskavetska', 'Radymo', 'DobraVoda',]
const partners_row_3 = ['Dodo', 'Bun&Cat', 'GreenLogo', 'A.Sept', 'k206']
const partners_row_4 = ['Blaster', 'HobbyMania']

export default function Partners() {
    return (
        <section className=" flex flex-col items-center justify-center p-10 gap-8 lg:gap-14 relative" id="partners">
            <h2 className={`${capture_it.className} heading relative z-10`}>Партнери</h2>
            <img src="/partners.png" alt="partners" className="absolute left-0 w-screen object-cover h-full" />

            <img src="/new-sponsors.jpg" alt="partners" className="w-full max-w-7xl mx-auto relative z-10" />
        </section>
    )
}