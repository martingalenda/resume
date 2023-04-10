import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const This = () => {

    return (
        <Information>

            <TopicContainer topic="This">
                <p></p> 
                <CodeBox lang="js"> 
                    {
`// json serializado: Cuando el valor corresponde a un string.
const serializado = '{ "1": "Pedro", "2": "Jorge" }'
const desSerializando = JSON.parse(serializado) // Des-serializa el json

// json des-serializado: Cuando el valor corresponde a un objeto.
const desSerializado = { "1": "Pedro", "2": "Jorge" }
const serializando = JSON.stringify(desSerializado) // Serializa el json

console.log(typeof serializando)`
                    }
                </CodeBox>
            </TopicContainer>
        </Information>
    )
}

export default This