import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"

const IntroduccionJS = () => {

    return (
        <Information>

            <TopicContainer topic="Javscript - Introducción">
            <p>JavaScript es un lenguaje de programación de alto nivel. Este se utiliza principalmente en el desarrollo web, para crear interactividad en las aplicaciones.</p> 
            <h4>Características del lenguaje:</h4> 
                <ul>                
                    <li>JS en front-end se ejecuta en el cliente, es decir, en el navegador web del usuario.</li> 
                    <li>JS en back-end se ejecuta en el servidor, utilizando Node.js.</li> 
                    <li>El flujo de ejecución es lineal/secuencial, a no ser que se utilicen mecanismos asíncronos.</li> 
                    <li>Es multiparadigma (se puede utilizar tanto con POO, como con prog funcional, etc).</li> 
                    <li>Basado en prototipos (tras bambalinas, todo es un objeto en javascript). Javascript usa los prototipos para trabajar la herencia.</li> 
                    <li>Imperativo (sentencias paso a paso, solo puede ejecutar una tarea a la vez, ya que posee un solo hilo de ejecuciòn) - Event Loop.</li> 
                    <li>Débilmente tipado. Es decir que no es estricto en su sintaxis a la hora de declarar variables (tipos de datos).</li> 
                    <li>Tipado dinamico: Es decir, el tipo de las variables se determinan en tiempo de ejecuciòn (en lugar de hacerlo durante la compilación).</li> 
                    <li>Es utilizado no solo en desarrollo web, sino también en otras áreas como: aplicaciones de escritorio, juegos, aplicaciones móviles, etc.</li> 
                    <li>Es un lenguaje de código abierto, lo que significa que cualquiera puede contribuir al desarrollo y mejorar el lenguaje.</li> 
                </ul> 
            </TopicContainer>
        </Information>
    )
}

export default IntroduccionJS