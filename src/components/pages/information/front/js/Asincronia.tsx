import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Asincronia = () => {

    return (
        <Information subTopic={data.menu[0].array[3].array[13]}>

            <TopicContainer id="bloqueante" topic="Código sincrono bloqueante">
                <p>Se refiere a un orden en el flujo de ejecución de código, en donde la tarea en ejecución debe completarse en su totalidad, antes de continuar con la siguiente.<br/> El término "bloqueante" refiere al hecho de que una tarea bloquea el progreso de otras tareas hasta ser finalizada. Veamos un ejemplo:</p> 
                <CodeBox lang="javascript"> 
                    {
`const sincrono = () => {
    console.log("Código sincrono")
    console.log("Iniciando...")

    function dos() {
        console.log("Dos")
    }

    function uno() {
        console.log("Uno");
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin")
};

sincrono();`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="no_bloqueante" topic="Código asincrono no bloqueante">
            <p>Se refiere a un orden en el flujo de ejecución de código, en donde varias tareas pueden ejecutarse en paralelo (sin bloquearse entre si). Es decir, al contrario del código sincrono bloqueante, con esta técnica de desarrollo, las tareas no esperarán a que otras terminen. En el siguiente ejemplo simularemos la asincronía con temporizadores:</p> 
                <CodeBox lang="javascript"> 
                    {
`const asincrono = () => {
    console.log("Código asincrono")
    console.log("Iniciando...")

    function dos() {
        setTimeout(function () {
            console.log("Dos")
        },1500)
    }

    function uno() {
        setTimeout(function () {
            console.log("Uno")
        },0)
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin")
};

asincrono();`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="callbacks" topic="Callbacks" ytUrl="https://www.youtube.com/watch?v=TYG2_iUr8XY&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=48">
                <p>Un callback es una función pasada como argumento a otra función. Se utiliza para manipular el flujo de ejecución, obteniendo operaciones asíncronas. Gracias a los callbascks, podemos hacer que ciertas funciones se ejecuten con seguridad despues de otras, o en respuesta a un evento específico. </p> 
                <ul>
                    <li>Ya no es tan utilizado, salvo en algunas librerías para casos especificos (las promesas son consideradas una forma más moderna de trabajar la asincronia).</li> 
                    <li>Cuentan con una desventaja conocida como: "callback hell", un conjunto de callbacks anidados que termina por convertirse en un código engorroso de mantener.</li> 
                    <li>También puede contar con la desventaja de tener que hacer validaciones constantes en cada callback, cuando (como veremos a continuación con las promesas), el método catch maneja desde un solo lugar (contexto) los errores que podrían existir en todo el contexto de ejecución.</li> 
                </ul> 
                <h4>EJ1:</h4> 
                <CodeBox lang="javascript"> 
                    {
`function primero(callback){
    // Simulamos una petición asincrona
    setTimeout(function (){
        console.log("Primero")
        callback()
    },3000)
}

function segundo(){
    console.log("segundo")
}

primero(segundo)`
                    }
                </CodeBox>
                <h4>EJ2:</h4> 
                <CodeBox lang="javascript"> 
                    {
`function llamadaPersona(nombre){
    console.log(nombre)
}

function prueba(callback){
    callback("pepito")
}

prueba(llamadaPersona)`
                    }
                </CodeBox>
                <h4>EJ3: "Todo en uno"</h4> 
                <CodeBox lang="javascript"> 
                    {
`const operation = (numero1, numero2, callback) => {
    return callback(numero1, numero2) // Ejecuta el callback 
}

operation(1,3, (a, b) => a + b) // Enviamos a la función operation, los dos números y la función (callback)`
                    }
                </CodeBox>
                <h4>EJ4: Realiza un calculo al cuadrado cada 5 segundos, simulando la asincronía</h4>
                <CodeBox lang="javascript"> 
                    {
`function cuadradoCallback(value,callback) {
    setTimeout(() => {
        callback(value, result = value * value)
        console.log(\`Value: \${value}, Result: \${result}\`)
    }, Math.random() * 10000)
}

cuadradoCallback(2, (value, result) => {
    console.log("Iniciando")
    cuadradoCallback(4, (value, result) => {
        cuadradoCallback(6, (value, result) => {
        })
    })
})`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="promises" topic="Promises" ytUrl="https://www.youtube.com/watch?v=ppzrpTjwEC8&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=49"> 
            <p>Son útiles para trabajar multiples operaciones asincronas. Nos otorgan un mejor control de flujo respecto a las callbacks.</p>
            <span>Las promesas son un objeto que recibe 2 métodos como parametros:</span>
            <ul>
                <li><strong>resolve</strong> = ("RETURN POSITIVO") Representa la resolución de una operación asíncrona (esta relacionado/vinculado con el método then)</li>
                <li><strong>reject</strong> = ("RETURN NEGATIVO") Representa el fracaso de una operación asíncrona (esta relacionado/vinculado con el método catch)</li>
            </ul>
            <ul>
                <li><strong>then</strong> = Es el método utilizado para acceder al resultado satisfactorio de la promesa (resolve). El método then espera siempre a que el .then anterior se encuentre resuelto (así es como se maneja la asincronía con las promesas)</li>
                <li><strong>catch</strong> = Es utilizado para el manejo de errores, en este caso, referido a la promesa (reject)</li>
            </ul>
                <h4>EJ1:</h4> 
                <CodeBox lang="javascript"> 
                    {
`const nombre = "pedro";

const promesa = new Promise((resolve,reject) => {
    if (nombre !== "pedro") { reject("Lo siento, el nombre no es pedro") }
    resolve(\` El nombre es: \${nombre}\`)
})
// console.log(promesa) // para chusmear como se muestra

promesa
    .then( (resultado) => {
            console.log(resultado) // Imprimimos el resultado "positivo" de la promesa
            return resultado // El return le pasa siempre el valor al siguiente then
        })
    .then( (thenAnterior) => {
            console.log(\`Lo he dejado pasar ya que: \${thenAnterior}\`)
        })
    .catch( (error) => {console.log(error)} )`
                    }
                </CodeBox>
<small>En este caso, la promesa es almacenada en una variable, pero bien podría también ser el retorno de una función, la cual, a posterior, podriamos concatenarle el .then , o .catch, quedando algo así promesa().then().catch (Se ve en el siguiente ejemplo EJ2)</small><br/><br/><br/>
<h4>EJ2: Similar al anterior pero con dos promesas y más detallado:</h4>
                <CodeBox lang="javascript"> 
                    {
`// Fiesta premium para todos los Pedros del mundo, mayores de edad xD

const nombre = "Pedro";
const edad = 30

const promesa1 = new Promise((resolve,reject) => {
    if (nombre !== "Pedro") { reject(\`Lo siento, esta fiesta es solo para quienes se llaman \${nombre}\`) }
    resolve({
        mnsj: \`Bienvenido \${nombre}, su DNI porfavor\`,
        nombre: "Pedro"
    })
})
// console.log(promesa1) // para chusmear como se muestra

// Acá vemos como la promesa también puede ser el retorno de una función
    function promesa2() {
        return new Promise((resolve,reject) => {
        if (edad < 18) { reject(\`Lo siento \${nombre}, eres menor de edad\`) }
        resolve(\` Adelante señor \${nombre}\`)
        })
    } 
    // console.log(promesa2) // para chusmear como se muestra

promesa1
    .then( (resultado) => {
            console.log(resultado.mnsj) // Imprimimos el resultado "positivo" de la promesa (1)
            return resultado // El return le pasa siempre el valor al siguiente then
        })
    .then( (thenAnterior) => {
            console.log(\`Como el then anterior se resolvio exitosamente, ya se que se llama \${thenAnterior.nombre}\`)
            promesa2().then((res2) => {
                console.log(res2)
            })
        })
    .catch( (error) => {console.log(error)} )`
}
</CodeBox>
<h4>EJ3: Realiza un calculo al cuadrado cada 5 segundos, simulando la asincronía</h4>
                <CodeBox lang="javascript"> 
                    {
`const data = [
    {
        name: "React",
        year: 2007
    },
    {
        name: "Angular",
        year: 2002
    },
    {
        name: "VueJS",
        year: 2015
    }
    ]

    // ARRAY PARA TESTEO NEGATIVO:
    // const data = []

    // Creación de la promesa.
        // Si el array esta vacio, Rechazo automaticamente la petición, he imprimo con el método (catch), el error capturado en la promesa (reject). Sino, resuelvo/retorno la data con el método then. Timeout simula una petición asincrona.

        function getData() {
            return new Promise((resolve, reject) => {
                if (data.length === 0) {
                    reject("Hemos encontado un error. El array esta vacio")
                }
                setTimeout(() => {
                    resolve(data)
                }, 2000)
            })
        }

        getData()
            .then((data) => console.log(data))
            .catch((error) => console.log(error))`
                    }
                </CodeBox>
<h4>EJ4: </h4>
                <CodeBox lang="javascript"> 
                    {
`const usuarios = [
    {id: 0, nombre: 'ricardo', profesion_id: 1},
    {id: 1, nombre: 'alejandro', profesion_id: 2},
    {id: 2, nombre: 'pepito', profesion_id: 1}
]

// const usuarios =  [] // Para test negativo de la promesa

const profesion = {
  1: 'programador',
  2: 'diseñador'
}

/* Primera en ejecutar - Resuelve/retorna el array [usuarios] */
    function getUsuarios() {
      return new Promise((resolve, reject) => {
        if (usuarios.length === 0) { reject("El array se encuentra vacío") } 
        // Si el array [usuarios] se encuentra vacio rechaza la promesa
        else {
          setTimeout(() => {
              resolve(usuarios) // Sino, devuelve el array
            }, 200)
        }
      })
    }

// Segunda en ejecutar - Retorna un array, filtrando el id del usuario
    function getUsuario(id) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve( usuarios.filter((usuario) => usuario.id === id )[0]) 
            // Busca el usuario por ID, retorna un array con el resultado
          }, 200)
      })
    }

// Última en ejecutarse - Retorna la profesión correspondiente al usuario
    function getProfesion(id) {
        return new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve(profesion[id])
        }, 200)
      })
    }

// Ejecución sincrona, ya que los then esperan a retornar/recibir una respuesta para poder proseguir ...
    getUsuarios()
        .then((usuarios) => {
            // console.log(usuarios) // Imprime el array [usuarios]
            return getUsuario(usuarios[1].id) 
                // Envía al siguinte .then el valor de la promesa getUsuario, enviándole el parametro (1) del usuario ubicado en la segunda [1] posición
        }) 
        .then((usuarioFiltrado) => {
            // console.log(usuarioFiltrado) // Metodo filter -> El segundo [1] elemento del array usuarios ( Valor del ID ) 
            return getProfesion(usuarioFiltrado.profesion_id)	 
            // Envía al siguiente .then el valor de la promesa getProfesion (la profesion del usuario)
        })
        .then( (profesionID) => console.log(\`La profesion del usuario es: \${profesionID}\`) )
        .catch( (error) => console.log(error) )`
                    }
                </CodeBox>
            </TopicContainer>



            <TopicContainer id="promises_all" topic="Promises.all & Promises.allSettled" ytUrl="https://www.youtube.com/watch?v=41VfSbuYBP0">
                <h4>Promises.all</h4> 
                <p>Útil para realizar varias peticiones en simultaneo ( mientras que no dependan unas de otras). Obtendremos un array con el resultado de cada una de ellas.</p>
                <span>Desventajas:</span>
                <ul>
                    <li>Este mecanísmo espera a que todas las promesas esten resueltas para retornar el array.</li>
                    <li>Si ocurre un error en cualquiera de ellas, ninguna promesa se ejecutará.</li>
                </ul>
                <CodeBox lang="javascript"> 
                    {
`// Promise.all([promise1("Parametro"), promise2()])
    // .then(([result1, result2, result3]) => console.log(result2)) // Podríamos destructurar los distintos resultados
    // .then((result) => console.log(result)) // Devolvería un array con el resultado de ambas peticiones (1 & 2).
    // .catch((error) => console.log(error)) // Aquí recibiríamos el error de cualquier promesa que haya fallado

// EJ1: Haciendo la ejecución de las tres promesas (del ejercicio anterior), pero con Promise.all
    Promise.all([getUsuarios(), getUsuario(1), getProfesion(1)])
        .then( (result) => console.log(result) ) 
        // O bien retornar el array completo con todos los resultados, result[0], result[1], result[2]
        .catch( (error) => console.log(error) )`
                    }
                </CodeBox>
                <h4>Promises.allSettled</h4> 
                <p>Funciona similar al (Promise.all), a excepción de que:</p>
                <ul>
                    <li>SIEMPRE retorna el array como respuesta, incluso si alguna de las promesas no se resuelven de forma positiva.</li>
                    <li>El return de cada promesa será un objeto, con las props: status (estado de la promesa), y value (retorno positivo), o reason (retorno negativo).</li>
                </ul>
                <CodeBox lang="javascript"> 
                    {
`Promise.allSettled([promise1("Param"), promise2(), promise3()])
    .then((result) => {
        console.log(result) 
        // Imprime la respuesta (array) de todas las (3) promesas (promise1, promise2, promise3)
        console.log(result[0]) // Imprime la respuesta (el objeto) de la promesa (promise1)
        console.log(result[1].status) // Imprime la respuesta del estado de la promesa (promise2)
        console.log(result[2].value) // Imprime el resultado positivo de la promesa (promise3)
    }) 
    .catch((error) => {
        console.log(error)
        console.log(result[1].reason) // Imprime el resultado negativo de la promesa (promise2)
    })`
                    }
                </CodeBox>
            </TopicContainer>




            <TopicContainer id="async_await" topic="Await & async" ytUrl="https://www.youtube.com/watch?v=PbI5EEpodPM&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=49&pp=iAQB">
            <p>Await & Async trabajan en conjunto con las promesas. Es "azucar sintactico" para trabajar la asincronia con un código más digerible aún.</p>
            <ul>
                <li><strong>async</strong> = Permite que la función se comporte implicitamente de forma asíncrona con las promesas.</li>
                <li><strong>await</strong> = Espera a recibir el valor de una promesa para continuar operando con las sentencias de la función (sería el reemplazo de .then en promesas)</li>
                <li><strong>try & catch</strong> = Reaparece la utilidad de try (flujo de ejecución "normal") y catch (manejo de errores)</li>
            </ul>
                <h4>EJ1: El ejemplo (1) de promesas, complementado con async await</h4> 
                <CodeBox lang="javascript"> 
                    {
`const nombre = "pedro2";

const promesa = new Promise((resolve,reject) => {
    setTimeout( () => {
        // PRIMERO SIEMPRE TENDEMOS A REALIZAR LA CONDICIÓN "NEGATIVA" (REJECT).
        if (nombre !== "pedro") { reject("Lo siento, el nombre no es pedro") }
        resolve(\` Puede pasar, ya que su nombre es: \${nombre}\`)}, 3000)
})
    
// Función que devuelve el resultado de la promesa
    const promiseResult = () => {
        return promesa
    }

// Función que llama al resultado de la 
    const showResult = async (promesa) => {
        try {
            const result = await promiseResult(promesa)
            console.log(result)
            }
        catch(error) {
            {console.log(error)}
        }
    }

    showResult(promesa)`
}
</CodeBox>
<h4>EJ2: El ejemplo (2) de promesas, complementado con async await</h4> 
<CodeBox lang="javascript"> 
    {
`const showResult = async () => {
    try {
        const resultadop1 = await promesa1
        console.log(resultadop1.mnsj) // Imprimimos el resultado "positivo" de la promesa (1) prop del obj (mnsj)
        console.log(\`Como ya tengo la primer promesa resuelta, ya se que se llama \${resultadop1.nombre}\`)
        const resultadop2 = await promesa2()
        console.log(resultadop2)
    }
    catch(error){
        console.log(error)
    }
}

showResult()`
}
</CodeBox>
<h4>EJ3: El ejemplo (3) de promesas, complementado con async await</h4> 
<CodeBox lang="javascript"> 
    {
`const data = [
    {
        name: "React",
        year: 2007
    },
    {
        name: "Angular",
        year: 2002
    },
    {
        name: "VueJS",
        year: 2015
    }
]

// ARRAY PARA TESTEO NEGATIVO:
// const data = []

// Creación de la promesa.
// Si el array esta vacio, Rechazo automaticamente la petición, he imprimo con el método catch, el error.
// Sino, resuelvo/retorno la data. Timeout simula una petición asincrona.
    function getData() {
        return new Promise((resolve, reject) => {
            if (data.length === 0) {
                reject("Hemos encontado un error. El array esta vacio")
            }
            setTimeout(() => {
                resolve(data)
            }, 2000)
        })
    }

// Opción de async await 1
    async function fetchData() {
        const frameworks = await getData()
        console.log(frameworks)
    }

    fetchData()`
}
</CodeBox>
<h4>EJ4:</h4> 
<CodeBox lang="javascript"> 
    {
`const obtenerInformacion = (text) => {
    return new Promise((resolve, reject) => {
        setTimeout( ()=> {resolve(text)}, Math.random()*2000 ) // Simulamos la llamada a un servidor
    })
}

/* 
    SIN AWAIT DEVOLVERÍA TODO DE FORMA ALEATORIA. PARA TEST RÁPIDO...
    obtenerInformacion("pito").then(resultado => console.log(resultado))
    obtenerInformacion("tincho").then(resultado => console.log(resultado))
    obtenerInformacion("saraza").then(resultado => console.log(resultado)) 
*/

const mostrarData = async () => {
    const informacion = [ "Pepe", "Redline", "Blacksilver"]
    for (const info of informacion) {
        const data = await obtenerInformacion(info)
        console.log(data)
    }
}

mostrarData()`
                    }
                </CodeBox>
            </TopicContainer>
        </Information>
    )
}

export default Asincronia