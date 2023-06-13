import { Link } from 'react-router-dom';
import styles from '../styles/layouts/Header.module.css';

export const Header = () => {


    return (

        <header className={styles.quizHeader}>

            <div className={styles.container}>

                <Link to='/'>

                    <div>

                        <img
                            src={`${import.meta.env.VITE_URL_BASE}/assets/header/logo.png`}
                            alt="Logo Blue"
                            title='Logo Blue'
                        />

                    </div>

                    Blue

                </Link>

            </div>

        </header>

    );

};