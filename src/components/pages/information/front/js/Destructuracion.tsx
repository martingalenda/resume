import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Destructuracion = () => {

    return (
        <Information>

            <TopicContainer topic="Destructuración" ytUrl="https://youtu.be/YTtZ9TUQ48E?t=34">
                <p>Refiere a una expresión implementada en ES6, que permite "desempacar/desenvolver/destructurar" arrays y objetos.</p> <br/> 
                <h4>En arrays</h4> 
                <CodeBox lang="javascript"> 
                    {
`const arreglo = ["Martin", "Pepe", "Laurita"]
    
// EJ1: Estariamos asignando una variable a cada posición del arreglo. A excepción del segundo valor, que lo estaríamos ignorando
    const [primero, , tercero] = arreglo // 
    console.log(primero,tercero) // Retorna: "Martin", "Laurita"
       
    
// EJ2: Usamos el spread operator para declarar el resto de items del array no declarados explicitamente
    const [primero, ...resto] = arreglo 
    console.log(primero, resto) // Retorna: "Martin", ["Pepe", "Laurita"]`
    }
    </CodeBox>
    <h4>En objetos</h4> 
<CodeBox lang="javascript"> 
    {
`const objeto = {
    nombre: "Bepi",
    apellido: "Saraza",
    edad: 30,
    mas: {
        estado: "Soltero",
        rol: "Project Manager"
    }
}

// IMPORTANTE: En el caso de los objetos, se debe respetar siempre los nombres de las propiedades/atributos

    const {nombre, apellido, edad } = objeto // Estariamos asignando una variable por prop del objeto
    console.log(nombre, apellido, edad) // Retorna: "Bepi, "Saraza", 30 

    const {nombre, edad:age } = objeto 
    // No es necesario destructurar todo, aqui ignoramos la prop apellido. Y renombramos la prop (edad) por (age)
    console.log(nombre, age) 
    // Retorna: "Bepi", 30

    const {nombre, ...otros} = objeto 
    // Usamos el spread operator para declarar el resto de las props (no destructuradas) consolidandolas a todas  dentro de un objeto. // * En una función regular, en vez de esto, utilizaríamos la palabra reservada arguments
    console.log(nombre, otros) 
    // Retorna: "Bepi", {apellido: "Saraza", edad: 30}

    const {nombre, mas:{rol} } = objeto 
    // Accedemos a un objeto, dentro de otro, vease como declaramos (rol), el cual pertenece al obj (mas) del obj (objeto)
    console.log(nombre, rol) 
    // Retorna: "Bepi", "Project Manager"
    `
}
</CodeBox>
<h4>En función que retorna un array</h4> 
<small>Así es como funcionan los hooks en react. A fin de cuentas, estamos destructurando el array que nos retorna la función (myState)</small> 
<CodeBox lang="javascript"> 
    {
`function myState(obj){
    this.getter = obj
    this.setter = function(value){
        return \`Hola a todos, el valor es: \${value}\`
    }
    return [this.getter, this.setter]
}

const [value, setValue] = myState(5);
console.log(value, setValue("Bepi")) // Retorna: 5, "Hola a todos, el valor es: Bepi"`
                    }
                </CodeBox>
            </TopicContainer>
        </Information>
    )
}

export default Destructuracion