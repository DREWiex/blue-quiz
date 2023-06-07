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

                <h1 className='title'>
                    Descubre tu huella hídrica
                </h1>

                <div className='firstDropImage'>

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

                </div>

            </section>

        </>

    );

};