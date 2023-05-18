import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const EstadosGlobales = () => {

    return (
        <Information subTopic={data.menu[0].array[5].array[13]}>

            <TopicContainer id="intro" topic="Estados globales">
                <p>.</p> 
            </TopicContainer>

            <TopicContainer id="context" topic="useContext">
                <p>.</p> 
                <CodeBox lang="jsx"> 
                    {
`// Context API en React 
import { useState, createContext } from 'react';
 
// 1) CREAMOS EL CONTEXTO gracias al método createContext
const CountContext = createContext(); 

// 2) CREAMOS EL PROVIDER 
// Los provedores siempre reciben como parametro sus hijos {children}
const CountProvider = ({children}) => {

    // A) DECLARAMOS VARIABLES Y FUNCIONES (EL ESTADO GLOBAL)
    let [num, setNum] = useState(0) 

    const incrementarNum = (incremento) => {
        setNum(num = num + incremento)
    }
    const decrementarNum = () => {
        setNum(num = num - 1)
    }
    const resetNum = () => {
        setNum(num = 0)
    }

    // B) El objeto data es quien contendrá todos los valores que necesitemos compartir como ESTADO GLOBAL
    const data = {num, incrementarNum, decrementarNum, resetNum} 

    // C) Retornamos el proveedor del contexto creado como componente, englobando a {children} y recibiendo el objeto con el estado global (data)
    return (
        <CountContext.Provider value={data}>
            {children}
        </CountContext.Provider>
    )
}

// EXPORTAMOS EL CONTEXTO POR DEFAULT Y EL PROVEDOR DESTRUCTURADO
// Es el provedor, el objeto que debe englobar a los componentes con los que compartirá su estado
export { CountProvider } 
// Es el contexto, el objeto que poseera los valores destructurados para compartir con el componente en donde se importe, usando useContext(context)
export default CountContext 

// Importamos los componentes que utilizaran ese contexto
import ApplyContext from './ApplyContext'; 
import ApplyContextTest from './ApplyContextTest';


const UseContext = () => {
    return (
        <>
            <CountProvider>
                <ApplyContext />
                <ApplyContextTest />
            </CountProvider>
        </>
    )
}
 
export default UseContext`
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="reducers" topic="useReducers">
                <p>.</p> 
                <CodeBox lang="jsx"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="redux" topic="Redux">
                <p>.</p> 
                <CodeBox lang="jsx"> 
                    {
``
                    }
                </CodeBox>
            </TopicContainer>

        </Information>
    )
}

export default EstadosGlobales