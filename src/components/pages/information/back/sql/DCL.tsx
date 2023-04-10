import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const DCL = () => {

    return (
        <Information subTopic={data.menu[1].array[0].array[4].subTopic}>

            <TopicContainer id="intro" topic="DCL (Data control language) - Introducción">
                <p>.</p> 
                <CodeBox lang="sql"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="grant" topic="GRANT">
                <p>.</p> 
                <CodeBox lang="sql"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="revoke" topic="REVOKE">
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

export default DCL