import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const CondicionalesJS = () => {

    return (
        <Information subTopic={data.menu[0].array[3].array[3].subTopic}>

            <TopicContainer id="ifelse" topic="Condicional - IF/ELSE" ytUrl="https://youtu.be/9h5hyh_wDjo?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=142">
                <h4>EJ1: Sentencias distintas dependiendo una condición.</h4>
                <CodeBox lang="javascript"> 
                    {
`const x = 0
const y = 5

if (x > y) {
    // Mientras x sea menor que y.... cumplo estas sentencias...
} else if (x == y) { // Opcional
    // Mientras x sea igual que y.... cumplo estas sentencias...
} else { // Opcional
    // Si nada de lo anterior es verdadero, cumplo estas sentencias...
};`
}
</CodeBox>

<h4>EJ2: Buscando si existe un string dentro de un array.</h4> 
<CodeBox lang="javascript"> 
    {
`const arr = ['manzana', 'pera', 'naranja', 'plátano'];
const str = 'naranja';

if (arr.includes(str)) {
    console.log(\`SI. La fruta "\${str}" se encuentra en el array\`);
} else {
    console.log(\`La fruta "\${str}" NO se encuentra en el array\`);
}`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="ternario" topic="Condicional - Operador ternario" ytUrl="https://youtu.be/9h5hyh_wDjo?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=1244">
                <p>Sintaxis = (condicion) ? expresionVerdadero : expresionFalso</p> 
                <h4>EJ1: Si (y) es mayor que (x) la variable res equivale a "Verdadero", sino, a "False"</h4> 
                <CodeBox lang="javascript"> 
                    {
`let x = 0
let y = 5
let res = null

{
    (y > x) ? res = "Verdadero" : res = "False" 
} 
 
console.log(res)`
}
</CodeBox>
<h4>EJ2: Si patas es 4, y nombre es "Negrito", muestro mensaje autorizado, sino, NO autorizado</h4> 
<CodeBox lang="javascript"> 
    {
`const patas = 4
const nombre = "Negrito"

patas == 4 && nombre == "Negrito" ? console.log("Perro autorizado") : console.log("Perro NO autorizado")`
}
</CodeBox>
            </TopicContainer>
            <TopicContainer id="switch" topic="Condicional - Switch" ytUrl="https://youtu.be/9h5hyh_wDjo?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=1562">
                <p></p> 
                <CodeBox lang="javascript"> 
                    {
`let opcion = 1

switch (opcion) {
    case 1:
        /* En caso de que la variable opcion sea == 1 ... */
        sentencias;
        break;
        /* Break se utiliza para salir fuera del switch.
        Si no estuviera, seguiría chequeando los otros casos */
    case 2:
        sentencias;
        break;
    case 3:
        sentencias;
        break;
    default:
        sentencias;
        break;
}`
                    }
                </CodeBox>
            </TopicContainer>
        </Information>
    )
}

export default CondicionalesJS