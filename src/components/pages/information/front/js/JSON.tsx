import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const JSON = () => {

    return (
        <Information>

            <TopicContainer topic="JSON" ytUrl="https://www.youtube.com/watch?v=d1XijkyZRvM&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=61">
                <p>JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos ampliamente utilizado en el ámbito de la programación. Diseñado para ser legible tanto por humanos como por máquinas, JSON se basa en una estructura de pares clave-valor que permite representar información de manera organizada y fácilmente interpretable. Su sintaxis simple y su compatibilidad con diferentes lenguajes de programación lo convierten en una opción popular para el intercambio de datos en aplicaciones web y servicios API. Al utilizar una estructura basada en objetos y arrays, JSON proporciona flexibilidad y eficiencia al transmitir información estructurada, lo que lo convierte en un estándar de facto para la comunicación de datos en entornos modernos de desarrollo de software.</p> 
                <CodeBox lang="js"> 
                    {
`// json serializado: Cuando el valor corresponde a un string.
const json2 = '{ "1": "Pedro", "2": "Jorge" }'
const desSerializado = JSON.parse(json2) // Des-serializa el string a obj (json)

// json des-serializado: Cuando el valor corresponde a un objeto.
const json = { "1": "Pedro", "2": "Jorge" }
const serializado = JSON.stringify(json) // Serializa el json (obj) a string

console.log(typeof desSerializado)
console.log(typeof serializado)`
                    }
                </CodeBox>
                <small>Como podemos apreciar, las key/propiedades en JSON deben ir entre ( " " ), al contrario de un objeto literal.</small> 
            </TopicContainer>
        </Information>
    )
}

export default JSON