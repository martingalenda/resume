import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const UtilidadesGIT = () => {

    return (
        <Information>

            <TopicContainer topic="Utilidades">
                <>
                    <h4>GitHub = <a href="https://github.com/" target="_blank">Link</a></h4> <br/> 
                    <h4>GitHub Desktop = <a href="https://desktop.github.com/" target="_blank">Link</a></h4> <br/>
                    <h4>GitKraken = <a href="https://www.gitkraken.com/" target="_blank">Link</a></h4> <br/>
                </>
            </TopicContainer>
            <br/><br/>
            <TopicContainer topic="GitHub Pages">
                <p>GitHub Pages es un servicio gratuito de alojamiento web proporcionado por GitHub que permite a los usuarios crear y alojar sitios web estáticos directamente desde sus repositorios de GitHub. Es una herramienta muy útil para desarrolladores, ya que les permite crear una presencia en línea para sus proyectos de código abierto o páginas personales. </p><br/>
                <h4>Alojando nuestro sitio en GHPAGES:</h4> 

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

export default UtilidadesGIT