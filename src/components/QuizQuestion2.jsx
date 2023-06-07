import { useDispatch, useSelector } from 'react-redux';
import { setAnswer2 } from '../store/slices/quizSlice';
import { findQuestion } from '../helpers';
import { questions } from '../data';

export const QuizQuestion2 = ({ nextPage }) => {

    const { answers, person } = useSelector((state) => state.quiz);

    const dispatch = useDispatch();

    const { question, description, icon, img } = findQuestion(questions, 2);


    const handleClick = ({ target }) => {

        switch (target.id) {

            case 'sumar':
                answers.quiz2 < 15 && dispatch(setAnswer2({
                    answer: answers.quiz2 + 1,
                    operation: target.id
                }));
                break;

            case 'restar':
                answers.quiz2 > 1 && dispatch(setAnswer2({
                    answer: answers.quiz2 - 1,
                    operation: target.id
                }));
                break;
        };

    };


    return (

        <>

            <div className='quiz-container'>

                <header>

                    <h2> {question} </h2>

                    <p> {description} </p>

                    <div className='hidden'>

                        <img
                            src={`${import.meta.env.VITE_URL_BASE}${img}`}
                            alt="Una familia feliz"
                            title="Una familia feliz"
                        />

                    </div>

                </header>

                <section className='person-container'>

                    <div>

                        <button onClick={handleClick}>

                            <img
                                id="restar"
                                src={`${import.meta.env.VITE_URL_BASE}/assets/quiz/02/subtract.png`}
                                alt="Signo menos"
                                title="Signo menos"
                            />

                        </button>

                        <div className='person-wrapper'>

                            {
                                person.map((item, index) => (

                                    <div
                                        key={index}
                                        className='person'
                                    >

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

                    <button
                        onClick={nextPage}
                    >
                        Continuar
                    </button>

                </section>

            </div>

        </>

    );

};