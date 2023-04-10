import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Mixins = () => {

    return (
        <Information>

            <TopicContainer topic="@mixin - @include" ytUrl="https://www.youtube.com/watch?v=we3m-QbQt6M&list=PLy7TtEmBFusKPlehbCaSyIl8OA2lf4Krh&index=8">
                <p>
                El uso de @mixin permite crear una porción de código reutilizable en diferentes partes de un archivo de estilos scss.
                </p>

                <CodeBox lang="scss"> 
                {
`/* Ej 1: Sin solicitar parametros */
@mixin boxCheta {
    text-style: italic;
    height: 200px;
    background-color: red;
}
/* LLAMADA */
* {
    @include textDegrade;
    width: 100px;
}   

/* Ej 2: Solicitando dos parametros */
@mixin custom-btn ($name, $colorBG, $colorX){
    .button-#{$} {
        background-color: $colorA;
        border: 1px solid $colorB;
        color: $colorB;
    }
}
/* LLAMADA */
.button {
    width: 120px;
    height: 40px;
    @include btn('transparent', green, white);
}`
                }
                </CodeBox>
            </TopicContainer>

        </Information>
    )
}

export default Mixins