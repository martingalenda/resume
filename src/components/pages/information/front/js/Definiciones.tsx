import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"

const DefinicionesJS = () => {

    return (
        <Information>

            <TopicContainer topic="Definiciones">
            <ul>            
                <li><strong>Hoisting</strong> = Refiere a como funcionan los contextos de ejecución en JS. A la hora de explicar este término se suele utilizar mucho la analogía de que: "El interprete de Javascript re ordena parte del código", en especifico las DECLARACIONES (insisto declaraciones, no inicializaciones) de: variables (tipo var) y funciones (declaradas), "moviendolas al principio del scope al que pertenecen". En realidad, técnicamente esto no es así, lo que sucede realmente es que son asignadas en memoría antes del periodo de ejecución (En la etapa de compilación)</li>
                <li><strong>Closures</strong> = Son las funciones anidadas que recuerdan el conjunto de variables a las que podían acceder, por más que se las invoque desde otro lugar, desde otro scope.</li>
                <li><strong>Memorización</strong> = Refiere a una técnica para optimizar el rendimiento de nuestros programas. La misma consiste en almacenar los valores resultados de funciones pesadas/costosas (aquellas que consumen muchos recursos). El beneficio es poder reutilizar dicho valor cada vez que se lo requiera. Los resultados son almacenados en caché, y evitan que las funciones costosas tengan que ejecutarse nuevamente, mientras que estas reciban los mismos parámetros.</li>
                <li><strong>Stacktrace</strong> = Secuencia de llamadas que se fueron dando, hasta que se sufrió una excepción, o un error inesperado.</li>
                <li><strong>Callstack</strong> = Refiere a la pila de ejecuciòn del interprete de JS, es como un mapa que determina el orden en el que se ejecutarà la aplicaciòn. </li>
            </ul> 
            </TopicContainer>
            <TopicContainer topic="Tipos de errores en JS">
                <ul>
                    <li><strong>Syntax error</strong> = Ocurre al momento de interpretar el código, como durante la carga de una página web, debido a unerror de   sintaxis</li>
                    <li><strong>Runtime error</strong> = Ocurren durante el tiempo de ejecución, despues de que el compilador lo interprete. Llamas afunciones     que no existen es una causa común en este tipo de error</li>
                    <li><strong>Errores Lógicos</strong> = Errores causados por la propia lógica del código </li>
                </ul>
            </TopicContainer>
        </Information>
    )
}

export default DefinicionesJS