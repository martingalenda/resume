import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Iterativas = () => {

    return (
        <Information subTopic={data.menu[0].array[3].array[4]}>

            <TopicContainer id="dowhile" topic="DO/WHILE" ytUrl="https://youtu.be/AapgtR0Rwk0?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=212">
                <p>Siempre debe existir una opción de escape para salir del bucle, de lo contrario se tornara un bucle infinito, y colapsará la aplicación por falta de memoria.</p> 
                <h4>EJ1: Mientras que la condición sea verdadera...</h4> 
                <CodeBox lang="javascript"> 
                    {
`let x = 0
const y = 5

while (x < y) {
    // Mientras x sea menor que y.... cumplo estas sentencias
    console.log(x)
    x++
    // flag para salir del bucle, incrementa a x de uno en uno en cada iteración.
};`
}
</CodeBox>
    <h4>EJ2: Parecido al anterior, pero:</h4> 
    <ul>
        <li>Nos aseguramos que se ingresa al menos una vez al ciclo</li> 
        <li>break: Forzamos la salida del bucle en cuanto x == 10</li> 
    </ul> 
    <CodeBox lang="javascript"> 
        {
`let x = 0
const y = 15

do {
    // setencia que ocurria minimo una vez....
    x++
    console.log(x)
    if (x == 10) {
        break; // fuerza a salir del bucle cuando x sea 10
    }
}
while (x < y); // El bucle prosigue hasta que esto no sea verdadero, o se cumpla un break anterior a ello.`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="for" topic="FOR" ytUrl="https://youtu.be/AapgtR0Rwk0?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=692">
                <h4>EJ1: Imprime el indice (i) 6 veces (1 vez por cada iteración)</h4> 
                <CodeBox lang="javascript"> 
                    {
`// Declaramos (i = 0) , mientras (i < 6), (i + 1)...
// La variable puede ser inicializada dentro o fuera del for

for (let i = 0; i < 6; i++) {
    console.log(i)
};`
}
</CodeBox>
<h4>EJ2: (IN) Imprimo los valores de una lista, evadiendo un valor (perro) con (continue).</h4> 
<p>Video-tutorial: <a href="https://youtu.be/AapgtR0Rwk0?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=1083" target="_blank"> https://youtu.be/AapgtR0Rwk0?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=1083 </a></p> 
    <CodeBox lang="javascript"> 
    {
`// For (IN) recorre por posiciones (numeros), animal = 0, 1, 2 ...

let animales = ["gato","perro","tiranosaurio"];

for (animal in animales) {
    if (animales[animal] == "perro") {
        continue //evade el punto sin salir del bucle (como si sucedería con break)
    }
    console.log(animales[animal])
};`
}
</CodeBox>

<h4>EJ3: Lo mismo que el EJ2 pero con (OF) en lugar de (IN)</h4>
<p>Video-tutorial: <a href="https://youtu.be/AapgtR0Rwk0?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=1360" target="_blank"> https://youtu.be/AapgtR0Rwk0?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=1360 </a></p> 
    <CodeBox lang="javascript"> 
    {
`// For (OF) recorre por valores, animal = gato, perro, tiranosaurio ...

let animales = ["gato","perro","tiranosaurio"];

for (animal of animales) {
    if (animal == "perro") {
        continue // evade el punto
    }
    console.log(animal)
};`
}
</CodeBox>
    <h4>EJ4: Recorremos los valores de un objeto, y los imprimimos en consola:</h4> 
    <CodeBox lang="javascript"> 
    {
`let perro = {
    nombre: "Scott",
    color: "Negro",
    macho: true,
    edad: 5
};

for (let clave in perro) {
  // console.log(clave) // Refiere al nombre de las propiedades del objeto
  console.log(perro[clave]);
}`
                    }
                </CodeBox>
            </TopicContainer>
        </Information>
    )
}

export default Iterativas