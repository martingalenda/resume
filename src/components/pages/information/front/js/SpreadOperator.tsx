import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const SpreadOperator = () => {

    return (
        <Information>

            <TopicContainer topic="Spread Operator" ytUrl="https://youtu.be/yGJdRAXHCPM?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=333">
                <p>El spread operator es un operador introducido en ECMAScript 6 que se utiliza en JavaScript para expandir una expresión iterable, como un array o un objeto, en lugares donde se esperan cero o más argumentos o elementos. En otras palabras, permite descomponer un objeto iterable en sus elementos individuales y usarlos en otro lugar, como una lista de argumentos de una función.</p> <br/> 
                <h4>EJ1: Creando un nuevo array basado en array1 y array2:</h4> 
                <CodeBox lang="js"> 
                    {
`const array1 = [1, 2, 3, 4, 5]
const array2 = [6, 7, 8, 9, 10]

const array3 = [...array1, "Martin", ...array2] // También le introduzco un string entre medio de los arrays
console.log(array3)`
}
</CodeBox>
    <h4>EJ2: Con objetos, creo un nuevo objeto con todas las propiedades de ambos objetos</h4> 
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
        </Information>
    )
}

export default SpreadOperator