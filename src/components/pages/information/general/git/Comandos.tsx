import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const ComandosGIT = () => {

    return (
        <Information subTopic={data.menu[2].array[2].array[1].subTopic}>

            <TopicContainer id="consultas" topic="Consultas">
                <h4>Estado general del working directory & stage area con: <strong> git status</strong></h4>  
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

<br/> 
<h4>Historial de commits con: <strong>git log</strong></h4>  
<CodeBox lang="bash"> 
                    {
`# Nos otorga el historial de commits de la rama sobre la cual estemos posicionados.
    git log
# Nos otorga el historial de commits de una forma un poco más visual.
    git log --graph
# Nos otorga el historial de commits en una sola línea.
    git log --oneline`
                    }
</CodeBox>
<br/> 
<h4>Viajar a commits anteriores, chequear, y regresar con <strong>git checkout</strong> & reflog (opcional)</h4>  
<p><em>Importante</em>: Es importante mencionar que, al hacer checkout a un commit anterior, se creará un estado "detached HEAD", lo que significa que el HEAD ya no apunta a una rama, sino a un commit específico. Por lo tanto, cualquier cambio que realicemos en ese estado no se reflejará en ninguna rama, y se perderá si no lo guardamos en una nueva rama. </p>  
<CodeBox lang="bash"> 
                    {
`# Restablece nuestro directorio de trabajo a la versión definida. Al hacerlo, reposiciona solamente el puntero HEAD.
    git checkout <id del commit>

# Para regresar a la rama sobre la cual estabamos trabajando
    git checkout <nombre de la rama>`
}
</CodeBox>
<small>Cuando volvemos a una versión anterior, al hacer git log, perderemos los commits posteriores. Para recuperarlos, y regresar a cualquier versión posterior, debemos hacer uso de git reflog.</small><br/> 
    <CodeBox lang="bash"> 
    {
`# Nos muestra un registro detallado de todos los cambios realizados en el repositorio.
    git reflog
# Luego deberíamos de apuntar nuevamente a una rama para salir del estado "detached HEAD"
    git checkout <nombre de la rama>`
}
</CodeBox>

<br/>
<h4>Consultar diferencias entre commits, ramas, o archivos específicos con <strong>git diff</strong></h4>  
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
    git diff <id del commit1> <path/to/file.txt>`
                    }
                </CodeBox>
            </TopicContainer>





            <TopicContainer id="cambios" topic="Gestión de cambios">



                <h4>Subiendo cambios con git <strong>add + commit + push</strong></h4>  
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

                <h4>Bajando cambios con git<strong>fetch + log + pull</strong></h4> 
                <CodeBox lang="bash"> 
                    {
`# Las siguientes dos sentencias nos permiten conocer los nuevos commits por/sin descargar.
# 1 -  ...
    git fetch
# 2 -  ....
    git log origin/main`
                    }
                </CodeBox>

                <p>Sin duda habrá momentos en los que necesitemos dar uno, o varios pasos atras en nuestro código. Podría ser debido a que nos gusto más una versión pasada, o simplemente porque algo no resulto como esperabamos. Veamos como hacerlo:</p>  
                <h4>Revirtiendo cambios en el directorio de trabajo con<strong>checkout</strong></h4>  
                <CodeBox lang="bash"> 
                    {
`# Descarta los últimos cambios del archivo especificado, revirtiendolo hacia como estaba en el último commit confirmado de la rama actual. 
# Esto aplica a nuestro directorio de trabajo (si es que no hemos hecho ya un commit del archivo en cuestión).
git checkout mi_archivo.txt

# Revertimos los cambios del archivo especificado, respecto a la versión/commit que necesitemos.
git checkout <identificador del commit> -- mi_archivo

 
git checkout <identificador del commit>
`
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





            <TopicContainer id="ramas" topic="Gestión de ramas">
                <p>.</p> 
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

export default ComandosGIT