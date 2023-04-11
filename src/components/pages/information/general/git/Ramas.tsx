import Information from "../../Information"
//import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const GestionandoCambios = () => {

    return (
        <Information>

            <TopicContainer id="ramas" topic="Gestión de ramas">
                <h4>Creando, eliminando, y trasladandos en ramas (git branch)</h4> 
               
                <CodeBox lang="bash"> 
                    {
`# Crea una nueva rama, basada en la que estamos posicionados.
    git branch <nombre de la rama>
#  Crea una rama basada en la que estamos posicionados, y nos traslada automaticamente hacia ella:
    git branch -b <nombre de la rama>


# Trasladamos nuestro directorio de trabajo (HEAD) a la rama especificada:
    git checkout <nombre de la rama>


# Eliminamos la rama especificada
    git branch -d <nombre de la rama>`
                    }
                </CodeBox>

                <h4>Fusionando ramas (git merge)</h4> 
                <CodeBox lang="bash"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>






            <TopicContainer id="tags" topic="Tags">
                <p>.</p> 
                <CodeBox lang="bash"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>


            <TopicContainer id="custom" topic="Comandos personalizados">
                <p>Puede que querramos crear nuestros propios comandos personalizados para facilitarnos el trabajo. Veamos como hacerlo:</p> 
                <CodeBox lang="bash"> 
                    {
`git config --global alias.nombreTest "<sentencia a ejecutar>"
# A partir de ahora, si escribimos "git nombreTest" , ejecutara lo que hayamos definido entre comillas`
                    }
                </CodeBox>
            </TopicContainer>

        </Information>
    )
}

export default GestionandoCambios