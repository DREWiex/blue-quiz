import { useDispatch } from 'react-redux';
import { findQuestion } from '../helpers';
import { questions } from '../data'
import { setAnswer8 } from '../store/slices/quizSlice';
import styles from '../styles/components/quiz/multipleQuestions.module.css';

export const QuizQuestion8 = ({ nextPage }) => {

    const dispatch = useDispatch();

    const { question, description, answers, img } = findQuestion(questions, 8);


    const handlePaginate = ({ target }) => {



    }; //!FUNC-HANDLEPAGINATE


    const handleTimes = ({ target }) => {

        const answer = target.value; // la respuesta del usuario

        const liters = Number(target.dataset.liters); // consumo medido en litros de agua/día según la respuesta de usuario

        const euros = Number(target.dataset.euros); // gasto medido en euros por consumo litros/día según la respuesta de usuario

        const pixels = Number(target.dataset.pixels); // píxeles en los que aumenta o disminuye el tamaño de la ola en función de la respuesta del usuario

        dispatch(setAnswer8({ answer, liters, euros, pixels }));

        nextPage();

    }; //!FUNC-HANDLETIMES


    return (

        <>

            <div className={styles.container}>

                <header>

                    <h2> {question} </h2>

                    <div className={styles.hidden}>

                        <img
                            src={`${import.meta.env.VITE_URL_BASE}${img}`}
                            alt="Una madre utilizando la lavadora con su hija"
                            title="Una madre utilizando la lavadora con su hija"
                        />

                    </div>

                </header>

                <section>

                    <nav>

                        {
                            description.map(item => (

                                <article
                                    key={item.text}
                                    className={styles.navButtons}
                                >

                                    <button
                                        onClick={handlePaginate}
                                    >

                                        <img
                                            id={item.question_id}
                                            src={`${import.meta.env.VITE_URL_BASE}${item.icon}`}
                                            alt={item.text}
                                            title={item.text}
                                        />

                                    </button>

                                    <p> {item.text} </p>

                                </article>

                            ))
                        }

                    </nav>

                    {
                        answers.map(item => (

                            <article
                                key={item.answer_id}
                                className={styles.answersButtons}
                            >

                                <button
                                    id={item.answer_id}
                                    data-liters={item.liters}
                                    data-euros={item.euros}
                                    data-pixels={item.pixels}
                                    value={item.answer}
                                    onClick={handleTimes}
                                >

                                    <img
                                        src={`${import.meta.env.VITE_URL_BASE}${item.icon}`}
                                        alt="Icono"
                                        title="Icono"
                                    />

                                    {item.answer} {/* valor que recibirá el endpoint */}

                                </button>

                            </article>

                        ))
                    }

                </section>

            </div>

        </>

    );

};