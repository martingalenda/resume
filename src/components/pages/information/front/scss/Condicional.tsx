import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const CondicionalScss = () => {

    return (
        <Information>

            <TopicContainer topic="Condicional IF/ELSE" ytUrl="https://www.youtube.com/watch?v=aj8SfYwCaCU&list=PLy7TtEmBFusKPlehbCaSyIl8OA2lf4Krh&index=13">
                <CodeBox lang="scss"> 
                {
`$color: rojo;

* {
    @if ($color == azul) {
        background-color: blue;
    }
    @else if ($color == rojo) {
        background-color: red;
    }
    @else {
        background-color: green;
    };
};`
                }
                </CodeBox>
            </TopicContainer>

        </Information>
    )
}

export default CondicionalScss