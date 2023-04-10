import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const ModulosJS = () => {

    return (
        <Information>

            <TopicContainer topic="Modularización" ytUrl="https://youtu.be/0GEUyQXe3NI?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=121">
                <p></p> 

<h4>EJ1:</h4> 
<CodeBox lang="javascript"> 
    {
`// Simulamos el archivo que contiene las exportaciones ("modules.js") a compartir
    export const mnsj = "Exportando constante"

    const mnsj2 = "Exportando otra constante" // Estas dos la exportamos luego
    const mnsj3 = "Exportando otra constante más" // Estas dos la exportamos luego
        
    export default function saludar() {
        console.log("Hola pepito")
    }
        
    export {mnsj2, mnsj3}
        

// Simulamos el archivo en donde importamos (code.js) llamamos a lo ya exportado
    import saludar, {mnsj, mnsj2, mnsj3} from './modules.js'; 
// importo saludar (por defecto), y msnj/mnsj2 destructurando
    console.log(mnsj)
    console.log(mnsj2)
    console.log(mnsj3)
    saludar()`
    }
    </CodeBox>
    <h4>EJ2:</h4> 
<CodeBox lang="javascript"> 
    {
`// Simulamos el archivo que contiene las exportaciones ("modules.js") a compartir
    const mnsj = "Exportando constante 1"
    const mnsj2 = "Exportando constante 2"

    const func1 = () => {
        console.log("Testeando funcion 1")
    }

    export const func2 = () => {
        console.log("Testeando funcion 2")
    }

// También podemos guardar las variables y las funciones como objetos literales
    const codeTest = {
        mnsj,
        func1,
    };
    export default codeTest

// Simulamos el archivo en donde importamos (code.js)
    import codeTest, {func2} from './modules.js';

    console.log(codeTest.mnsj)
    codeTest.func1()
    func2()`
}
</CodeBox>
<h4>EJ3: COMMON.JS (requiere)</h4> 
<CodeBox lang="javascript"> 
    {
`// ! Tuve errores de instalación para poder aplicarlo....
// Con common.js la importación y la exportación es un tanto distinta, para exportar sería así:
// Simulamos el archivo que exporta las variables (module.js)
    const mnsj = "Exportando constante"

    const mnsj2 = "Exportando otra constante"
    const mnsj3 = "Exportando otra constante más"
    
    function saludar() {
        console.log("Hola pepito")
    }
    
    module.exports = {mnsj, mnsj2, mnsj3, saludar}

// Para importar usamos requiere (simulando el archivo que importa, code.js)
    const mensaje = require('./rutaDelArchivo')

    console.log(mensaje)`
                    }
                </CodeBox>
            </TopicContainer>
        </Information>
    )
}

export default ModulosJS