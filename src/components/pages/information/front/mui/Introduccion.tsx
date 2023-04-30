import data from "../../../../data/data"
import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const IntroduccionMUI = () => {
    return (
        <>
        <Information subTopic={data.menu[0].array[6].array[0]}>

            <TopicContainer id="resume" topic="React MUI - Introducción">
                <p>
                React MUI (también conocido como Material-UI) es una popular librería de componentes de interfaz de usuario para React, que proporciona una amplia gama de elementos visuales preconstruidos y personalizables para ayudar a los desarrolladores a crear aplicaciones web modernas y atractivas con facilidad. Basado en el diseño de Material de Google, React MUI ofrece una experiencia de usuario coherente y atractiva en todas las plataformas.
                </p>
            </TopicContainer>

            <TopicContainer id="ventajas" topic="Ventajas">
                <ul>
                    <li>Ahorro de tiempo: Al proporcionar una amplia gama de componentes preconstruidos, React MUI ayuda a los desarrolladores a construir rápidamente interfaces de usuario atractivas y coherentes sin tener que crear cada elemento desde cero. </li>
                    <li>Flexibilidad y personalización: React MUI es altamente personalizable, lo que permite a los desarrolladores adaptar fácilmente los componentes a sus necesidades específicas y mantener el aspecto coherente y atractivo. </li>
                    <li>Consistencia visual: Al estar basado en el diseño de Material de Google, React MUI ofrece una experiencia de usuario coherente (homogenea) y atractiva en todas las plataformas, lo que mejora la usabilidad y la satisfacción del usuario. </li>
                    <li>Comunidad activa: React MUI cuenta con una gran comunidad de desarrolladores activos y una amplia documentación, lo que facilita la solución de problemas y la obtención de soporte. </li>
                </ul>

            </TopicContainer>

            <TopicContainer id="install" topic="Instalación">

                <CodeBox lang="bash"> 
                    {
`# Instala la libreria:
npm install @mui/material @emotion/react @emotion/styled

# Instala los iconos de MUI
npm install @mui/icons-material`
                    }
                </CodeBox>

            </TopicContainer>

        </Information>

        </> 
    )
}

export default IntroduccionMUI