import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"
import data from "../../../../data/data"

const Eventos = () => {

    return (
        <Information subTopic={data.menu[0].array[5].array[6]}>

            <TopicContainer id="intro" topic="Eventos en React"  docUrl="https://es.reactjs.org/docs/events.html">
                <p>En React los eventos se dividen en dos categorías principales: eventos sintéticos y eventos nativos. Los eventos sintéticos son eventos personalizados creados por React para manejar el comportamiento de los componentes, mientras que los eventos nativos son eventos predefinidos/proporcionados por el navegador. En este sentido, React ofrece una gran variedad de eventos que pueden ser utilizados para manejar diversas interacciones de usuario.</p> 
                <ul>
                    <li>A diferencia de Html, en JSX los nombre de los eventos se escriben en camelCase, y todo junto.</li> 
                </ul> 
            </TopicContainer> 
                <TopicContainer id="hooks" topic="Eventos en componentes tipo Hook" ytUrl="https://www.youtube.com/watch?v=vEmTI-LFhT4&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=16&ab_channel=jonmircha">
                <br/> 
                <h4>Eventos sintéticos y nativos</h4> 
                <CodeBox lang="jsx"> 
                    {
`import {useState} from 'react';

export const Events = () => {
                            
    let [contador, setContador] = useState(0); // Estado
    
    let sumar = (e) => {
        setContador(contador += 1);
        console.log(e) // Por defecto accedemos a los eventos sintéticos de React
        // console.log(e.nativeEvent) // Y de esta forma accedemos a los eventos nativos de js
        // console.log(e.nativeEvent.target)
    }
    
    return (
        <>
            <h1>Eventos (Hook Component)</h1>
            <h2>El contador se encuentra en: {contador}</h2>
            <button onClick={(e) => sumar(e)}>Sumar</button>
            <hr/>
            <EventPersonalizado/>
        </>
    )
}`
                    }
                </CodeBox>
                <br/> 
                <h4>Evento personalizado</h4> 
                <p>Supongamos que tenemos un boton personalizado, el cual es en si mismo un componente. Si colocaramos el atributo onClick por ejemplo, esté no tendría el efecto esperado. Para lograr ejecutar el evento de forma correcta en un componente, necesitaremos crear un evento personalizado, que no es otra cosa más que el paso de una función, como valor de un atributo personalizado, veamos un ejemplo:</p> 
                <CodeBox lang="jsx"> 
                    {
`const Boton = ({ myOnClick }) => ( // COMPONENTE Boton
    <button onClick={myOnClick}>Saluda por consola</button>
)

const saludar = (name) => { // Funcion que más abajo enviaremos como prop
    console.log(\`Hola \${name}\`)
}

export const EventPersonalizado = () => { // Componente que llama al componente Boton
    return (
        <>
            <h1>Evento Personalizado (Hook Component)</h1>
            <Boton myOnClick={() => saludar("Martin")} />
        </>
    )
}`
                    }
                </CodeBox>
            </TopicContainer>


            <TopicContainer id="class" topic="Eventos en componentes tipo clase" ytUrl="https://www.youtube.com/watch?v=l6dC6UgHzHw&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=14&ab_channel=jonmircha">
            <br/> 
                <h4>Eventos en ES6 (binding)</h4> 
                <CodeBox lang="jsx"> 
                    {
`import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    console.log("Sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar(e) {
    console.log("Restar");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}`
                    }
                </CodeBox>
                <br/> 
                <h4>Evento en ES7</h4> 
                <CodeBox lang="jsx"> 
                    {
`export class EventosES7 extends Component {
    // No es necesario definir CONSTRUCTOR
    // No es necesario el THIS.state
    state = {
      contador: 0,
    };
  
    // No es necesario bindear
  
    // Los eventos (METODOS) pasan a ser Arrow  functions
    // Estan heredando el this automaticamente por ello no son creadas como variables
    sumar = (e) => {
        console.log("Sumando");
        console.log(this);
        this.setState({
            contador: this.state.contador + 1,
      });
    };
  
    restar = (e) => {
      console.log("Restar");
      console.log(this);
      this.setState({
        contador: this.state.contador - 1,
      });
    };
  
    render() {
      return (
        <div>
          <h2>Eventos en Componentes de Clase ES7</h2>
          <nav>
            <button onClick={this.sumar}>+</button>
            <button onClick={this.restar}>-</button>
          </nav>
          <h3>{this.state.contador}</h3>
        </div>
      );
    }
}`
                    }
                </CodeBox>
            </TopicContainer>

        </Information>
    )
}

export default Eventos