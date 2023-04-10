import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Unidades = () => {

    return (
        <Information >

            <TopicContainer topic="Unidades de medida" ytUrl="https://youtu.be/OWKXEJN67FE?t=3549">
                <CodeBox lang="css"> 
                {
`* {
    width: 200px;
    width: 1em;
    width: 1rem;
    width: 50%;
    width: 80vw;
    height: 100vh;
    transition: 4s;
    margin: auto;
    font-size: inherit;
    font-size: initial;
}`
                }
                </CodeBox>
                
                <ul>
                    <li><strong>Absolutas</strong> = Valores fijos que nunca se modificaran (Ej: pixeles, segundos)</li>
                    <li><strong>Relativas</strong> = Valores que se irán ajustando dependiendo de las circunstancias (Ej: %, em, rem, vw, vh)</li>
                    <ul>
                        <li><strong>em</strong> = Se basa en el primer elemento padre, que posea la misma propiedad declara. </li>
                        <li><strong>rem</strong> = Se basa SIEMPRE en referencia a la medida del root (la raiz del DOM).</li>
                        <li><strong>vh & vw</strong> = Representan al ancho y alto del viewport.</li>
                        <li><strong>%</strong> = Representan un % de su componente padre</li>
                    </ul>
                    <li><strong>inherit</strong> = El contenido tomara el mismo valor que fue asignado a su padre directo.</li>
                    <li><strong>initial</strong> = Resetea su valor al inicial (como viene por defecto en el navegador).</li>
                    <li><strong>auto</strong> = Centra al contenido. En cuanto al tamaño del elemento, si no esta bajo efectos de posicionamiento (justify o align)
    pasará a ajustarse al tamaño de su contenido. De lo contrario, busca ocupar todo el ancho posible.</li>
                </ul>
                <small>Viewport: Ventana grafica del navegador.</small>
            </TopicContainer>

        </Information>
    )
}

export default Unidades