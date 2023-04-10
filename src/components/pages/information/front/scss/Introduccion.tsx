import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const IntroduccionScss = () => {

    return (
        <Information subTopic={data.menu[0].array[2].array[0].subTopic}>

            <TopicContainer id="scss" topic="SCSS - Introducción">
                <p>
                Scss es un preprocesador de CSS que permite utilizar variables, anidamiento, y otras características avanzadas para hacer más eficiente y organizado el proceso de escritura de estilos para la web. Here we go!
                </p>
            </TopicContainer>
            <TopicContainer id="nesting" topic="Nesting (Anidamiento)" ytUrl="https://www.youtube.com/watch?v=pLU-0Ywcd2k&list=PLy7TtEmBFusKPlehbCaSyIl8OA2lf4Krh&index=3">
                <p>
                Una de las características más importantes de la sintaxis de Scss es poder hacer anidamiento de clases, como también de propiedades.
                Genial, cierto?</p>
                <CodeBox lang="scss"> 
                {
`.className {
    min-width: 50em;
    height: 4em;
    border: 1px solid;
    margin: 0.2em;
    font: {
        weight: 700;
        size: 1.4em;
        family: Arial, "Helvetica";
    }
    .classNameHija1 {
        border-color: $blue-color;
        color: $blue-color;
    }
    .classNameHija2 {
        border-color: green;
        color: green;    
    }
}`
                }
                </CodeBox>
                <small>Se considera una buena practica evitar el anidamiento mayor a 3/4 hijos. Para mantener el código más legible/limpio.</small><br/>
                <small>Como vimos en el ejemplo anterior, utilizamos el anidamiento para resumir todas las propiedades de tipo font.</small>
            </TopicContainer>
            <TopicContainer id="selector_padre" topic="Selector Padre (&)" ytUrl="https://www.youtube.com/watch?v=fBDGAWbkUFo&list=PLy7TtEmBFusKPlehbCaSyIl8OA2lf4Krh&index=6" >
                <p>
                El selector padre (&) representa literalmente el nombre del selector padre (valga la redundancia).
                </p>
                <CodeBox lang="scss"> 
                {
`.button {
    min-width: 50em;
    height: 4em;
    border: 1px solid;
    margin: 0.2em;
    &-danger {  
    /* Esto equivale a .button-danger */
        border-color: $blue-color;
        color: $blue-color;
        &:hover {
            background-color: $blue-color;
            color: white;
        }
    }
    &-correct {
    /* Esto equivale a .button-correct */
        border-color: green;
        color: green;
        &:hover {
            background-color: green;
            color: white;
        }     
    }
}`
                }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="selector_placeholder" topic="Selector Placeholder ( % - @extend ) " ytUrl="https://www.youtube.com/watch?v=iwXavLqGTKo&list=PLy7TtEmBFusKPlehbCaSyIl8OA2lf4Krh&index=5">
                <p>
                El selector placeholder (%) es una característica que permite definir un bloque de estilos para reutilizarlos en otros selectores utilizando la directiva @extend
                </p>
                <CodeBox lang="scss"> 
                {
`%boton {
    display: inline-block;
    padding: 10px 20px;
    background-color: #FFC107;
    color: #fff;
    border-radius: 5px;
  }
  
.boton-principal {
  @extend %boton;
  border: 0.1em solid red;
}`
                }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="variables" topic="$Variables" ytUrl="https://www.youtube.com/watch?v=1MeDTZTMdt0&list=PLy7TtEmBFusKPlehbCaSyIl8OA2lf4Krh&index=3">
                <CodeBox lang="scss"> 
                {
`/* DECLARACIÓN */
$blue-color: #005DFF;

/* LLAMADA */
body {
    background: $blue-color;
}`
                }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="datos" topic="Datos complejos">
            <h4>Listas (Arrays):</h4>
            <p>Video-tutorial: <a href="https://www.youtube.com/watch?v=MHlUojxZvOA&list=PLy7TtEmBFusKPlehbCaSyIl8OA2lf4Krh&index=9" target="_blank"> https://www.youtube.com/watch?v=MHlUojxZvOA&list=PLy7TtEmBFusKPlehbCaSyIl8OA2lf4Krh&index=9 </a></p> 

                <CodeBox lang="scss"> 
                {
`$colors: red, black, $green-col;

/* LLAMADA al valor (1) de la lista ($black) */
body {
    background: nth($colors, 1)
}`
                }
                </CodeBox>
                <h4>Maps (Objetos):</h4>
                <p>Video-tutorial: <a href="https://www.youtube.com/watch?v=xe1_L4XNOkc&list=PLy7TtEmBFusKPlehbCaSyIl8OA2lf4Krh&index=10" target="_blank"> https://www.youtube.com/watch?v=xe1_L4XNOkc&list=PLy7TtEmBFusKPlehbCaSyIl8OA2lf4Krh&index=10 </a></p> 

                <CodeBox lang="scss"> 
                {
`/* - Maps (Objetos) 
$configuracion: ( 
    primary:#005DFF,
    secondary: black,
    font-size: 18px,
);

/* LLAMADA al diccionario ($configuración) - datos (primary/font-size) */
body {
    background-color: map-get($configuracion, primary);
    font-size: map-get($configuracion, font-size);
}`
                }
                </CodeBox>
            </TopicContainer>

        </Information>
    )
}

export default IntroduccionScss