import data from "../../../../data/data"
import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const CustomStyles = () => {
    return (
        <>
        <Information subTopic={data.menu[0].array[6].array[2]}>

            <TopicContainer id="sx" topic="Propiedad sx">
                <p>
               .
                </p>
            </TopicContainer>

            <TopicContainer id="theming" topic="Theming">
                <p>
                .
                </p>
                <CodeBox lang="jsx"> 
                    {
``
                    }
                </CodeBox>

            </TopicContainer>

            <TopicContainer id="responsive" topic="Responsive">
                <h4>
                Breakpoints
                </h4>
                <CodeBox lang="jsx"> 
                    {
``
                    }
                </CodeBox>
                <h4>
                useMediaQuery
                </h4>
                <CodeBox lang="jsx"> 
                    {
``
                    }
                </CodeBox>

            </TopicContainer>

        </Information>

        </> 
    )
}

export default CustomStyles