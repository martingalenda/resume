import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Multitablas = () => {

    return (
        <Information subTopic={data.menu[1].array[0].array[8].subTopic}>

            <TopicContainer id="externa" topic="Union Externa">
                <p>.</p> 
                <CodeBox lang="sql"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="interna" topic="Union Interna">
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

export default Multitablas