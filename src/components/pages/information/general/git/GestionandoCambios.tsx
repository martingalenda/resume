import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const GestionandoCambios = () => {

    return (
        <Information subTopic={data.menu[2].array[2].array[2].subTopic}>


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
                </TopicContainer>

                <TopicContainer id="pull" topic="Bajando cambios ( fetch + log + pull )">
                <CodeBox lang="bash"> 
                    {
`# Las siguientes dos sentencias nos permiten conocer los nuevos commits por/sin descargar.
# 1 -  ...
    git fetch
# 2 -  ....
    git log origin/main`
                    }
                </CodeBox>

                </TopicContainer>
                <TopicContainer id="revert" topic="Revirtiendo cambios">

                <p>Sin duda habrá momentos en los que necesitemos dar uno, o varios pasos atras en nuestro código. Podría ser debido a que nos gusto más una versión pasada, o simplemente porque algo no resulto como esperabamos. Veamos como hacerlo:</p>  
                <h4>Revirtiendo cambios en el directorio de trabajo con <strong>git checkout</strong></h4>  
                <CodeBox lang="bash"> 
                    {
`# Descarta los últimos cambios del archivo especificado, revirtiendolo hacia como estaba en el último commit confirmado de la rama actual. 
# Esto aplica a nuestro directorio de trabajo (si es que no hemos hecho ya un commit del archivo en cuestión).
    git checkout mi_archivo.txt

# Revertimos los cambios del archivo especificado, respecto a la versión/commit que necesitemos.
    git checkout <identificador del commit> -- mi_archivo`
                    }
                </CodeBox>
                <h4>Revirtiendo cambios en el stage con <strong></strong></h4> 
                <CodeBox lang="bash"> 
                    {
`
`
                    }
                </CodeBox>

                <h4>Revirtiendo cambios en el repositorio con <strong></strong></h4> 
                <CodeBox lang="bash"> 
                    {
`
`
                    }
                </CodeBox>

            </TopicContainer>


        </Information>
    )
}

export default GestionandoCambios