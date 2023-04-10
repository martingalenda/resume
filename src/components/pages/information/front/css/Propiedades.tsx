import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Propiedades = () => {

    return (
        <Information subTopic={data.menu[0].array[1].array[3].subTopic}>

            <TopicContainer id="texts" topic="Propiedades Textos" ytUrl="https://youtu.be/OWKXEJN67FE?t=4143">
                <CodeBox lang="css"> 
                {
`* {
    font-family: 'Poppins', Calibri, 'Trebuchet MS', sans-serif;
    /* Colocar varias fuentes, sirve para que, en caso de que no encuentre la primera, asigne la segunda, y asi sucesivamente... */
    font-size: 18px;
    color: #fff;
    line-height: 5px;
    letter-spacing: 1px;
    font-weight: 600;
    font-style: italic;
    text-transform: uppercase;
    text-transform: capitalize;
    text-decoration: underline;
    list-style: none;
    text-shadow: 1px 1px 1px #000;
    text-align: center;
}`
                }
                </CodeBox>
                <ul>
                    <li><strong>line-height </strong>= Define el alto de las lineas de texto, haciendo que estas se separen. </li>
                    <li><strong>letter-spacing </strong>= Define el espacio que existirá entre letras.</li>
                    <li><strong>text-shadow </strong>= Sombra de texto - EJE X, EJE Y, DIFUMINADO, COLOR.</li>
                    <li><strong>text-transform </strong>= Todo mayusc, todo minusculas, etc.</li>
                    <li><strong>list style </strong>= Corresponde al efecto que muestran de forma automática los item de las listas</li>
                </ul>
            </TopicContainer>
            <TopicContainer id="box" topic="Propiedades Box" ytUrl="https://youtu.be/OWKXEJN67FE?t=5110">
                <CodeBox lang="css"> 
                {
`* {
    margin: 10px auto;
    padding-bottom: 20px;
    width: 80%;
    min-width: 50%;
    height: 100vh;
    max-height: 1200px;
    box-sizing: border-box;
    box-sizing: content-box;
    border: 1px solid #000;
    outline: 1px solid #fff;
    border-radius: 100%;
    box-shadow: 2px 4px 15px 1px rgb(175, 40, 40);
}`
                }
                </CodeBox>
                <ul>
                    <li><strong>padding </strong>= Distancia interna entre el elemento y su caja contenedora (borde).</li>
                    <li><strong>margin </strong>= Distancia externa entre cajas.</li>
                    <ul>
                        <li>Si la propiedad cuenta con dos valores = Top/Bot - Left/Right</li>
                        <li>Si la propiedad cuenta con cuatro valores = Top Right Bottom Left</li>
                        <li>Margin = auto centra el contenido (en elementos con ancho fijo).</li>
                    </ul>
                    <li><strong>box-sizing </strong></li>
                    <ul>
                        <li>content-box (Default): El tamaño del box sera el total del width/height + border + padding</li>
                        <li>border-box: Ajusta automaticamente las dimensiones del box para que no superen las dimensiones asignadas en width/height.</li>
                    </ul>
                    <li><strong>outline </strong>= Funciona igual que un "border absolute" (no ocupa espacio en el dom).</li>
                </ul>
            </TopicContainer>
            <TopicContainer id="background" topic="Propiedades Background" ytUrl="https://youtu.be/OWKXEJN67FE?t=32173">
                <CodeBox lang="css"> 
                {
`* {
    background-image: url(../front-end/img);
    background-color: #000;
    background-repeat: no-repeat;
    background-size: cover;
    background-size: contain;
    background-position: left bottom;
    background-clip: padding-box;
    background-origin: border-box;
    background-attachment: fixed;
}

img {
    object-fit: contain;
    object-fit: cover;
    object-position: center;
    object-position: -1em;
}`
                }
                </CodeBox>
                <ul>
                    <li><strong>background-size</strong> = Definimos el tamaño que ocupara la imagen.</li>
                    <ul>
                        <li>contain : La imagen se achica, o se agranda (de forma proporcional) hasta chocar con los bordes de su contenedor. </li>
                        <li>cover : Se ajusta al tamaño de su contenedor.</li>
                        <li>100% 300px : Le estamos asignando 100% de ancho y 300px de alto.</li>
                    </ul>
                    <li><strong>background-position</strong> = Definimos la posicion de la imagen</li>
                    <ul>
                        <li>center : La imagen se centra en el contenedor.</li>
                        <li>left bottom : La imagen comienza a mostrarse desde su parte superior izquierda.</li>
                    </ul>
                    <li><strong>background-clip</strong> = Define desde donde comenzar a mostrar la imagen.</li>
                    <ul>
                        <li>border-box</li>
                        <li>padding-box</li>
                        <li>content-box</li>
                    </ul>
                    <li><strong>background-origin</strong> = Hace que la imagen comience a mostrarse desde el borde, o el contenido.</li>
                    <li><strong>background-attachment</strong> = Efecto visual Parallax. Especifica como mover el bg en relación al viewport.</li>
                    <li><strong>object-fit</strong> = Posiciona a la imagen de diversas formas respecto a su contenedor.</li>
                    <ul>
                        <li>none: Utiliza el tamaño real de la imagen. </li>
                        <li>contain: Mantiene las resoluciones ajustandose al contenido (sin rellenar espacios).</li>
                        <li>cover: Se ajusta al tamaño de su caja contenedora.</li>
                        <li>scale-down: Asigna la resolución mas chica (entre contain y none).</li>
                    </ul>
                    <li><strong>object-position</strong> = Define desde donde comenzar a mostrar la imagen.</li>
                </ul>
            </TopicContainer>
            <TopicContainer id="filters" topic="Filtros">
                <CodeBox lang="css"> 
                {
`* {
    filter: blur(10px) brightness(0.5) drop-shadow(10px 10px 5px #000);
    filter: opacity(0.7);
    filter: brightness(0.5);
    filter: blur(10px);
    filter: contrast(1.3);
    filter: saturate(300%);
    filter: drop-shadow(10px 10px 5px #000);
    filter: grayscale(0.25);
    filter: hue-rotate(200deg);
    filter: sepia(1);
}`
                }
                </CodeBox>
                <ul>
                    <li><strong>opacity</strong> = Le damos opacidad a la imagen.</li>
                    <li><strong>brightness</strong> = Oscurese o Aclara la imagen.</li>
                    <li><strong>blur</strong> = Desenfoca la imagen (efecto borroso).</li>
                    <li><strong>contrast</strong> = Ajustamos el contraste de la imagen.</li>
                    <li><strong>saturate</strong> = Saturamos la imagen.</li>
                    <li><strong>drop-shadow</strong> = Sirve para darle sombra al contorno de las imagenes PNG.</li>
                    <li><strong>grayscale</strong> = Transforma la imagen en escala de grises.</li>
                    <li><strong>hue-rotate</strong> = Cambia la gama de colores de la imagen.</li>
                    <li><strong>sepia(1)</strong> = Le coloca el efecto sepia a la imagen.</li>
                </ul>
            </TopicContainer>
            <TopicContainer id="others" topic="Otras propiedades">

                <CodeBox lang="css"> 
                {
`* {
    opacity: 0.7;
    cursor: pointer;
    overflow: hidden;
    overflow: auto;
    scroll-behavior: smooth;
    width: calc(150px - 1em);
}`
                }
                </CodeBox>
                <ul>
                    <li><strong>cursor </strong>= Posibilidad de cambiar el icono del mouse cuando interactuemos con el elemento. (Pointer = tipica manito de accion)</li>
                    <li><strong>overflow </strong></li>
                    <ul>
                        <li>hidden: Oculta al contenido que sobresalga de su caja contenedora. </li>
                        <li>auto: Habilita o deshabilita el scroll, dependiendo si se necesita, o no.</li>   
                        <li>scroll: "Coloca un scroll por mas que no se necesite".</li>
                    </ul>
                    <li><strong>scroll-behavior </strong>= Suaviza el scroll automatico.</li>
                    <li><strong>calc </strong>= Sirve para realizar operaciones aritmeticas con las unidades de medida css.</li>
                </ul>
            </TopicContainer>

        </Information>
    )
}

export default Propiedades