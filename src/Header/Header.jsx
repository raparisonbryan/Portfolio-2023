import styles from './Header.module.scss';

export default function Header() {

    return (
        <>
            <header className={styles.navbar}>
                <div className={styles.navbar__container}>
                    <div className={styles.navbar__logo}>
                        <a href="/">Bryan Raparison</a>
                    </div>
                    <div className={styles.navbar__nav}>
                        <a className={styles.navbar__link} href="/">Compétences</a>
                        <a className={styles.navbar__link} href="/">Travaux</a>
                        <a className={styles.navbar__link} href="/">A propos</a>
                        <a className={styles.navbar__link} href="/">contact</a>
                    </div>
                    <div className={styles.navbar__button}>
                        <a href="/">Résumé</a>
                    </div>
                </div>
            </header>
        </>
    );
}