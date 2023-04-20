import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Consultas = () => {
 
    return (
        <Information subTopic={data.menu[2].array[2].array[1]}>

            <TopicContainer id="wd_stage" topic="git status = Consultando el estado general del working directory & stage area">
                <CodeBox lang="bash"> 
                    {
`# Nos otorga información actual sobre el estado de nuestro proyecto.
# Entre la información encontraremos: 
# · Archivos modificados sin subir al stage.
# · Archivos agregados al stage.
# · Archivos agregados al stage, pero que han sido modificados nuevamente. 
# · El nombre de la rama actual sobre la que estamos posicionados.
# · Diferencias de commits entre nuestro repositorio local, y el remoto.
    git status

# Muestra el estado de una forma mucho más concisa:
    git status -s`
}
</CodeBox>
</TopicContainer>

<TopicContainer id="commits" topic="git log = Consultando historial de commits">  
<CodeBox lang="bash"> 
                    {
`# Nos otorga el historial de commits (local) de la rama sobre la cual estemos posicionados.
    git log
# Nos otorga el historial de commits (local) de una forma un poco más visual.
    git log --graph
# Nos otorga el historial de commits (local) en una sola línea.
    git log --oneline
# Nos otorga el historial de commits (local) del repositorio y rama definida.
    git log --oneline repoName/ramaName`
                    }
</CodeBox>
</TopicContainer>

<TopicContainer id="chequeos" topic="git checkout = Chequeando versiones anteriores, y regresando"> 
<p><em>Importante</em>: Es importante mencionar que, al hacer checkout a un commit anterior, se creará un estado de "detached HEAD", lo que significa que el HEAD ya no apuntará a una rama, sino a un commit específico. Por lo tanto, cualquier cambio que realicemos durante ese estado, no se vera reflejando en ninguna rama, y se perderá si no lo guardamos en una nueva. </p>  
<CodeBox lang="bash"> 
                    {
`# Restablece nuestro directorio de trabajo al commit definido.
    git checkout <id del commit>

# Para regresar a última versión de la rama sobre la cual estabamos trabajando:
    git checkout <nombre de la rama>
    
# En caso de que busquemos regresar a un commit posterior, pero no al último de la rama en cuestión. Deberemos buscar el hash del commit al cual queremos trasladarnos. Pero si hicieramos un simple git log, los posteriores ya no los veriamos. Para verlos, tenemos varias opciones:

    # 1- Nos traer todos los commits, incluyendo los posteriores sobre el cual estamos posicionados
        git log --oneline <nombre del repo> <nombre de la rama>

    # 2- Este nos trae todos los registros del repositorio, incluyendo los commits con sus respectivos hash.
        git reflog

    # 3- Desde la interface propia de git, yendo a la rama y buscando la solapa commits.`
}
</CodeBox>

</TopicContainer>

<TopicContainer id="diferencias" topic="git diff = Consultando diferencias entre commits, ramas, o archivos específicos">

<small><strong>Consejo</strong>: Esto resulta mucho más practico visualizarlo desde una herramienta como GitHub Desktop, u otras similares. </small>  <br/> 
<CodeBox lang="bash"> 
                    {
`# Nos muestra las diferencias entre el directorio de trabajo, y el stage:
    git diff

# Nos muestra las diferencias entre el stage, y el último commit:
    git diff --cached

# Nos muestra las diferencias entre el directorio de trabajo, y el último commit:
    git diff HEAD

# Nos muestra las diferencias entre dos commits específicos:
    git diff <id del commit1> <id del commit2>

# Nos muestra las diferencias de un archivo, en distintas versiones/commits:
    git diff <id del commit1> <path/to/file.txt>
    
# Nos muestra las diferencias entre dos ramas:
    git diff <id de la rama1> <id de la rama2>`
                    }
                </CodeBox>
                </TopicContainer>


            <TopicContainer id="ramas" topic="git branch = Consultando ramas"> 
<CodeBox lang="bash"> 
                    {
`# Consultamos una lista con todas las ramas
    git branch 

# Consultamos la lista de las ramas no fusionadas a la rama actual
    git branch --no-merged

# Consultamos la lista de las ramas fusionadas a la rama actual
    git branch --merged`
                    }
</CodeBox>
            </TopicContainer>


        </Information>
    )
}

export default Consultas