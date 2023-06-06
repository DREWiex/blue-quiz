import { Link } from 'react-router-dom';
import '../styles/layouts/HeaderQuiz.css';

export const HeaderQuiz = () => {


    return (

        <header className='header-quiz'>

            <div>

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