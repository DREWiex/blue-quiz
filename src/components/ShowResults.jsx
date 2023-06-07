import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useReserve } from '../hooks';
import { Challenges, Product } from '../components';
import { sumValues } from '../helpers/sumValues';
import { Footer, HeaderQuiz } from '../layouts';
import '../styles/components/ShowResults.css';

export const ShowResults = () => {

  const [totalLiters, setTotalLiters] = useState(0);

  const [totalEuros, setTotalEuros] = useState(0);


  const { answers, liters, euros } = useSelector(state => state.quiz);

  const { addChallenge } = useReserve();


  useEffect(() => {

    //let totalOfLiters = Math.floor(sumValues(liters)).toLocaleString('de-DE');

    setTotalLiters(Math.floor(sumValues(liters)).toLocaleString('de-DE'));

    //let totalOfEuros = Math.floor(sumValues(euros)).toLocaleString('de-DE') * 365;

    setTotalEuros(Math.floor(sumValues(euros)).toLocaleString('de-DE') * 365);



  }, []);

  return (

    <>

      <HeaderQuiz />

      {/* SECTION RESULTS */}

      <section className='results-footprint'>

        {/* <h1 className='title'>
          Descubre tu huella hídrica
        </h1>

        <div className='firstDropImage'>

          <img
            src={`${import.meta.env.VITE_URL_BASE}/assets/images/FACEHOME.png`}
            alt="casita con carita"
            title="casa"
            className='facehome'
          />

          <h1 className='dropTitle'>
            Huella doméstica
          </h1>


          <span className='dropNumbers'>
            {totalLiters}
          </span>

          <span className='subDropTitle'>
            Litros al dia
          </span>

          <span className='average'>
            Media en España 1.350 litros al día
          </span>

          <img
            src={`${import.meta.env.VITE_URL_BASE}/assets/images/gotagrande.png`}
            alt="gotita de agua"
            title="gota"
          />
        </div>

        <div className='secondDropImage'>

          <h1 className='dropTitle2'>
            Gasto anual
          </h1>

          <span className='dropNumbers'>
            {totalEuros}
          </span>

          <span className='subDropTitle'>
            Euros al año
          </span>

          <span className='average'>
            Media en España 4.235 euros al año
          </span>

          <img
            src={`${import.meta.env.VITE_URL_BASE}/assets/images/mundito.png`}
            alt="símbolo de mundo"
            title="casa"
            className='mundito'
          />
          <img
            src={`${import.meta.env.VITE_URL_BASE}/assets/images/gotagrande.png`}
            alt="gotita de agua"
            title="gota"
          />
        </div> */}

      </section>

      <section className='results-percentages'>

        <div className='percentages-mobile'>

          <img
            src={`${import.meta.env.VITE_URL_BASE}/assets/results/percentages/mobile/percentages.png`}
            alt='Porcentaje huella hídrica genérica'
            title='Porcentaje huella hídrica genérica'
          />

        </div>

        <div className='percentages-web'>

          <img
            src={`${import.meta.env.VITE_URL_BASE}/assets/results/percentages/web/percentages.png`}
            alt='Porcentaje huella hídrica genérica'
            title='Porcentaje huella hídrica genérica'
          />

        </div>

      </section>

      <Challenges addChallenge={addChallenge} cluster='saver' />

      <Product />

      <Footer />

    </>

  );

};