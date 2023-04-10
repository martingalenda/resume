import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const ModularizacionScss = () => {

    return (
        <Information>

            <TopicContainer topic="Modularización">
                <p>
                Para mejorar la estructura de nuestros estilos, debemos trabajar la modularidad de nuestro código, es decir, fragmentarlo en distintos archivos. Para hacerlo, contamos con directivas como @import
                </p>
                <h4> @use </h4> 
                <p>Video-tutorial: <a href="https://www.youtube.com/watch?v=YeMUU6gbX38&list=PLy7TtEmBFusKPlehbCaSyIl8OA2lf4Krh&index=21" target="_blank"> https://www.youtube.com/watch?v=YeMUU6gbX38&list=PLy7TtEmBFusKPlehbCaSyIl8OA2lf4Krh&index=21 </a></p> 

                <CodeBox lang="scss"> 
                {
`/* @import */
@import "app",
        "nav";`
                }
                </CodeBox>
                <small>
                Es muy importante el oden de las importaciones. En el ejemplo anterior, nav podría depender de los estilos de app sin problemas (porque esta declarado abajo de este), mientras que si fuera al revez (app dependiese de nav) la aplicación no funcionaría, ya que existiría un error en el orden de importación.
                </small>
                <br/> 
                <br/> 
                <br/> 
                <h4> @import </h4> 
                <p>Video-tutorial: <a href="https://www.youtube.com/watch?v=CxjPsswX7FI&list=PLy7TtEmBFusKPlehbCaSyIl8OA2lf4Krh&index=5" target="_blank"> https://www.youtube.com/watch?v=CxjPsswX7FI&list=PLy7TtEmBFusKPlehbCaSyIl8OA2lf4Krh&index=5 </a></p> 

                <CodeBox lang="scss"> 
                {
`/* @use */
@use "app",
        "nav";`
                }
                </CodeBox>
            </TopicContainer> 

        </Information>
    )
}

export default ModularizacionScss