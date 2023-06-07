import '../styles/components/Product.css';

export const Product = () => {

    
    return (

        <>
            <section className='results-product'>

                <h2> Ahorra en casa hasta un 40% </h2>

                <div className='results-container'>

                    <div className='results-product-img'>

                        <img
                            src={`${import.meta.env.VITE_URL_BASE}/assets/results/product.png`}
                            alt="Foto de producto"
                            title="Foto de producto"
                        />

                    </div>

                    <div className='results-product-item'>

                        <p> Los sensores ultrasónicos de alta precisión SmartBlue  miden el agua con una precisión de una gota. Pueden capturar datos en cada punto de la infraestructura de agua de un edificio, desde la fuente hasta el uso. </p>

                        <article>

                            <div>

                                <img src={`${import.meta.env.VITE_URL_BASE}/assets/results/check.png`} alt="Icono" title="Icono" />

                            </div>

                            <p> Sensor ultrasónico </p>

                        </article>

                        <article>

                            <div>

                                <img src={`${import.meta.env.VITE_URL_BASE}/assets/results/check.png`} alt="Icono" title="Icono" />

                            </div>

                            <p> Detección precisa </p>

                        </article>

                        <article>

                            <div>

                                <img src={`${import.meta.env.VITE_URL_BASE}/assets/results/check.png`} alt="Icono" title="Icono" />

                            </div>

                            <p> Acceso a datos en la nube </p>

                        </article>

                        <button> Resérvalo ya </button>

                    </div>

                </div>

            </section>

        </>

    );
};