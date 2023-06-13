import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Proxies = () => {

    return (
        <Information>

            <TopicContainer topic="Proxies" ytUrl="https://www.youtube.com/watch?v=7njrLMJgDtQ&t=410s" docUrl="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Proxy">
                <h4>Proxies (en informatica)</h4> 
                <p>Un proxy es un equipo informático que hace de intermediario entre las conexiones de un cliente, y un servidor de destino, filtrando todos los paquetes entre ambos. Siendo tú el cliente, esto quiere decir que el proxy recibe tus peticiones de acceder a una u otra página, y se encarga de transmitírselas al servidor de la web para que esta no sepa que lo estás haciendo tú.</p><br/>  
                <h4>Proxies en Javascript</h4> 
                <p>En javascript un Proxy es un objeto que permite crear un intermediario para otro objeto, el cual puede interceptar y redefinir operaciones fundamentales para dicho objeto. Simulando el comportamiento de un objeto literal al de una clase.</p> 
                
                <CodeBox lang="javascript"> 
                    {
`const persona = {
    nombre: "",
    apellido: "",
    edad: 0
}

const handler = {
    get(obj, prop) {
        console.log(\`Acceso a las propiedades: "\${prop}"\`)
        return persona[prop]
    },
    set(obj, prop, valor) {
        if (Object.keys(obj).indexOf(prop) === -1) {
            return console.error(\`La propiedad "\${prop}" no existe en el objeto persona.\`)
        }
        if (
            (prop === "nombre" || prop === "apellido") &&
            !(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜüs]+$/g.test(valor))
        ) {
            return console.error(\`La propiedad "\${prop}" solo acepta letras y espacios en blanco.\`)
        }
        obj[prop] = valor
    }
}

const bepi = new Proxy(persona, handler) // Recibe el objeto, y el event handler.
// console.log(bepi)

bepi.nombre = "Martín"
bepi.edad = 32
// console.log(bepi)

bepi.twitter = "@bepson" // Añadimos nueva propiedad
console.log(bepi) // Vemos como se añadió al proxy
console.log(persona) // Y también se añadió al objeto`
                    }
                </CodeBox>
            </TopicContainer>
        </Information>
    )
}

export default Proxies