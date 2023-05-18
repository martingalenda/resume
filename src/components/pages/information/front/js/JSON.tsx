import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const JSON = () => {

    return (
        <Information>

            <TopicContainer topic="JSON" ytUrl="https://www.youtube.com/watch?v=d1XijkyZRvM&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=61">
                <p></p> 
                <CodeBox lang="js"> 
                    {
`// json serializado: Cuando el valor corresponde a un string.
const json2 = '{ "1": "Pedro", "2": "Jorge" }'
const serializado = JSON.parse(json2) // Des-serializa el json

// json des-serializado: Cuando el valor corresponde a un objeto.
const json = { "1": "Pedro", "2": "Jorge" }
const desSerializado = JSON.stringify(json) // Serializa el json

console.log(typeof serializado)
console.log(typeof desSerializado)`
                    }
                </CodeBox>
                <span>Las key de las propiedades en JSON deben ir entre ( " " )</span> 
            </TopicContainer>
        </Information>
    )
}

export default JSON