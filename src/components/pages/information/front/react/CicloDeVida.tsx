import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const CicloDeVida = () => {

    return (
        <Information subTopic={data.menu[0].array[5].array[7]}>

            <TopicContainer id="introduccion" topic="Ciclo de vida" docUrl="https://es.react.dev/learn/lifecycle-of-reactive-effects">
                <p>El ciclo de vida de los componentes es un concepto fundamental en React que describe el proceso de creación, actualización y destrucción de un componente.<br/> Cada componente de React pasa por una serie de etapas o fases durante su ciclo de vida, y en cada una de ellas se pueden ejecutar diferentes métodos que permiten controlar y modificar su comportamiento.</p> 
                <p>En general, el ciclo de vida de los componentes se divide en tres fases principales: montaje, actualización y desmontaje. Cada una de estas fases consta de diferentes métodos que se ejecutan en momentos específicos durante el ciclo de vida de un componente. Entender cómo funcionan estos métodos y cuándo se ejecutan es fundamental para construir aplicaciones de React eficientes, y escalables. Vamos a por un ejemplo.</p> 
                <ul>
                    <li><strong>Fase de montaje</strong>: Se invoca inmediatamente después de que el componente se inserta en el DOM. Es útil para ejecutar suscripciones o peticiones asíncronas a API's, bases de datos, servicios, etc.</li> 
                    <li><strong>Fase de actualización</strong>: Se ejecuta inmediatamente después de que la actualización del estado o las propiedades sucede.</li> 
                    <li><strong>Fase de desmontaje</strong>: Se ejecuta antes de destruir del DOM, es un método útil para hacer tareas de limpieza (aunque no todos los efectos secundarios requieren de esto). Eliminar eventos de escucha, etc.</li> 
                </ul> 
            </TopicContainer>

            <TopicContainer id="hook" topic="Ciclo de vida en componentes tipo Hook (useEffect)" ytUrl="https://www.youtube.com/watch?v=kPx2qgDS3ak&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=21&ab_channel=jonmircha">
                <CodeBox lang="jsx"> 
                    {
`import { useState, useEffect } from "react";

const MyUseEffect = () => {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    useEffect(() => {
        // console.log("Me ejecuto solo una vez. Fase de montaje [VACIO]");
        return () => {
           // Fase de desmontaje, tambièn limpia los efectos del renderizado anterior
           // antes de ejecutar los efectos del renderizado actual
           // console.log("cleanup useEffect []")
        }
    }, []); // Dependencia vacia, hace referencia a ejecutarse 1 sola vez (montaje)


    useEffect(() => {
        // console.log("Me ejecuto cada vez que se renderize el componente (Mala practica)");
        return () => {
          // console.log("cleanup useEffect no dependency");
        }
    })


    useEffect(() => {
        // console.log("Me ejecuto solo cuando cambie el estado de: [counter1]");
        return () => {
         // console.log("cleanup useEffect [counter1]");
        }
    }, [counter1]); // Las dependencias pueden ser propiedades o estados del componente


    useEffect(() => {
        // console.log("Me ejecuto solo cuando cambie el estado de: [counter2]");
        return () => {
          // console.log("cleanup useEffect [couter2]");
        }
    }, [counter2]); // Las dependencias pueden ser propiedades o estados del componente


    useEffect(() => {
        // console.log("Me ejecuto cuando se cambie el estado de: [counter1 &/O counter2]");
        return () => {
           // console.log("cleanup useEffect [counter1, couter2]");
        }
    }, [counter1, counter2]); // Las dependencias pueden ser propiedades o estados del componente
   
    
    return (
        <div>
            <h1>Ciclo de Vida (Hook Component - useEffect)</h1>
            <h2>Clicks c1: {counter1}</h2>
            <h2>Clicks c2: {counter2}</h2>

            <button onClick={() => setCounter1(counter1+1)}>
                Increment c1
            </button>
            <button onClick={() => setCounter2(counter2+1)}>
                Increment c2
            </button>
        </div>
    )
}

export default MyUseEffect`
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="clase" topic="Ciclo de vida en componentes tipo Clase" ytUrl="https://www.youtube.com/watch?v=EEx56EhqztY&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=18&ab_channel=jonmircha">
                <CodeBox lang="jsx"> 
                    {
`import React, { Component } from "react";

class Reloj extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    // console.log(3, "El componente ha sido eliminado del DOM");
  }
  
  render() {
    return <h3>{this.props.hora}</h3>
  }
}

export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    // console.log(0, "El componente se inicializa, aún NO está en el DOM");

    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };

    this.temporizador = null;
  }

  componentDidMount() {
   // console.log(1, "El componente ya se encuentra en el DOM");
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(2, "El estado o las props del componente han cambiado");
    // console.log(prevProps);
    // console.log(prevState);
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = () => {
    this.tictac();
    this.setState({
      visible: true,
    });
  };

  detener = () => {
    clearInterval(this.temporizador);
    this.setState({
      visible: false,
    });
  };

  render() {
    //console.log(4, "El componente se dibuja (o redibuja por algun cambio) en el DOM");
    return (
      <>
        <h2>Ciclo de Vida de los Componentes de Clase</h2>
        {this.state.visible && <Reloj hora={this.state.hora} />}
        <button onClick={this.iniciar}>iniciar</button>
        <button onClick={this.detener}>detener</button>
      </>
    );
  }
}`
                    }
                </CodeBox>
            </TopicContainer>

        </Information>
    )
}

export default CicloDeVida