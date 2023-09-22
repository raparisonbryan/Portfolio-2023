import styles from './Hero.module.scss';

export default function Hero() {

    return (
        <>
            <section className={styles.hero}>
                <h1 className={styles.hero__h1}>Bryan Raparison</h1>
                <h2 className={styles.hero__h2}>Développeur web</h2>
            </section>
        </>
    );
}