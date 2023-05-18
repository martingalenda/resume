import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import data from "../../../../data/data"
import CodeBox from "../../../../global/code/CodeBox"

const TipadoEstatico = () => {

    return (
        <Information subTopic={data.menu[0].array[4].array[1]}>

            <TopicContainer id="estatico" topic="Tipado estatico">
                <p>
                    La característica principal de TypeScript es su sistema de tipos. En TS, puede identificar el tipo de datos de una variable o un parámetro mediante una sugerencia de tipo. Con las sugerencias de tipo, se describe la forma de un objeto, lo que proporciona una mejor documentación, y permite que TS valide que el código funciona correctamente.
                </p> 
                <p>
                    Mediante la comprobación de tipos estáticos, TypeScript al principio del desarrollo detecta problemas de código que JavaScript normalmente no puede detectar hasta que el código se ejecuta en el explorador. Los tipos también permiten describir lo que debe hacer el código. Si forma parte de un equipo, un compañero que trabaje en el código después de usted, podrá entenderlo fácilmente.
                </p> 
                <p>
                    Los tipos también potencian las ventajas de inteligencia y productividad de las herramientas de desarrollo, como IntelliSense, la navegación basada en símbolos, la opción Ir a definición, la búsqueda de todas las referencias, la finalización de instrucciones, y la refactorización del código.
                </p> 
            </TopicContainer>
            <TopicContainer id="implicito" topic="Inferencia de tipo implicita">
                <p>En TypeScript, la inferencia de tipos es el proceso mediante el cual el compilador determina automáticamente el tipo de una variable o expresión, en función del valor asignado a ella. Esto significa que no siempre es necesario escribir explícitamente los tipos de datos, ya que TypeScript puede deducirlos automáticamente.</p> 
                <p>Cuando asignas un valor a una variable sin especificar su tipo, TypeScript analiza el valor de la expresión, y lo utiliza para inferir el tipo de la variable. Aquí hay un ejemplo:</p> 
                <CodeBox lang="ts">            
                    {
`let edad = 42           // Tipo de dato number implicito
edad = "Cuarenta y dos" // Invalido, ya que espera un valor de tipo number


const variable // TS infiere que variable es de tipo any, porque no posee valor, ni tipo`
                    }
                </CodeBox>
                <p>La inferencia de tipos funciona en muchos casos, incluyendo variables, parámetros de función, y valores de retorno. Por ejemplo:</p> 
                <CodeBox lang="ts"> 
                    {
`function sumar(a: number, b: number) {
    return a + b;
}
  
const resultado = sumar(2, 3);`
                    }
                </CodeBox>
            <p>En este caso, TypeScript infiere que los parámetros a y b de la función sumar son de tipo number debido a los argumentos pasados durante la llamada a la función.<br/> También infiere que el tipo de resultado es number porque la función sumar devuelve un número.</p> 
            <p>La inferencia de tipos es una característica poderosa de TS que permite ahorrar tiempo y escribir menos código adicional. Sin embargo, es importante tener en cuenta que la inferencia de tipos no siempre es posible, o puede no ser lo suficientemente específica. En esos casos, puedes optar por escribir anotaciones de tipo explícitas para mejorar la claridad, y la verificación de tipo.</p> 
            </TopicContainer>

            <TopicContainer id="explicito" topic="Tipado explicito">
                <p>Si bien vimos anteriormente que no es obligatorio escribir sugerencias de tipo explícitas, cabe recalcar que estas son altamente recomendables, ya que otorgan un código más claro y comprensible (especialmente para otros desarrolladores que pueden estar trabajando en el proyecto). Las anotaciones de tipo explícitas ayudan a documentar y comunicar claramente las intenciones del código. Además, facilitan el mantenimiento y la evolución del código a medida que el proyecto crece.</p> 
                <p>Ahora bien, antes de pasar al siguiente tópico (en donde comenzaremos a ver como declarar de forma explicita los tipos de datos primitivos), conozcamos todos los tipos de datos existentes en Typescript de forma nativa.</p> 
                <br/> 
                <h4>Datos primitivos:</h4> 
                <ul>
                    <li>boolean</li> 
                    <li>string</li> 
                    <li>number</li> 
                    <li>enum</li> 
                    <li>void</li> 
                    <li>null</li> 
                    <li>undefined</li> 
                </ul> 
                <br/> 
                <h4>Tipos de objeto y parametros de tipo (todo lo que no sea primitivo)</h4> 
                <ul>
                    <li>clase</li> 
                    <li>interfaz</li> 
                    <li>matriz</li> 
                    <li>literal</li> 
                </ul> 

            </TopicContainer>
        </Information>
    )
}

export default TipadoEstatico