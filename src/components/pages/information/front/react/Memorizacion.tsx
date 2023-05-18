import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Memorizacion = () => {

    return (
        <Information subTopic={data.menu[0].array[5].array[11]}>

            <TopicContainer id="tecnicas" topic="Técnicas de memorización">
                <p>Cuando se trabaja con React, es común encontrarse con la necesidad de memorizar y recordar información importante, como ser: nombres de variables, funciones, componentes, etc. Existen diversas técnicas de memorización que pueden ayudar a mejorar la retención de información, y a aumentar el rendimiento y la productividad de nuestras aplicaciones. Veremos las técnicas más utilizadas a continuación:</p> 
            </TopicContainer>

            <TopicContainer id="memo" topic="MEMO" docUrl="https://es.react.dev/reference/react/memo" ytUrl="https://www.youtube.com/watch?v=d8MaIRB8HfQ&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=77&ab_channel=jonmircha">
                <p>Por defecto, los componentes hijos se renderizan si sus padres han sufrido cambios (props o estados), sin embargo, puede que ningún cambio haya sucedido realmente dentro de ellos (es decir, no han recibido props nuevas, ni han mutado su propio estado). En componentes livianos, esto no es problema, sin embargo, en componentes que utilizan gran poder de computo para renderizarse, si, y por lo tanto, deberíamos tener que optimizarlo, para ello esta ReactMemo.</p> 
                <p>Memo se encarga de memorizar un componente por completo, para reutilizarlo luego en lugar de tener que renderizarlo. En resumen, gracias a Memo, React rendizará nuevamente el componente hijo, SOLO cuando este realmente sufra cambios en sus props o estado. Luego de esto (tras cada renderizado), lo volverá a memorizar.</p> 
                <p>En la medida de lo posible hay que evitar usarlo, o mejor dicho tener mucha cautela, pues podría ser más costosa la tarea de memorización que la del re-renderizado mismo del componente. Deberíamos utilizarlo cuando:</p> 
                <ul>
                    <li>Tenemos muchos elementos renderizados en una lista.</li> 
                    <li>Llamamos datos de APIs.</li> 
                    <li>Un componente se vuelve muy pesado.</li> 
                    <li>Salen alertas de rendimiento en la consola.</li> 
                </ul> 
                <CodeBox lang="jsx"> 
                    {
`import { memo } from "react" 

const HijoMemo = () => {
    console.log("Hijo memo renderizado")
    return (
        <h2>Hijo memo</h2>
    )
}

export default memo(HijoMemo)


// Componente padre
import { useState } from "react"
import HijoMemo from "./HijoMemo"

const Memo = () => {

    const [contador, setContador] = useState(0)

    return (
        <>
            <h1>MEMO</h1>
            <h2>Contador</h2>
            <span>{contador}</span>
            <br/>
            <button onClick={()=> {setContador(contador + 1)}}>+</button>
            <button onClick={()=> {setContador(contador - 1)}}>-</button>
            <br/>
            <HijoMemo/>
        </>
    ) 
}

export default Memo`
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="usememo" topic="useMemo" docUrl="https://es.react.dev/reference/react/useMemo" ytUrl="https://www.youtube.com/watch?v=Udpom1ZYr0I&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=79&ab_channel=jonmircha">
                <p>useMemo es otra técnica de memorización. Este sirve para almacenar valores computados. Es útil para almacenar resultados de funciones muy costosas a nivel computo, o lentas, como peticionesAPI complejas. Al igual que el useCallback, su segundo parametro es un array de dependencias. (Aunque en este ejemplo no esta aplicado). El valor memorizado se volverá a calcular solo cuando una dependencia haya cambiado.</p> 
                <CodeBox lang="jsx"> 
                    {
`import {useState, useMemo} from 'react';

const UseMemo = () => {
    
    const [contador, setContador] = useState(0)

    // Test sin useMemo
        // let superNumber = 0
        // for(let i = 0; i < 2000000000; i++) {
        //     superNumber = i
        // }

    // Usando useMemo para almacenar el valor computo almacenado y retornado en (number)
        const superNumber = useMemo(() => {
            let number = 0
            for(let i = 0; i < 1000000000; i++) {
                number = i
            }
            return number
        },[])

    return (
        <>
            <h1>UseMemo</h1>
            <span>Super Número: {superNumber}</span>
            <br/>
            <span>Contador: {contador}</span>
            <br/>
            <button onClick={()=> {setContador(contador + 1)}}>+</button>
            <button onClick={()=> {setContador(contador - 1)}}>-</button>
            <br/>
        </>
    )
}

export default UseMemo`
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="callback" topic="useCallback" docUrl="https://es.react.dev/reference/react/useCallback" ytUrl="https://www.youtube.com/watch?v=78GQ3tUQzXo&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=78&ab_channel=jonmircha">
                <p>useCallback es otra técnica de memorización, aunque esta sirve para almacenar funciones puras.<br/> 
                En el siguiente ejemplo estamos combinando ReactMemo con useCallback.</p> 
                <CodeBox lang="jsx"> 
                    {
`import {memo} from 'react'

const HijoCallback = ({numero, sumar, restar}) => {
    console.log("Hijo de callback renderizado")
    return (
        <>
            <h1>HijoCallback</h1>
            <span>{numero}</span>
            <br/>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <br/>
        </>
    )
}

export default memo(HijoCallback)


import { useState, useCallback } from "react"
import HijoCallback from "./HijoCallback"

const UseCallback = () => {
    
    // console.log("padre renderizado")
    const [contador, setContador] = useState(0)
    const [input, setInput] = useState(" ")

    // Primer parametro la función a memorizar, segundo parametro, las dependencias.
    // useCallback(() => {callback()}, [dependencias]) 
        const sumar = useCallback(() => {setContador(contador + 1)}, [contador])
        const restar = useCallback(() => {setContador(contador - 1)}, [contador])

    // Test sin callback:
        // const restar = () => {setContador(contador - 1)}
        // const sumar = () => {setContador(contador + 1)}

    const handleInput = (e) => setInput(e.target.value)

    return (
        <>
            <h1>UseCallback</h1>
            <h2>Contador</h2>
            <span>{contador}</span>
            <br/>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <br/>
            <span>Input (value en estado) </span>
            <input type="text" onChange={handleInput} value={input}></input>
            <br/>
            <hr/>
            <HijoCallback numero={contador} sumar={sumar} restar={restar} />
            <br/>
        </>
    ) 
}

export default UseCallback`
                    }
                </CodeBox>
                <p>Clarifiquemos la situación.</p>
                <ul>
                    <li>Al enviarle propiedades al componente hijo (hijoCallback), entendemos gracias a la explicación anterior de react memo, que el hijo (memorizado) solo pasará a renderizarse tras cada mutación de dichas propiedades, o de su propio estado.</li>
                    <li>El problema es que, al renderizarse el componente padre, por mutaciones de su estado o propiedades, las funciones que estamos pasandole al hijo como propiedades, también vuelven a renderizarse, por ende terminan haciendo que el componente hijo se renderize. Para controlar eso es que llega useCallback.</li>
                    <li>Si englobamos las funciones enviadas como props al componente hijo dentro de este método (useCallback) la almacenaremos, y evitaremos que se renderizen cuando el componente (padre) que las contiene lo haga, gracias a esto, evitaremos también que se renderize el componente hijo, hasta en tanto y en cuanto, sus props no muten.</li>
                    <li>useCallback recibe como segundo para metro un array de dependencias, esto quiere decir que las funciones se volveran a renderizar solo cuando detecten un cambio en sus dependencias (como el useEffect por ejemplo).</li>
                </ul>
            </TopicContainer>

        </Information>
    )
}

export default Memorizacion