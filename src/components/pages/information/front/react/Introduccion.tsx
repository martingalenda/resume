import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const IntoduccionReact = () => {

    return (
        <Information subTopic={data.menu[0].array[5].array[0]}>

            <TopicContainer id="react" topic="React - Introducción">
                <p>.</p> 
                <CodeBox lang="jsx"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="jsx" topic="JSX - Sintaxis">
                <p>.</p> 
                <CodeBox lang="jsx"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="thinking" topic="Pensando en React">
                <p>.</p> 
                <CodeBox lang="jsx"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="install" topic="Instalación">
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

export default IntoduccionReact