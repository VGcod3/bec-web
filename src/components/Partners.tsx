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
        <section className=" flex flex-col items-center justify-center p-10 gap-8 lg:gap-14 relative">
            <h2 className={`${capture_it.className} heading relative z-10`}>Партнери</h2>
            <img src="/partners.png" alt="partners" className="absolute left-0 w-screen object-cover h-full" />

            <div className="grid gap-6 w-full border-2 relative z-10 border-bec-orange p-10 bg-bec-bg max-w-7xl px-6 mx-auto ">
                <div className="grid-cols-4 gap-4 flex justify-evenly">
                    {partners_row_1.map(logo => <PartnersLogo>
                        <img src={`/partners/${logo}.svg`} alt={logo} />
                    </PartnersLogo>)}
                </div>
                <div className="grid-cols-4 gap-4 w-11/12 mx-auto flex justify-evenly">
                    {partners_row_2.map(logo => <PartnersLogo>
                        <img src={`/partners/${logo}.svg`} alt={logo} />
                    </PartnersLogo>)}
                </div>
                <div className="grid-cols-5 gap-4 w-11/12 mx-auto flex justify-evenly">
                    {partners_row_3.map(logo => <PartnersLogo>
                        <img src={`/partners/${logo}.svg`} alt={logo} />
                    </PartnersLogo>)}
                </div>
                <div className="grid-cols-2 flex justify-evenly w-8/12 mx-auto">
                    {partners_row_4.map(logo => <PartnersLogo>
                        <img src={`/partners/${logo}.svg`} alt={logo} />
                    </PartnersLogo>)}
                </div>
            </div>
        </section>
    )
}