import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const RestParam = () => {

    return (
        <Information>

            <TopicContainer topic="Rest Param" ytUrl="https://youtu.be/yGJdRAXHCPM?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=64">
                <p>Mecanismo útil para recibir una cantidad de parametros indefinidos. Pudiendo enviar la cantidad de argumentos que deseemos.</p> 
                <ul>
                    <li>Los datos que reciba el parametro rest, seràn almacenados/devueltos en un array.</li> 
                </ul> 
                <h4>EJ1:</h4> 
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
    
    <h4>EJ2:</h4> 
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

export default RestParam