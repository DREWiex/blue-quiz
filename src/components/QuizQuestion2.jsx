import { useDispatch, useSelector } from 'react-redux';
import { setAnswer2 } from '../store/slices/quizSlice';
import { findQuestion } from '../helpers';
import { questions } from '../data';
import styles from '../styles/components/QuizQuestion2.module.css';

export const QuizQuestion2 = ({ nextPage }) => {

    const { answers, person } = useSelector((state) => state.quiz);

    const dispatch = useDispatch();

    const { question, description, icon, img } = findQuestion(questions, 2);


    const handleClick = ({ target }) => {

        switch (target.id) {

            case 'sumar':
                answers.quiz2 < 12 && dispatch(setAnswer2({ // Límite máximo de respuesta: 12 personas
                    answer: answers.quiz2 + 1,
                    operation: target.id
                }));
                break;

            case 'restar':
                answers.quiz2 > 1 && dispatch(setAnswer2({ // Límite mínimo de respuesta: 1 persona
                    answer: answers.quiz2 - 1,
                    operation: target.id
                }));
                break;
        };

    };


    return (

        <>

            <div className={styles.container}>

                <header>

                    <h2> {question} </h2>

                    <p> {description} </p>

                    <div className={styles.hidden}>

                        <img
                            src={`${import.meta.env.VITE_URL_BASE}${img}`}
                            alt="Una familia feliz"
                            title="Una familia feliz"
                        />

                    </div>

                </header>

                <section>

                    <div>

                        <button onClick={handleClick}>

                            <img
                                id="restar"
                                src={`${import.meta.env.VITE_URL_BASE}/assets/quiz/02/subtract.png`}
                                alt="Signo menos"
                                title="Signo menos"
                            />

                        </button>

                        <div className={styles.wrapper}>

                            {
                                person.map((item, index) => (

                                    <div key={index}>

                                        <img
                                            src={`${import.meta.env.VITE_URL_BASE}${icon}`}
                                            alt="Icono de persona"
                                            title='Icono de persona'
                                        />

                                    </div>

                                ))
                            }

                        </div>

                        <button onClick={handleClick}>

                            <img
                                id="sumar"
                                src={`${import.meta.env.VITE_URL_BASE}/assets/quiz/02/add.png`}
                                alt="Signo más"
                                title="Signo más"
                            />

                        </button>

                    </div>

                    <button onClick={nextPage}> Continuar </button>

                </section>

            </div>

        </>

    );

};