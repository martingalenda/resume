import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"

const AtajosVSCODE = () => {

    return (
        <Information >

            <TopicContainer topic="Atajos de VSCODE">

                <p>Estos son los atajos que considero fundamentales a aplicar para alcanzar una mejor fluidez en nuestro ritmo de trabajo.</p> 

                <ol> 
                    <small>Desplazarse rapidamente entre archivos, y pestañas abiertas:</small> 
                    <li><strong>CTRL + P</strong> = Abre el buscador de archivos.</li>
                    <li><strong>ALT + 1</strong> = Nos desplazamos a la primer pestaña {`(sentido izquierda > derecha)`}.</li>
                    <small>Seleccionar un texto que se repite varias veces en el archivo uno por uno? Que? eso debería estar obsoleto:</small> 
                    <li><strong>CTRL + D</strong> = Selecciona la siguiente ocurrencia del texto seleccionado.</li>
                    <li><strong>CTRL + SHIFT + L</strong> = Selecciona todas las ocurrencias del texto seleccionado.</li>
                    <small>Otros:</small> 
                    <li><strong>ALT + (FLECHA ARRIBA O FLECHA ABAJO)</strong> = Baja, o sube la línea seleccionada.</li>
                    <li><strong>ALT + SHIFT + (FLECHA ARRIBA O FLECHA ABAJO)</strong> = Duplica la linea seleccionada arriba, o abajo.</li>
                    <li><strong>CTRL + SHIFT + A</strong> = Comenta o descomenta la selección actual.</li>
                    <li><strong>CTRL + SHIFT + T</strong> = Reabre la última pestaña seleccionada.</li>
                    <li><strong>CTRL + ENTER</strong> = Coloca el puntero por debajo del contexto en el que nos encontrabamos.</li>
                </ol>
                
                <br/><br/>
                <small>Vamos, estimo que esto los conocerá hasta tu bisabuela, pero por si eres de otro planeta y aún no los conoces:</small> 
                <ul>
                    <li>CTRL + S = Guarda el archivo.</li>

                    <li>CTRL + C = Copia el texto seleccionado.</li>
                    <li>CTRL + X = Corta el texto seleccionado.</li>
                    <li>CTRL + V = Pega el texto seleccionado.</li>

                    <li>CTRL + F = Buscador/Reemplazador de texto en el archivo. Tambien aplica CTRL + H</li>
                    <li><strong>CTRL + SHIFT + F</strong> = Buscador/Reemplazador de texto en el directorio.</li>

                    <li>CTRL + Z = Deshace la última acción.</li>
                    <li><strong>CTRL + SHIFT + Z</strong> = Rehace la última acción.</li>
                </ul>

            
            </TopicContainer>

        </Information>
    )
}

export default AtajosVSCODE