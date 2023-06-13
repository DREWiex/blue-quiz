import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { sumValues } from "../helpers";
import styles from '../styles/components/Footprint.module.css';

export const Footprint = () => {

    const [totalLiters, setTotalLiters] = useState(0);

    const [totalEuros, setTotalEuros] = useState(0);


    const { liters, euros } = useSelector(state => state.quiz);


    useEffect(() => {
    
        setTotalLiters(Math.floor(sumValues(liters)).toLocaleString('de-DE'));
        
        setTotalEuros(Math.floor(sumValues(euros)).toLocaleString('de-DE') * 365);
    
      }, []);


    return (

        <>

            <section className={styles.footprint}>

                <h1> Descubre tu huella hídrica </h1>

                <article>

                    <h2> Huella doméstica </h2>

                    <p className={styles.numbers}> {totalLiters} </p>

                    <p> Litros al día </p>

                    <p> Media en España: 1.350 litros al día </p>

                </article>

                <article>

                    <h2> Gasto anual </h2>

                    <p className={styles.numbers}> {totalEuros} </p>

                    <p> Euros al año </p>

                    <p> Media en España: 4.235 euros al año </p>

                </article>

            </section>

        </>

    );

};