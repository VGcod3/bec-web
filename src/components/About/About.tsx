/* eslint-disable @next/next/no-img-element */
import React from "react";
import { capture_it, ibm_plex_mono, ibm_plex_mono_bold } from "@/fonts";
import RButton from "@/components/RButton";
import styles from './About.module.scss';

export default function About() {
    return (
        <div className={`${styles.page__bec1} ${styles.bec1}`} id="about">
            <div className={`${styles.bec1__container}`}>
                <div className={`${styles.bec1__left}`}>
                    <h2 className={`${capture_it.className} heading`}>Про змагання</h2>
                    <div className={`${styles.bec1__img}`}>
                        <div className={`${styles.bec1__pseudo}`}></div>
                        <img className={`${styles.bec1__item}`} src="/2.png" alt="cyberpunk image" />
                    </div>
                </div>
                <div className={`${styles.bec1__right}`}>
                    <h2 className={`${ibm_plex_mono_bold.className} ${styles.bec1__right_title}`}>МАЙБУТНЄ ЗА ІНЖЕНЕРАМИ</h2>
                    <div className={`${ibm_plex_mono.className} ${styles.bec1__right_text} max-w-xl mx-auto text-justify`}>
                        <p>
                            Після початку повномасштабного вторгнення росії та
                            непроведеного заходу у 2022 році, Інженерні змагання
                            повертаються під оновленим брендом.
                        </p>

                        <p>
                            Враховуючи складну ситуацію в країні, тематика обидвох
                            категорій буде стосуватись суспільних проблем в країні,
                            спричинених війною.
                        </p>
                    </div>
                    <div className={`${ibm_plex_mono_bold.className} ${styles.bec1__right_reg}`}>24-28 листопада</div>
                    <div className='hidden md:flex flex-col items-center'>
                        <RButton />
                    </div>
                </div>
            </div>
        </div >
    )
}