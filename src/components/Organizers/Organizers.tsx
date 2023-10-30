import styles from './Organizers.module.scss';
import Image from 'next/image';

import { ibm_plex_mono, ibm_plex_mono_bold, capture_it, anonymous_pro_regular } from "@/fonts";

export default function Organizers() {
    return (
        <section className={styles.section} id='orgs'>

            <h2 className={`${capture_it.className} heading`}>
                Організатори
            </h2>

            <div className={styles.orgsDataWrapper}>

                <div className={styles.logoWrapper}>
                    <Image width={450} height={250} src="/BEST_Logo.svg" alt="logo" className="w-full max-w-md mx-auto px-5 lg:p-0" />
                </div>

                <div className="col-span-12 lg:col-span-7 lg:p-8">
                    <h4 className={`${ibm_plex_mono_bold.className} text-center lg:text-left font-bold text-bec-orange text-md md:text-2xl mb-4`}>МІСІЯ BEST — РОЗВИТОК СТУДЕНТІВ.</h4>
                    <p className={`${ibm_plex_mono.className} text-md mb-5 text-justify`}>
                        Проєкт реалізує волонтерська організація BEST Lviv, що є частиною Ради студентів технічних університетів Європи (Board of European Students of Technology).
                    </p>
                    <p className={`${ibm_plex_mono.className} text-md mb-5 text-justify`}>
                        Наш осередок був сформований у 2002 році при Національному університеті &quot;Львівська політехніка&quot;. Вже понад двадцять років BEST є дружньою спільнотою студентів, які зацікавлені в розвитку себе та суспільства загалом. На цей момент активних членів осередку налічується близько сотні.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto w-full">
                <p className={`${anonymous_pro_regular.className} text-justify lg:text-center text-lg lg:text-2xl`}>Усі проєкти спрямовані на допомогу студентам на початку кар’єрного росту, розвиток їхніх навичок та об’єднанню активної молоді.
                </p>
                <p className={`${anonymous_pro_regular.className} text-center text-lg lg:text-2xl`}>Ось деякі з них:</p>
            </div>

            <div className={styles.projWrapper}>
                <div className="col-span-2">
                    <Image width={300} height={100} src="/hack.svg" alt="hack" className={styles.projLogo} />
                </div>
                <div className="col-span-4">
                    <Image width={300} height={100} src="/bci.svg" alt="bci" className={styles.projLogo} />
                </div>
                <div className="col-span-4">
                    <Image width={300} height={100} src="/btw.svg" alt="btw" className={styles.projLogo} />
                </div>
                <div className="col-span-2">
                    <Image width={300} height={100} src="/ejf.svg" alt="ejf" className={styles.projLogo} />
                </div>
            </div>

        </section>
    )
}
