import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Media = () => {

    return (
        <Information>

            <TopicContainer topic="Media - Modos de uso">
                <h4>Imagenes ubicadas en public (no requieren de importación)</h4> 
                <CodeBox lang="jsx"> 
                    {
`// Con un nombre estático
<img src={./img/batman.png\`} alt="Batman"/>

// Con un nombre dinámico
<img src={\`./img/\${imgName}.png\`} alt="Batman"/>`
                    }
                </CodeBox>
                <h4>Imagenes ubicadas fuera de la carpeta pública (src) (requieren importarse)</h4> 
                <CodeBox lang="jsx"> 
                    {
`import Batman from './media/batman.svg';

<img src={Batman} alt="Batman" />;`
                    }
                </CodeBox>
                <h4>Lista de imagenes ubicadas dentro de src (con un archivo js aparte para exportarlas)</h4> 
                <CodeBox lang="jsx"> 
                    {
`// Simulamos el archivo imagenes.js en donde exportaremos todas las imgs
import batman from './media/batman.svg';
import superman from './media/batman.svg';

export default [
    {
        "title": "Batman",
        "img": batman
    },
    {
        "title": "Superman",
        "img": superman
    }
]

// Simulamos el componente que utiliza alguna de estas imgs.
import imagenes from "./assets/imgs/images.js"

const Componente = () => {
    return (
        <>
            <h1> {imagenes[0].title} </h1>
            <img src={imagenes[0].img} alt={imagenes[0].title} />
        </>
    )
}

export default Componente;`
                    }
                </CodeBox>
{/*                 <h4>Import dinámico</h4> 
                <CodeBox lang="jsx"> 
                    {
`const heroImages = require.context('ruta/images', true);

<img src={\`./\${heroImages}\`}></img>`
                    }
                </CodeBox> */}
            </TopicContainer>

        </Information>
    )
}

export default Media