import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const DatosJS = () => {
 
    return (
        <Information subTopic={data.menu[0].array[3].array[1]}>

            <TopicContainer id="variables" topic="Variables" ytUrl="https://www.youtube.com/watch?v=bvkY9ey83yY">
                <CodeBox lang="javascript"> 
                    {
`var estado = "Soy un string";
// Scope global fuera de cualquier función, o scope global de función si se encuentra dentro de una. 
// Se puede declarar e inicializar su valor infinidad de veces.

let estado = "Soy un string"; 
// Scope global fuera de cualquier funciòn, o scope de bloque/regional dentro de una (No se puede declarar más de una vez sobre el mismo bloque).
// Se puede cambiar su valor, sin importar el tipo de dato que sea.

const pi = 3.14;
// Scope global fuera de cualquier funciòn, o scope de bloque/regional dentro de una (No se puede declarar más de una vez sobre el mismo bloque).
// NO se puede cambiar su valor si son datos primitivos, en cambio SI se puede con datos compuestos (arrays, objetos, y funciones)

estado = true
// Si no existe la variable, "se declara como var (?", de lo contrario, se utiliza para cambiar su valor.`
                    }
                </CodeBox>
                <small>Se debe evitar utilizar las variables (var), para evitar conflictos entre variables.</small> 
            </TopicContainer>
            <TopicContainer id="primitivos" topic="Datos Primitivos" ytUrl="https://www.youtube.com/watch?v=cC65D2q5f8I">
                <CodeBox lang="javascript"> 
                    {
`String = "valor" // El valor también puede ser escrito con comillas simples (''), o backstips (\`\`).
Number = 9999
Boolean = true // true or false
undefined // Indefinido
null // Inicializada, pero vacia

// "Not a Number" NO es un tipo de dato, sino un valor que surge cuando al operar con un valor que NO es numérico.
NaN`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="transf_primitivos" topic="Transformando datos primitivos">
            <h4>Transformo un dato entero a string:</h4> 
                <CodeBox lang="javascript"> 
                    {
`const numero = 50

// Forma 1: toString()
    const string = numero.toString();
    // console.log(typeof string);
// Forma 2: String()
    const string = String(numero);
    // console.log(typeof string);`
                    }
                </CodeBox>
                <h4>Transformo un dato string a entero:</h4> 
                <CodeBox lang="javascript"> 
                    {
 `const string = "30"

// Forma 1: parseInt()
    const number = parseInt(string)
    // console.log(typeof number);
// Forma 2: Number()
    const number = Number(string)
    console.log(typeof number);`
                    }
            </CodeBox>
            <h4>Transformo un dato numérico a boolean</h4> 
<CodeBox lang="javascript"> 
    {
`const numero = 0    
const boolean = Boolean(numero)    
console.log(typeof boolean, boolean)`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="arrays" topic="Datos complejos - Arrays" ytUrl="https://www.youtube.com/watch?v=o3c8cW73weQ&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=13"> 
                <span>Importante: La primer posición de los arrays corresponde siempre al valor 0, no 1. Es decir 0,1,2 ...</span><br/><br/>
                <h4>EJ1: Array básico</h4> 
                <CodeBox lang="javascript"> 
                    {
`let pc = ["Intel Core I7", 32, "1TB"]; // Lista creada
console.log(pc[2]) // Imprimo el valor ubicado en la tercer posición de la lista

// Formas de vaciar un array. Son utiles dependiendo la ocasión
    // 1- pc.length = 0
    // 2- pc = []
    // 3- pc.splice(0, pc.length)
    console.log(pc)`
                    }
                </CodeBox>
                <h4>EJ2: Arrays dentro de otro array</h4> 
                <CodeBox lang="javascript"> 
                    {
`const alumnos = [
    ["bepi", 0],
    ["pibe", 1],
    ["piba", 2, ["influencer", "abanderada", "mejor promedio"]],
];

console.log(alumnos.length); // Retorna la cantidad total del elementos que posee el array    
console.log(alumnos[1][1]); // Accede al segundo valor del segundo array de Alumnos    
console.log(alumnos[2][2][1]); // Accede al segundo valor del segundo array de Alumnos`
                    }
                </CodeBox>    
                <small>La propiedad .length también funciona con strings, para decirnos cuantos caracteres totales poseen.</small>
            </TopicContainer>
            <TopicContainer id="objetos" topic="Datos complejos - Objetos literales" ytUrl="https://www.youtube.com/watch?v=4xig5UPRC00&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=13">
                <ul>
                    <li>Entendemos por <strong>objeto literal</strong>, a aquellos que no han sido generado mediante metodos constructores (clases), o funciones generadoras.</li> 
                    <li>Entendemos por <strong>métodos</strong> a toda función propia de un objeto. Es decir, las que se definen dentro de estos.</li> 
                </ul> 
                <h4>EJ1: Consultas a un objeto literal</h4> 
                <CodeBox lang="javascript"> 
                    {
`const pc = [
    { nombre: " Martin ", procesador: " Intel Core I7 9700 ", ram: 32, espacio: 2 },
    { nombre: " Pepe ", procesador: " Intel Core I5 7300 ", ram: 8, espacio: 0.5 },
    { nombre: " Agus ", procesador: " Intel Core I3 7100 ", ram: 4, espacio: 1 }
];

console.log(pc); // Devuelve el array completo
console.log(pc[0]); // Devuelve el primer objeto del array
console.log(pc.at(-1)); // Devuelve el último valor del array con el metodo at
console.log(pc[0].procesador); // Devuelve el valor del procesador del primer objeto
console.log(Object.keys(pc[0])); // Devuelve un nuevo array, cada elemento será una key/prop del objeto
console.log(Object.values(pc[0])); // Devuelve un nuevo array, cada elemento será un valor del objeto`
                    }
                </CodeBox>
                <h4>EJ2: Modificaciones y consultas a un objeto literal</h4> 
                <CodeBox lang="javascript"> 
                    {
`const familia = {
    apellido: "Ramos",
    adultos: ["gustavo", "santiago", "fabian"],
    chicos: ["benja", "lio", "agus"],
    adoslescentes: ["lucas", "fede", "juan"],
    viejos: ["roberto", "pancracio", "manolo"],
    profesiones: { // "Sub-objeto" anidado
        primaria: "programadores",
        secundaria: "contadores"
    }
};

// MODIFICACIONES:
    familia.viejos = ["chuli", "chulon", "chuleta"]; // Cambio los valores la propiedad viejos
    delete familia.adoslescentes; // Borro el item adolescentes completo

// CONSULTAS:
    console.log(familia); // Muestra el array completo
    console.log(familia.viejos); // Muestras los valor de la propiedad viejos
    console.log(familia.chicos[1]); // Muestra el chico ubicado en la segunda posición del array
    console.log(familia.profesiones.primaria) // acceso a la propiedad primaria del "sub-objeto" profesiones.

    console.log(familia.hasOwnProperty("adultos")); 
    // Chequea si existe la propiedad adultos o no, devuelve booleano`
                    }
                </CodeBox>
                <h4>EJ3: Métodos en objetos literales</h4> 
                <CodeBox lang="javascript"> 
                    {
`const juegos = {
    moba: "League of legends, Dota",
    inteligencia: "AmongUs, Truco, Ajedrez",
    shooter: "CsGo, Valorant, Overwatch, Fortnite ",
    getGames() {
        console.log(this.moba, this.inteligencia, this.shooter)
    },
    getMobas: function () {
        console.log(this.moba)
    },
    getShooters: function () {
        console.log(this.shooter)
    }
}

juegos.getGames()
juegos.getMobas()`
                    }
                </CodeBox>
                <h4>EJ4: <strong>Object.freeze(obj)</strong> = Sirve para hacer inmutable un objeto.</h4>
<CodeBox lang="javascript"> 
    {
`let person = {
    name: 'Mike',
}

person.name = 'Bob' // Esto funcionaría en un objeto mutable
// console.log(person)
Object.freeze(person)
person.name = 'Will' // TypeError: Cannot assign to read-only property of 'name' of object
console.log(person)`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="chequeo" topic="Chequeo de datos">
                <p></p> 
                <CodeBox lang="javascript"> 
                    {
`// Nos retorna el tipo de dato al que corresponde la variable respuesta.
console.log(typeof respuesta) 

// Nos retorna valor boolean, en caso de que sea, o no, un número.
console.log(isNan(respuesta))`
                    }
                </CodeBox>
            </TopicContainer>
        </Information>
    )
}

export default DatosJS