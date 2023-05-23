import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox" 
import { Alert } from "@mui/material"

const Componentes = () => {

    return (
        <Information subTopic={data.menu[0].array[5].array[1]}>
            <TopicContainer id="intro" topic="Componentes" docUrl="https://es.react.dev/learn/your-first-component">
                <p>Como vimos anteriormente, los componentes representan intereses en la interfaz de usuario, pueden representar desde la porción más pequeña, hasta el conjunto total de todas esas porciones. La gran ventaja de los componentes es que son reutilizables, lo que facilita la construcción, y el mantenimiento de la aplicación. Podríamos pensar en los componentes como un conjunto jerarquico de elementos HTML, que encapsulan la lógica, y el maquetado. En React, se invocan como si fueran etiquetas HTML personalizadas, y el componente raíz representa el ReactDOM (del cual hablaremos más adelante)</p> 
                <br/> 
                <h4>Tipos de componentes:</h4> 
                <ul>
                    <li>Tipo hook: Son la forma moderna de crear componentes, otorgan la posibilidad de trabajar con componentes de tipo función, generando un código más reducido/limpio/legible, y brindandonos todas las herramientas necesarias (ciclo de vida, estado, etc).</li> 
                    <li>Tipo function: En la antiguedad no existían los hooks, por lo que los componentes de tipo función solo podían recibir propiedades (se los llamaba componentes tontos), ya que no podían definir un constructor, y no tenían acceso a la API del ciclo de vida (cosa que siempre tuvieron los componentes de tipo clase).</li> 
                    <li>Tipo clase: Es un método anticuado (pero funcional) que se basa en clases (POO), es útil conocerlos si nos enfrentaremos a proyectos desactualizados.</li> 
                </ul> 
                <h4>Reglas:</h4> 
                <ul>
                    <li>Los componentes siempre deben retornar UNA sola expresión JSX (componente/elemento).</li> 
                    <li>Los nombres de los componentes deben iniciar siempre en mayúscula.</li> 
                    <li>Todos los componentes de React deben actuar como funciones puras con respecto a sus props.</li> 
                </ul> 
                <h4>Características importantes:</h4> 
                <ul>
                    <li>Conceptualmente los componentes son como las funciones JS, aceptan entradas llamadas ("props"), y retornan elementos JSX .</li> 
                    <li>Los componentes se renderizan cuando sucede un cambio en sus propiedades, o estados.</li> 
                    <li>Los componentes poseen un (ciclo de vida), que consta de 3 fases: fase de montaje, fase de ejecución, y fase de desmontaje.</li> 
                    <li>Existen diferentes formas en como se comunican los componentes (como se pasan información).</li> 
                    <ul>
                        <li>Padre a hijo: Como atributo, la forma más sencilla y la que veremos en los ejemplos posteriores.</li> 
                        <li>Hijo a padre: Como atributo con valor de función.</li> 
                        <li>Estado global: Gestionable con useContext, useReducer, Redux, Flux, etc.</li> 
                    </ul> 
                    <small>Veremos la mayoría de estas formas más adelante</small> 
                </ul> 
                <br/> 
                <Alert variant="outlined" severity="info">Los ejemplos que veremos a continuación son algo avanzados con respecto a lo que vimos hasta ahora, ya que manejan estados y propiedades (algo en lo que aún no hemos profundizado). Pero me parece interesante que puedan ir viendo un ejemplo de cada tipo de componente, antes de profundizar en que es el estado, y que son las propiedades (lo que veremos en los siguientes dos tópicos).</Alert>
                <br/> 
            </TopicContainer>
            <TopicContainer id="hook" topic="Componentes - Hook" ytUrl="https://www.youtube.com/watch?v=2NDLa2pNoh0&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=19&ab_channel=jonmircha">
                <CodeBox lang="jsx"> 
                    {
`import {useState} from 'react'

const HookComponent = ({apodo}) => {

    let [user, setUser] = useState("Bepi")

    const setData = (e) => {
        setUser("Sismo")
    }

    return (
        <>
            <h1> Componente Tipo: Hook </h1>
            <p> Usuario: {user} </p>
            <h2 onClick={(e)=> setData(e)}> Apodo: {apodo} </h2>
        </>

    )
} 

export default HookComponent; `
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="funcion" topic="Componentes - Function ( Sin hooks - 'componentes tontos' )">
                <CodeBox lang="jsx"> 
                    {
`function FunctionComponent(props) {
    return (
        <>
            <h1> Componente Tipo: Función </h1>
            <h2> Edad: {props.edad} </h2>
        </>
    );
}

export default FunctionComponent; `
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="clase" topic="Componentes - Class"  ytUrl="https://www.youtube.com/watch?v=SQbZ9dThB80&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=8&ab_channel=jonmircha">
                <CodeBox lang="jsx"> 
                    {
`// VERSIÓN ES6 & ES7

class ClassComponents extends Component {
/* Todos los componentes de tipo clase poseen un constructor por donde
   reciben las props, y en donde se define su estado. */
    constructor(props) {
        super()
        this.state = {
            // El estado session corresponde a una prop llamada estado, que la recibe de su componente padre
            session: props.estado, 
            value: "Macanudo"
        }
        
        // En versiones antiguas de React (en donde solo toleran hasta ES6) hace falta el bindeo (dentro del constructor) de los métodos para su correcto funcionamiento
     // Bindeamos el valor de this de la función logout, al this de la clase constructora
            // this.logOut = this.logOut.bind(this) 
    }

    // Método en versión ES6
        // logOut(e) {
        //     console.log(e) // Imprimimos el evento en cuestión
        //     this.setState({
        //         session: false
        //     })
        // }

    // Actualización de estado en ES7 (sin bindeo gracias a las arrow fn)
        logOut = (e) => {
            console.log(e) // Imprimimos el evento en cuestión
            this.setState({
                session: false
            })
        }
 
    render() {

        return(
            <div>

                {/* Si el atributo session del estado se encuentra en true, imprimo una cosa, sino ( : ), otra */}
                
                { this.state.session === true ? 
                    (
                        <React.Fragment>
                            <h1>Componente Tipo: Clase - Usuario logeado</h1>
                            {/* Así se llama a las props */}
                            <h2>Nombre: {this.props.nombre}</h2> 
                            {/* Así se llama al estado */}
                            <h2>Valor: {this.state.value}</h2> 
                            {/* Al hacer click invocamos al metodo logout */}
                            <button onClick={(e) => this.logOut(e)}> CERRAR SESIÓN </button> 
                        </React.Fragment>
                    ) 
                : 
                   ( 
                    <h1>Componente Tipo: Clase - Usuario deslogeado</h1>
                   ) 
                }
            
            </div>
        );
    }
};

export default ClassComponents;`
}
                </CodeBox>
            </TopicContainer>


        </Information>
    )
}

export default Componentes