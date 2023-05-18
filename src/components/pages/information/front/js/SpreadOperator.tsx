import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const SpreadOperator = () => {

    return (
        <Information>

            <TopicContainer topic="Spread Operator" ytUrl="https://youtu.be/yGJdRAXHCPM?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=333">
                <p>El spread operator (operador de propagación) fue introducido en ECS6. Resulta útil para expandir una expresión iterable (como un array, o un objeto) en multiples elementos.</p>
                <p>Entre las principales funciones de este operador podriamos destacar que:</p>
                <ul>
                    <ul>Permite descomponer una arreglo, u objeto, en sus elementos individuales.</ul> 
                    <ul>Permite combinar dos o más arreglos objetos en uno solo.</ul> 
                    <ul>Permite crear copias de arreglos y objetos.</ul> 
                    <ul>Permite pasar una cantidad de elementos indeterminadas de argumentos a funciones.</ul> 
                </ul> 
                <br/> 
                <h4>EJ1: Creando un nuevo array, combinando: array1, array2, y un string.</h4> 
                <CodeBox lang="js"> 
                    {
`const array1 = [1, 2, 3, 4, 5]
const array2 = [6, 7, 8, 9, 10]

const array3 = [...array1, "Martin", ...array2] // También le introduzco un string entre medio de los arrays
console.log(array3)`
}
</CodeBox>
    <h4>EJ2: Combino las propiedades y valores de dos objetos en uno nuevo.</h4> 
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
    <h4>EJ3: Genero una copia de un array.</h4> 
    <CodeBox lang="javascript"> 
        {
`const array1 = [1, 2, 3, 4, 5]
const array2 = [...array1]

console.log(array2)`
                    }
                </CodeBox>
    <h4>EJ4: Envío argumentos indeterminados, y recibo parametros del mismo modo.</h4> 
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
            </TopicContainer>
        </Information>
    )
}

export default SpreadOperator