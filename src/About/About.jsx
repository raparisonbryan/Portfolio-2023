import styles from './About.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faCar, faMusic, faPlane, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import React, { useRef } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation]);

export default function About() {

    const swiperRef = useRef(null);

    const goToSlide = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };


    return (
        <>
            <section className={styles.about}>
                <div className={styles.about__col5}>
                    <h2 className={styles.about__title}>Bonjour</h2>
                    <p className={styles.about__text}>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className={styles.about__buttonContainer}>
                        <button className={styles.about__buttonWrapper} onClick={() => goToSlide(0)}>
                            <div className={styles.about__button}>
                                <FontAwesomeIcon icon={faFutbol}/>
                            </div>
                        </button>
                        <button className={styles.about__buttonWrapper} onClick={() => goToSlide(1)}>
                            <div className={styles.about__button}>
                                <FontAwesomeIcon icon={faCar}/>
                            </div>
                        </button>
                        <button className={styles.about__buttonWrapper} onClick={() => goToSlide(2)}>
                            <div className={styles.about__button}>
                                <FontAwesomeIcon icon={faMusic}/>
                            </div>
                        </button>
                        <button className={styles.about__buttonWrapper} onClick={() => goToSlide(3)}>
                            <div className={styles.about__button}>
                                <FontAwesomeIcon icon={faPlane}/>
                            </div>
                        </button>
                    </div>
                </div>
                <div className={styles.about__col7}>
                <Swiper ref={swiperRef} navigation>
                    <SwiperSlide>Slide 1 (Futbol)</SwiperSlide>
                    <SwiperSlide>Slide 2 (Car)</SwiperSlide>
                    <SwiperSlide>Slide 3 (Music)</SwiperSlide>
                    <SwiperSlide>Slide 4 (Plane)</SwiperSlide>
                </Swiper>
                </div>
            </section>
        </>
    );
}