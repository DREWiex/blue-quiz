import { useDispatch } from 'react-redux';
import { questions } from '../data';
import { findQuestion } from '../helpers';
import { setAnswer3 } from '../store/slices/quizSlice';
import styles from '../styles/components/formQuestions.module.css';

export const QuizQuestion3 = ({ nextPage }) => {

  const dispatch = useDispatch();

  const { question, description, answers, img } = findQuestion(questions, 3);

  const { answer: provinces } = answers;


  const handleSubmit = (ev) => {

    ev.preventDefault();

  }; //!FUNC-HANDLESUBMIT


  const handleChange = ({ target }) => {

    dispatch(setAnswer3({ answer: target.value }));

    nextPage();

  }; //!FUNC-HANDLECHANGE


  return (

    <>

      <div className={styles.container}>

        <header>

          <h2> {question} </h2>

          <p> {description} </p>

          <div className={styles.hidden}>

            <img
              src={`${import.meta.env.VITE_URL_BASE}${img}`}
              alt="Un hombre de pie frente a un mapamundi"
              title="Un hombre de pie frente a un mapamundi"
            />

          </div>

        </header>

        <form onSubmit={handleSubmit}>

          <select id='provinces' onChange={handleChange}>

            {
              provinces.map((item) => (

                <option
                  key={item}
                  value={item != 'SELECCIONA' ? item : null}
                >
                  {item}
                </option>

              ))
            }

          </select>

        </form>

      </div>

    </>

  );

};