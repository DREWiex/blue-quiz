import { useDispatch } from 'react-redux';
import { findQuestion } from '../helpers';
import { questions } from '../data';
import { setAnswer5 } from '../store/slices/quizSlice';
import styles from '../styles/components/quiz/singleQuestions.module.css';

export const QuizQuestion5 = ({ nextPage }) => {

  const dispatch = useDispatch();

  const { question, description, answers, img } = findQuestion(questions, 5); // destructuración de las propiedades 'question', 'description', 'answers' e 'img' del objeto que devuelve la función


  const handleAnswer = ({ target }) => {

    const answer = target.value; // la respuesta del usuario

    const liters = Number(target.dataset.liters); // consumo medido en litros de agua/día según la respuesta de usuario

    const euros = Number(target.dataset.euros); // gasto medido en euros por consumo litros/día según la respuesta de usuario

    const pixels = Number(target.dataset.pixels); // píxeles en los que aumenta o disminuye el tamaño de la ola en función de la respuesta del usuario

    dispatch(setAnswer5({ answer, liters, euros, pixels }));

    nextPage() // avanza a la siguiente pregunta automáticamente

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
              alt="Un hombre tomando una ducha"
              title="Un hombre tomando una ducha"
            />

          </div>

        </header>

        <section>

          {
            answers.map(item => (

              <div
                key={item.answer_id}
              >

                <button
                  key={item.answer_id}
                  id={item.answer_id}
                  data-liters={item.liters}
                  data-euros={item.euros}
                  data-pixels={item.pixels}
                  value={item.answer}
                  onClick={handleAnswer}
                >

                  <img
                    src={`${import.meta.env.VITE_URL_BASE}${item.icon}`}
                    alt="Icono de un reloj"
                    title="Icono de un reloj"
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