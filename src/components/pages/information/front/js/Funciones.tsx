import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const FuncionesJS = () => {

    return (
        <Information subTopic={data.menu[0].array[3].array[5]}>

            <TopicContainer id="declarada" topic="Función declarada" ytUrl="https://youtu.be/H6U1Pm7x60E?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=208">
                <ul>
                    <li>Una función es "declarada" cuando la sentencia empieza con la palabra reservada function, seguido obligatoriamente de un nombre identificador, el cual será utilizado a posterior para invocarla. Utiles para definir funciones que se utilizarán varias veces en el programa. </li>
                    <li>Poseen scope de función. Es decir, las variables definidas dentro de ellas, solo son visibles dentro de la función. </li>
                    <li>El valor de this dentro de una función declarada se establece en tiempo de ejecución, en función de cómo se invoca la función. </li>
                </ul> 
                <h4>EJ1: Sin return</h4> 
                <CodeBox lang="javascript"> 
                    {
`function saludar(name) {
    console.log(\`Hola \${name}\`)
} // declaración de la función

saludar("Peter") // llamada a la función`
}
</CodeBox>

    <h4>EJ2: Con return</h4> 
    <small>Como vemos en el siguiente ejemplo, invocamos la función antes de declararla, y aún así funciona gracias a ser una función declarada. Esto sucede por un comportamiento de Javascript conocido como Hoisting, el cual se explica en el topico Definiciones.</small> 
    <CodeBox lang="javascript"> 
        {
`saludar("Peter") // invocación de la función

function saludar(name) {
    return \`Hola \${name}\`
} // declaración de la función`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="flecha" topic="Función flecha" ytUrl="https://youtu.be/WuCw9agV3Rc?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=180">
                <ul>
                    <li>Sintaxis básica de una función flecha: {`() => {}  (No poseen nombre, sino que se asignan a una var, o const)`} </li>
                    <li>Utiles para definir funciones que se utilizarán varias veces en el programa, como para aquellas que no necesitan vincular this. </li>
                    <li>No poseen scope propio, sino que toman el contexto lèxico en el que se definen. Vincula el valor de this a dicho contexto. </li>
                    <li>No pueden ser utilizada como función constructora de objetos, pero si como métodos de los objetos. </li>
                    <li>No se pueden utilizar como funciones generadoras, porque no tienen la propiedad 'generator' </li>
                </ul> 
                <h4>EJ1: Sintaxis básica (un solo parámetro)</h4>
                <CodeBox lang="javascript"> 
                    {
`// Al tener un solo parametro, los (parentesis) de este pueden obviarse.
// Si el cuerpo de la funciòn corresponde a una sola expresión, pueden obviarse las {llaves} y el valor será retornado, sin necesidad de escribir return.
    
const saludar = name => console.log(\`Hola \${name}\`)

saludar("Peter")`
}
</CodeBox>
    <h4>EJ2: Más de un parametro, con return</h4>
    <CodeBox lang="javascript"> 
    {
`// En caso de tener dos o más parametros, deberán ir entre (parentesis)

const saludar = (nombre , edad) => {
    let frase = \`Hola \${nombre} que se siente tener \${edad} años?\`;
    return frase
}

saludar("Martin","30")`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="parametros_default" topic="Parametros default">
                <ul>
                    <li>Podemos declarar parametros de forma predeterminada por si el usuario no envía parametro alguno, veamos como se hace: </li>
                    <li>Sea del tipo que sea la función, la sintaxis del parametro por defecto es la misma ( param = value )</li>
                </ul> 
                <CodeBox lang="javascript"> 
                    {
`const test = (name = "Desconocido", edad = 0) => {
    console.log(\`Hola mi nombre es \${name} y tengo \${edad} años\`)
}

test() // Al no recibir parametros, tomará los asignados por defecto (Desconocido, 0)
test("Juancito", 20)`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="constructora" topic="Función constructora" ytUrl="https://youtu.be/nS5FmAx4u_0?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=951">
                <li>Las funciones constructoras se utilizan para crear objetos. Actúan como un molde o plantilla para la creación de múltiples de estos, con propiedades y métodos similares. Existen desde los inicios de JS. A posterior en (ES6) se incorporaron las clases al lenguaje, que cumplen el mismo objetivo, pero cuentan con una sintaxis más clara, y con características adicionales, por ejemplo, proporcionan soporte para trabajar la herencia de los objetos mediante el método super(), mientras que para trabajar la herencia con funciones constructoras, deberíamos de trabajar con los prototipos, algo no tan utilizado en códigos modernos. </li>
                <ul>
                    <li>Las funciones constructoras deben iniciar en Mayuscula siempre (UpperCamelCase) como buena practica </li>
                    <li>Al contrario de los objetos literales, aquí las propiedades (las keys), y métodos deben ir con la palabra reservada this por delante</li>
                    <li>Y en lugar de " : " utilizamos el signo " = " de asignación para declarar los valores.</li>
                </ul>  
                <CodeBox lang="javascript"> 
                    {
`function Person(edad) {
    this.name = "Pepe"
    this.subName = "Mongoto"
    this.edad = edad
    this.readName = function (param) {
        return this.name + " " + this.subName + " " + param
    }
}

const persona = new Person(30) // Instanciamos un nuevo objeto basado en la función constructura

console.log(persona)
console.log(persona.name)
console.log(typeof persona) // objeto

persona.apodo = "Bepiñar" // Añadimos una nueva propiedad al objeto
console.log(persona)
console.log(persona.apodo)

persona.readName("Parametro") // Ejecutamos el método/función readName del objeto Person

// Para añadir un método o una propiedad a cualquier objeto (nativo y/o personalizado) luego de haberlo declarado (sin usar el constructor)  podemos usar el objeto prototype
// En el siguiente ejemplo, modificamos la función constructora Person, añadiéndole un nuevo método
    Person.prototype.greet = function () {
        return \`Hello \${this.name}\`
    }
    const persona2 = new Person(15)
    console.log(persona2)
    console.log(persona2.greet())`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="auto_ejecutable" topic="Función auto-ejecutable" ytUrl="https://youtu.be/gbHr5qJjLRg?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=384">
                <p>Son aquellas que se "auto-ejecutan" por única vez al momento de ser interpretadas.</p> 
                <small>Hay varias sintaxis/formas para declarar una función autoejecutable, la siguiente solo es una de ellas.</small> 
                <CodeBox lang="javascript"> 
                    {
`((nombre) => {
    console.log(\`Saludos \${nombre}\`)
})("Bepi")`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="generadora" topic="Función generadora" ytUrl="https://youtu.be/oO-D4PsaI1A?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=66">

                <p>
                Las funciones generadoras son funciones especiales en JS que nos permiten crear objetos llamados iteradores personalizados. En lugar de obtener todos los valores de una vez (ejecutando todo el cuerpo de la función de forma inmediata), los iteradores generados nos permiten obtener un valor a la vez a medida que los necesitemos, lo cual puede ser útil en situaciones donde trabajar con todos los elementos a la vez podría ser ineficiente o innecesario. A diferencia de las funciones regulares, las funciones generadoras pueden pausar y reanudar su ejecución en múltiples puntos a lo largo del tiempo, lo que las hace especialmente útiles para trabajar con secuencias de datos, o tareas que se pueden dividir en partes más pequeñas, complementando la asincronía.
                </p>
                <ul>
                    <li>Todas las funciones generadoras poseen un ( * ) despues de la palabra reservada function.</li>
                    <li>La llamada a una función generadora no ejecuta su cuerpo inmediatamente; se devuelve un objeto iterador para la función en su lugar.</li>
                    <li>Estas gozan la posibilidad de ejecutarse hasta cierto lugar de la propia función (determinados por yields), regresar un valor (opcional por cada yield) y detenerse hasta recibir la instrucción del método iterativo (next), quien retoma la función hasta alcanzar el siguiente yield</li>
                </ul> 
                <CodeBox lang="javascript"> 
                    {
`function* some() {
    console.log("Empieza a ejecutarse la funciòn")
      yield "Primer yield resuelto";
    console.log("Continua procesando el código...")
      yield "Segundo yield resuelto";
    console.log("Más código...")
      yield "Tercer yield resuelto"
    console.log("Listo.....")
      return "Finalizó la función generadora"
}

// yield: Es similar al return de las funciones, con la salvedad de que se puede invocar en más de una ocasión para retornar varios valores (iterables y asincronos NObloqueantes), y no finaliza por completo la ejecución de la función. Sino más bien que la detiene, como mencionamos anteriormente, hasta recibir el método iterativo(next)
    
// Las funciones generadoras no ejecutan su cuerpo inmediatamente, en su lugar devuelven un objeto iterador
// Para entender mejor esto, veamos un ejemplo claro:
    const iterador = some() // Almacenamos el objeto iterador de la función
    for (let y of iterador) {
      console.log(y); // (y) === a cada resultado obtenido por yields
    }

    const s = some() // Volvemos a almacenar el objeto iterador de la función
    console.log(s.next()) // Nos retorna el primer yield {value: 'Primer yield resuelto', done: false}
    console.log(s.next()) // Nos retorna el segundo yield {value: 2, 'Segundo yield resuelto': false}
    console.log(s.next()) // Nos retorna el segundo yield {value: 2, 'Tercer yield resuelto': false}

    // next: Se utiliza para recibir los valores devueltos por yield, e invocar nuevamente la función, desde el yield obtenido, hasta el siguiente.

    // Cuando no hay más yields por ejecutar, el método next devolverá...
    // En ambos caso devuelve done: true
    // Sin return definido:
        console.log(s.next()) // Nos retorna {value: undefined, done: true}
    // Con el return definido:
        console.log(s.next()) // Nos retorna {value: "Finalizó la función generadora", done: true}`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="definiciones" topic="Definiciones">
                <h4><strong>Función expresada</strong></h4> 
                <ul>
                    <li>Funciones asignadas como valor de una variable. Logrando así una expresión (unidad de valor) de función.</li> 
                    <li>Útil para funciones que se utilizarán en un contexto específico. También para enviarlas como parámetros a otras funciones.</li> 
                    <li>No se pueden invocar antes de su definición debido al hoisting.</li> 
                    <li>Una función auto-ejecutable (el ùltimo ejemplo de funciones) tambièn es comprendida como una función expresada/anonima</li> 
                </ul> 
                <CodeBox lang="javascript">  
                    {
`// ? EJ1:
    const saludar = function(name) {
        console.log(\`Hola \${name}\`)
    } // expresión de función

    saludar("Peter") // invocación de la función

// ? EJ2: Con función flecha
    const saludar = (name) => {
        console.log(\`Hola \${name}\`)
    } // expresión de función

    saludar("Peter") // invocación de la función`
                    }
                </CodeBox>
                <br/>
                <h4><strong>Función anonima</strong> = Entendemos una función anonima como aquella que no tiene un identificador propio. El caso más evidente son las funciones auto-ejecutables, y las funciones flechas.</h4> 
                <br/>
                <h4><strong>Función pura</strong> = Es aquella que no produce ningún efecto secundario y cuyo valor de retorno depende únicamente de sus argumentos.</h4> 
                <CodeBox lang="javascript"> 
                    {
`const globalContext = 0

function pureFn(arg1, arg2) {
    return arg1 + arg2
}  // Si arg1, arg2 se mantienen idénticos, el resultado siempre será el mismo

function impureFn(arg1, arg2) {
    return globalContext += arg1 + arg2 
} // El resultado depende de globalContext, y genera efectos secundarios (efectos fuera del scope de impureFn)

const arg1 = 5
const arg2 = 10

console.log(pureFn(arg1, arg2))
console.log(impureFn(arg1, arg2))`
                    }
                </CodeBox>

                    
            </TopicContainer>
        </Information>
    )
}

export default FuncionesJS