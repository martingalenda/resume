import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Memorizacion = () => {

    return (
        <Information subTopic={data.menu[0].array[5].array[11].subTopic}>

            <TopicContainer id="tecnicas" topic="Técinicas de memorización">
                <p>.</p> 
            </TopicContainer>

            <TopicContainer id="memo" topic="MEMO">
                <p>.</p> 
                <CodeBox lang="jsx"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="usememo" topic="useMemo">
                <p>.</p> 
                <CodeBox lang="jsx"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="callback" topic="useCallback">
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

export default Memorizacion