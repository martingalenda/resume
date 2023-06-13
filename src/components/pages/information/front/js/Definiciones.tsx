import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox" 
import Alert from "@mui/material/Alert"

const DefinicionesJS = () => {

    return (
        <Information>

            <TopicContainer topic="Definiciones generales">
            <ul>            
                <li><strong>Memorización</strong> = Refiere a una técnica para optimizar el rendimiento de nuestros programas. La misma consiste en almacenar los valores resultados de funciones pesadas/costosas (aquellas que consumen muchos recursos). El beneficio es poder reutilizar dicho valor cada vez que se lo requiera. Los resultados son almacenados en caché, y evitan que las funciones costosas tengan que ejecutarse nuevamente, mientras que estas reciban los mismos parámetros.</li><br/>
                <li><strong>Stacktrace</strong> = El stack trace (rastro de la pila) en JS es una representación de la secuencia de llamadas a funciones que se han producido hasta un punto específico del programa. Proporciona información sobre las funciones que se están ejecutando en el momento, y cómo se llegó a ese punto a través de una serie de llamadas a funciones. El stack trace es especialmente útil para la depuración y la identificación de errores, ya que proporciona información sobre el contexto en el que ocurrió un error. Puedes examinar el stack trace para identificar qué funciones se estaban ejecutando y en qué orden, lo que te permite rastrear el origen del error y comprender mejor la cadena de eventos que llevaron al problema.</li><br/>
                <li><strong>Callstack</strong> = Refiere a la pila de ejecución del interprete de JS, es como un mapa que determina el orden en el que se ejecutará la aplicación. </li>
            </ul> 
            </TopicContainer>
            <TopicContainer topic="Hoisting">
            <p>            
            Facilitemos la comprensión de este término diciendo que es el comportamiento en el que las declaraciones de variables, clases y/o funciones " se mueven al principio del ámbito en el que se encuentran (durante la etapa de compilación, antes de su ejecución). Es como si el interprete de Javascript re-ordenara parte del código, en especifico las DECLARACIONES (NO inicializaciones) de: variables (tipo var) y funciones (declaradas), moviendolas al principio del scope al que pertenecen ". Aunque en realidad técnicamente esto no es así, lo que sucede realmente es que las declaraciones son asignadas en memoría antes del periodo de ejecución (En la etapa de compilación).
            </p> 
            </TopicContainer>
            <TopicContainer topic="Closures">
            <p>            
            Es una función que encapsula una serie de variables y definiciones locales que únicamente serán accesibles si son devueltas con el operador return. Esto nos permite en cierta manera tener variables privadas (aunque no son del todo privadas, pero si dificultamos su acceso desde el exterior del closure).
            </p> 
            <Alert variant="outlined" severity="info">            
            Las closures eran mayormente utilizadas antes de la llegada de las clases a JS (en ES6) ya que un closure se acerca bastante a la definición de clase en lenguajes como Java o el actual ES. Este patron nos permite modularizar nuestro código, y crear algo parecido a una clase. Veamos dos ejemplos:
            </Alert> 
            <br/>
            <h4>            
            EJ1:
            </h4> 
            <CodeBox lang="javascript"> 
                    {
`const a = "Hey! "

function global() {
    const b = "¿Qué "

    function local() {
        const c = "tal?"
        return a + b + c
    }

    return local
}

// global() // Devuelve la función local, sin ejecutarla
// global()() // Ejecuta la función local

const closure = global()
closure()`
                    }
            </CodeBox>
            <h4>            
            EJ2:
            </h4> 
            <CodeBox lang="javascript"> 
                    {
`const miContador = (function() {
    let _contador = 0

    function incrementar() {
        return _contador ++
    }

    function decrementar() {
        return _contador--
    }
    
    function valor() {
        return _contador
    }

    return {
        incrementar,
        decrementar,
        valor
    }

})();

miContador.valor()  // 0
miContador.decrementar()
miContador.valor() // -1`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer topic="Tipos de errores en JS">
                <ul>
                    <li><strong>Syntax error</strong> = Ocurre al momento de interpretar el código, como durante la carga de una página web, debido a unerror de sintaxis</li>
                    <li><strong>Runtime error</strong> = Ocurren durante el tiempo de ejecución, despues de que el compilador lo interprete. Llamas afunciones que no existen es una causa común en este tipo de error</li>
                    <li><strong>Errores Lógicos</strong> = Errores causados por la propia lógica del código </li>
                </ul>
            </TopicContainer>
        </Information>
    )
}

export default DefinicionesJS