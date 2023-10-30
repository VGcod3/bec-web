/* eslint-disable @next/next/no-img-element */
import React from "react";
import { capture_it, ibm_plex_mono } from "@/fonts";
import styles from './Aim.module.scss';

export default function Aim() {
    return (
        <div className='max-w-7xl mx-auto p-14 w-full' id="aim">
            <div className="flex lg:flex-row flex-col  gap-14 justify-between">
                <div className='flex-1'>
                    <h2 className={`${capture_it.className} heading`}>Ціль</h2>
                    <div className={`${ibm_plex_mono} ${styles.description}`}>
                        <p>
                            Основною метою змагань є створення середовища, яке сприяє навчанню, розвитку навичок та творчого мислення у студентів, зацікавлених в інженерії.
                        </p>
                        <p>
                            Проєкт надає можливість учасникам під час роботи в команді, застосувати весь свій креативний потенціал задля розв’язання реальних технічних проблем.

                        </p>
                    </div>
                </div>

                <div className={`${styles.bec1__img} flex-1 flex items-center`}>
                    <div className={`${styles.bec1__pseudo}`}></div>
                    <img className={`${styles.bec1__item}`} src="/1.png" alt="cyberpunk image" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between w-full gap-14 m-6 my-12">
                <div className="flex-1 flex flex-col gap-6">
                    <div className="flex">
                        <img src="/arrow.svg" alt="arrow" className="relative -left-6" />
                        <h3 className={`${ibm_plex_mono.className} ${styles.aim_h3}`}>Місія</h3>
                    </div>
                    <div className="flex flex-col w-full gap-3">
                        <img src="/underline.svg" alt="underline" />
                        <p className="text-lg">Розвиток студентів-інженерів</p>
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-6">
                    <div className="flex">
                        <img src="/arrow.svg" alt="arrow" className="relative -left-6" />
                        <h3 className={`${ibm_plex_mono.className} ${styles.aim_h3}`}>ВІЗІЯ</h3>
                    </div>
                    <div className="flex flex-col w-full gap-3">
                        <img src="/underline.svg" alt="underline" />
                        <p className="text-lg">Реалізований інженерний потенціал України</p>
                    </div>
                </div>

            </div>
        </div>
    )
}