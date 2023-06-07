import Wave from 'react-wavify';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { changeWaveSize, sumValues } from '../../helpers';

export const Wavify = () => {

    const { pixels } = useSelector(state => state.quiz);
    

    useEffect(() => {
  
      const pixelsAcc = sumValues(pixels); // Suma los valores acumulados del estado 'pixels'.
  
      changeWaveSize(pixelsAcc); // Aumenta o disminuye el tamaño de la ola en función de la respuesta del usuario.
  
    }, [pixels]);


    return (

        <section>

            <Wave className="first-wave"
                fill='#5BBFDE'
                paused={false}
                options={{
                    height: 10,
                    amplitude: 15,
                    speed: 0.15,
                    points: 4
                }}
            />

            <Wave className='second-wave'
                fill='#9CF0FD'
                paused={false}
                options={{
                    height: 5,
                    amplitude: 20,
                    speed: 0.25,
                    points: 2
                }}
            />

            <div className='wave-fill'>
                {/* relleno de la parte baja de las olas */}
            </div>

        </section>

    );

};