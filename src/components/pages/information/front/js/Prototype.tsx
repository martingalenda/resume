import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Prototype = () => {

    return (
        <Information>

            <TopicContainer topic="Prototype" ytUrl="https://youtu.be/nS5FmAx4u_0?t=399">
                <p>Como ya mencionamos, javascript es un lenguaje basado en prototipos.</p> 
                <ul>
                    <li>Los prototipos son en si mismo objetos. Todos los objetos contienen asociado un prototipo en JS.</li> 
                    <li>Existen prototipos estandares en Javascript (ya creados) como Number, String, Object, Function, etc.</li> 
                    <li>Cuando se crea un objeto en JS, este objeto hereda automáticamente todas las propiedades y métodos de su prototipo.</li> 
                    <li>Contamos la posibilidad de crear nuestros propios prototipos (lo hacemos automáticamente al crear funciones).</li> 
                </ul> 
                <p>Para comprender mejor esto, pasemos a repasarlo en código como hacemos siempre.</p> 
                <CodeBox lang="js"> 
                    {
`// Proto string
    const str = "String"
    console.log(str.__proto__) 
    // Devuelve el prototipo estandar (String) de la variable str
    
// Prototype - Proto función
    const fn = function() {}
    console.log(fn.__proto__) 
    // Recordamos que __proto__ devuelve siempre los prototipos estandares de JS, en este caso, (function)
    console.log(fn.prototype) 
    // Nos retorna el prototipo constructor creado por nosotros

// Proto objeto
    const obj = {
        key: "value",
    }
    console.log(obj.__proto__) // Los objetos "no tienen prototipos", devuelve: (constructor de objetos)

// Proto constructor de objetos
    class Objetito {
        constructor(){
            this.name = "Pedro"
        }
        hablar() {
            console.log(\`Hola \${this.name}\`)
        }
    }
    const obj2 = new Objetito()
    console.log(obj2) 
    // Nos devuelve la función constructora (la class Objetito), y vemos como hereda al igual que todos, el prototype Object
    console.log(obj2.__proto__) 
    // Devuelve la función constructora, con sus propiedades y métodos customs (hablar)`
                    }
                </CodeBox>
            </TopicContainer>
        </Information>
    )
}

export default Prototype