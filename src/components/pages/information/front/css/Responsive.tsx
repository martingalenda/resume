import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Responsive = () => {

    return (
        <Information>

            <TopicContainer topic="Responsive - Media query" ytUrl="https://youtu.be/OWKXEJN67FE?t=27608">
                <p>
                Para adaptar los estilos de nuestras aplicaciones a las distintas resoluciones de dispositivos, utilizamos la sentencia @media . Conozcamlosla:
                </p>
                <CodeBox lang="css"> 
                    {
`@media screen and (max-width: 1023px) {
    p {
        color: white;
    }
}
/* EJ1: Aplica los estilos definidos hasta un ancho maximo de 1023px (inclusive) */


@media screen and (min-width: 1023px) and (max-width: 1279px) {
    p {
        color: red;
    }
}
/* EJ2: Aplica los estilos definidos desde un ancho de 1023px, hasta un ancho máximo de 1279px (inclusive)*/


@media screen and (orientation:landscape) and (max-width: 767px) {
    p {
        color: red;
    }
}
/* EJ3: Aplica los estilos definidos si la orientación del dispositivo mobil es horizontal, y el ancho del mismo es menor, o igual a 767px */

__________________________________________________________________

@media screen and|or|not (breakpoint) {
    sentencias
}
/* Operadores disponibles */`
                    }
                </CodeBox>
                <br/>
                <h4>Breakpoints comunes:</h4>
                <ul>
                    <li><strong>320x</strong> = Mobile xs</li> 
                    <li><strong>640x</strong> = Mobile sm </li>
                    <li><strong>768x1024</strong> = Tablet vertical</li>
                    <li><strong>1024x768</strong> = Tablet horizontal</li>
                    <li><strong>1280x720 (633)</strong> = Hd - Notebook o monitores viejos</li>
                    <li><strong>1920x1080 (950)</strong> = Full hd</li>
                    <li><strong>2560x1440 (1266)</strong> = 2k</li>
                    <li><strong>3840x2160 (1899)</strong> = 4k</li>
                </ul>
                <h4>Orientaciones:</h4>
                <ul>
                    <li><strong>landscape</strong> =  Horizontal</li> 
                    <li><strong>portrait</strong> = Vertical</li>
                </ul>
            </TopicContainer>

        </Information>
    )
}

export default Responsive 