import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const PropiedadesReact = () => {

    return (
        <Information subTopic={data.menu[0].array[5].array[2].subTopic}>

            <TopicContainer id="introduccion" topic="Propiedades">
                <p>.</p> 
                <CodeBox lang="jsx"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="hook" topic="Propiedades en componentes tipo hook">
                <p>.</p> 
                <CodeBox lang="jsx"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="clase" topic="Propiedades en componentes tipo clase">
                <p>.</p> 
                <CodeBox lang="jsx"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="children" topic="Propiedad children">
                <p>.</p> 
                <CodeBox lang="jsx"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="types" topic="PropTypes">
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

export default PropiedadesReact