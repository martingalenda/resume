import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const PropiedadesReact = () => {

    return (
        <Information subTopic={data.menu[0].array[5].array[2]}>

            <TopicContainer id="introduccion" topic="Propiedades" docUrl="https://es.react.dev/learn/passing-props-to-a-component" ytUrl="https://www.youtube.com/watch?v=FOWO07pImCg&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=9&ab_channel=jonmircha">
                <ul>
                    <li>Las propiedades son la forma más sencilla que tienen los componentes padres para comunicarse (enviar información) con sus componetes hijos.</li> 
                    <li>Las props pueden ser strings, numbers, booleans, arrays, objects, functions, react element, react componentes.</li> 
                    <li>Las props son INMUTABLES, es decir son valores de SOLO LECTURA, y NO se pueden modificar.</li> 
                    <li>Las propiedades se envían como atributos en los componentes, y se recibén como parametros de una función (en el componente hijo).</li> 
                </ul> 
            </TopicContainer>

            <TopicContainer id="hook" topic="Propiedades en componentes tipo hook">
                <CodeBox lang="jsx"> 
                    {
`// El componente envía la propiedad al componente hijo como atributo
const componentePadre = () => {
    return (
        <componenteHijo name="Soledad">
    )
}

// El componente hijo recibe la propiedad y la muestra en la interfaz 
const componenteHijo = (props) => {
    return (
        <>
            <p>La propiedad recibida fue: {props.name}</p>
        </>
    )
}`
                    }
                </CodeBox>
                
                <p>También tenemos la posibilidad de destructurar las propiedades envolviendolas entre {`{}`} , lo que resulta en un código más limpio. </p> 

                <CodeBox lang="jsx"> 
                    {
`const componentePadre = () => {
    return (
        <componenteHijo name="Soledad">
    )
}

const componenteHijo = ({name}) => {
    return (
        <>
            <p>La propiedad recibida fue: {name}</p>
        </>
    )
}`
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="clase" topic="Propiedades en componentes tipo clase" ytUrl="https://www.youtube.com/watch?v=FOWO07pImCg&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=9&ab_channel=jonmircha">
                <CodeBox lang="jsx"> 
                    {
`class ClassComponents extends Component {
/* Todos los componentes de tipo clase poseen un constructor por donde reciben las props. */
    constructor(props) {
        super()
    }

    render() {

        return(
            <div>
                {/* Así llamamos a la prop nombre */}
                <h2>Nombre: {this.props.nombre}</h2> 
            </div>
        );
    }
};

export default ClassComponents;`
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="children" topic="Propiedad children" ytUrl="https://www.youtube.com/watch?v=2ZhZwTOTM48&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=53&pp=iAQB&ab_channel=jonmircha">
                <p>La prop "children" es utilizada para representar los elementos hijos de un componente. En resúmen, permite que reutilizemos un componente con distintos contenidos.</p> 
                <CodeBox lang="jsx"> 
                    {
`const HijoChildrenProp = ({children}) => {
    return (
        <div>
            <h2>Children Info</h2>
            {children} {/* Aquí se imprimirá el contenido interno recibido*/}
        </div>
    )
}

const ChildrenProp = () => {
    return (
        <>
            <h1>Children Prop</h1>

            <HijoChildrenProp>
                <p> Todo el contenido interno de este componente representa al children</p>
            </HijoChildrenProp>

            <HijoChildrenProp>
                <p> Esto nos permite llamar al mismo componente, enviandole un contenido interno distinto!</p>
            </HijoChildrenProp>
        </>
    )
}

export default ChildrenProp`
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="types" topic="PropTypes" docUrl="https://www.npmjs.com/package/prop-types">
                <p>En React, los propTypes son una forma de validar las props que se pasan a un componente y asegurarse de que tienen el tipo correcto. Se definen en una propiedad estática propTypes dentro del componente y se utiliza la biblioteca prop-types para especificar el tipo de cada prop. Para instalar la librería: " npm i prop-types "<br/>  Por ejemplo, si tenemos un componente que espera una prop llamada texto de tipo string, y se requiere si o sí, podemos definir los propTypes de la siguiente manera:</p> 
                <CodeBox lang="jsx"> 
                    {
`import PropTypes from 'prop-types';
                        
function MiComponente(props) {
  return <div>{props.texto}</div>;
}

MiComponente.propTypes = {
    texto: PropTypes.string.isRequired,
};`
                    }
                </CodeBox>
<p>En este ejemplo, PropTypes.string indica que la prop texto debe ser una cadena de texto, y isRequired indica que es obligatoria.<br/> El uso correcto de propTypes puede ayudar a evitar errores en tiempo de ejecución y mejorar la mantenibilidad del código.</p> 

            </TopicContainer>
        </Information>
    )
}

export default PropiedadesReact