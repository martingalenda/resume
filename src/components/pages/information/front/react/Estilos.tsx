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
`import styled, {css, keyframes, ThemeProvider, createGlobalStyle} from 'styled-components';

let mainColor = "#db7093"

const Button = (props) => {

  // Animación
  const fadeIn = keyframes\`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1
    }
  \`

  // Provider
  const light = {
    bgColor: #000;
  }
  const dark = {
    bgColor: #fff;
  }

  // Estilos
  const StyledButton = styled.button\`
    background-color: \${({theme}) => theme.bgColor};
    color: \${ ({color}) => color || #f2f2f2 };
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    animation: \${fadeIn} 2s ease-out;
    &:hover {
      background-color: \${maincolor};
    }
    &:active {
      background-color: #3e8e41;
      transform: translateY(1px);
    }
    \${(props) => props.isButton && css\`
      margin: auto;
      padding: 1.5em;
      cursor: pointer;
    \`}

  // Heredando las propiedades de StyledButton
  const CustomButton = styled(StyledButton)\`
      border-radius: 1rem;
  \`

  const GlobalStyle = createGlobalStyle\`
    h2 {
      padding: 2rem;
      background-color: #fff;
      color: #61dafb;
      text-transform: uppercase;
    }
  \`
\`

  return (
    <GlobalStyle />
    <ThemeProvider theme={dark}>

      <h2> Título </h2>

      <StyledButton color="red" isButton onClick={props.handleClick}>
        {props.children}
      </StyledButton>

      <CustomButton color="green" isButton onClick={props.handleClick}>
        {props.children}
      </CustomButton>

    </ThemeProvider>
  );
}

export default Button`
                    }
                </CodeBox>
                <h4>En cuanto al ejemplo anterior, hemos visto que:</h4> 
                <ul>
                  <li>Podemos trabajar facilmente los estilos css con todo el poder de JS, incluyendo animaciones, pseudoclases/elementos, etc.</li> 
                  <li>Los nombres de los componentes estilizados pasan a ser personalizados, y estan vinculados con el nombre del estilo en cuestión.</li> 
                  <li>Los componentes estilizados pueden heredar las propiedades y valores de estilos de otros componentes previamente definidos.</li> 
                  <li>Los componentes estilizados pueden enviar propiedades para definir sus estilos.</li> 
                  <li>Podemos crear uno, o más provedores de estilos para compartir estilos con varios componentes estilizados y elementos JSX.</li> 
                  <li>Podemos crear estilos globales con el modulo createGlobalStyle.</li> 
                </ul> 
            </TopicContainer>
            <br/> 
            <p>Existen muchísimas otras formas de gestionar los estilos en una App de React. La librería es compatible con frameworks como MUI, Boostrap, Tailwind, y muchos otros!</p> 
        </Information>
    )
}

export default Estilos