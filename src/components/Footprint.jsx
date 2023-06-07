import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { sumValues } from "../helpers";

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

            <section className='results-footprint'>

                <h1> Descubre tu huella hídrica </h1>

                <div>

                    <h2> Huella doméstica </h2>

                    <p> {totalLiters} </p>

                    <p> Litros al día </p>

                    <p> Media en España: 1.350 litros al día </p>

                </div>

                <div>

                    <h2> Gasto anual </h2>

                    <p> {totalEuros} </p>

                    <p> Euros al año </p>

                    <p> Media en España: 4.235 euros al año </p>

                </div>

            </section>

        </>

    );

};