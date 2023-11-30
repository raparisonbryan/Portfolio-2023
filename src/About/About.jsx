import Image from 'next/image';
import styles from './About.module.scss';
import foot1 from '../../public/assets/about/foot1.jpg';
import foot2 from '../../public/assets/about/foot2.jpg';
import musique1 from '../../public/assets/about/musique1.jpg';
import musique2 from '../../public/assets/about/musique2.jpg';
import voyage1 from '../../public/assets/about/voyage1.jpg';
import voyage2 from '../../public/assets/about/voyage2.jpg';

export default function About() {

    return (
        <>
            <section className={styles.about}>
                <div className={styles.about__header}>
                    <h2 className={styles.about__title}>Bonjour</h2>
                    <p className={styles.about__text}>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className={styles.about__content}>
                    <div className={styles.card}>
                        <div className={styles.card__imageWrapper}>
                            <div className={styles.card__image}>
                                <Image fill src={foot2} style={{objectFit:"cover"}} alt="sports"/>
                            </div>
                            <div className={styles.card__foreground}>
                                <Image fill src={foot1} style={{objectFit:"cover"}} alt="sports"/>
                            </div>
                        </div>
                        <div className={styles.card__textWrapper}>
                            <h3 className={styles.card__title}>Sports</h3>
                            <p className={styles.card__text}>J'ai pratiqué le football depuis 10 ans en club. J'ai aussi pratiqué un peu de tennis plus jeune et j'ai réussi l'exploit de faire un semi-marathon.</p>
                        </div>
                    </div>  
                    <div className={styles.card}>
                        <div className={styles.card__imageWrapper}>
                            <div className={styles.card__image}>
                                <Image fill src={musique1} style={{objectFit:"cover"}} alt="musique"/>
                            </div>
                            <div className={styles.card__foreground}>
                                <Image fill src={musique2} style={{objectFit:"cover"}} alt="musique"/>
                            </div>
                        </div>
                        <div className={styles.card__textWrapper}>
                            <h3 className={styles.card__title}>Musique</h3>
                            <p className={styles.card__text}>Je pratique la batterie depuis 10 ans, la basse et la guitare depuis 3 ans, et j'adore le rock, le jazz, la pop... Toute la musique finalement.</p>
                        </div>
                    </div>  
                    <div className={styles.card}>
                        <div className={styles.card__imageWrapper}>
                            <div className={styles.card__image}>
                                <Image fill src={voyage1} style={{objectFit:"cover"}} alt="voyages"/>
                            </div>
                            <div className={styles.card__foreground}>
                                <Image fill src={voyage2} style={{objectFit:"cover"}} alt="voyages"/>
                            </div>
                        </div>
                        <div className={styles.card__textWrapper}>
                            <h3 className={styles.card__title}>Voyages</h3>
                            <p className={styles.card__text}>J'adore découvrir de nouveaux paysages et j'ai la chance d'en avoir vu beaucoup car j'ai déjà voyagé dans plusieurs pays comme les Etats-Unis, le Canada, la Chine, Singapour et d'autres...</p>
                        </div>
                    </div>  
                </div>
            </section>
        </>
    );
}