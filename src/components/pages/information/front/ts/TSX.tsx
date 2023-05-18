import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const TSX = () => {

    return (
        <Information>

            <TopicContainer topic="TSX - Introducción">
                <p>
                    Si has seguido el índice de tópicos de forma descendente, sin saltearle ningúno de los temas, habrás notado que cuando nos introdujimos en React, aprendimos sobre lo que era   JSX, que no es más que una extensión de JavaScript utilizada en React para crear componentes de interfaz de usuario de manera declarativa.
                </p>
                <p>
                    En el caso de TypeScript, TSX es una extensión de TypeScript específicamente diseñada para trabajar con React. TSX combina la sintaxis de TypeScript con JSX, lo que    permite agregar anotaciones de tipo estáticas en los componentes de React.
                </p>
                <p>
                    A continuación veremos varios ejemplos de la sintaxis de TSX. No repetiremos los conceptos explicados con anterioridad; Como quien dice, iremos directo al grano.
                </p>

            </TopicContainer>


            <TopicContainer topic="Declaración de estado y propiedades (básica)">

            <h4>Declaración explicita del tipo de prop a number:</h4>
            <small>Esta forma es poco practica/usada ya que dificulta la legibilidad al recibir más de una propiedad</small>
            <CodeBox lang="tsx">            
                {
`const Testeanding = ({counter}: {counter?: number}): JSX.Element => {
    return (
        <p>
            {counter}
        </p>
    )
}

const Test = () => {
   return (
       <Testeanding counter={10} /> // Prop opcional de tipo numero
   )
}

export default Test`
                }
            </CodeBox>
            <h4>Declaración explicita del tipo de estado a string:</h4>
            <CodeBox lang="tsx">            
                {
`import { useState } from 'react';

const MyComponent = (): JSX.Element => {
  const [estado, setEstado] = useState<string>("")

  return (
    <div>
        <p>Estado: {estado}</p>
        <button onClick={() => setEstado("Fantastic")}>
            Change state
        </button>
    </div>
  )
}

export default MyComponent;`
                }
            </CodeBox>
            </TopicContainer>



            <TopicContainer topic="Declaración de estado y propiedades con Interface">

            <h4>Declarando los prop types de forma explicita con Interface:</h4>
            <p>
                En este ejemplo, el componente testeanding recibe las props tipadas de forma explicita utilizando interface, y retorna un elemento JSX.
            </p>
            <CodeBox lang="tsx">            
                {
`interface AppState {
    counter: number; // Declaramos que el tipo de la prop counter sea numero, y obligatorio.
    name?: string; // Declaramos que la prop name sea opcional, y de tipo string.
}
 
const Testeanding = ({counter = 0, name}: AppState): JSX.Element => {
     return (
         <p>
            {counter}
            {name}
         </p>
     )
}


const Test = (): JSX.Element => {
    return (
        <Testeanding counter={10}/>
    )
}
 
export default Test;`
                }
            </CodeBox>
            
            <h4>Declarando el tipo de estado de forma explicita con Interface:</h4>

            <CodeBox lang="tsx">            
                {
`import { useState } from 'react';

interface AppState {
  counter: number
  name?: string // Opcional
}

const MyComponent = (): JSX.Element => {
  const [state, setState] = useState<AppState>({
    counter: 0,
    name: "John"
  })

  return (
    <div>
      <p>Counter: {state.counter}</p>
      <p>Name: {state.name}</p>
    </div>
  )
}

export default MyComponent;`
                }
            </CodeBox>

            </TopicContainer>



            <TopicContainer topic="Ejemplos de enum">
            <h4><strong>enum</strong>: para declarar los estados posibles con useState</h4>
            <CodeBox lang="tsx">            
                    {
`import {useState} from 'react';
 
enum ContractStatus {
    Permanente = 1, 
    Temporal, 
    Aprendiz 
}

const MyComponent = (): JSX.Element => {
    const [employeeStatus, setEmployeeStatus] = useState<ContractStatus>(ContractStatus.Temporal) 

    const getContractStatusName = (status: ContractStatus): string => {
        switch (status) {
          case ContractStatus.Permanente:
            return "Permanente";
          case ContractStatus.Temporal:
            return "Temporal";
          case ContractStatus.Aprendiz:
            return "Aprendiz";
          default:
            return "";
        }
    };

    return (
        <p>
            {getContractStatusName(employeeStatus)}
        </p>
    )
}

export default MyComponent;`
                    }
                </CodeBox>


            </TopicContainer>
          
        </Information>
    )
}

export default TSX