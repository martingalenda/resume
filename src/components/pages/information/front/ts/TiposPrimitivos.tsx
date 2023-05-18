import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"
import { Alert } from "@mui/material"

const TiposPrimitivos = () => {

    return (
        <Information>

    
            <TopicContainer id="explicito" topic="Tipos primitivos">

                <br/> 
                <h4><strong>any & unknown</strong></h4> 
                <p>Hay ocasiones en las que necesitará trabajar con valores que son desconocidos en el momento de desarrollar el código, o que son de un rango posible reducido de tipos de valor. En estos casos, puede usar los tipos any y unknown, así como usar la aserción de tipos y las restricciones de tipos para mantener el control sobre lo que el código puede hacer con los valores que se pasan.</p> 
                <ul>
                    <li>any es un tipo que puede representar cualquier valor de JS sin restricciones. Puede ser útil si se espera un valor de una biblioteca de terceros o entradas de usuario en las que el valor es dinámico, ya que el tipo any permitirá volver a asignar distintos tipos de valores. También resulta útil para migrar un proyecto hecho en JS de forma gradual.</li> 
                    <li>unknown este tipo es similar al tipo any, en que cualquier valor se puede asignar al tipo unknown. Sin embargo, no se puede acceder a las propiedades de un tipo unknown; tampoco se pueden llamar, ni construir.</li> 
                </ul> 
                <CodeBox lang="ts">            
                    {
`
let variable: any = "Hola" // Ahora la variable puede representar cualquier valor (tipo de dato)
variable = 10


let randomValue: unknown = 10;
randomValue = true;
randomValue = 'Mateo';

console.log(randomValue.name);  // Error: Object is of type unknown
randomValue();                  // Error: Object is of type unknown
randomValue.toUpperCase();      // Error: Object is of type unknown`
                    }
                </CodeBox>
                <Alert severity="warning" variant="outlined">Recuerde que toda la comodidad de any se produce a costa de perder seguridad de tipos. La seguridad de tipos es uno de los principales motivos para usar TypeScript. Debe evitar el uso de any a no ser que sea estríctamente necesario.</Alert>
                <br/> 
                <p>En resúmen, la diferencia principal entre any y unknown es que no puede interactuar con una variable de tipo unknown; si lo hace, se genera un error del compilador. any omite las comprobaciones en tiempo de compilación y el objeto se evalúa en tiempo de ejecución. Si el método o la propiedad existen, se comportará según lo esperado.</p>
                <br/> 
                <br/> 
                <h4><strong>boolean, number, string, bigInt</strong></h4> 
                <CodeBox lang="ts">            
                    {
`const variable: number // Declaramos que la variable es de tipo numero sin inicializarla

const variable: number = 2 // Especificamos que la variable corresponde a un número
const variable: string = "Beep" // Especificamos que la variable corresponde a un string

let sentence: string = \`My name is \${firstName}.
                        I am new to TypeScript.\`;
console.log(sentence); // Nos imprime el template string sin problemas

const variable: boolean = true // Especificamos que la variable corresponde a un boolean
const variable: bigint = 100n // Especificamos que la variable corresponde a un número muy alto`
                    }
                </CodeBox>
                <br/> 
                <br/> 
                <h4><strong>null & undefined</strong> </h4> 
                <p>
                    son subtipos de todos los demás tipos, y se utilizan para representar la ausencia intencional de un valor. Es importante tener en cuenta que los tipos null y undefined no pueden ser asignados a otros tipos de datos, a menos que se les haya especificado como parte de una unión de tipos. Algo que veremos más adelante.
                </p>
                <CodeBox lang="ts">            
                    {
`const variable: null = null; // Especificamos que la variable corresponde a nulo
const variable: undefined = undefined; // Especificamos que la variable es indefenida`
                    }
                </CodeBox>

                <br/> 
                <br/> 
                <h4><strong>enum</strong></h4> 
                <p>La funcionalidad de los enumerados en TypeScript es proporcionar un conjunto de valores constantes y legibles por humanos para representar opciones, o estados específicos. En este caso, los valores del enumerado ContractStatus representan los posibles estados de un contrato (permanente, temporal o de aprendizaje).</p> 
                <Alert severity="info" variant="outlined">Siempre que un procedimiento acepte un conjunto limitado de variables, considere la posibilidad de usar una enumeración. Las enumeraciones hacen que el código sea más claro y legible, especialmente cuando se usan nombres significativos.</Alert> 
                <p>Entre las ventajas de utilizar enum, nos encontramos con que:</p> 
                <ul>
                    <li>Permite reducir los errores que provoca la transposición o la escritura incorrecta de números.</li> 
                    <li>Facilita el cambio de valores en el futuro.</li> 
                    <li>Facilita la lectura del código, lo que significa que es menos probable que se produzcan errores en él.</li> 
                    <li>Garantiza la compatibilidad con versiones posteriores. Con las enumeraciones, es menos probable que se produzca un error en el código si en el futuro alguien cambia los valores correspondientes a los nombres de miembro.</li> 
                </ul> 
                <CodeBox lang="ts">            
                    {
`enum ContractStatus {
    Permanente = 1, // Hacemos que los identificadores comiencen a contar desde 1, y no de 0
    Temporal, // 2
    Aprendiz // 3
}

const employeeStatus: ContractStatus = ContractStatus.Permanente

console.log(employeeStatus) // Nos devuelve la posición (1) 
console.log(ContractStatus[employeeStatus]) // Nos devuelve el identificador (Permanente)`
                    }
                </CodeBox>

                <br/> 
                <br/> 
                <h4><strong>void</strong> </h4> 
                <p>
                    En TypeScript, void es un tipo de dato que se utiliza para indicar la ausencia de un tipo específico. Se utiliza para indicar que una función no devuelve ningún valor.
                </p>

                <CodeBox lang="ts">            
                    {
`function greet(): void {
    console.log("Hello!");
}


const button = document.querySelector("button");
button.addEventListener("click", (): void => {
  console.log("Button clicked!");
});`
                    }
                </CodeBox> 
                <small>
                    Es importante tener en cuenta que void no es lo mismo que undefined. void se utiliza para indicar la ausencia de un valor de retorno, mientras que undefined es un valor que puede ser asignado a una variable. Si una función no especifica un tipo de retorno, se considera que devuelve undefined de forma implícita.
                </small>
            </TopicContainer>


{/*             <h4>Test:</h4> 
            <Test/> */}
        </Information>
    )
}

export default TiposPrimitivos