import styles from './Projects.module.scss';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';
import immo from '../../public/assets/sites/lagent-immo.png';
import wemadeya from '../../public/assets/sites/wemadeya.png';
import pixelWar from '../../public/assets/sites/pixel-war.png';
import vamt from '../../public/assets/sites/vamt.png';
import Link from 'next/link';
import localFont from 'next/font/local'

const Recoleta = localFont({
    src: '../../public/assets/Recoleta-Black/Recoleta-Black.ttf',
    display: 'swap',
  })

export default function Projects() {

    return (
        <>
        <section className={styles.projects}>
            <div className={styles.projects__textWrapper}>
                <h2 className={styles.projects__title}>Projets</h2>
            </div>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                className={styles.slider}
                autoplay={{ delay: 5000 }}
                effect="fade"
                speed={600}
                loop={true}
                >
                <SwiperSlide className={styles.slide}>
                    <div className={styles.slide__image}>
                        <Image fill src={immo} style={{objectFit:"cover"}} alt="lagent-immo"/>
                    </div>
                    <div className={styles.slide__textWrapper}>
                        <h3 className={`${styles.slide__title} ${styles.immo}`}>L'agent immobilier</h3>
                        <p className={styles.slide__text}>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Link className={styles.slide__button} href="https://devenez.lagentimmobilier.fr/">Voir le site</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <div className={styles.slide__image}>
                        <Image fill src={wemadeya} style={{objectFit:"cover"}} alt="wemadeya"/>
                    </div>
                    <div className={styles.slide__textWrapper}>
                        <h3 className={`${Recoleta.className} ${styles.slide__title}`}>We Made Ya</h3>
                        <p className={styles.slide__text}>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Link className={styles.slide__button} href="https://wemadeya.fr/">Voir le site</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <div className={styles.slide__image}>
                        <Image fill src={pixelWar} style={{objectFit:"cover"}} alt="pixel-war"/>
                    </div>
                    <div className={styles.slide__textWrapper}>
                        <h3 className={styles.slide__title}>Pixel War</h3>
                        <p className={styles.slide__text}>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Link className={styles.slide__button} href="https://devenez.lagentimmobilier.fr/">Voir mon github</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <div className={styles.slide__image}>
                        <Image fill src={vamt} style={{objectFit:"cover"}} alt="vamt"/>
                    </div>
                    <div className={styles.slide__textWrapper}>
                        <h3 className={styles.slide__title}>Vam't</h3>
                        <p className={styles.slide__text}>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Link className={styles.slide__button} href="https://devenez.lagentimmobilier.fr/">Voir mon github</Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
        </>
    );
    }





