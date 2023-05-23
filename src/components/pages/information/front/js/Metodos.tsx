import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"
import { Alert, AlertTitle } from "@mui/material"

const MetodosJS = () => {
    
    return (
        <Information subTopic={data.menu[0].array[3].array[7]}>

            <TopicContainer id="string" topic="Métodos de strings" ytUrl="https://youtu.be/z95mZVUcJ-E?t=18773">
            <br/>
                <h4><strong>includes("x")</strong> = Si el parametro de texto se encuentra dentro de otra cadena, devuelve true, sino, false.</h4>
                <CodeBox lang="javascript"> 
                    {
`const texto = "texto de prueba busqueda";
const resultado = texto.includes("pru");
console.log(resultado);`
}
</CodeBox>
    <h4><strong>indexOf("x")</strong> = Funciona como el include, pero nos devuelve el número de la posición en la que comienza el texto encontrado.</h4>
    <h4><strong>lastIndexOf("x")</strong> = Funciona como el indexOf, pero si el parametro se repite, nos mostrará la última posición en la que aparece.</h4>
    <small>Si no encuentra el texto retorna -1.</small>
    <CodeBox lang="javascript"> 
    {
`const texto = "texto de prueba busqueda";
const resultado = texto.indexOf("pru");
console.log(resultado);`
}
</CodeBox>

<h4><strong>replace(x,x)</strong> = Busca el primer parametro, si existe, lo reemplaza por el segundo.</h4>
<small>Si no encuentra primer parametro, simplemente queda igual.</small>
                <CodeBox lang="javascript"> 
                    {
`const texto = "texto de prueba busqueda";
const resultado = texto.replace("de prueba", "intensivo de");
console.log(resultado);`
}
</CodeBox>

<h4><strong>startsWith("x")</strong> = Si el texto comienza con los caracteres del parametro, devuelve true, sino, false.</h4>
<h4><strong>endsWith("x")</strong> = Si el texto termina con los caracteres del parametro, devuelve true, sino, false.</h4>
    <CodeBox lang="javascript"> 
    {
`// EJ: Si el string texto comienza con "tex" verdadero / sino, falso.
    const texto = "texto de prueba";
    const resultado = texto.startsWith("tex");
    console.log(resultado);`
}
</CodeBox>
<h4><strong>padStart(n,x)</strong> = Añade al comienzo de la cadena lo que dispongamos, la cantidad de veces que necesitemos.</h4>
<h4><strong>padEnd(n,x)</strong> = Añade al final de la cadena lo que dispongamos, la cantidad de veces que necesitemos.</h4>
    <CodeBox lang="javascript"> 
    {
`// EJ: Que el total del string contenga 6 caracteres. Si posee menos, rellenar por delante con 0 (cero/s)
    const texto = "A1";
    const resultado = texto.padStart(6, "0"); 
    console.log(resultado);`
}
</CodeBox>
<h4><strong>repeat("x")</strong> = Repite el string la cantidad de veces que dispongamos.</h4>
 <CodeBox lang="javascript"> 
    {
`const texto = "A1 ";
const resultado = texto.repeat("10");
console.log(resultado);`
    }
</CodeBox>
<h4><strong>split("x")</strong> = Nos permite convertir la cadena en un array (En este ejemplo, delimitado por comas).</h4>
 <CodeBox lang="javascript"> 
                    {
`const texto = "Hola,como,estas. Salimos?";
const resultado = texto.split(",");
console.log(resultado[2]);`
}
</CodeBox>
<h4><strong>substring(n,n)</strong> = Nos permite mostrar una parte concreta de un array (inicio,fin).</h4>
 <CodeBox lang="javascript"> 
                    {
`const texto = "ABCDEFGH";
const resultado = texto.substring(0,4);
console.log(resultado);`
}
</CodeBox>
<h4><strong>toLowerCase()</strong> = Convierte todo en minuscula.</h4>
<h4><strong>toUpperCase()</strong> = Convierte todo en mayuscula.</h4>
 <CodeBox lang="javascript"> 
                    {
`const texto = "ABCDEFGH";
const resultado = texto.toLowerCase();
console.log(resultado);`
}
</CodeBox>
<h4><strong>trim()</strong> = Elimina los espacios vacios que existen al comienzo y al final de la cadena.</h4>
<h4><strong>trimEnd()</strong> = Elimina los espacios vacios al final de una cadena.</h4>
<h4><strong>trimStart()</strong> = Elimina los espacios vacios al comienzo de una cadena.</h4>
 <CodeBox lang="javascript"> 
                    {
`const texto = "                 espacios     ";
const resultado = texto.trim();
console.log(resultado.length);`
}
</CodeBox>
<h4><strong>concat(x)</strong> = Junta dos o más cadenas retornando una nueva.</h4><br/>
<small> Recordatorio: Tambien se puede concatenar con backstip {'`${variable} y tambien texto`'}.</small>
    <CodeBox lang="javascript"> 
    {
`const texto = "Hola como estas";
const resultado = texto.concat(" Martín?");
console.log(resultado);`
                    }
                </CodeBox>

            </TopicContainer>
            
            <TopicContainer id="ao_manipulacion" topic="Métodos de manipulación - ''exclusivos'' de Arrays" ytUrl="https://youtu.be/z95mZVUcJ-E?t=20566">
            <small>Respecto al título: "exclusivos de arrays", intenta hacer referencia a que ninguno de los métodos mencionados a continuación, son aplicables de forma DIRECTA a un objeto.<br/> Para trabajar sobre estos, habría que complementar antes con métodos especificos de objetos, tales como: Object.entries, Object.keys, o Object.values. Veremos unos ejemplos más adelante.</small>

            <br/>
            <br/>
            <Alert severity="warning" variant="outlined">
                  <AlertTitle>Advertencia</AlertTitle>
                  Los métodos mencionados a continuación, MODIFICAN/MANIPULAN el array sobre el que trabajan, por lo que hay que tener suma atención cuando lo utilizamos, de lo contrario, podríamos caer en malas practicas, e incluso inducir a un comportamiento no deseado en nuestras aplicaciones.
            </Alert>
            <br/>
            <br/>
            <h4><strong>push(...)</strong> =  Agrega elemento/s al final del array original.</h4>
            <h4><strong>unshift(...)</strong> = Agrega elemento/s al principio del array original.</h4>
                <CodeBox lang="javascript"> 
                    {
`const nombres = [" Martín", " Ariel", " Ignacio"];
nombres.push("Maria", " Soledad", "Camila");
console.log(nombres);`
}
</CodeBox>
<h4><strong>pop()</strong> =  Remueve el ultimo item del array original, y devuelve su valor.</h4>
<h4><strong>shift()</strong> = Remueve el primer item del array original, y devuelve su valor.</h4>
<CodeBox lang="javascript"> 
    {
`const nombres = [" Martín", " Ariel", " Ignacio"];
console.log(\`Array original:  \${nombres}\`);
const resultado = nombres.pop()
console.log(\`Elemento removido: \${resultado}\`);
console.log(\`Array modificado: \${nombres}\`);`
}
</CodeBox>

<h4><strong>splice(x,x,x,x)</strong> = Nos permite eliminar y/o agregar elementos desde una determinada posición.</h4>
<CodeBox lang="javascript"> 
    {
`// splice(posicion,cantidadABorrar,nuevoElemento1,nuevoElemento2 ... ) 

// EJ1: Nos permite eliminar elementos del array desde una determina posicion
    const numeros = [1,2,3,4,5,6];
    numeros.splice(2,3) // Comenzando desde la posicion (2 inclusive) Borrame (3) elementos.
    console.log(numeros);

// EJ2: Podemos colocar nuevos elementos desde una determinada posición, sin necesidad de eliminar ninguno.
    const numeros = [1,2,3,4,5,6];
    numeros.splice(2,0,"Hola",33) //Agregame "hola" & 33 desde la posición (2). No me borres nada (0).
    console.log(numeros);`
}
</CodeBox>

<h4><strong>reverse()</strong> = Invierte el orden de los elementos, transformando al array original con el orden opuesto.</h4>
<CodeBox lang="javascript"> 
    {
`const nombres = [" Martín", " Ariel", " Ignacio"];
const resultado = nombres.reverse();
console.log(resultado);`
}
</CodeBox>

            </TopicContainer>

            <TopicContainer id="ao_consulta" topic="Métodos de consulta - Arrays o Objetos">
            <br/>
            <h4><strong>indexOf(x) / lastIndexOf(x)</strong> = Búsqueda de texto por posición inicio/último. Devuelve la posición en la que se encuentra el argumento solicitado.</h4>
            <small>Si no encuentra el texto retorna -1. </small>
            <small>Estos métodos solo son aplicables de forma directa en los arrays.</small>
                <CodeBox lang="javascript"> 
                    {
`const numeros = [1,2,4,3,8,6];
const resultado = numeros.indexOf(4) 
console.log(resultado);`
}
</CodeBox>
    <h4><strong>includes(x)</strong> = Devuelve boolean, en base a si el parametro se encuentra o no entre los elementos.</h4>
    <small>Este método solo es aplicables de forma directa en los arrays.</small>
    <CodeBox lang="javascript"> 
        {
`const numeros = [1,2,4,3,8,6];
const resultado = numeros.includes(4) 
console.log(resultado);`
}
</CodeBox>
    <h4><strong>object.hasOwnProperty("x")</strong> = Devuelve boolean, en base a si el parametro se encuentra como una propiedad del objeto, o no.</h4>
    <CodeBox lang="javascript"> 
        {
`const info =  { nombre: " Martin ", procesador: " Intel Core I7 9700 ", ram: 32, espacio: 2 }
console.log(info.hasOwnProperty("procesador"))`
}
</CodeBox>
            </TopicContainer>

            <TopicContainer id="ao_generadores" topic="Métodos generadores - Arrays y/o Objetos">
            <p>Los métodos mencionados a continuación, NO modifican el array original sobre el que trabajan, sino que retornan uno nuevo.</p>
            <br/>
            <h4><strong>slice(posInicial, posFinal)</strong> = Genera un nuevo array con partes de otro array (como el metodo subtring de string).</h4>
            <small>Este método solo es aplicable de forma directa en los arrays.</small>
<CodeBox lang="javascript"> 
    {
`const numeros = [1,2,4,3,8,6];
const resultado = numeros.slice(0,3) // Muestra desde el primero, hasta la cuarta posición.
// const resultado = numeros.slice(0,-2) // Muestra todos menos los ultimos dos elementos (el 8 y el 6) 
console.log(resultado);`
                    }
                </CodeBox>
                <h4><strong>toString()</strong> = Genera un string con todos los elementos del array.</h4>
                <small>Este método es aplicable de forma directa tanto a los arrays, como a los objetos. Sin embargo, si se aplica a un objeto, se obtendrá una cadena que indica el tipo del objeto, y no una representación de sus propiedades (es decir nombres de props, y values).</small>
<CodeBox lang="javascript"> 
    {
`const numeros = [1,2,4,3,8,6];
const resultado = numeros.toString() 
console.log(resultado);`
}
</CodeBox>
<h4><strong>join("x")</strong> = Genera un string con todos los elementos del array, pudiendo separar a estos por el parametro que deseemos.</h4>
<small>Este método solo es aplicable de forma directa en los arrays.</small>
<CodeBox lang="javascript"> 
    {
`const numeros = [1,2,3,4,5,6];
const resultado = numeros.join(" - ") 
console.log(resultado);`
}
</CodeBox>
<h4><strong>Object.keys(obj)</strong> = Genera un nuevo array, cada elemento corresponde a las keys/props del objeto.</h4>
<h4><strong>Object.values(obj)</strong> = Genera un nuevo array, cada elemento corresponde a los valores del objeto.</h4>
<h4><strong>Object.entries(obj)</strong> = Genera un nuevo array, cada elemento corresponde a un sub-array : [keyObj, valueObj].</h4>
<CodeBox lang="javascript"> 
    {
`const pc = [
    { nombre: " Martin ", procesador: " Intel Core I7 9700 ", ram: 32, espacio: 2 },
    { nombre: " Pepe ", procesador: " Intel Core I5 7300 ", ram: 8, espacio: 0.5 },
    { nombre: " Agus ", procesador: " Intel Core I3 7100 ", ram: 4, espacio: 1 }
];

console.log(Object.keys(pc[0])); 
console.log(Object.values(pc[0])); 
console.log(Object.entries(pc[0]));`
                    }
                </CodeBox>

            <h4><strong>Object.assign({`{}`}, obj)</strong> = Genera un nuevo array basado en otro/s. Pudiendo simplemente hacer una copia de un objeto, como también unir las propiedades/valores de dos, o más objetos.</h4>
            <small>Recordamos que esto se puede hacer también con el spread operator</small>
                <CodeBox lang="javascript"> 
                    {
`// EJ1: Generando una copia de las propiedades/valores del obj person.
    const person = { name: 'Mike', email: 'mike@email.com'}
    const clonedPerson = Object.assign({}, person) // Generamos una copia del objeto person
    console.log(clonedPerson)


// EJ2: Uniendo las propiedades/valores de dos objetos distintos.
    const person = { name: 'Mike', email: 'mike@email.com'}
    const details = { apellido: 'Pepito', direccion: 'Saraza 2000'}
    const newDB = Object.assign(person, details) // Generamos una copia del objeto person
    console.log(newDB)`
}
</CodeBox>

            </TopicContainer>

            <TopicContainer id="ao_iterativos" topic="Métodos iterativos - ''exclusivos'' de Arrays " ytUrl="https://www.youtube.com/watch?v=qqR1enOceVg&t=3379s">
            <small>Respecto al título: "exclusivos de arrays", intenta hacer referencia a que ninguno de los métodos mencionados a continuación, son aplicables de forma DIRECTA a un objeto.<br/> Para trabajar sobre estos, habría que complementar antes con métodos especificos de objetos, tales como: Object.entries, Object.keys, o Object.values. Vemos unos ejemplos más adelante.</small>
            <br/><br/>
            <Alert severity="warning" variant="outlined">
                  <AlertTitle>Advertencia</AlertTitle>
                  Recordamos que en la gran mayoría de casos, es una mala práctica mutar/modificar los arrays originales. Por el contrario, es aconsejable usar métodos como map(), filter(), etc, para generar nuevos arrays. De esta forma, estaremos previniendo errores y comportamientos inesperados en nuestras aplicaciones.
            </Alert>

            <br/>
            <br/>
                <h4><strong>forEach(x,x,x)</strong> = Se utiliza para recorrer un array, pudiendo ejecutar una función para cada uno de sus elementos.</h4> 
                <ul>                    
                    <li>El forEach recibe hasta 3 parametros (itemArray, itemIndice, arrayEntero). En ese orden.</li>
                    <li>A diferencia de los métodos (map, filter, reduce) forEach devuelve siempre el valor undefined. Es decir, NO genera un nuevo array.</li>
                </ul>
                
                <CodeBox lang="javascript"> 
                    {
`// array.forEach((arrayItem) => {console.log(arrayItem)})

// EJ1: Recorre elemento por elemento dentro del [array] (nombres) para imprimirlo en pantalla
    const nombres = ["Martin", "Soledad", "Camila", "Melina", "Sebastian", "Agustin"];
    nombres.forEach((nombre, i) => {
        console.log(nombre, i);
    });


// IMPORTANTE!!!!! El siguiente ejemplo solo es una muestra, pero recordamos que es una MALA PRACTICA mutar/modificar el array original. Por el contrario, si necesitamos hacer esto, lo aconsejable sería utilizar por ejemplo el método map() que lo veremos a continuación    
// EJ2: Recorriendo un array de numeros, para multiplicar todos sus valores
    let numeros = [1, 2, 3, 4, 5];
    numeros.forEach((num, index, arr) => {
        arr[index] = num * 2
    });
    console.log(numeros); // [2, 4, 6, 8, 10]


// EJ3: forEach & Object.entries para recorrer un objeto
    let perro = {
        nombre: "Scott",
        color: "Negro",
        macho: true,
        edad: 5
      };

      Object.entries(perro).forEach(([key, value]) => {
        console.log(key, value)
      });


// EJ4: Mismo caso que el anterior, pero más clarificado
    let perro = {
        nombre: "Scott",
        color: "Negro",
        macho: true,
        edad: 5
    };

    const objeto = Object.entries(perro)
    // console.log(objeto)

    objeto.forEach(([key, value]) => {
        resultado = console.log(key, value)
        return resultado
    })


// EJ5: Trabajando con {objetos} y sus propiedades. Ejemplo de foreach con función arrow
    const pcs = [
        { nombre: " Martin", procesador: " Intel Core I7 7700 ", ram: 32, espacio: 2 },
        { nombre: " Pepe", procesador: " Intel Core I3 7700 ", ram: 8, espacio: 0.5 },
        { nombre: " Agus", procesador: " Intel Core I3 7700 ", ram: 4, espacio: 1 }
    ];

    pcs.forEach((owner, index) => { 
        console.log(index, " Objeto/Elemento entero:", owner); 
        console.log(" USUARIO:", owner.nombre, " RAM:", owner.ram); 
    });`
                    }
                </CodeBox>
                <h4><strong>map(x,x,x)</strong> = Similar al forEach, sirve para recorrer los elementos de un array, pero, a diferencia de este, nos permite retornar un nuevo array.</h4> <br/> 
                <span>Debemos almacenar la llamada/invocación del método en una variable. map devuelve siempre un array con el mismo tamaño que el array recorrido.</span>
                <ul>                    
                    <li>El map puede recibir hasta 3 parametros (itemArray, itemIndice, arrayEntero). En ese orden.</li>
                    <li>Los métodos: map(), filter() y reduce() promueven utilizar funciones puras como callbacks (parametros/argumentos), es decir:</li> 
                    <ul>                    
                        <li>Las funciones no producen efectos secundarios, y siempre que se invoquen con los mismos argumentos, producirán el mismo valor.</li>
                    </ul>
                </ul>
                
                <CodeBox lang="javascript"> 
                    {
`// EJ1: Creo un nuevo array con los elementos procesador y nombre + nuevo elemento

    const pcs = [
        { nombre: " Martin ", procesador: " Intel Core I7 7700 ", ram: 32, espacio: 2 },
        { nombre: " Pepe ", procesador: " Intel Core I3 7700 ", ram: 8, espacio: 0.5 },
        { nombre: " Agus ", procesador: " Intel Core I3 7700 ", ram: 4, espacio: 1 }
    ];

    const nuevoArray = pcs.map((owner) => {
        return " Nuevo Elemento:" + owner.nombre + owner.procesador;
    });

    console.log(nuevoArray);
    

    
// EJ2: Genero un nuevo array de numeros, basado en otro.

    let arrayNumeros = [1, 2, 3, 4, 5];

    const arrayNuevo = arrayNumeros.map((num) => {
      return num * 2;
    });

    console.log(arrayNuevo); // [2, 4, 6, 8, 10]`
                    }
                </CodeBox>
                <h4><strong>filter()</strong> = Nos permite crear un nuevo array basado en otro, pudiendo filtrar los elementos a conservar mediante una condición dada.</h4> 
                <ul>                    
                    <li>Los métodos: map(), filter() y reduce() promueven utilizar funciones puras como callbacks (parametros/argumentos), es decir:</li> 
                    <ul>                    
                        <li>Las funciones no producen efectos secundarios, y siempre que se invoquen con los mismos argumentos, producirán el mismo valor.</li>
                    </ul>
                </ul>
                
                <CodeBox lang="javascript"> 
                    {
`// EJ1: Creamos un nuevo array con los objetos que tengan más, o, 8 de ram.
    const pcs = [
        { nombre: " Martin ", procesador: " Intel Core I7 7700 ", ram: 32, espacio: 2 },
        { nombre: " Pepe ", procesador: " Intel Core I3 7700 ", ram: 8, espacio: 0.5 },
        { nombre: " Agus ", procesador: " Intel Core I3 7700 ", ram: 4, espacio: 1 }
    ];

    const superPCS = pcs.filter((pc) =>  pc.ram >= 8);

    console.log(superPCS);


// EJ2: Creamos un array con los nombres que tengan (6) caracteres en total:
    const nombres = ["Martin", "Soledad", "Camila", "Melina", "Sebastian", "Agustin"];
    const seisLetras = nombres.filter(nombre => nombre.length == 6);
    // En este caso: nombres == string == función flecha
    console.log(seisLetras); // Muestra el array nuevo
    console.log(seisLetras[1]); // Muestra la segunda posición del array nuevo`
                    }
                </CodeBox>

                <h4><strong>reduce()</strong> = Sirve para recorrer los valores de un array, o objeto, reduciendolos a un solo valor</h4> 
                <ul>                    
                    <li>Los métodos: map(), filter() y reduce() promueven utilizar funciones puras como callbacks (parametros/argumentos), es decir:</li> 
                    <ul>                    
                        <li>Las funciones no producen efectos secundarios, y siempre que se invoquen con los mismos argumentos, producirán el mismo valor.</li>
                    </ul>
                </ul>
                
                <CodeBox lang="javascript"> 
                    {
`const varName = arrayName.reduce((total, arrayItem) => {return total + arrayItem.value}, 0) 
// Total corresponde a un acumulador automatico
// Data, el segundo parametro (0) corresponde al valor inicial del parametro principal del metodo reduce (total)

// EJ1: En este ejemplo sumamos los valores de las memorias ram de las pcs
    const pcs = [
        { nombre: " Martin ", procesador: " Intel Core I7 7700 ", ram: 32, espacio: 2 },
        { nombre: " Pepe ", procesador: " Intel Core I3 7700 ", ram: 8, espacio: 0.5 },
        { nombre: " Agus ", procesador: " Intel Core I3 7700 ", ram: 4, espacio: 1 }
    ];

    const ramTotal = pcs.reduce((total, pc) => {
        return total + pc.ram
    }, 0)

    console.log(ramTotal)


// EJ2: En este ejemplo un poco más avanzado, Obtenemos todas las tecnologías que dominan nuestros
// desarrolladores, utilizamos el tipo de dato Set para que no se repitan, e iteramos con el spread operator.
    const developers = [
        {
          id: 1,
          name: "John",
          skills: ["HTML", "React", "Javascript", "Java"],
        },
        {
          id: 2,
          name: "Jane",
          skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
        },
        {
          id: 3,
          name: "Jack",
          skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
        },
    ];

    const result = developers.reduce(function (allSkills, student) {
      return Array.from(new Set([...allSkills, ...student.skills]));
    }, []);

    console.log(result);`
                    }
                </CodeBox>
                <h4><strong>sort(firstItem, secondItem)</strong> = Ordena los elementos del array en el orden que dispongamos. </h4> 
                <ul>                    
                    <li>IMPORTANTE: Este método MODIFICA el array original</li> 
                    <li>Por defecto, este método ordena valores en formato unicode, por lo que normalemnte debemos intervenir en su algoritmo para ordenar alfabetica/lexicograficamente.</li> 
                </ul>
                
                <CodeBox lang="javascript"> 
                    {
`// EJ 1 Básico: Ordenando números, y letras de un array
    const numeros = [1,330,9,5,3,221];
        // Opcion A:
        numeros.sort((a, b) => { return a - b})
        // Opcion B:
        numeros.sort((a, b) => (a > b) ? 1 : -1)

    const apellidos = ["Damazco", "Galenda", "Flores", "Albacio", "Carrazco"];
    apellidos.sort((a, b) => {
        const apellidoA = a.toLowerCase()
        const apellidoB = b.toLowerCase()
        (apellidoA > apellidoB) ? 1 : -1
    })


// EJ 2: Ordena a los desarrolladores por edad
    const developers = [
        {
          id: 1,
          name: "John",
          age: 30
        },
        {
          id: 2,
          name: "Jane",
          age: 20
        },
        {
          id: 3,
          name: "Jack",
          age: 40
        },
      ];

      const sortByAge = developers.sort((firstDev, secondDev) => {
          return firstDev.age - secondDev.age
      });

      console.log(sortByAge);`
                    }
                </CodeBox>
                <h4><strong>find()</strong> = Busca un item en un array en base a una condición. Si lo encuentra devuelve el primer resultado encontrado. Caso contrario, devuelve undefined.</h4> 
                <CodeBox lang="javascript"> 
                    {
`const numeros = [1,2,4,3,8,6,100,330,478];
const busqueda = numeros.find((num) => {
    return num >= 101
   } )

console.log(busqueda)`
                    }
                </CodeBox>
                <h4><strong>some()</strong> = Busca si la condición se cumple o no dentro del objeto en algun momento. Devuelve un valor boolean</h4> 
                <CodeBox lang="javascript"> 
                    {
`const numeros = [1,2,4,3,8,6,100,330];
const busqueda = numeros.some((num) =>{
    return num >= 331
   } )

console.log(busqueda)`
                    }
                </CodeBox>
                <h4><strong>every()</strong> = Retorna un boolean dependiendo si TODOS los elementos cumplen, o no con la condición</h4> 
                <CodeBox lang="javascript"> 
                    {
`const numeros = [1,2,4,3,8,6,100,330];
const busqueda = numeros.every((num) =>{
    return num >= 100
   })

console.log(busqueda) 
// Retorna false porque NO TODOS los nums son mayores o iguales a 100`
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="consola" topic="Métodos de consola" ytUrl="https://www.youtube.com/watch?v=qM9Rsv3LCWc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=28">
                <h4>Métodos de registro.</h4>
                <CodeBox lang="javascript"> 
                    {
`console.log(); // Muestra el parametro en la consola (tipo depurativo)
console.info(); // Muestra el parametro en la consola (tipo informativo)
console.error(); // Muestra el parametro en la consola (tipo error)
console.warn(); // Muestra el parametro en la consola (tipo alerta)
console.table([3,4,5,6,7]); 
// Crea una tabla con las posiciones de los elementos y los valores de estos. Se usar para arrays o objetos.
console.dir(); 
// Despliega una lista interactiva de las propiedades del objeto JS especificado`
}
</CodeBox>

<h4>Métodos de tiempo.</h4>
<CodeBox lang="javascript"> 
    {
`console.time(); // Iniciamos un temporizador
console.timeLog(); // Nos menciona cuanto tiempo ha transcurrido desde que se inicio el temporizador
console.timeEnd(); // Finalizamos el temporizador`
    }
</CodeBox>
<h4>Métodos de conteo.</h4>
<CodeBox lang="javascript"> 
    {
`console.count(); // Nos muestra la cantidad de veces que fue ejecutada la función
console.countReset(); // Reinicia el conteo a 0`
    }
</CodeBox>
<h4>Métodos de grupo.</h4>
<CodeBox lang="javascript"> 
    {
`console.group("nombre"); // Crea un grupo de sentencias en la consola
console.groupEnd(); // Cierra el grupo, y vuelve al grupo padre.
console.groupCollapsed("nombre"); // Crea un grupo de sentencias pero que inicia colapsado (Casi = a .group)`
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="math" topic="Métodos math" ytUrl="https://www.youtube.com/watch?v=BGXwssmxGuY&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=29&pp=iAQB">
                <CodeBox lang="javascript"> 
                    {
`// sqrt() - Devuelve la raiz cuadrada positiva de un número
// cbrt() - Devuelve la raiz cúbica positiva de un número
let numero = Math.cbrt(27);
console.log(numero);

// max() - Recibe números y nos devuelve el número más grande
// min() - Recibe números y nos devuelve el número más chico
let numero = Math.max(4,1,12,3,91,8,5);
console.log(numero);

// random() - Devuelve un número aleatorio entre 0 y 1
// round() - Redondea el número decimal al entero más cercano
// floor() - Redondea el número decimal SIEMPRE para abajo, incluso en 1.999 devolvería 1
// trunc() - Elimina la parte decimal del número (sin redondear)
// Ej: Número aleatorio entre 1 y 99 (inclusive):
let numero = Math.random()*99;
numero = Math.floor(numero+1);`
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="date" topic="Métodos obj date" ytUrl="https://www.youtube.com/watch?v=aIHQsAjRLYU&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=28&pp=iAQB">
                <CodeBox lang="javascript"> 
                    {
`let fecha = new Date()
console.log(fecha) // Sun Jul 03 2022 00:07:32 GMT-0300 (hora estándar de Argentina)
console.log(fecha.toDateString()) // Sun Jul 03 2022 
console.log(fecha.toLocaleString()) // 3/7/2022, 
console.log(fecha.toLocaleDateString()) // 3/7/2022
console.log(fecha.toLocaleTimeString()) // 00:07:32

console.log(fecha.getDay()) // Día actual de la semana en número (D L M Mi J V S --> 0 1 2 3 4 5 6)
console.log(fecha.getDate()) // Día del mes en número
console.log(fecha.getMonth()) // Mes actual del año (0 = Enero, 1 = Febrero ....)
console.log(fecha.getFullYear()) // Año actual

console.log(fecha.getHours()) // Hora
console.log(fecha.getMinutes()) // Minutos
console.log(fecha.getSeconds()) // Segundos
console.log(fecha.getMilliseconds()) // Milisegundos

let miCumple = new Date(1991,2,12,23,11,15) // Año , mes, dia, hora, min, sec
console.log(miCumple)`
                    }
                </CodeBox>
            </TopicContainer>
        </Information>
    )
}

export default MetodosJS