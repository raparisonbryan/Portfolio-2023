import styles from './Skills.module.scss';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import next from '../../public/assets/logo/next.png';
import sass from '../../public/assets/logo/sass.png';
import tailwind from '../../public/assets/logo/tailwind.png';
import webflow from '../../public/assets/logo/webflow.png';
import node from '../../public/assets/logo/node.png';
import express from '../../public/assets/logo/express.png';
import mongodb from '../../public/assets/logo/mongodb.png';
import mysql from '../../public/assets/logo/mysql.png';
import notion from '../../public/assets/logo/notion.png';
import figma from '../../public/assets/logo/figma.png';
import wordpress from '../../public/assets/logo/wordpress.png';
import agile from '../../public/assets/logo/agile.png';

function animateValue(id, start, end, duration) {
    let current = start;
    let increment = end > start ? 1 : -1;
    let obj = document.getElementById(id);
    let totalSteps = Math.abs(end - start);
    let stepDuration = duration / totalSteps;

    // Une fonction récursive pour mettre à jour le nombre
    const updateNumber = () => {
        current += increment;
        obj.innerHTML = current;

        // Calcul du pourcentage restant
        let remaining = Math.abs(end - current) / totalSteps;
        let remainingDuration = stepDuration + remaining * stepDuration * 2;

        if ((increment > 0 && current < end) || (increment < 0 && current > end)) {
            setTimeout(updateNumber, remainingDuration);
        }
    };

    updateNumber();
}




export default function Skills() {

    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    animateValue("year-2025", 1980, 2025, 1000);
                    animateValue("year-2023", 2002, 2023, 1000);
                    animateValue("year-2022", 1970, 2022, 1000);
                    animateValue("year-2020", 2005, 2020, 1000);
    
                    observer.unobserve(sectionRef.current);
                }
            },
            { threshold: 0.1 } 
        );
    
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
    
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    
    return (
        <>
        <section className={styles.skills}>
            <div className={styles.skills__content}>
                <div className={styles.skills__textWrapper}>
                    <div className={styles.skills__wrapper}>
                        <h2 className={styles.skills__title}>Compétences</h2>
                        <p className={styles.skills__text}>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div ref={sectionRef} className={styles.skills__wrapper}>
                        <div id='bar'>
                            <div id="line"></div>
                            <div className={styles.greyLine}></div>
                            <div className={styles.progressItem}>
                                <span className={styles.mask}></span>
                                <span className={styles.point}></span>
                            </div>
                            <div className={styles.progressItem}>
                                <span className={styles.mask}></span>
                                <span className={styles.point}></span>
                            </div>
                            <div className={styles.progressItem}>
                                <span className={styles.mask}></span>
                                <span className={styles.point}></span>
                            </div>
                            <div className={styles.progressItem}>
                                <span className={styles.mask}></span>
                                <span className={styles.point}></span>
                            </div>
                        </div>
                        <div className={styles.formation}>
                            <h3 className={styles.year} id="year-2025">2025</h3>
                            <div className={styles.formation__text}>
                                <p>Mastère Expert en développement web</p>
                                <p>Ynov Campus Lyon</p>
                            </div>
                        </div>
                        <div className={styles.formation}>
                            <h3 className={styles.year} id="year-2023">2023</h3>
                            <div className={styles.formation__text}>
                                <p>Bachelor 3 Informatique</p>
                                <p>Ynov Campus Lyon</p>
                            </div>
                        </div>
                        <div className={styles.formation}>
                            <h3 className={styles.year} id="year-2022">2022</h3>
                            <div className={styles.formation__text}>
                                <p>DUT informatique</p>
                                <p>IUT Lyon 1</p>
                            </div>
                            
                        </div>
                        <div className={styles.formation}>
                            <h3 className={styles.year} id="year-2020">2020</h3>
                            <div className={styles.formation__text}>
                                <p>Baccalauréat Série S | Mention Bien</p>
                                <p>Antananarivo, Madagascar</p>
                            </div>                    
                        </div>
                    </div>
                </div>
                <div className={styles.skills__contentWrapper}>
                    <div className={styles.card}>
                        <h3>Front-end</h3>
                        <div className={styles.card__logoWrapper}>
                            <div className={styles.card__content}>
                                <div className={styles.card__logo}>
                                    <Image fill src={next} style={{objectFit:"cover"}} alt="next"/>
                                </div>
                                <p className={styles.card__text}>Next.js</p>
                            </div>
                            <div className={styles.card__content}>
                                <div className={styles.card__logo}>
                                    <Image fill src={sass} style={{objectFit:"cover"}} alt="sass"/>
                                </div>
                                <p className={styles.card__text}>Sass</p>
                            </div>
                            <div className={styles.card__content}>
                                <div className={styles.card__logo}>
                                    <Image fill src={tailwind} style={{objectFit:"cover"}} alt="tailwind"/>
                                </div>
                                <p className={styles.card__text}>Tailwind</p>
                            </div>
                            <div className={styles.card__content}>
                                <div className={styles.card__logo}>
                                    <Image fill src={webflow} style={{objectFit:"cover"}} alt="webflow"/>
                                </div>
                                <p className={styles.card__text}>Webflow</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <h3>Back-end</h3>
                        <div className={styles.card__logoWrapper}>
                            <div className={styles.card__content}>
                                <div className={styles.card__logo}>
                                    <Image fill src={node} style={{objectFit:"cover"}} alt="node.js"/>
                                </div>
                                <p className={styles.card__text}>Node.js</p>
                            </div>
                            <div className={styles.card__content}>
                                <div className={styles.card__logo}>
                                    <Image fill src={express} style={{objectFit:"cover"}} alt="express.js"/>
                                </div>
                                <p className={styles.card__text}>Express.js</p>
                            </div>
                            <div className={styles.card__content}>
                                <div className={styles.card__logo}>
                                    <Image fill src={mongodb} style={{objectFit:"cover"}} alt="mongodb"/>
                                </div>
                                <p className={styles.card__text}>MongoDB</p>
                            </div>
                            <div className={styles.card__content}>
                                <div className={styles.card__logo}>
                                    <Image fill src={mysql} style={{objectFit:"cover"}} alt="mysql"/>
                                </div>
                                <p className={styles.card__text}>MySQL</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <h3>Autre</h3>
                        <div className={styles.card__logoWrapper}>
                            <div className={styles.card__content}>
                                <div className={styles.card__logo}>
                                    <Image fill src={notion} style={{objectFit:"cover"}} alt="notion"/>
                                </div>
                                <p className={styles.card__text}>Notion</p>
                            </div>
                            <div className={styles.card__content}>
                                <div className={styles.card__logo}>
                                    <Image fill src={figma} style={{objectFit:"cover"}} alt="figma"/>
                                </div>
                                <p className={styles.card__text}>Figma</p>
                            </div>
                            <div className={styles.card__content}>
                                <div className={styles.card__logo}>
                                    <Image fill src={wordpress} style={{objectFit:"cover"}} alt="Wordpress"/>
                                </div>
                                <p className={styles.card__text}>Wordpress</p>
                            </div>
                            <div className={styles.card__content}>
                                <div className={styles.card__logo}>
                                    <Image fill src={agile} style={{objectFit:"cover"}} alt="agile"/>
                                </div>
                                <p className={styles.card__text}>Méthode</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}