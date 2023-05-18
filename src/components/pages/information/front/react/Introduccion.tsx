import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox" 
import { Alert } from "@mui/material"
import {Link} from "react-router-dom"

const IntoduccionReact = () => {

    return (
        <Information subTopic={data.menu[0].array[5].array[0]}>

            <TopicContainer id="react" topic="React - Introducción" ytUrl="https://www.youtube.com/watch?v=MPLN1ahXgcs&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&ab_channel=jonmircha">
                <p>React es una biblioteca de JavaScript de código abierto, fue diseñada para construir interfaces de usuario interactivas y escalables, utilizando un modelo de programación declarativo. Unas de sus principales características es su enfoque en separar intereses (funcionalidades) con unidades ligeramente acopladas llamadas componentes, en lugar de separar artificialmente tecnologías (trabajando el maquetado y la lógica por separado). Entre las principales ventajas de utilizar React, se incluyen: </p> 
                <ul>
                    <li>Curva de aprendizaje moderada (especialmente para aquellos que ya controlan Javascript)</li> 
                    <li>Altamente modular. Lo que se traduce en un código escalable y reutilizable.</li> 
                    <li>Eficiente. Gracias a tecnologías como el Virtual DOM (Del cual hablaremos más adelante) es capaz de actualizar la interface de forma óptima. </li> 
                    <li>Adaptable. Es decir que es compatible con una amplia variedad de herramientas y bibliotecas. </li> 
                    <li>Popular. Lo que significa que posee una gran comunidad activa, como así también un inmenso ecosistema por detras.</li> 
                    <li>Seguridad. Previene ataques de inyección. </li> 
                </ul> 
            </TopicContainer>

            <TopicContainer id="jsx" topic="JSX - Sintaxis" docUrl="https://es.react.dev/learn/writing-markup-with-jsx" ytUrl="https://www.youtube.com/watch?v=EH4L-EYt63Y&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=7&ab_channel=jonmircha">
                <p>JSX es una extensión del lenguaje Javascript. Podríamos verlo como una unión/mezcla entre Javascript ("con super poderes") y "html" (aunque en realidad no es html, pero la sintaxis es casi idéntica). Cabe aclarar que el uso de JSX es opcional, aunque la mayoría de los desarrolladores lo encontramos mucho más práctico que usar Vainilla.js.</p> 
                <Alert variant="outlined" severity="info">Data: Despues de compilarse, las expresiones JSX se convierten en llamadas a funciones JS regulares (BABEL) y se evalúan como objetos Javascript.<br/>  Por esto, las expresiones pueden ser enviadas como argumentos o funciones, almacenarse en variables, y ser retornadas en funciones (Objetos de primer orden)</Alert> 
                <br/> 
                <br/> 
                <h4>Diferencias principales entre JSX & HTML5:</h4> 
                <ul> 
                    <li> El atributo class pasa a llamarse className.</li> 
                    <li> Todas las etiquetas poseen la capacidad de "auto-cerrarse" cuando no poseen contenido interno, por ejemplo {`<div/>`}</li> 
                    <li> Todas las etiquetas deben estar cerradas, incluso el típico br debería quedar así {`<br/>`}</li> 
                    <ul> 
                        Formularios: 
                        <li> El atributo for de Html pasa a llamarse htmlFor </li> 
                        <li> El atributo checked pasa a llamarse defaultChecked </li> 
                        <li> El atributo selected no existe, en su lugar, se aplica defaultValue="value"</li> 
                    </ul> 
                </ul> 
                <br/> 
                <br/> 
                <h4>Expresiones JSX:</h4> 
                <CodeBox lang="jsx"> 
                    {
`// Un elemento JSX es la unidad mínima de valor en React, y podría verse así:
<h1> Hello, world! </h1>

// Un componente, no es más que un conjunto de elementos JSX:
const Componente = () => {
    return (
        <div>
            <h1> Titulo </h1>
            <p> Parrafo </p>
        </div>
    )
}`
}
                </CodeBox>
            <h4>Retornando JS:</h4> 
            <CodeBox lang="jsx"> 
                    {
`// Cuando retornamos expresiones JS en nuestros componentes, el contenido debe ir siempre entre { }
const Component = () => {
    const name = "Pepe"
    return <h1>Hello, {name}</h1>
}`
}
            </CodeBox>
             <h4>Atributos JSX:</h4> 
            <CodeBox lang="jsx"> 
                {
`// Podemos utilizar comillas para especificar strings literales como atributos
<img className="avatar"src="./img/avatar.png"> </img> 

// O bien llamar a variables/estados/propiedades, mediante { } 
<img className={avatar} src={user.avatarUrl}> </img> `
                }
            </CodeBox>
            <h4>Renderizado condicional:</h4> 
            <p>Cuando queremos renderizar un elemento/componente u otro, dependiendo de una condición, podemos utilizar el operador ternario de JS, algo muy útil en React.</p> 
            <CodeBox lang="jsx"> 
                {
`// EJ1: Si la variable es verdadera, muestro Componente1, de lo contrario muestro el Componente2
                    
    const Component1 = () => {
        const variable = true
        return { variable ? <Componente1/> : <Componente2/> } 
    }
    

// EJ2: Otro ejemplo similar al anterior, pero con dos condiciones.
// Si patas es 4, y nombre es Negrito, mostraremos un string autorizado, sino, NO autorizado

    const Component2 = () => {
        const patas = true
        return (
            <div>
                <span>{ patas == 4 && nombre == "Negrito" ? "Perro autorizado" : "Perro NO autorizado" }</span>
            </div>
        )
    }
    

// EJ3: El siguiente bloque equivale a un if, sin else: Si (x) es mayor que (y) muestro Component
    
    const Component3 = () => {
        const variable = true
        return (
            <>
                <h1>Mostrare un componente si x es mayor que Y</h1>
                { x > y && <Component/>}
            </>
        )
    }`
}
            </CodeBox>
    <p>En cualquiera de los ejemplos anteriores, los valores analizados por la condición bien podrían ser propiedades, o estados del componente.</p> 
    <br/> 

            </TopicContainer>

            <TopicContainer id="thinking" topic="Pensando en React" docUrl="https://es.react.dev/learn/thinking-in-react">
                <p>A menudo como React dev seguirás estos pasos para desarrollar tu App. No te preocupes si hay conceptos que no entiendes ahora, los ampliaremos más adelante:</p> 
                <ol> 
                    <li> Serparar la UI (el diseño) en una jerarquía de componentes: </li> 
                    <p> Lo común es tener como mínimo un boceto de nuestras páginas antes de comenzar. Utilizalo para dividir tús páginas por funcionalidades mínimas, aquellas que terminarán por consolidar cada uno de tus componentes.</p> 
                    <li> Comenzar a construir una versión estática en React. </li> 
                    <p> El enfoque más sencillo consiste en construir una versión que renderiza la UI a partir de tu modelo de datos (sin añadir interactividad aún). Esto requiere de mucha escritura, y poco pensamiento. En este punto utilizaras lo que se conoce como propiedades (hablaremos sobre ello en el tópico correspondiente).</p> 
                    <li> Encontrar la representación mínima pero completa del estado de la UI.</li> 
                    <p> En el paso anterior era mucha escritura, y poco pensamiento, en este punto comunmente es lo contrario. Para añadir interactividad necesitas que los usuarios cambien tu modelo de datos, para ello utilizaras lo que se conoce como estado (hablaremos sobre ello en el tópico correspondiente)</p> 
                    <li> Identificar donde debe de vivir tu estado. </li> 
                    <p> Una vez que hayas identificado los datos mínimos del estado de tu aplicación, debes identificar que componente es responsable de cambiar, o poseer este estado.<br/> Si el estado será utilizado en toda la aplicación, o gran parte de esta, lo correcto sería trabajar con un estado global (useContext, useReducers, Redux, etc), si por el contrario es un estado que afecta a unos pocos componentes, podrías manejar un estado "local" sin problemas (useState).</p> 
                    <li> Añade un flujo de datos inverso.</li> 
                    <p> El flujo de datos en React es unidireccional (de componentes padres, a hijos). Por lo que si un componente hijo, requiere modificar el estado de su componente padre (y no se posee un estado global desarrollado para hacerlo), se deberá de pasar como propiedad (del componente padre al hijo en cuestión) la función que manipula dicho estado.</p> 
                </ol> 
            </TopicContainer>

            <TopicContainer id="install" topic="Instalación" docUrl="https://es.react.dev/learn/installation" ytUrl="https://www.youtube.com/watch?v=ufAJ3lIIdbY&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=6&ab_channel=jonmircha">
                <p>Existen muchísimas maneras de utilizar React en nuestras aplicaciones, está es la más sencilla para quienes van comenzando:  <Link to="https://vitejs.dev/" target="_blank">Vite</Link></p> 
                <CodeBox lang="npm">
                    {
`// Para crear el proyecto con Vite
    npm create vite@latest . project-name --template react

// Para levantar la aplicación de forma local
    npm run dev`
                    }
                </CodeBox>
            </TopicContainer>

        </Information>
    )
}

export default IntoduccionReact