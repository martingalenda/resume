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
`# Crea una nueva rama (basada/clonando en la que estamos posicionados).
    git branch <nombre de la nueva rama>

# Crea una nueva rama (basada/clonando en la que estamos posicionados), y nos mueve automaticamente a esta.
    git checkout -b <nombre de la nueva rama>


# Nos movemos de rama, adaptando nuestro directorio de trabajo (HEAD) a esta misma:
    git checkout <nombre de la rama>


# Modificamos el nombre de la rama en cuestión
    git branch -m <nombre de la rama> <nuevo nombre de la rama>


# Eliminación de ramas
    # De forma local:
    git branch -d <nombre de la rama>
    # De forma remota:
    git push <nombre del repo> --delete <nombre de la rama>`
                    }
                </CodeBox>

                <h4>Fusionando ramas (git merge)</h4> 
                <p>
                <em>Importante</em>: A la hora de querer fusionar ramas, debemos tener en consideración lo siguiente: 
                </p> 
                <ul>
                    <li>La fusión se hara siempre sobre la rama en la que estemos posicionado. Es esta quien obtendra los cambios de la rama que definamos.</li>
                    <li>A la hora de fusionar una rama, pueden darse dos situaciones:</li>
                </ul>
                <h4>A- <strong>Fast forward</strong>: La fusión se hace automaticamente, ya que no existen conflictos por resolver</h4> 
                <CodeBox lang="bash"> 
                    {
`# Nos posicionamos sobre la rama que recibirá la fusión.
    git checkout <nombre de la rama>

# Indiciamos la rama sobre la cual extraeremos sus cambios.
    git merge <nombre de la rama>`
                    }
                </CodeBox>

                <h4>B- <strong>Manual merge (ocasional)</strong>: La fusión hay que terminar haciendola "manual" porque existen conflictos entre archivos.</h4> 
                <p>
                    Si existen conflictos, porque uno, o más archivos, han sido modificados en ambas ramas, luego de hacer el merge (el paso A) se nos habilitará automaticamente la interfaz de visual studio para solucionar los conflictos de una forma muy visual/simplificada. Desde allí elegiremos que cambios conservar, y cuales descartar. Al finalizar, ejecutaremos git merge --continue
                </p> 
                <small>
                    En caso de que no se abra automaticamente la interfaz de visual studio para solucionar los conflictos, se debe ejecutar el comando: git config --global core.editor "code --wait"
                </small> 
                <br/> 
                <br/> 
                <h4>C- <strong>Confirmando la fusión</strong>:</h4> 
                <p>
                    Ya sea que el proceso haya terminado fast forward, o con manual merge, debemos de terminar por confirmar la fusión que hemos hecho.
                </p> 
                <CodeBox lang="bash"> 
                {
`# Agregamos los cambios fusionados al stage:
    git add .

# Añadimos un comentario a la fusión:
    git commit -m "Fusionando el modal, el nav, y la vista information"

# Subimos al repositorio remoto los cambios ya fusionados en nuestra rama:
    git push <nombre del repo> <nombre de la rama>`
                    }
                </CodeBox>
            </TopicContainer>

        </Information>
    )
}

export default GestionandoCambios