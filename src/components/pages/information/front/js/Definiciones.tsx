import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"

const DefinicionesJS = () => {

    return (
        <Information>

            <TopicContainer topic="Definiciones">
            <ul>            
                <li><strong>Hoisting</strong> = El hoisting se refiere al comportamiento en el que las declaraciones de variables, clases y/o funciones se mueven al principio del ámbito en el que se encuentran durante la etapa de compilación (antes de su ejecución). "El interprete de Javascript re ordena parte del código", en especifico las DECLARACIONES (insisto declaraciones, NO inicializaciones) de: variables (tipo var) y funciones (declaradas), "moviendolas al principio del scope al que pertenecen". En realidad, técnicamente, lo que sucede realmente es que las declaraciones son asignadas en memoría antes del periodo de ejecución (En la etapa de compilación)</li><br/>
                <li><strong>Closures</strong> = Son las funciones anidadas que recuerdan el conjunto de variables a las que podían acceder, por más que se las invoque desde otro lugar, desde otro scope.</li><br/>
                <li><strong>HOCS</strong> = HOC (Higher-Order Components) en React es una técnica utilizada para reutilizar la lógica de componentes en React. Un HOC es una función que recibe un componente como argumento y devuelve un nuevo componente con funcionalidades adicionales.</li><br/>
                <li><strong>Memorización</strong> = Refiere a una técnica para optimizar el rendimiento de nuestros programas. La misma consiste en almacenar los valores resultados de funciones pesadas/costosas (aquellas que consumen muchos recursos). El beneficio es poder reutilizar dicho valor cada vez que se lo requiera. Los resultados son almacenados en caché, y evitan que las funciones costosas tengan que ejecutarse nuevamente, mientras que estas reciban los mismos parámetros.</li><br/>
                <li><strong>Stacktrace</strong> = Secuencia de llamadas que se fueron dando, hasta que se sufrió una excepción, o un error inesperado.</li><br/>
                <li><strong>Callstack</strong> = Refiere a la pila de ejecuciòn del interprete de JS, es como un mapa que determina el orden en el que se ejecutarà la aplicaciòn. </li>
            </ul> 
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