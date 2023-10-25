import { play } from "@/fonts";
import styles from './Footer.module.scss';
import Image from "next/image";

export default function Footer() {
    return <footer className={styles.footer}>
        <Image width={200} height={100} src="/BestLogo.svg" alt="best logo" className='w-1/6 h-auto' />

        <div className="socials flex gap-3 lg:gap-5">
            <a href="https://www.facebook.com/BEST.Lviv/">
                <Image width={80} height={80} src="/facebook.svg" alt="facebook" className={styles.icon} />
            </a>
            <a href="https://www.instagram.com/best_lviv/">
                <Image width={80} height={80} src="/instagram.svg" alt="instagram" className={styles.icon} />
            </a>
            <a href="https://www.linkedin.com/company/bestlviv/">
                <Image width={80} height={80} src="/linkedin.svg" alt="linkedin" className={styles.icon} />
            </a>
            <a href="https://t.me/bestlviv">
                <Image width={80} height={80} src="/telegram.svg" alt="telegram" className={styles.icon} />
            </a>
        </div>

        <p className={`${play.className} text-3xl my-0`}>2023</p>
    </footer>
}