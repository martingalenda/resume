import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Temporizadores = () => {

    return (
        <Information>

            <TopicContainer topic="Temporizadores" ytUrl="https://www.youtube.com/watch?v=fcB-ShJmUxk&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=46">
                <p>Los temporizadores e intervalos en JavaScript son funciones que permiten ejecutar código en un momento específico, o repetidamente después de un intervalo de tiempo determinado. Estas funciones son útiles para realizar tareas programadas, realizar animaciones, actualizar información en tiempo real, y muchas otras cosas más.</p> 
                <CodeBox lang="js"> 
                    {
`// setTimeout(función,tiempo) / setInterval(función,tiempo)
// clearTimeout(función) / clearInterval(función)

const saludar = () => { console.log("hola") };
const tempo1 = setTimeout(saludar,2000); // Ejecuta una funcion pasado (2) segundos
const tempoBucle = setInterval(saludar,3000); // Repite la ejecución de una función cada (3) segundos
clearTimeout(tempo1); // Detiene la ejecución del temporizador "tempo1"
clearInterval(tempoBucle); // Detiene la ejecución del temporizador "tempoBucle"`
                    }
                </CodeBox>
            </TopicContainer>
        </Information>
    )
}

export default Temporizadores