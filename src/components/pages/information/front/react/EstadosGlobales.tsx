import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const EstadosGlobales = () => {

    return (
        <Information subTopic={data.menu[0].array[5].array[13]}>

            <TopicContainer id="intro" topic="Estados globales">
                <p>.</p> 
            </TopicContainer>

            <TopicContainer id="context" topic="useContext">
                <p>.</p> 
                <CodeBox lang="jsx"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="reducers" topic="useReducers">
                <p>.</p> 
                <CodeBox lang="jsx"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="redux" topic="Redux">
                <p>.</p> 
                <CodeBox lang="jsx"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

        </Information>
    )
}

export default EstadosGlobales