import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { sumValues } from '../../helpers';

export const LiterCounter = () => {

  const [litersAcc, setLitersAcc] = useState(0);

  const { liters } = useSelector((state) => state.quiz);


  useEffect(() => {

    const lts = sumValues(liters);

    setLitersAcc(lts);

  }, [liters]);


  return (

    <section className='liter-counter'>

      <h3> Huella del agua </h3>

      <div>

        <p className='total-liters-number'> {litersAcc.toLocaleString('de-DE', { smaximumSignificantDigits: 2 })} </p>

        <p className='total-liters-letter'> Litros al día </p>

      </div>

    </section>

  );

};