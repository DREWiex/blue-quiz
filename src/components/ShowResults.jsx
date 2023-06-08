import { useReserve } from '../hooks';
import { Challenges, Footprint, Product } from '../components';
import '../styles/components/ShowResults.css';

export const ShowResults = () => {

  const { addChallenge } = useReserve();

  
  return (

    <>

      <Footprint />

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

      <Challenges addChallenge={addChallenge} cluster='spender' />

      <Product />

    </>

  );

};