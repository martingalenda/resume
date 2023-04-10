import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const DDL = () => {

    return (
        <Information subTopic={data.menu[1].array[0].array[3].subTopic}>

            <TopicContainer id="intro" topic="DML (Data manipulation language) - Introducción">
                <p>.</p> 
                <CodeBox lang="sql"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="select" topic="SELECT">
                <p>.</p> 
                <CodeBox lang="sql"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="insert" topic="INSERT">
                <p>.</p> 
                <CodeBox lang="sql"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>
            
            <TopicContainer id="update" topic="UPDATE">
                <p>.</p> 
                <CodeBox lang="sql"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="delete" topic="DELETE">
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

export default DDL