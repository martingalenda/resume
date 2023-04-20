import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const IntroduccionSQL = () => {

    return (
        <Information subTopic={data.menu[1].array[0].array[1]}>

            <TopicContainer id="sql" topic="SQL - Introducción">
                <p>.</p> 
                <CodeBox lang="sql"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="sintaxis" topic="Sintaxis">
                <p>.</p> 
                <CodeBox lang="sql"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="datos" topic="Tipos de datos">
                <p>.</p> 
                <CodeBox lang="sql"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>
            
            <TopicContainer id="clausulas" topic="Cláusulas">
                <p>.</p> 
                <CodeBox lang="sql"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="operadores" topic="Operadores">
                <p>.</p> 
                <CodeBox lang="sql"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

        </Information>
    )
}

export default IntroduccionSQL