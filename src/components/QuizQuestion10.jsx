import { useDispatch } from 'react-redux';
import { findQuestion } from '../helpers';
import { questions } from '../data';
import { setAnswer10 } from '../store/slices/quizSlice';
import styles from '../styles/components/multipleQuestions.module.css';

export const QuizQuestion10 = ({ nextPage }) => {

    const dispatch = useDispatch();

    const { question, description, answers, img } = findQuestion(questions, 10); // destructuración de las propiedades 'question', 'description', 'answers' e 'img' del objeto que devuelve la función


    const handlePaginate = ({ target }) => {



    }; //!FUNC-HANDLEPAGINATE


    const handleAnswer = ({ target }) => {

        const answer = target.value; // 'value' de la respuesta del usuario

        const liters = Number(target.dataset.liters); // consumo medido en litros de agua/día según la respuesta de usuario

        const euros = Number(target.dataset.euros); // gasto medido en euros por consumo litros/día según la respuesta de usuario

        const pixels = Number(target.dataset.pixels); // píxeles en los que aumenta o disminuye el tamaño de la ola en función de la respuesta del usuario

        dispatch(setAnswer10({ answer, liters, euros, pixels }));

        nextPage();

    }; //!FUNC-HANDLEANSWER


    return (

        <>

            <div className={styles.container}>

                <header>

                    <h2> {question} </h2>

                    <div className={styles.hidden}>

                        <img
                            src={`${import.meta.env.VITE_URL_BASE}${img}`}
                            alt="Dos personas junto a un árbol recogiendo las hojas que cayeron al suelo"
                            title="Dos personas junto a un árbol recogiendo las hojas que cayeron al suelo"
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
                                    onClick={handleAnswer}
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