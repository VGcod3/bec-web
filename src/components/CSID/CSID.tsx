'use client'
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ibm_plex_mono, ibm_plex_mono_bold } from "@/fonts";
import styles from './CSID.module.scss';

import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function CSID() {
    const [category, setCategory] = useState<'id' | 'cs'>('id');

    type modaldatatype = {
        'id': {
            name: string,
            descr: string,
            stages: {
                'Перший Етап': string,
                'Другий Eтап': string,
                'Третій Етап': string,
            }
        },
        'cs':
        {
            name: string,
            descr: string,
            stages: {
                'Перший Етап': string,
                'Другий Eтап': string,
                'Третій Етап': string,
            }
        }
    }

    const data = {
        'id': {
            name: 'Innovative Design',
            descr: 'Це завдання, метою якого є створення інноваційного рішення для розв’язання актуальної проблеми.',
            stages: {
                'Перший Етап': 'придумати концепт нового або покращеного наявного прототипу приладу, який розв’язує певну проблему, описану в завданні.',
                'Другий етап': `створити комп'ютерну модель цього прототипу або сконструювати його з підручних матеріалів та інструментів.`,
                'Третій Етап': `представити свій винахід, розповівши як саме за допомогою нього можна розв'язати задану проблему та як імплементувати його на ринок`,
            }
        },
        'cs':
        {
            name: 'Case Study',
            descr: 'Це завдання, суть якого полягає в розв’язанні теоретичної проблеми.',
            stages: {
                'Перший Етап': ' проаналізувати, дослідити й обміркувати інформацію надану в завданні.',
                'Другий етап': `знайти рішення, що відповідає сценарію з реальними ресурсами без конструювання будь-якого пристрою чи створення комп’ютерної моделі`,
                'Третій Етап': `представити його перед суддями, учасниками, організаторами та партнерами змагань.`,
            }
        }
    }

    return (
        <section className=" mx-auto max-w-7xl w-full p-10">
            <Dialog.Root>
                <div className="flex flex-col lg:flex-row justify-between w-full gap-14 m-6 my-12">

                    <div className="flex-1 flex flex-col gap-6">
                        <div className="flex">
                            <img src="/arrow.svg" alt="arrow" className="relative -left-6" />
                            <h3 className={`${ibm_plex_mono.className} ${styles.csid_h3}`}>Case Study</h3>
                        </div>
                        <div className="flex flex-col w-full gap-3">
                            <img src="/underline.svg" alt="underline" />
                            <p className="text-lg">Це категорія, метою якого є розроблення розв’язання теоретичної проблеми.</p>
                            <Dialog.Trigger asChild>
                                <button className={styles.button} onClick={() => setCategory('cs')}>
                                    <span className={`${ibm_plex_mono.className} ${styles.stages}`}>Етапи</span>
                                    <img src="/darrow.svg" alt="darrow" />
                                </button>
                            </Dialog.Trigger>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-6">
                        <div className="flex">
                            <img src="/arrow.svg" alt="arrow" className="relative -left-6" />
                            <h3 className={`${ibm_plex_mono.className} ${styles.csid_h3}`}>Innovative Design</h3>
                        </div>
                        <div className="flex flex-col w-full gap-3">
                            <img src="/underline.svg" alt="underline" />
                            <p className="text-lg">Це категорія, у якій метою є створення інноваційного рішення
                                для розв’язання актуальної проблеми.
                            </p>
                            <Dialog.Trigger asChild>
                                <button className={styles.button} onClick={() => setCategory('id')}>
                                    <span className={`${ibm_plex_mono.className} ${styles.stages}`}>Етапи</span>
                                    <img src="/darrow.svg" alt="darrow" />
                                </button>
                            </Dialog.Trigger>
                        </div>
                    </div>
                </div>
                <Dialog.Portal>
                    <Dialog.Overlay className='fixed w-full h-full top-0 left-0 z-40 bg-black bg-opacity-20 backdrop-blur-[2px]' />

                    <Dialog.Content className="fixed top-1/2  left-1/2 box-border overflow-y-scroll max-h-[90vh] max-w-[650px] w-full z-50 translate-x-[-50%] translate-y-[-50%] rounded bg-bec-svg p-[25px] focus:outline-none bg-neutral-950">

                        <Dialog.Title className="w-full relative flex justify-center">

                            <Dialog.Close asChild>
                                <button className="inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none  focus:outline-none absolute right-3">
                                    <Cross1Icon />
                                </button>
                            </Dialog.Close>
                            <h3 className={`${ibm_plex_mono_bold.className} text-bec-orange text-xl`}>{data[category].name}</h3>
                        </Dialog.Title>
                        <Dialog.Description className="mt-2 flex flex-col w-4/5 mx-auto">
                            <p className="text-center font-mono text-sm mt-2">
                                {data[category].descr}
                            </p>
                            <ul className="list-disc mt-6 flex flex-col gap-3">
                                <li>
                                    <span className="font-bold">
                                        Перший етап
                                    </span>
                                    {` – ${data[category].stages["Перший Етап"]}`}
                                </li>
                                <li>
                                    <span className="font-bold">
                                        Другий етап
                                    </span>
                                    {` – ${data[category].stages["Другий етап"]}`}
                                </li>
                                <li>
                                    <span className="font-bold">
                                        Третій етап
                                    </span>
                                    {` – ${data[category].stages["Третій Етап"]}`}
                                </li>
                            </ul>
                        </Dialog.Description>
                    </Dialog.Content>

                </Dialog.Portal>
            </Dialog.Root>
        </section>
    )
}