import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Referencias = () => {

    return (
        <Information>

            <TopicContainer topic="Referencias - useRef & componentRef" docUrl="https://es.react.dev/learn/referencing-values-with-refs" ytUrl="https://www.youtube.com/watch?v=jAimlsxuhaY&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=25&ab_channel=jonmircha">
                <p>Las referencias son una característica importante en React que permite acceder a los elementos del DOM, y a los componentes creados dentro de la jerarquía. Las referencias proporcionan una forma de interactuar con los elementos del DOM fuera del flujo normal de datos y eventos, lo que puede ser útil en situaciones específicas. Esto quiere decir que, al contrario de las propiedades y el estado, los componentes no se renderizan cuando una referencia es modificada.
                <br/> <br/>
                Con las referencias, se puede acceder directamente a un elemento del DOM o a un componente desde cualquier lugar de la aplicación. Esto puede ser útil para realizar operaciones como obtener el valor de un campo de entrada, establecer el enfoque en un elemento, o realizar animaciones personalizadas en elementos específicos.
                <br/> <br/>
                Es importante tener en cuenta que las referencias en React deben usarse con precaución, ya que violan la abstracción de React al acceder directamente al DOM real. Si se abusa de las referencias, esto puede dificultar la detección de errores, y hacer que la aplicación sea más difícil de mantener. Veamos un ejemplo de como usarlas:</p> 
                <CodeBox lang="jsx"> 
                    {
`import { useRef } from "react"
import ComponentRef from "./ComponentRef"
import "../css/testRef.css"

const UseRef = () => {

    const miReferencia = useRef()
    const componentRef = useRef()

    // EJEMPLO BÁSICO DEL MANEJO DE REF (Declarados en el mismo componente que los utiliza)
    const cambiarColor = () => {
       // console.log(miReferencia) // Devuelve un objeto con la prop current...
       // console.log(miReferencia.current) // Es la etiqueta/bloque referenciada
       // miReferencia.current.classList.add("yellowBg") // Asignamos la clase yellowBg al elemento referenciado
        miReferencia.current.style.color = "yellow" // Le agregamos el estilo al elemento referenciado
    }

    // EJEMPLO DE REFS COMO PROPS DE UN COMPONENT (PASAMOS LA REFERENCIA AL HIJO)
    // referencia.current = current refiere al elemento/nodo del DOM referenciado
    const mostrar = () => {
        componentRef.current.style.display = (componentRef.current.style.display === "none") ? "block" : "none" 
        // Le agregamos el estilo al elemento referenciado
    }

    return ( 
        <>
            <h1> useRef - Referencias declaradas en este mismo componente </h1>
            <p ref={miReferencia}> Soy un parrafo que posee una referencia asignada con useRef </p>
            <button onClick={() => cambiarColor()}> Cambiar color </button>

            <h1> useRef - Referencia pasadas al componente hijo </h1>
            <button onClick={() => mostrar()}> Mostrar </button>
            <ComponentRef ref={componentRef}/>
        </>
    )
}

export default UseRef`
                    }
                </CodeBox>
            </TopicContainer>

        </Information>
    )
}

export default Referencias