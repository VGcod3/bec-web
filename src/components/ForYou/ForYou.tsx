'use client'
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line react/display-name
import { capture_it, ibm_plex_mono, ibm_plex_mono_bold } from "@/fonts";
import styles from './ForYou.module.scss';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import React from "react";


const AccordionItem = ({ children, value }: { children: React.ReactElement[], value: string }) => (
    <Accordion.Item
        className='focus-within:shadow-neutral-700 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10'
        value={value}
    >
        {children}
    </Accordion.Item>
);

const AccordionTrigger = ({ children, className, ...props }: any) => (
    <Accordion.Header className="flex flex-col pt-4 gap-4">
        <img src="/greyUnderline.svg" alt="underline" />

        <Accordion.Trigger
            className={`${ibm_plex_mono_bold.className} text-bec-orange  group flex h-[40px] flex-1 cursor-pointer items-center justify-between px-5 md:text-xl uppercase leading-none outline-none`}
            {...props}
        >
            {children}
            <ChevronDownIcon
                className="text-bec-orange w-8 h-8 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                aria-hidden
            />

        </Accordion.Trigger>
    </Accordion.Header>
);

const AccordionContent = ({ children, className, ...props }: any) => (
    <Accordion.Content
        className='text-white data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden md:text-lg'
        {...props}
    >
        <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
);

export default function ForYou() {
    return <section className={styles.section}>
        <h2 className={`${capture_it.className} heading`}>BEC - ЦЕ ПРО ВАС, ЯКЩО ВИ</h2>

        <div className={`${styles.bec__container}`} id="companies">
            <div className="md:ml-[271px] md:h-[270px] ">
                <div className={`${styles.bec__img} left-0`}>
                    <div className={`${styles.bec__pseudo}`}></div>
                    <img className={`${styles.bec__item}`} src="/3.png" alt="" />
                </div>

                <div className={`${styles.bec__box}`}>
                    <h2 className={`${ibm_plex_mono.className} ${styles.bec__heading}`}>Компанія</h2>
                    <p className={`${styles.bec__description}`}>
                        Партнерство з <span className="text-bec-orange font-bold"> BEC</span> є вигідним для компаній, які прагнуть залучити талановитих молодих фахівців, залучитись до волонтерської діяльності та активно впливати на розвиток студентської спільноти.
                    </p>
                </div>
            </div>
            <Accordion.Root
                className="w-full p-6"
                type="single"
                defaultValue="item-1"
                collapsible
            >

                <AccordionItem value="item-1">
                    <AccordionTrigger>Промоція бренду</AccordionTrigger>
                    <AccordionContent>Партнерство з BEC надає можливість компаніям підвищити свою впізнаваність та популярність серед молоді. Залучення до волонтерської діяльності також підвищує позитивний імідж.
                    </AccordionContent>
                </AccordionItem>


                <AccordionItem value="item-2">
                    <AccordionTrigger>Спільнота молодих інженерів</AccordionTrigger>
                    <AccordionContent>
                        Інженерні змагання залучають талановитих студентів, які проявляють інтерес до технічних наук та інновацій. Це дозволяє компаніям звернути увагу на потенційних майбутніх співробітників.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>НЕТВОРКІНГ З УЧАСНИКАМИ</AccordionTrigger>
                    <AccordionContent>
                        Після завершення випробувальної частини змагань буде проводитись нетфоркінг. Це подія під час якої студенти та компанії мають змогу неформально поспілкуватись, обмінятись ідеями та досвідом, що дозволяє налагодити звязки з молоддю та позиціонує компанію відкритою для людей.
                    </AccordionContent>
                </AccordionItem>
                <img src="/greyUnderline.svg" alt="underline" className="mt-3 w-full" />


            </Accordion.Root>
        </div>
        <div className={`${styles.bec__container}`} id="students">
            <div className="md:mr-[271px] md:h-[270px] ">

                <div className={`${styles.bec__box}`}>
                    <h2 className={`${ibm_plex_mono.className} ${styles.bec__heading}`}>Студент</h2>
                    <p className={`${styles.bec__description}`}>
                        <span className="text-bec-orange font-bold">Інженерні змагання </span>є чудовою можливістю для студентів проявити себе, поглибити свої знання, розвинути навички, збагатитися цінним досвідом та знайти нові можливості і знайомства.
                    </p>
                </div>
            </div>

            <Accordion.Root
                className="w-full p-6"
                type="single"
                defaultValue="item-1"
                collapsible
            >

                <AccordionItem value="item-1">
                    <AccordionTrigger>Практичний досвід</AccordionTrigger>
                    <AccordionContent>Участь у змаганнях надає можливість студентам збагатити інженерний досвід та навички на практиці. Вирішення реальних технічних завдань допомагає закріпити теоретичні знання та втілити власні ідеї.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>Командна робота</AccordionTrigger>
                    <AccordionContent>
                        Участь у командній роботі сприяє обміну креативними ідеями, набуттю цінного досвіду і розвитку комунікаційних навичок.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>Кар’єрний розвиток</AccordionTrigger>
                    <AccordionContent>
                        Тренінги та завдання від компанії, нетворкінг, менторство досвідчених працівників, вирішення комплексних реальних проблем - це все дозволяє набути досвід та стане хорошим стартом власного кар’єрного шляху.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Подолання страху челенджів</AccordionTrigger>
                    <AccordionContent>
                        Страх перед викликами — це річ, яка змушує багатьох талановитих студентів не проявляти себе. Завдання змагань дозволяють зіткнутися з реальними інженерними викликами та вчитися ефективно розв'язувати проблеми.
                    </AccordionContent>
                </AccordionItem>
                <img src="/greyUnderline.svg" alt="underline" className="mt-3 w-full" />


            </Accordion.Root>
            <div className={`${styles.bec__img} right-0`}>
                <div className={`${styles.bec__pseudo}`}></div>
                <img className={`${styles.bec__item}`} src="/4.png" alt="" />
            </div>
        </div>

    </section>
}