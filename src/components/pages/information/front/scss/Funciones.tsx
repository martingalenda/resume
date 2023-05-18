import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const FuncionesScss = () => {

    return (
        <Information>

            <TopicContainer topic="Funciones" ytUrl="https://www.youtube.com/watch?v=aym7aE34gZg&list=PLy7TtEmBFusKPlehbCaSyIl8OA2lf4Krh&index=12">
                <CodeBox lang="scss"> 
                {
`@function nombre($color, $amount) {
    @return lighten($color,amount)
}; 

@function changeColor($name, $type: darken, $amount: 1, $colorMix: #fff) {

    /* Data: Asignarle valor a una variable en esta ocasion lo vuelve un valor por defecto. */ 

    $color: color($name);
    
    @if $type == darken {
        $color: darken($color, $amount);
    } 
    @else if $type == lighten {
        $color: lighten($color, $amount);
    }
    @else if $type == $colorMix {
        $color: mix($color, $amount);
    @else {
            $color: rgba($color, $amount);
        }
    @return $color;
};`
                }
                </CodeBox>

            <h4> Consultas </h4> 
                <CodeBox lang="scss"> 
                {
`* {
    @debug $variable;
    /* Devuelve el valor de la variable */
    @debug type-of($variable);
    /* Devuelve el tipo de dato (number, string, color, list, map) */
}`
                }
                </CodeBox>
            </TopicContainer>

        </Information>
    )
}

export default FuncionesScss