import data from "../../../../data/data"
import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const IntroduccionCss = () => {

    return (
        <Information subTopic={data.menu[0].array[1].array[0].subTopic}>

            <TopicContainer id="css" topic="CSS3 - Introducción">
                <p>
                CSS (Cascading Style Sheets) es utilizado para establecer los estilos de una aplicaciòn, por ej: colores, tamaños, animaciones, transiciones, posiciones, etc.
                </p>
            </TopicContainer>

            <TopicContainer id="sintaxis" topic="Sintaxis">
                <p>
                    La sintaxis de css es muy simple, se basa en: selectores de nodos html, popiedades, y valores. Veamos un ejemplo básico: 
                </p>
                <CodeBox lang="css"> 
                    {
`.className {
    color: #fff;
    width: 10em;
    margin: auto;
}`
                    }
                </CodeBox>
                <p>
                En este caso le estaríamos aplicando 3 estilos distintos a todos los elementos html que posean la clase "className". <br/>El tipo de selector utilizado corresponde a una clase (lo sabemos por la nomenclatura del punto " . ").<br/> Ahora, los elementos que posean esta clase ya poseen 3 propiedades (color, width y margin), con sus respectivos valores. <br/><small>Veremos más sobre las distintas formas de seleccionar elementos html en el siguiente topico</small>.
                </p>
            </TopicContainer>

            <TopicContainer id="variables" topic="Variables">
                <p>
                En css podemos utilizar variables para evitar tener que escribir/modificar muchas veces los mismos valores. Por lo que sería útil usarlas cuando sabemos que ciertos valores tenderán a repetirse en nuestra página, como ser un ejemplo, la gama de colores escogida para nuestro proyecto. Veamos un ejemplo:
                </p>
                <CodeBox lang="css"> 
                    {
`/* Declarando la variable main-color*/
:root {
    --main-color: #f44;
}

/* Utilizando/llamando a la variable */
* {
    color: var(--main-color);
}`
                    }
                </CodeBox>
                <small>
                Si queremos que la variable pueda ser utilizada en todos los selectores, debe estar asignada en :root De lo contrario, puede estar asignada dentro de cualquier otro selector.
                </small>

            </TopicContainer>

        </Information>
    )
}

export default IntroduccionCss