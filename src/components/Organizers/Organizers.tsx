import styles from './Organizers.module.scss';
import {anonymous_pro} from "@/app/font";
import {ibm_plex_mono} from "@/app/font";
import {ibm_plex_mono_bold} from "@/app/font";

export default function Organizers() {
    return (
        <section>
            <div className="justify-center">
                <h1 className="text-center text-5xl mt-4 lg:text-6xl mb-4">Організатори</h1>
            </div>

            <div className="lg:grid grid-cols-12 gap-16 pt-1 mt-1 mx-auto lg:p-10">
                <div className="col-span-12 lg:col-span-5 flex items-center md:justify-center max-w-full pb-10">
                    <img src="/best_logo.png" alt="logo" className="max-w-full h-auto " />
                </div>
                <div className="col-span-12 lg:col-span-7 p-8 lg:p-2">
                    <h4 className={`${ibm_plex_mono_bold.className} text-center lg:text-left font-bold max-w-full text-becOrange text-2xl mt-1 md:text-3xl mb-8`}>МІСІЯ BEST — РОЗВИТОК СТУДЕНТІВ.</h4>
                    <p className={`${ibm_plex_mono.className} text-center lg:text-left mt-12 mb-4 mx-0`}>Проєкт реалізує волонтерська організація BEST Lviv, що є частиною Ради студентів технічних університетів Європи (Board of European Students of Technology).</p>
                    <p className={`${ibm_plex_mono.className} text-center lg:text-left mb-5 mx-0`}>Наш осередок був сформований у 2002 році при Національному університеті "Львівська політехніка". Вже понад двадцять років BEST є дружньою спільнотою студентів, які зацікавлені в розвитку себе та суспільства загалом. На цей момент активних членів осередку налічується близько сотні.</p>
                </div>
            </div>
            <p className={`${anonymous_pro.className} text-center mt-8 lg:mt-1 text-2xl mx-auto`}>Усі проєкти спрямовані на допомогу студентам на початку кар’єрного росту, розвиток їхніх навичок та об’єднанню активної молоді.
            </p>
            <p className={`${anonymous_pro.className} text-center text-2xl pb-10 lg:pb-7 mx-auto`}>Ось деякі з них:</p>

            <div className="grid grid-cols-8 lg:grid-cols-12 items-center gap-12 my-3 lg:my-1 max-w-7xl mx-auto">
                <div className="col-span-4 lg:col-span-2">
                    <img src="/hack.svg" alt="hack" className="mx-auto" />
                </div>
                <div className="col-span-4 lg:col-span-4">
                    <img src="/bci.svg" alt="bci" className="mx-auto" />
                </div>
                <div className="col-span-4 lg:col-span-2">
                    <img src="/btw.svg" alt="btw" className="mx-auto" />
                </div>
                <div className="col-span-4 lg:col-span-4">
                    <img src="/ejf.svg" alt="ejf" className="mx-auto" />
                </div>
            </div>

        </section>
    )
}
