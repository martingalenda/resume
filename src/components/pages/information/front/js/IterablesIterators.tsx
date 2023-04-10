import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const IterablesIterators = () => {

    return (
        <Information>

            <TopicContainer topic="Iterables Iterators" ytUrl="https://youtu.be/N00DzBNPJEw?t=102">
                <p>Refiere a una forma de iterar distintos tipos de datos iterables (string, arrays, sets, maps, nodeList ... etc)</p> 
                <CodeBox lang="javascript"> 
                    {
`const iterable = [1,2,3,4,5]
// const iterable = "Hola mundo"
// const iterable = new Set([1,2,3,3,4,5])
// const iterable = new Map([["nombre", "jon"],["edad",35]])
const iterator = iterable[Symbol.iterator](); // Accedemos al iterador del iterable

console.log(iterator)

// Imprimo los tres primeros valores con el metodo del iterador NEXT
    // console.log(iterator.next()) // Devuelve los valores del iterable (de uno en uno)
    // console.log(iterator.next()) 
    // console.log(iterator.next()) 

// Formas de recorrer el iterable
let next = iterator.next()

while(!next.done) {
    console.log(next.value)
    next = iterator.next() // Reasignamos el valor para salir del ciclo cuando next.done sea true
}`
                    }
                </CodeBox>
            </TopicContainer>
        </Information>
    )
}

export default IterablesIterators