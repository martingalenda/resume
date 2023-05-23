import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const SpreadOperator = () => {

    return (
        <Information subTopic={data.menu[0].array[3].array[17]}>

            <TopicContainer id="so" topic="Spread Operator" ytUrl="https://youtu.be/yGJdRAXHCPM?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=333">
                <p>El spread operator (operador de propagación) fue introducido en ECS6. Resulta útil para expandir una expresión iterable (como un array, o un objeto) en multiples elementos.</p>
                <p>Entre las principales funciones de este operador podriamos destacar que:</p>
                <ul>
                    <li>Permite descomponer un arreglo, u objeto, en sus elementos individuales.</li> 
                    <li>Permite combinar dos o más arreglos objetos en uno solo.</li> 
                    <li>Permite crear copias de arreglos y objetos.</li> 
                    <li>Rest param: Permite pasar una cantidad de elementos indeterminadas de argumentos a funciones.</li> 
                </ul> 
                <br/>
    <h4>EJ1: Generando una copia de un array.</h4> 
    <CodeBox lang="javascript"> 
        {
`const array1 = [1, 2, 3, 4, 5]
const array2 = [...array1]

console.log(array2)`
                    }
                </CodeBox>
                <br/> 
                <h4>EJ2: Creando un nuevo array, combinando: array1, array2, y un string.</h4> 
                <CodeBox lang="js"> 
                    {
`const array1 = [1, 2, 3, 4, 5]
const array2 = [6, 7, 8, 9, 10]

const array3 = [...array1, "Martin", ...array2] // También le introduzco un string entre medio de los arrays
console.log(array3)`
}
</CodeBox>
    <br/>
    <h4>EJ3: Combino las propiedades y valores de dos objetos en uno nuevo.</h4> 
    <CodeBox lang="javascript"> 
        {
`const usuario = {
    nombre: "Bepi",
    apellido: "Soberano",
    estado: {
        edad: 30,
        soltero: true
    }
}

const direccion = {
    nacionalidad: "Brazil",
    ciudad: "Sao Pablo",
    calle: "Bermudez"
}

// Concateno las props de usuario + direccion 
    const ser = {
        ...usuario,
        ...direccion
    }
    console.log(ser)`
                    }
                </CodeBox>

            </TopicContainer>
            <TopicContainer id="rp" topic="Rest Param" ytUrl="https://youtu.be/yGJdRAXHCPM?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=64">
                <p>Mecanismo útil para recibir una cantidad de parametros indefinidos, pudiendo enviar la cantidad de argumentos que deseemos.</p> 
                <ul>
                    <li>Los datos que reciba el parametro rest, serán almacenados/devueltos en un array.</li> 
                </ul> 
                <br/>
    <h4>EJ1: Envío argumentos indeterminados, y recibo parametros del mismo modo.</h4> 
    <CodeBox lang="javascript"> 
        {
`function sum(...params) {
    let total = 0
    for (let i = 0; i < params.length; i++) {
       total += params[i] 
    }
    return total;
}
  
const numbers = [1, 2, 3];
const result = sum(...numbers);
console.log(result); //  6`
                    }
                </CodeBox>
                <br/>
                <h4>EJ2:</h4> 
                <CodeBox lang="javascript"> 
                    {
`const lista1 = [1,2,3]
const lista2 = [4,5,6]
    
// ...listaDeNumeros === [ array ilimitado de items ]
    const sumar = (...listaDeNumeros) => {
        const numeros = listaDeNumeros
        let resultado = 0
        numeros.forEach((n) => resultado += n) 
        // Recorro los valores del array (listaDeNumeros) y sumo todos los valores
        return resultado;
    }

    console.log(sumar(...lista1, ...lista2)) 
    // Genero un nuevo array basado en la concatenación de lista1 y lista2, gracias al spread operator`
}
</CodeBox>
    <br/>
    <h4>EJ3:</h4> 
    <CodeBox lang="js"> 
        {
`function sumar (a,b, ... c) {
    let resultado = a + b
    // console.log(c) 
    // Devuelve un array con todos los valores extras
    c.forEach((n) => resultado += n) 
    // Recorro los valores del array (c) si hubiere y los sumo al resultado
    return resultado;
}

console.log(sumar(1,2)) // El parametro (c), puede, o no, existir.
console.log(sumar(1,2,3,4,5,6,7))`
                    }
                </CodeBox>
            </TopicContainer>
        </Information>
    )
}

export default SpreadOperator