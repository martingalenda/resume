import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Estados = () => {

    return (
        <Information subTopic={data.menu[0].array[5].array[3]}>

            <TopicContainer id="introduccion" topic="Estados" docUrl="https://es.react.dev/learn/state-a-components-memory" ytUrl="https://www.youtube.com/watch?v=8PaMmyK6vBM&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=11&ab_channel=jonmircha">
                <ul>
                    <li>El estado representa los valores dinámicos (variables) de un componente en un tiempo determinado.</li> 
                    <li>Al contrario de las props, el estado es mutable, ya sea por una acción del usuario, por peticiones a APIS, o cualquier otra lógica propia de la App.</li> 
                    <li>El estado no se puede modificar de forma directa, para cambiarlo hay que hacer uso del setState().</li> 
                    <li>El valor de los estados puede ser enviado como props a componentes hijos.</li> 
                    <li>Por eso es que el estado a menudo se le denomina local, o encapsulado. No es accesible desde otro componente excepto de aquel que lo posee y lo asigna.</li> 
                    <li>El estado es asíncrono.</li> 
                    <li>Ningún componente puede saber si un determinado componente tiene o no tiene estado, y no le debería importar si se define como una función, o una clase.</li> 
                </ul> 
            </TopicContainer>

            <TopicContainer id="hook" topic="Estado en componentes tipo hook ( useState )" ytUrl="https://www.youtube.com/watch?v=PKKhpVC9_qM&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=21&ab_channel=jonmircha">
                <CodeBox lang="jsx"> 
                    {
`import {useState} from 'react';

const StateComponents = (props) => {

    // const [propiedad, eventoModificador] =  useState(valorInicial);
    // El valor inicial puede ser nulo, string, numerico, variable, array, objeto, etc ...
    let [title, setTitle] = useState(" Apertura al beta ");
    let [array, setArray] = useState([1,2,3,4,5,6,7,8,9,10]); 
    let [array2] = useState([11,12,13,14,15]); 

    // Creamos los eventos del componente, con distintas funcionalidades
    const evento = (e, mnsj) => {
        console.log(e)
        setTitle(title = mnsj)
    }

    const evento2 = () => {
       let newArray = setArray(array = ["Pepe","12","13","14","15"]); // Esto estaría reemplazando el array
       return (
           newArray
       );
    }

    let arrayUnidos = [...array, ...array2] // "concateno" arrays

    return (
        <div>

            <h1>Estado de componentes (Hook Component - useState)</h1>
            <h2>Titulo: {title}</h2>
            <h3>Array: {array}</h3>

            <button onClick={(e) => { evento(e, "Soy un mensaje modificado")}}>
                Modifico titulo
            </button>
            <button onClick={evento2}> 
                Modifico array 
            </button>

            <h4>Sin acción del usuario...</h4>

            <p>Recorro e imprimo array: [valor/posicion]</p>

            {
               /* { Recorro el array devolviendo cada items en un <p> } */
               array.map((item, i) => <p key={i}> {item} - {i} </p>) 
            }

            <p>Imprimo arrays unidos:</p>
            {arrayUnidos}

            <h4>{props.titulo}</h4>

        </div>
    );
}


export default StateComponents;`
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="clase" topic="Estado en componentes tipo clase" ytUrl="https://www.youtube.com/watch?v=8PaMmyK6vBM&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=11&ab_channel=jonmircha">
                <CodeBox lang="jsx"> 
                    {
`import React, {Component} from "react"; 

class ClassComponents extends Component {
/* Todos los componentes tipo clase, poseen un constructor en donde se define su estado. */
    constructor(props) {
        super()
        this.state = {
            // El estado session corresponde a una prop llamada estado, que la recibe de su componente padre
            session: props.estado, 
            value: "Macanudo"
        }
        
        // En versiones antiguas de React (en donde solo toleran hasta ES6) hace falta el bindeo (dentro del constructor) de los métodos para su correcto funcionamiento
        // this.logOut = this.logOut.bind(this) // Bindeamos el valor de this de la función logout, al this de la clase constructora
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
                            {/* // Así se llama a las props */}
                            <h2>Nombre: {this.props.nombre}</h2> 
                            {/* // Así se llama al estado */}
                            <h2>Valor: {this.state.value}</h2> 
                            {/* // Al hacer click invocamos al metodo logout */}
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

export default Estados