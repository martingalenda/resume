import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Media = () => {

    return (
        <Information>

            <TopicContainer topic="Media - Modos de uso">
                <h4>Imagenes ubicadas en public (no requiere importación)</h4> 
                <CodeBox lang="jsx"> 
                    {
`// Con un nombre estático
<img src={./img/batman.png\`} alt="Batman"/>

// Con un nombre dinámico
<img src={\`./img/\${imgName}.png\`} alt="Batman"/>`
                    }
                </CodeBox>
                <h4>Imagenes ubicadas fuera de la carpeta pública (requiere importación)</h4> 
                <CodeBox lang="jsx"> 
                    {
`import Batman from './media/batman.svg';

<img src={Batman} alt="Batman" />;`
                    }
                </CodeBox>
                <h4>Import dinámico</h4> 
                <CodeBox lang="jsx"> 
                    {
`const heroImages = require.context('ruta/images', true);

<img src={\`./\${heroImages}\`}></img>`
                    }
                </CodeBox>
            </TopicContainer>

        </Information>
    )
}

export default Media