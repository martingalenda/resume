import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const DatosES6 = () => {

    return (
        <Information subTopic={data.menu[0].array[3].array[20]}>

            <TopicContainer id="symbol" topic="Symbol" ytUrl="https://www.youtube.com/watch?v=XVBkTsj99so&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=51">
                <p>Los Symbols son un tipo de dato primitivo. Suelen ser utilizados para mantener las propiedades y los métodos de un objeto de forma privada/anonima</p> 
                <CodeBox lang="javascript"> 
                    {
`// Al declararse crean una referencia única, por lo que los Symbol siempre son únicos, inclusive cuando sus valores se "repiten"
    const id1 = Symbol("id")
    const id2 = Symbol("id")
    console.log(id1 === id2) // Para testear que los identificadores de los Symbols son únicos

// ? EJ:
// Declaramos los Symbols con su ("referencia/descripcion/identificador")
    const NOMBRE = Symbol("nombrecito")
    const SALUDAR = Symbol("saludanding")
    const APELLIDO = Symbol("apellido")

// Asignamos los valores de 2 Symbols por dentro del objeto, como si fuesen una propiedad, o metodo comun, pero encerrado en corchetes
    const persona = {
        [NOMBRE]: "Martín",
        [SALUDAR]: function () {
            console.log(\`Holaaaaa \${this[NOMBRE]} \${this[APELLIDO]}\`)
        }
    }

// Asigno el valor del symbol(prop) apellido, por fuera del objeto
    persona[APELLIDO] = "Galenda" 

    console.log(persona)
    console.log(persona[NOMBRE]) // Accedemos a la propiedad symbol del objeto persona
    persona[SALUDAR](); // Invocamos al metodo symbol SALUDAR del objeto persona

    // Para listar los symbols:
    const symbolProps = (Object.getOwnPropertySymbols(persona))
    console.log(symbolProps)`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="sets" topic="Sets" ytUrl="https://www.youtube.com/watch?v=lnzhtrZ8H34&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=52">
                <p>Un tipo de dato complejo, muy similar a un array, pero con items/valores PRIMITIVOS únicos (no se repiten nunca).</p> 
                <CodeBox lang="javascript"> 
                    {
`// DATA: Recordamos que los datos complejos(arrays, objetos) poseen una referencia única.
    const set = new Set([1,2,2,3,4,5, false, true, false, {}, {}, [], [], "hola", "Hola"])

    console.log(set)
    console.log(set.size) // .size, equivale al .length

// Añado elementos al final del set
    set.add(6)
    set.add(7)
    set.add(8)
    set.add({})

// Borro elementos del set
    set.delete("hola")

// Validamos si se encuentra un item dentro del set (retorna boolean)
    console.log(set.has("Hola"))

// Elimina todos los elementos del set dejandolo vacio
    set.clear()

// Recorriendo el set
// Ej1 con for of:
    for (item of set) {
        console.log(item);
    }

// Ej2 con forEach:
    set.forEach(item => console.log((item)))

// Convertimos el set en un array con el metodo from del objeto Array.
    const newArr = Array.from(set)
    console.log(newArr[0]) // Luego podemos acceder a sus distintas posiciones`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="maps" topic="Maps" ytUrl="https://youtu.be/e2gBknyVJo8?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=6">
                <p>Un tipo de dato complejo muy similar a un objeto, con la diferencia principal de que este permite claves (keys) de cualquier tipo</p> 
                <CodeBox lang="javascript"> 
                    {
`// Generamos el map
    const mapa = new Map()

// Añado o sobrescribo valores
    mapa.set("nombre", "Martín")
    mapa.set("edad", 30)
    mapa.set(true, "Verdadero") // Ejemplo de como tolera un boolean de key

// Otra forma de añadir valores a un map
    const mapa2 = new Map([
        ["apodo", "Bepi"],
        ["deporte", "Futbol"]
    ])

// Creo un objeto para añadirlo luego como key al map
    const objeto = {
        instituto: "ESBA"
    }

    mapa.set(objeto, "UnObjeto") // Ejemplo de como tolera un objeto de key
    mapa.delete(true) // Borro la key (true) junto a su valor (elimino la prop entera)

    console.log(mapa)
    console.log(mapa.keys()) // Devuelve todas las keys del map
    console.log(mapa.values()) // Devuelve todos los valores del map
    console.log(mapa.get("keyName")) // Nos retorna el valor de la key solicitada
    console.log(mapa.size) // Devuelve el tamaño del map
    console.log(mapa.has("edad")) // Detecta si el map cuenta o no con la key (devuelve boolean)

// Recorro el map
    for (let [key, value] of mapa) {
        console.log(\`Key: \${key}, Valor: \${value}\`)
    }

    mapa.clear(mapa) // Elimina todo del map`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="weak" topic="WeakSets & WeakMaps" ytUrl="https://www.youtube.com/watch?v=nfMEnCrBL-0&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=54">
                <p>Funcionan de forma similar a set y maps, pero no son iterables, y poseen muchos menos metodos.</p> 
                <ul>
                    <li>Disponen de add, has, delete.</li> 
                    <li>Limpian de la memoria de forma automatica los valores null o undefined.</li> 
                </ul> 
            </TopicContainer>
        </Information>
    )
}

export default DatosES6