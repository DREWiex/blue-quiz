import styles from '../styles/layouts/Footer.module.css';

export const Footer = () => {


    return (

        <footer className={styles.container}>

            <section className={styles.firstSection}>

                <p> <span> Reto BLUE </span>, sé el cambio que quieres ver en el mundo </p>

                <div>
                    <img
                        src={`${import.meta.env.VITE_URL_BASE}/assets/footer/spain.png`}
                        alt='Logo Ministerio de Ciencia e Innovación del Gobierno de España'
                        title='Logo Ministerio de Ciencia e Innovación del Gobierno de España'
                    />
                </div>

            </section>

            <nav className={styles.secondSection}>

                <section className={styles.logo}>

                    <div>

                        <img src={`${import.meta.env.VITE_URL_BASE}/assets/footer/logo.png`} alt='Logo Blue' title='Logo Blue' />

                        <p> Blue </p>

                    </div>

                    <p> La tecnología que te enseña a ahorrar agua </p>

                </section>

                <section className={styles.rrss}>

                    <div>

                        <img src={`${import.meta.env.VITE_URL_BASE}/assets/footer/ig.png`} alt='Logo Instagram' title='Logo Instagram' />

                    </div>

                    <div>

                        <img src={`${import.meta.env.VITE_URL_BASE}/assets/footer/fb.png`} alt='Logo Facebook' title='Logo Facebook' />

                    </div>

                    <div>

                        <img src={`${import.meta.env.VITE_URL_BASE}/assets/footer/tw.png`} alt='Logo Twitter' title='Logo Twitter' />

                    </div>

                    <div>

                        <img src={`${import.meta.env.VITE_URL_BASE}/assets/footer/in.png`} alt='Logo LinkedIn' title='Logo LinkedIn' />

                    </div>

                </section>

            </nav>

            <section className={styles.thirdSection}>

                <p> 2023 SmartBlue Technology Inc. Todos los derechos reservados </p>

                <p> Made with <span> love </span> by a Great Team </p>

            </section>

        </footer>

    );

};