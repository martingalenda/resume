import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const ComandosBash = () => {

    return (
        <Information>

            <TopicContainer topic="Comandos de terminal">
                <h4>Comandos básicos terminal <strong>Bash/Powershell</strong>:</h4>  
                <CodeBox lang="bash"> 
                    {
`ls
# Nos muestra todos los archivos y carpetas de nuestra ruta actual.

cd ..
# Volvemos una posición atras (en base a nuestra ruta actual).

cd carpetaX/carpetaY
# Nos movemos a la ruta especificada.

mkdir "carpeta"
# Creamos una carpeta en la ruta actual.

touch miArchivo.jsx
# Crea un archivo vacio en la ruta actual

mv mi_archivo.txt mi_carpeta
# Mueve el "mi_archivo.txt" adentro de "mi_carpeta"

clear
# Limpia. Remueve todo el texto de la consola.

code .
# Nos abre la carpeta en Visual Studio`
                    }
                </CodeBox>
                <small>Ruta : Refiere a la dirección del archivo/carpeta.</small> 

                <h4>Comandos básico <strong>npm</strong>:</h4>
                <CodeBox lang="bash"> 
                    {
`npm i
# Nos instala todas las dependencias del archivo package.json

npm i "dependency"
# Instalamos una libreria en concreto

npm u "dependency"
# Desinstalamos una librería en concreto
`
                    }
                </CodeBox>

                <h4>Comandos básicos terminal windows <strong>cmd</strong>:</h4>
                <small>Algunos comandos son iguales a Unix: cd, mkdir ...</small>
                <CodeBox lang="bash"> 
                    {
`dir
# Nos muestra todos los archivos y carpetas de nuestra ruta actual.

cls
# Limpia. Remueve todo el texto de la consola.

type nul > mi_archivo.txt
# Crea un archivo con el nombre y la extension que defindamos.`
                    }
                </CodeBox>
            </TopicContainer>

        </Information>
    )
}

export default ComandosBash