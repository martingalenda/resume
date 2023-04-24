import data from "../../../../data/data"
import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const IntroduccionMUI = () => {
    return (
        <>
        <Information subTopic={data.menu[0].array[6].array[0]}>

            <TopicContainer id="resume" topic="React MUI - Introducción">
                <p>
               .
                </p>
            </TopicContainer>

            <TopicContainer id="ventajas" topic="Ventajas">
                <p>
                .
                </p>

            </TopicContainer>

            <TopicContainer id="install" topic="Instalación">
                <p>
                .
                </p>
                <CodeBox lang="bash"> 
                    {
``
                    }
                </CodeBox>

            </TopicContainer>

        </Information>

        </> 
    )
}

export default IntroduccionMUI