import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const OperadoresJS = () => {

    return (
        <Information>

            <TopicContainer topic="Operadores" ytUrl="https://www.youtube.com/watch?v=_8Z5AeGVIXE&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=14">
                <h4>Asignación </h4> 
                <CodeBox lang="javascript"> 
                    {
`total = 0`
                    }
                </CodeBox>
                <h4>Asignación compuestos </h4> 
                <CodeBox lang="javascript"> 
                    {
`total += 2 // suma 2 a la variable total
total -= 2 // resta 2 a la variable total
total /= 2 
total *= 3 
total %= 5 `
                    }
                </CodeBox>
                <h4>Unario incremento/decremento</h4> 
                <CodeBox lang="javascript"> 
                    {
`total ++ // suma 1 al valor de la variable
total -- // resta 1 al valor de la variable`
                    }
                </CodeBox>
                <h4>Aritmeticos </h4> 
                <CodeBox lang="javascript"> 
                    {
`x + x // suma
x - x // resta
x / x // división
x * x // multiplicación
x % x // mod/resto
x ** x // potenciación
x-- // le resto 1 a la variable x`
                    }
                </CodeBox>
                <h4>Comparación </h4> 
                <CodeBox lang="javascript"> 
                    {
`x == y // x igual y (solo el valor)
x != y // x distinto y
x === y // x exactamente identico y (tipo de dato & valor)
x !== y // x exactamente distinto y (tipo de dato & valor)
x > y // x Mayor y
x < y // x Menor y
x <= y // x Menor o igual y
x >= y // x Mayor o igual y`
                    }
                </CodeBox>
                <h4>Lógicos </h4> 
                <CodeBox lang="javascript"> 
                    {
`!true // Negacion, lo verdadero lo vuelve falso, y biceversa
x && y // and (si x (&& - and) y son true ..)
x || y // or (si x (|| - or) y son true ..)`
                    }
                </CodeBox>
                <h4>Cortocircuito </h4> 
                <CodeBox lang="javascript"> 
                    {
`// Cortocircuito OR ( || ) - Devuelve el primer valor verdadero. Si ninguno lo es, devuelve el último.
// Cortocircuito AND ( && ) - Devuelve el primer valor falso. Si ninguno lo es, devuelve el último.
// Cortocircuito Nullish ( ?? ) - Devuelve primer valor definido, ignorando los valores indefinidos (null o undefined)

// EJ: Cortocircuito OR en una función básica:
function saludar (nombre) {
    nombre = nombre || "Desconocido";
    console.log({\`Hola  \${nombre}\`}) // Si existe, (si recibe como parametro) un nombre, saluda a la persona, sino saluda a un desconocido.
} 

saludar("Martín")
saludar()

____________________________________________________________

console.log(true || "Cortocircuito OR") // Devuelve True
console.log(false || "Cortocircuito OR") // Devuelve Cortocircuito OR
console.log(true && "Cortocircuito AND") // Devuelve Cortocircuito AND
console.log(false && "Cortocircuito AND") // Devuelve Fale
console.log(false ?? "Cortocircuito Nullish") // Devuelve False
console.log(true ?? "Cortocircuito Nullish") // Devuelve True
console.log(null ?? "Cortocircuito Nullish") // Devuelve Cortocircuito Nullish
console.log(undefined ?? "Cortocircuito Nullish") // Devuelve Cortocircuito Nullish`
                    }
                </CodeBox>
                <small>Ejemplo de operadores cortocircuito: <a target="_blank" href="https://www.youtube.com/watch?v=SK7CCXjzVgA&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=31&t=418s">Link</a> </small>
                
                
            </TopicContainer>
        </Information>
    )
}

export default OperadoresJS