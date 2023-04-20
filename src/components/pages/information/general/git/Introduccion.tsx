import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const IntroduccionGIT = () => {

    return (
        <Information subTopic={data.menu[2].array[2].array[0]}>

            <TopicContainer id="git" topic="GIT & GITHUB - Introducción">

                <h4><strong>Git</strong></h4> 
                <p>GIT es un sistema de control de versiones distribuido y de código abierto diseñado para gestionar proyectos grandes, y pequeños.<br/> Entre las ventajas más notables de usar GIT, nos encontraremos con:</p> 

                <ul>
                    <li>Tener un registro claro de TODOS los cambios involucrados sobre un proyecto.</li>
                    <li>Trabajar de forma paralela a otros desarrolladores, sin interferir necesariamente en su trabajo/versión.</li>
                    <li>Dar uno, o varios pasos hacia atras cuando algo no resulte como esperabamos (sin volvernos locos en el intento).</li>
                    <li>Fusionar distintas versiones del proyecto cuando así lo deseemos.</li>
                    <li>El control exhaustivo del flujo de trabajo, favorece a la resolución de conflictos.</li>
                    <li>Transparencia. Con git sabemos con lujo de detalles en que intervino cada miembro del equipo.</li>
                    <li>Productividad. Cada desarrollador tiene una copia local del repositorio, por lo que un corte de internet practicamente no afecta sus trabajos.</li>
                    <li>Tranquilidad. Con GITHUB nada se pierde, incluso si se rompiese nuestro disco duro, los datos estarían listos para ser recuperados desde la nube.</li>
                </ul>

                <h4><strong>GitHub</strong></h4> 
                <p>GitHub, por otro lado, es una plataforma web que utiliza el sistema de control de versiones GIT para alojar, compartir y colaborar en proyectos de software de código abierto. Además de ofrecer el servicio de hosting para almacenar nuestros repositorios de código, GitHub ofrece una serie de herramientas y servicios que permiten a los desarrolladores trabajar juntos de manera efectiva, como herramientas de seguimiento de problemas, revisiones de código y herramientas de integración continua. GitHub se ha convertido en uno de los lugares más populares para alojar proyectos de software de código abierto y se utiliza ampliamente por empresas, organizaciones y desarrolladores individuales de todo el mundo.</p> 

            </TopicContainer>

            <TopicContainer id="conceptos" topic="Conceptos importantes">
                <ul>
                    <li><strong>Directorio de trabajo</strong>: Refiere a nuestro entorno local de trabajo.</li> 
                    <li><strong>Stage</strong>: Area de preparación. Refiere a una especie de zona intermedia entre: el directorio de trabajo, y el repositorio local de git (HEAD).</li> 
                    <li><strong>Repositorio local (HEAD)</strong>: Refiere al control de versiones local de nuestros archivos.<br/> <small>Para clarificar: Nosotros podemos realizar commits para ir guardando las distintas versiones de nuestro trabajo de formal local. Para, a futuro, actualizar el repositorio remoto.</small></li> 
                    <li><strong>Repositorio remoto</strong>: Refiere al control de versiones remoto de nuestros archivos (GITHUB en este caso).</li> 
                    <li><strong>Ramas (branch)</strong>: Refiere a una bifuración en nuestro flujo de registros/commits/trabajo.</li> 
                    <li><strong>Commit</strong>: Un versión/registro de nuestro proyecto en el tiempo.</li> 
                </ul> 
            </TopicContainer>

            <TopicContainer id="newrepo" topic="Creando un nuevo repositorio">
                <h4>Instalando git:</h4> 
                <CodeBox lang="bash"> 
                    {
`# 1- En primer instancia deberíamos de tener una cuenta creada en git: 
    https://github.com/

# 2- En segunda instancia debemos descargar git e instalarlo:
    https://git-scm.com/downloads`
                    }
                </CodeBox>
                <h4>Configurando git por primera vez:</h4> <br/>
                <small>Existen diversas herramientas para poder trabajar con git, algunas de ellas muy visuales e interactivas, como ser: GitHub Desktop, Git Kraken, etc.<br/> En este caso nos enfocaremos en el uso de la terminal. Si ya poseemos git instalado, lo más probable es que tengamos la terminal bash lista para ser usada (o la que deseemos usar).<br/> Eso significa que, si hacemos click derecho sobre una carpeta, deberíamos contar con la opción de: " Git bash here " , lo que abrirá una nueva terminal.</small> <br/>
                <p>Existen muchísimas formas de configurar GIT, pero la más común, sobre todo para novatos, es hacer uso de las siguientes sentencias:</p> 
                <CodeBox lang="bash"> 
                    {
`# Esto configurará en nuestro ordenador (de forma global) nuestro usuario y e-mail.
# Bastará con hacerlo solo una vez (a no ser que formateemos, o cambiemos de maquina obviamente)
    git config --global user.name "Bepi"
    git config --global user.email "mg@gmail.com"`
                    }
                </CodeBox>
                <h4>Nuevo control de versiones:</h4>
                <p>Una vez que estemos posicionados sobre la ruta del proyecto a gestionar:</p>
                <small>Hay diversas formar de iniciar un nuevo repositorio, esta es solo una de tantas, y propone iniciar el repositorio de forma local.</small>
                <CodeBox lang="bash"> 
                    {
`# 1- Esto iniciará un nuevo control de versiones en la ruta actual.
    git init

# 2- Esto nos dará un resumen del estado de nuestra versión. Archivos eliminados, nuevos, modificados...
    git status

# 3- Esto subiría TODOS los cambios al stage. Podríamos interpretarlo como "sacarle una foto a nuestro proyecto".
    git add .

# 4- Este comentario termina por confirmar que deseamos guardar todos los cambios del stage en nuestro repo local.
    git commit -m "Mi primer commit"

# 5- Crearemos un nuevo repositorio en GITHUB para poder tener el repositorio remoto:
    https://github.com/new
    
# 6- Vincularemos el repositorio local con el remoto:
    git remote add origin https://github.com/usuario/repo.git

# 7- Terminaremos por subir el repositorio escribiendo:
    git branch -m <nombre de la rama>
    git push -u origin <nombre de la rama>`
                    }
                </CodeBox>

                <h4>Ignorando archivos o directorios con: <strong>.gitignore.txt</strong></h4>  
                <p>Resulta frecuente la necesidad de apartar archivos o carpetas de nuestro controlador de versiones. Es decir, habra ciertos directorios a los que no querremos hacerle un seguimiento con git. Para ignorar archivos o carpetas, debemos tener un archivo en nuestro proyecto llamado " .gitignore " .<br/> Dentro de este, podríamos declarar lo siguiente:</p>  
                <CodeBox lang="bash"> 
                    {
`# Esto ignorará a todas las carpetas que posean dicho nombre, sin importar la ruta en la que se encuentren.
    mi_carpeta/

# Ignora a todo el contenido interno de la ruta declarada.
    mi_carpeta/ruta/carpeta/


# Ignora todos los archivos del repositorio que posean ese mismo nombre, y esa misma extension (txt), sin importar la ruta en la que se encuentren.
    mi_archivo.txt

# Ignora al archivo que posea ese mismo nombre, esa misma extension, y esa misma ruta. 
# La raiz de la ruta corresponde a la ruta del archivo .gitignore (comunmente ubicado en la raiz del proyecto)
    mi_carpeta/ruta/mi_archivo.txt

# Ignora todos los archivos con formato log del sitio
    *.log`
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="clonerepo" topic="Clonando un repositorio">
                <p>Si lo que buscamos no es crear un repositorio nuevo, sino descargar uno existente, la forma más simple de hacerlo es clonando:</p> 

                <CodeBox lang="bash"> 
                    {
`# 1- Ingresar en Github (o en nuestra plataforma utilizada para almacenar el repositorio remoto)

# 2- Buscar el repositorio, y acceder al url del mismo (HTTPS)

# 3- Crear una carpeta con el nombre del proyecto, ingresar en ella y abrir una terminal bash.

# 4- Utilizar el comando git clone, seguido del url HTTPS
    git clone <remote url>`
                    }
                </CodeBox>
            </TopicContainer>

 

        </Information>
    )
}

export default IntroduccionGIT