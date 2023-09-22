import styles from './Colors.module.scss';

export default function Colors() {

    return (
        <>
            <div className={`${styles.color_square} ${styles.violet}`}></div>
            <div className={`${styles.color_square} ${styles.green}`}></div>
            <div className={`${styles.color_square} ${styles.blue}`}></div>
        </>
    );
}