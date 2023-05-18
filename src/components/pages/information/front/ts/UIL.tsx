import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import data from "../../../../data/data"
import CodeBox from "../../../../global/code/CodeBox"

const UIL = () => {

    return (
        <Information subTopic={data.menu[0].array[4].array[3]}>

            <TopicContainer topic="Unión & Intersección">
            <p>TS otorga opciones más avanzadas para declarar tipos. Los tipos unión e intersección ayudan a controlar situaciones en las que un tipo se compone de dos, o más tipos.</p> 
            </TopicContainer>
            <TopicContainer id="union" topic="Tipos de unión">
            <p>En TypeScript, los tipos de unión (union types) permiten definir una variable, parámetro, o propiedad que puede contener valores de diferentes tipos. Esto significa que una variable con un tipo de unión puede tener más de un tipo de valor posible. Los tipos de unión se representan utilizando el operador de tubería ( | )</p> 
            <br/>
            <h4>Unión de tipos primitivos:</h4> 

            <CodeBox lang="ts"> 
                    {
`let multiType: number | boolean; // Puede ser un número, o un boolean
multiType = 20        // Valid
multiType = true      // Valid
multiType = "twenty"   // Invalid`
                    }
            </CodeBox>

            <br/>
            <h4>Unión de tipos objetos:</h4> 
            <CodeBox lang="ts"> 
                    {
`type Point = { x: number; y: number };
type Color = "red" | "blue" | "green";
type Shape = Circle | Square | Triangle;

interface Circle {
  type: "circle";
  radius: number;
}

interface Square {
  type: "square";
  sideLength: number;
}

interface Triangle {
  type: "triangle";
  base: number;
  height: number;
}

function getArea(shape: Shape): number {
  switch (shape.type) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "triangle":
      return (shape.base * shape.height) / 2;
  }
}`
                    }
            </CodeBox>

            <br/>
            <h4>Unión de tipos con valores literales:</h4> 
            <CodeBox lang="ts"> 
                {
`type YesOrNo = "yes" | "no";
let answer: YesOrNo;

answer = "yes"; // Válido
answer = "no"; // Válido
answer = "maybe"; // Inválido, "maybe" no es parte de la unión


// -------------------------------


type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;

diceRoll = 1    // Valid
diceRoll = 2    // Valid
diceRoll = 7    // Invalid`
                }
            </CodeBox>

            <br/>
            <h4>Unión de tipos nulos o indefinidos:</h4> 
            <CodeBox lang="ts"> 
                {
`type NullableString = string | null | undefined;
let text: NullableString;

text = "Hello"; // Válido
text = null; // Válido
text = undefined; // Válido
text = 42; // Inválido, número no es parte de la unión`
                }
            </CodeBox>
            </TopicContainer>


            <TopicContainer id="interseccion" topic="Tipos de intersección">
            <p>En TypeScript, los tipos de intersección (intersection types) permiten combinar múltiples tipos en uno solo. Al usar un tipo de intersección, se crea un nuevo tipo que tiene todas las propiedades y características de los tipos combinados. Se representan utilizando el operador de intersección (&).</p> 
            <br/>
            <h4>Intersección de tipos de objetos:</h4> 
            <p>En este ejemplo, se definen dos interfaces, Car y ElectricVehicle, que representan propiedades de un automóvil y un vehículo eléctrico, respectivamente. Luego, se crea un nuevo tipo ElectricCar que combina las propiedades de ambas interfaces utilizando la intersección (&). El tipo ElectricCar representa un automóvil eléctrico con todas las propiedades de Car y ElectricVehicle.</p> 
            <CodeBox lang="ts"> 
                    {
`interface Car {
    brand: string
    model: string
}
  
interface ElectricVehicle {
    batteryCapacity: number
}
  
type ElectricCar = Car & ElectricVehicle
  
const myCar: ElectricCar = {
    brand: "Tesla",
    model: "Model 3",
    batteryCapacity: 75,
};`
                    }
                </CodeBox>

            <br/>
            <h4>Intersección de tipos de función:</h4> 
            <p>En este ejemplo, se definen dos tipos de funciones, GreetFunction y LogFunction, que representan funciones para saludar y para registrar mensajes, respectivamente. Luego, se crea un nuevo tipo GreetAndLogFunction que combina los tipos de las dos funciones utilizando la intersección (&). El tipo GreetAndLogFunction representa una función que puede tanto saludar como registrar un mensaje.</p> 
  
            <CodeBox lang="ts"> 
                    {
`type GreetFunction = (name: string) => void
type LogFunction = (message: string) => void

type GreetAndLogFunction = GreetFunction & LogFunction

const greetAndLog: GreetAndLogFunction = (name: string) => {
  console.log(\`Hello, \${name}!\`)
};`
                    }
                </CodeBox>
            </TopicContainer>
          
        </Information>
    )
}

export default UIL;



