import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import data from "../../../../data/data"
import CodeBox from "../../../../global/code/CodeBox"

const UtilidadesGIT = () => {

    return (
        <Information subTopic={data.menu[2].array[2].array[4].subTopic}>

            <TopicContainer id="custom" topic="Comandos personalizados">
                <p>Puede que querramos crear nuestros propios comandos personalizados para facilitarnos el trabajo. Veamos como hacerlo:</p> 
                <CodeBox lang="bash"> 
                    {
`git config --global alias.nombreTest "<sentencia a ejecutar>"
# A partir de ahora, si escribimos "git nombreTest" , ejecutara lo que hayamos definido entre comillas.`
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="fork" topic="Fork repository" ytUrl="https://youtu.be/mBYSUUnMt9M?t=16138">
                <p>Al bifurcar un repositorio estaremos creando una copia de un repositorio "X" remoto (del cual no somos dueños) en nuestra cuenta de git. Veamos como hacerlo:</p>
                <ol>
                    <li> Ingresar a github, e ir al url del repositorio remoto que deamos copiar.</li>
                    <li> Si estamos en el código del proyecto, veremos un boton en la parte superior derecha de la pantalla (fork).</li>
                    <li> Colocamos el nombre del nuevo repositorio, la descripcion, y si deseamos copiar solo la rama principal, o todas, y le damos a crear. Muy sencillo cierto? :)</li>
                    <li> Ya podemos clonar el repositorio remoto bifurcado.</li>
                </ol>
                <small><em> Anotacion personal: </em>dividir el tema en sub-topic y ampliarlo</small>
            </TopicContainer>

            <TopicContainer id="token" topic="Token de acceso" ytUrl="https://www.youtube.com/watch?v=mBYSUUnMt9M&t=16836s">
                <p>Los tokens de acceso proporcionan una forma adicional de autenticación en Git que puede ser más flexible y seguro que las credenciales de inicio de sesión estándar. Aunque no son necesarios para acceder a un repositorio privado, pueden ser útiles en ciertos casos, como para permitir que las aplicaciones interactúen con la API de Git sin comprometer las credenciales de inicio de sesión del usuario:</p>
                <small><em> Anotacion personal:  </em>dividir el tema en sub-topic y ampliarlo</small>
            </TopicContainer>

            <TopicContainer id="ghpages" topic="GitHub Pages">
                <p>GitHub Pages es un servicio gratuito de alojamiento web proporcionado por GitHub que permite a los usuarios crear y alojar sitios web estáticos directamente desde sus repositorios de GitHub. Es una herramienta muy útil para desarrolladores, ya que les permite crear una presencia en línea para sus proyectos de código abierto o páginas personales. </p><br/>
                <h4>Alojando nuestro sitio en GHPAGES:</h4> 
                <ol>
                    <li>A</li> 
                    <li>B</li> 
                    <li>C</li> 
                </ol> 
            </TopicContainer>

            <TopicContainer id="links" topic="Utilidades">
                <>
                    <h4>GitHub = <a href="https://github.com/" target="_blank">Link</a></h4> <br/> 
                    <h4>GitHub Desktop = <a href="https://desktop.github.com/" target="_blank">Link</a></h4> <br/>
                    <h4>GitKraken = <a href="https://www.gitkraken.com/" target="_blank">Link</a></h4> <br/>
                </>
            </TopicContainer>

        </Information>
    )
}

export default UtilidadesGIT