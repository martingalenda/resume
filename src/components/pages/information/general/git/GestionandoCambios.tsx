import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"
import { Alert, AlertTitle } from "@mui/material"

const GestionandoCambios = () => {

    return (
        <Information subTopic={data.menu[2].array[2].array[2]}>

 
            <TopicContainer id="push" topic="Subiendo cambios ( add + commit + push )">
                <CodeBox lang="bash"> 
                    {
`# 1- En primer instancia debemos subir los cambios deseados al stage. Tenemos 3 formas de hacerlo:

# A- Agregando un archivo especifico al stage.
    git add mi_archivo        

# B- Si despues de "/" no colocamos nada, estaremos agregando la carpeta entera al stage. 
    git add mi_carpeta/     

# C- Agregando TODOS los cambios realizados al stage
    git add .                            


# 2- Luego debemos confirmar los cambios realizados mediante un comentario, procurando ser lo más claros posibles.

    # Con esto, estamos generando un nuevo 'punto de referencia / versión' de nuestro trabajo, guardando los cambios del stage en nuestro repositorio LOCAL. Podríamos usar la analogía de estarle sacando una fotografía a nuestro proyecto.   
        git commit -m "He optimizado esto, y solucionado esto otro."  


# 3- Si ya deseamos subir los cambios al repositorio REMOTO:

    git push -u <nombre del repo remoto> <nombre de la rama> 
    # Sube los cambios a (un remoto especifico) y (una rama especifica)`
                    }
                </CodeBox>
                <small>Si al llegar a este punto, nos encontramos que hay cambios remotos que afectaron a la rama sobre la cual estamos trabajando (y nosotros no los hemos descargado aún) entonces deberemos de bajar los cambios para poder luego subir los nuestros. Aquí podría o no existir conflictos (diferencias en mismos archivos). En caso de que existan, deberán ser solucionados manualmente. Veremos esto en el topico "Gestion de ramas".</small>
                </TopicContainer>

                <TopicContainer id="pull" topic="Bajando cambios ( pull & fetch )">
                <CodeBox lang="bash"> 
                    {
`# - Nos bajamos los últimos cambios de la rama sobre la cual estamos posicionados, y los fusionamos con nuestro directorio de trabajo.
    git pull`
}
</CodeBox>
    <CodeBox lang="bash"> 
    {
`# - Opcionalmente podríamos usar fetch en lugar de pull para descargar los últimos commits (remotos) pero SIN fusionarlos.
    git fetch
# - Ahora podríamos revisar el historial de commits (no descargados) apuntando al repo, y la rama.
    git log --oneline nombreRepo/nombreRama
# - También podriamos ir a la última versión de la rama remota:
    git checkout nombreRepo/nombreRama
# - Y luego volver a nuestra versión local de la rama:
    git checkout nombreRama`
                    }
                </CodeBox>
                <small>Al bajar los cambios podrían o no existir conflictos (diferencias en mismos archivos). En ese caso, estos deberán ser solucionados manualmente. Veremos esto en el tópico "Gestión de ramas".</small>
                </TopicContainer>

                <TopicContainer id="revert" topic="Revirtiendo cambios">
                <Alert severity="error" variant="outlined">
                  <AlertTitle>Precaución</AlertTitle>
                  Las acciones que veremos a continuación conllevan un riesgo en la perdida de datos/archivos , por lo que debemos utilizarlos con suma precaución.
            </Alert>  

                <p>Sin duda habrá momentos en los que necesitemos dar uno, o varios pasos atras en nuestro código. Podría ser debido a que nos gusto más una versión pasada, o simplemente porque algo no resulto como esperabamos. Veamos como podríamos hacerlo:</p><br/>  
                <h4>Descartando || Revirtiendo cambios de archivos en nuestro <strong>DIRECTORIO DE TRABAJO</strong> - <em> (NO SUBIDOS AL STAGE) - "ALTO RIESGO"</em></h4> 
                <small> El riesgo es "alto" ya que (si no es realmente lo que deseamos hacer) en el siguiente ejemplo, podríamos perder nuestros últimos cambios realizados en uno o varios archivos locales. Restableciendo todo nuestro directorio respecto al último commit confirmado.</small>
                <CodeBox lang="bash"> 
                    {
`# Descarta los últimos cambios del archivo especificado, restableciendolo hacia como estaba en el último commit confirmado de la rama actual (sobre la que estemos posicionados). 
    git checkout -- <ruta/local/mi_archivo.txt>

# Revertimos los cambios del archivo especificado, restableciendolo a como estaba en la versión/commit definida.
    git checkout <identificador del commit> -- <ruta/local/mi_archivo.txt>
    
# Revierte el directorio del trabajo ENTERO, hacia el último commit confirmado
    git checkout .`
                    }
                </CodeBox><br/> 
                <h4>Descarando cambios del <strong>STAGE AREA</strong> - sin riesgos</h4> 
                <small>No existen riesgos como tal, ya que solamente estamos sacando archivos del area de stage.</small>
                <CodeBox lang="bash"> 
                    {
`# Retira todos los archivos del area de stage, dejandolos intactos en nuestro directorio de trabajo.
    git reset

# Elimina el archivo especificado del area de stage, dejandolo intacto en nuestro directorio de trabajo:
    git reset <ruta/local/mi_archivo.txt>`
                    }
                </CodeBox><br/> 
                <h4>Revirtiendo cambios en el <strong>REPOSITORIO LOCAL</strong> - <em> (NO SUBIDOS AL REPO REMOTO) - "RIESGO EXTREMO"</em> </h4> <br/>
                <p>1. En el primer ejemplo, veremos como modificar/sobre-escribir el último commit local realizado con <strong>git commit --amend</strong></p>
                <CodeBox lang="bash"> 
                    {
`# El siguiente comando puede resultar útil en algunas ocasiones:

# 1- Tras haber hecho un commit (LOCAL), nos damos cuenta que nos falto añadir x funcionalidad (relacionada con el commit en cuestión), o bien hemos tenido un error infimo en los cambios comiteados.
# A) Desarrollamos la funcionalidad, o corregimos el error en nuestro directorio de trabajo.
# B) Agregamos al stage los nuevos cambios.
    git add .
# C) Ejecutamos el commit con --amend (--no-edit se usa si no queremos modificar el mnsj del commit)
    git commit --amend --no-edit


# 2- Tan solo necesitamos modificar el mensaje del último commit.
    git commit --amend -m "Mensaje del commit modificado"`
                    }
                </CodeBox>

                <p>2. En el segundo ejemplo, veremos como podemos eliminar varios commits del registro local con <strong>git reset --soft</strong></p>
                <CodeBox lang="bash"> 
                    {
`# Git reset soft elimina del registro local a todos los commits posteriores al definido, aunque conserva todos sus cambios involucrados, en nuestro directorio de trabajo, y los empuja directamente al area de stage.
    git reset --soft <id del commit>`
                    }
                </CodeBox><br/> 
                <p>3. En el tercer ejemplo, veremos como podemos eliminar varios commits del registro local con <strong>git reset --mixed</strong></p>
                <CodeBox lang="bash"> 
                    {
`# Git reset mixxed funciona igual que soft (ej2) con la diferencia de que no empuja los cambios al area de stage.
    git reset --mixed <id del commit>`
                    }
                </CodeBox><br/> 
                <p>4. En el cuarto ejemplo, veremos como podemos eliminar varios commits del registro local con <strong>git reset --hard</strong></p>
                <CodeBox lang="bash"> 
                    {
`# Git reset hard elimina COMPLETAMENTE los commits posteriores al mencionado. Es decir, PRESTAR ATENCIÓN ya que los cambios involucrados a dichos commits, al contrario de soft y mixed, no aparecen en nuestro directorio de trabajo, sino que insisto seran ELIMINADOS COMPLETAMENTE.
    git reset --hard <id del commit>`
                    }
                </CodeBox><br/> 



            </TopicContainer>


        </Information>
    )
}

export default GestionandoCambios