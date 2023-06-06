import { Link } from 'react-router-dom';

export const HeaderQuiz = () => {


    return (

        <header className='home-header'>

            <div>

                <Link to='/'>

                    <img
                        src={`${import.meta.env.VITE_URL_BASE}/assets/header/logo.png`}
                        alt="Logo Blue"
                        title='Logo Blue'
                    />

                </Link>

            </div>

        </header>

    );

};