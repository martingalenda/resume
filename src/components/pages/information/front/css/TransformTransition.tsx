import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const TransformTransition = () => {

    return (
        <Information subTopic={data.menu[0].array[1].array[6].subTopic}>

            <TopicContainer id="transition" topic="Transition" ytUrl="https://youtu.be/OWKXEJN67FE?t=29289">
                <p>
                La propiedad transition de CSS permite definir transiciones suaves entre los estados de un elemento, como por ejemplo cambios en su posición, tamaño, color o estilo. Al usar esta propiedad, se puede especificar la duración, el retraso y el tipo de transición
                </p>
                <CodeBox lang="css"> 
                {
`* {
    transition-property: background, left, top; | Obligatorio
    transition-duration: 3s, 1s, 1s; | Obligatorio
    transition-delay: 3s;
    transition-timing-function: linear;
}`
                }
                </CodeBox>
                <ul>
                    <li><strong>transition-property </strong>= {`El valor representa las propiedades que sufriran efectos tras la transición (all no es recomendable por rendimiento)`} </li> 
                    <li><strong>transition-duration </strong>= El tiempo que durara la transición.</li>
                    <li><strong>transition-delay </strong>= El tiempo que tardará en comenzar la transición.</li>
                    <li><strong>transition-timing-function </strong>= Estilos de transiciones posibles... </li>
                    <ul>
                        <li>. linear . ease . ease-in . ease-out . ease-in-out </li>
                    </ul>
                </ul> 
            </TopicContainer>
            <TopicContainer id="transform" topic="Transform" ytUrl="https://youtu.be/OWKXEJN67FE?t=31343">
                <p>
                La propiedad "transform" en CSS se utiliza para aplicar transformaciones a un elemento en la página web. Las transformaciones pueden incluir rotación, escala, sesgado (skew) y traslación (translate), así como también combinaciones de estas.
                </p>

                <CodeBox lang="css"> 
                {
`* {
    transform: translate(10em, -50px);
    transform: translateX(10em);
    transform: scale(2);
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}`
                }
                </CodeBox>
                <ul>
                    <li><strong>transform</strong> = Propiedad que menos recursos consume, sirve para transformar elementos.</li> 
                    <li><strong>{`translate(x, y)`}</strong> = translada al elemento sobre sus ejes</li>
                    <li><strong>{`scale(x)`}</strong> = escala el tamaño del elemento</li>
                    <li><strong>clip-path</strong> = Creamos formas vectoriales con css - Generador: <a href="https://bennettfeely.com/clippy/">Click aquí</a></li>
                </ul>
            </TopicContainer>

        </Information>
    )
}

export default TransformTransition