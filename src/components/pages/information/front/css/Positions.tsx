import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Positions = () => {

    return (
        <Information>

            <TopicContainer topic="Tipos de posicionamiento" ytUrl="https://youtu.be/OWKXEJN67FE?t=7530">
                <p>
                La propiedad CSS "position" se utiliza para establecer la posición de un elemento en una página web.
                </p>
                <CodeBox lang="css"> 
                {
`* {
    position: static;
    position: relative;
    position: absolute;
    position: fixed;
    position: sticky;
    left: -10px;
    top: 10vh;
    z-index: 100;
}`
                }
                </CodeBox>
                <ul>
                    <li><strong>static</strong> = El elemento no se posiciona de manera especial y sigue el flujo normal de la página. Este es el valor por defecto.</li>
                    <li><strong>relative</strong> = El elemento se posiciona de manera relativa a su posición normal. Se puede ajustar su posición utilizando las propiedades "left", "right", "top" y "bottom". El punto de referencia para este tipo de posicionamiento es la posición normal del elemento.</li>
                    <li><strong>absolute</strong> = El elemento se posiciona de manera absoluta en relación a su primer elemento padre que tenga posicionamiento establecido. Si no existe tal elemento, se toma como punto de referencia el cuerpo de la página. No ocupa espacio en el flujo normal de la página.</li>
                    <li><strong>fixed</strong> = El elemento se posiciona de manera absoluta en relación a la ventana del navegador, es decir, siempre se muestra en la misma posición aunque se desplace la página. Es similar a "absolute", pero no se mueve cuando se desplaza la página.</li>
                    <li><strong>sticky</strong> = El elemento se comporta como "relative" hasta que se alcanza cierta posición en la página, momento en el que se fija en su lugar y se comporta como "fixed". Se puede ajustar su posición utilizando la propiedad "top".</li>
                    <li><strong>z-index</strong> = La propiedad "z-index" se utiliza para determinar la posición de un elemento en relación a otros elementos. Un valor mayor de "z-index" indica que el elemento se muestra por delante de otros elementos.</li>
                    <ul>
                        <li> {` Tactica para centrar el contenido: top 0 - left 0 - bottom 0 - right 0 `} </li>
                    </ul>
                </ul>               
            </TopicContainer>

        </Information>
    )
}

export default Positions