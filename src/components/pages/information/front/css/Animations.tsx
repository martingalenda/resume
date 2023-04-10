import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Animations = () => {

    return (
        <Information>

            <TopicContainer topic="Animations" ytUrl="https://youtu.be/OWKXEJN67FE?t=30211">
                <p>
                A veces no es necesario utilizar JS para hacer animaciones, y solo basta con unas lineas css. Veamos esta propiedad:
                </p>

                <CodeBox lang="css"> 
                {
`/* Creación de la animación */
@keyframes animationName {
    from {
        position: relative;
        left: 0;
    }
    to {
        left: 80%;
    }
}

/* Asignación de la animación; */
* {
    animation-name: animationName;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: reverse;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    animation-delay: 1s;
}

*:hover {
    animation-play-state: paused
    /* Refiere a que al pausar el mouse, la animación se dentendrá */
}`
                }
                </CodeBox>
                <ul>
                    <li><strong>animation-name </strong>= Nombre de la animación que queremos asignar.</li> 
                    <li><strong>animation-iterative-count </strong>= Cuantas veces deseamos que se repita la animación?</li>
                    <li><strong>animation-direction </strong>= Cambia el sentido/dirección de la animación.</li>
                    <li><strong>animation-time-function </strong>= {`Funciona igual que en transition (define la curva de aceleración de la animación)`}</li>
                    <ul> 
                        <li>ease-in | ease-in-out | linear </li>
                    </ul>
                    <li><strong>animation-fill-mode </strong>= Define las propiedades y valores con los que quedará el elemento al finalizar la animación.</li>
                    <ul> 
                        <li>forward: Conserva las propiedades/valores finales del elemento después de la animación.</li>
                        <li>backward: {`(Para funcionar la animacion debe poseer un delay, lo que hace es mostrar antes de ese tiempo las propiedades valores iniciales del elemento 0%)`}</li>
                    </ul>
                </ul>
            </TopicContainer>

        </Information>
    )
}

export default Animations