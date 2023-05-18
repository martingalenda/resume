import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const TiposArrays = () => {

    return (
        <Information>

            <TopicContainer topic="Tipos de colección">

                <br/>
                <h4>Arrays </h4>
                <p>Los arrays son colecciones ordenadas de elementos del mismo tipo, o de tipos mixtos. Se utilizan para almacenar y acceder a múltiples elementos de manera secuencial. </p>
                <CodeBox lang="ts">            
                    {
`// Opcion A: Array de números
const variable: number[] = [1,2,3,4,5]; 
// Opcion B: Array de números, con una sintaxis diferente (pero con la misma utilidad que la opcion A)
const variable: Array<string> = ["Uno", "Dos", "Tres", "Cuatro"]; 

// Opción C: Con tipos diferentes
let person1: [string, number] = ['Marcia', 35];`
                    }
                </CodeBox>

                <br/>
                <h4>Tuplas </h4>
                <p>Las tuplas son colecciones ordenadas de elementos de diferentes tipos. Se utilizan cuando necesitas un número fijo de elementos con tipos específicos en un orden particular. </p>
                <CodeBox lang="ts">            
                    {
``
                    }
                </CodeBox>

                <br/>
                <h4>Sets </h4>
                <p>Los sets son colecciones de elementos únicos, lo que significa que no puede haber duplicados en un set. Se utilizan para almacenar elementos sin un orden específico y para verificar rápidamente la existencia de un elemento en el set. </p>
                <CodeBox lang="ts">            
                    {
``
                    }
                </CodeBox>

                <br/>
                <h4>Maps </h4>
                <p> Los maps son colecciones de pares clave-valor, donde cada clave debe ser única. Se utilizan para almacenar y buscar valores asociados a una clave específica. </p>
                <CodeBox lang="ts">            
                    {
``
                    }
                </CodeBox>

            </TopicContainer>
          
        </Information>
    )
}

export default TiposArrays; 