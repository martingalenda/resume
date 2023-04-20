import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const CicloDeVida = () => {

    return (
        <Information subTopic={data.menu[0].array[5].array[7]}>

            <TopicContainer id="introduccion" topic="Ciclo de vida">
                <p>.</p> 
                <CodeBox lang="jsx"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="hook" topic="Ciclo de vida en componentes tipo Hook">
                <p>.</p> 
                <CodeBox lang="jsx"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="clase" topic="Ciclo de vida en componentes tipo Clase">
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

export default CicloDeVida