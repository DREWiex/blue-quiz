import { useDispatch } from 'react-redux';
import { setAnswer1 } from '../store/slices/quizSlice';
import { findQuestion } from '../helpers';
import { questions } from '../data';
import styles from '../styles/components/SingleQuestions.module.css';

export const QuizQuestion1 = ({ nextPage }) => {

  const dispatch = useDispatch();

  const { question, description, answers, img } = findQuestion(questions, 1);


  const handleAgeRange = ({ target }) => {

    dispatch(setAnswer1({ answer: target.value }));

    nextPage();

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
              alt="Una familia"
              title="Un familia"
            />

          </div>

        </header>

        <section>

          {
            answers.map(item => (

              <div key={item.answer_id}>

                <button
                  id={item.answer_id}
                  value={item.answer}
                  onClick={handleAgeRange}
                >

                  <img
                    src={`${import.meta.env.VITE_URL_BASE}${item.icon}`}
                    alt="Icono persona"
                    title="Icono persona"
                  />

                  {item.answer} {/* valor que recibirá el endpoint */}
                  
                </button>

              </div>

            ))
          }

        </section>

      </div>

    </>

  );

};