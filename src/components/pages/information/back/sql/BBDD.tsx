import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const BBDD = () => {

    return (
        <Information subTopic={data.menu[1].array[0].array[0]}>

            <TopicContainer id="introduccion" topic="BBDD Relacionales">
                <p>.</p> 
                <CodeBox lang="sql"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="caracteristicas" topic="Características">
                <p>.</p> 
                <CodeBox lang="sql"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="conceptos" topic="Conceptos">
                <p>.</p> 
                <CodeBox lang="sql"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>
            
            <TopicContainer id="entidad_relacion" topic="Modelo entidad / relación">
                <p>.</p> 
                <CodeBox lang="sql"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="ddd" topic="Diccionario de datos">
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

export default BBDD