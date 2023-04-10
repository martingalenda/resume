import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const IterativosScss = () => {

    return (
        <Information>

            <TopicContainer topic="Iterativos FOR & WHILE">
            <h4> For </h4> 
            <p>Video-tutorial: <a href="https://www.youtube.com/watch?v=PFEOYnJ_S54&list=PLy7TtEmBFusKPlehbCaSyIl8OA2lf4Krh&index=14" target="_blank"> https://www.youtube.com/watch?v=PFEOYnJ_S54&list=PLy7TtEmBFusKPlehbCaSyIl8OA2lf4Krh&index=14 </a></p> 
                <CodeBox lang="scss"> 
                {
`@for $variable from <inicio> through <fin> {
    // Estilos para cada valor de la variable
}

/* Ej 1: Calcula el tamaño de los h1-h6 */
@for $i from 1 through 6 {
    h#{$i} {
       font-size: $i * 2em;
    } 
};`
                }
                </CodeBox>
                <h4> While </h4> 
                <p>Video-tutorial: <a href="https://www.youtube.com/watch?v=wouRcPOWpVc&list=PLy7TtEmBFusKPlehbCaSyIl8OA2lf4Krh&index=16" target="_blank"> https://www.youtube.com/watch?v=wouRcPOWpVc&list=PLy7TtEmBFusKPlehbCaSyIl8OA2lf4Krh&index=16 </a></p> 
                <CodeBox lang="scss"> 
                {
`$i: 6;

@while $i > 0 {
   .item-#{$i} {
       width: 100px * $i;
       background-color: white;
   }  
   $i: $i -2;
}`
                }
                </CodeBox>
        </TopicContainer>

        </Information>
    )
}

export default IterativosScss