import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Estilos = () => {

    return (
        <Information subTopic={data.menu[0].array[5].array[5]}>

            <TopicContainer id="css" topic="Estilos con CSS" ytUrl="https://www.youtube.com/watch?v=YOJm6ZWRdSs&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=28">
                <p>Importa la hoja de estilos, y utiliza el atributo className (en lugar de class) para asignar una clase al elemento. Luego define tu archivo de estilos css como siempre.</p> 
                <CodeBox lang="jsx"> 
                    {
`import './styles.css';

const MyComponent = () => {
    return (
      <section className="section-home">
            Lorem
      </section>
    );
}
  
export default MyComponent;`
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="scss" topic="Estilos con SCSS">
                <p>Para instalar la librería de scss en React ejecuta en la raiz de tu proyecto: " npm install --save-dev node-sass "</p> 
                <CodeBox lang="jsx"> 
                    {
`import './Styles.scss';

const App = () => {
    return (
      <section className="section-home">
            Lorem
      </section>
    );
}
  
export default App;`
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="inline" topic="Estilos en línea">
                <CodeBox lang="jsx"> 
                    {
`const Title = () => {
    const titleStyle = {
      fontSize: '2em',
      fontWeight: 'bold',
    };
  
    return (
      <h1 style={titleStyle}>
        {props.text}
      </h1>
    );
}
  
export default Title;`
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="styled_comp" topic="Styled Components" docUrl="https://styled-components.com/" ytUrl="https://www.youtube.com/watch?v=OyoAHI80gGU&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=29&t=2132s">
                <p>Para instalar esta librería en React ejecuta en la raiz de tu proyecto: " npm install styled-components "</p> 
                <CodeBox lang="jsx"> 
                    {
`import styled from 'styled-components';

const StyledButton = styled.button\`
  background-color: #4CAF50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }

  &:active {
    background-color: #3e8e41;
    transform: translateY(1px);
  }
\`

const Button = (props) => {
  return (
    <StyledButton onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
}

export default Button`
                    }
                </CodeBox>
            </TopicContainer>

            <p>Existen muchísimas otras formas de gestionar los estilos en una App de React. La librería es compatible con frameworks como MUI, Boostrap, Tailwind, y muchos otros!</p> 
        </Information>
    )
}

export default Estilos