import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import data from "../../../../data/data"
import CodeBox from "../../../../global/code/CodeBox"

const UtilidadesGIT = () => {

    return (
        <Information subTopic={data.menu[2].array[2].array[4]}>

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

            <br/> 
            <TopicContainer id="token" topic="Token de acceso" ytUrl="https://www.youtube.com/watch?v=mBYSUUnMt9M&t=16836s">
                <p>Los tokens de acceso proporcionan una forma adicional de autenticación en Git que puede ser más flexible y seguro que las credenciales de inicio de sesión estándar. Aunque no son necesarios para acceder a un repositorio privado, pueden ser útiles en ciertos casos, como para permitir que las aplicaciones interactúen con la API de Git sin comprometer las credenciales de inicio de sesión del usuario:</p>
                <small><em> Anotacion personal:  </em>dividir el tema en sub-topic y ampliarlo</small>
            </TopicContainer>

            <br/> 
            <TopicContainer id="ghpages" topic="GitHub Pages" ytUrl="https://www.youtube.com/watch?v=G2FoSpsq3Rw&ab_channel=FaztCode">
                <p>GitHub Pages es un servicio gratuito de alojamiento web proporcionado por GitHub. Este permite a los usuarios alojar sitios web estáticos directamente desde sus repositorios de GitHub. Es una herramienta muy útil para desarrolladores, ya que les permite crear una presencia en línea para sus proyectos de código abierto. </p><br/>
                <h4>Alojando nuestro sitio en GHPAGES:</h4> 
                <p>Una vez que tengas listo tu sitio, sigue estos pasos:</p> 
                <ol>
                    <li>Instala la siguiente dependencia en tu repositorio: npm install gh-pages --save-dev</li> 
                    <small>Para continuar con el siguiente paso, asumo que ya tienes tu repositorio remoto creado, y actualizado en GitHub.</small> 
                    <li>Crea una nuevama rama con el nombre " gh-pages ", y subela al repositorio remoto.</li> 
                    <li>Posicionate sobre la rama gh-pages.</li> 
                    <li>Añade a tus scripts de Package.json la línea: "deploy": "gh-pages -d dist" </li> 
                    <small>Esto hara que puedas publicar con un solo comando los cambios de tu web. (dist) corresponde al directo a subir, como utilizamos React & Vite, dist es la carpeta que necesitamos.</small> 
                    <br/> 
                    <p>Si utilizas react-router & vite deberás tambien:</p> 
                    <ol>
                        <li>Posicionarte en la rama gh-pages</li> 
                        <li>Añadir la linea "homepage": "http://martingalenda.github.io/repoName" , a tu archivo package.json</li> 
                        <li>Colocar la prop " basename="/repoName" " en el componente Routes (quien engloba a todas las rutas)</li> 
                        <li>Colocar la linea  " base: '/repoName/' ", en el archivo vite.config.js</li> 
                        <small>Reemplaza repoName por el nombre de tu repositorio</small> 
                    </ol>
                </ol> 
            </TopicContainer>

            <br/> 
            <TopicContainer id="links" topic="Aplicaciones útiles">
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