import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Each = () => {

    return (
        <Information>

            <TopicContainer topic="@each" >
                <p>La directiva @each en Sass (SCSS) se utiliza para iterar sobre una lista o un mapa y generar estilos CSS para cada elemento de la lista o mapa. La sintaxis básica de @each es la siguiente: </p> 
                <CodeBox lang="scss"> 
                {
`@each $variable in lista {
    // Estilos CSS que utilizan $variable
}

// Un ejemplo:
$colores: #FF0000, #00FF00, #0000FF;

@each $color in $colores {
    .caja-#{$color} {
      background-color: $color;
    }
}`
                }
                </CodeBox>
            </TopicContainer>

        </Information>
    )
}

export default Each