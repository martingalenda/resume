import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Portals = () => {

    return (
        <Information>

            <TopicContainer topic="Portals" docUrl="https://es.react.dev/reference/react-dom/createPortal" ytUrl="https://www.youtube.com/watch?v=nRWk8pAN74c&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=56">
                <p> Los portales son una característica de React que permiten renderizar componentes en un nodo DOM (fuera del árbol principal de componentes de la aplicación). Esto significa que los portales pueden ser utilizados para crear elementos que flotan sobre la página, sin afectar el estilo o el comportamiento de los componentes principales.
                <br/>
                <br/>
                La utilidad de los portales en React es amplia, desde crear modales y ventanas emergentes, hasta renderizar elementos en una posición específica en la página o permitir la interacción con elementos fuera del árbol principal de componentes. En esencia, los portales permiten una mayor flexibilidad y control sobre la estructura del DOM, sin sacrificar la legibilidad del código y la capacidad de mantener el estado de la aplicación.</p> 
                <CodeBox lang="jsx"> 
                    {
`import ReactDOM from 'react-dom'

const Portals = () => {
    return ReactDOM.createPortal(
        <div className="portal">
            <h1>Portals</h1>
        </div>,document.getElementById("portal")
    )
}

export default Portals`
                    }
                </CodeBox>
            </TopicContainer>

        </Information>
    )
}

export default Portals 