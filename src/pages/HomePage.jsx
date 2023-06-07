import { Link } from 'react-router-dom';
import { FooterQuiz, Header } from '../layouts';
import '../styles/pages/HomePage.css';

export const HomePage = () => {


    return (

        <>

            <Header />

            <section className="quiz-intro">

                <div className="gota">

                    <img
                        src={`${import.meta.env.VITE_URL_BASE}/assets/quiz/gota.png`}
                        alt="Dibujo de una gota de agua"
                        title="Dibujo de una gota de agua"
                    />
                    
                </div>

                <div>

                    <h1> Haz que cada gota cuente. </h1>

                    <p> Conoce cuánta agua gastas y aprende a ser más sostenible. </p>

                </div>

                <Link to='/quiz'> Comenzar </Link>

            </section>

            <FooterQuiz />

        </>

    );

};