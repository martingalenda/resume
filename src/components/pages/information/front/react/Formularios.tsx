import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Formularios = () => {

    return (
        <Information subTopic={data.menu[0].array[5].array[9]}>

            <TopicContainer id="nativos" topic="Formulario 'Nativo' - (Controlado)" ytUrl="https://www.youtube.com/watch?v=ECWR2ohHWKc&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=26">
                <p>Un formulario se considera "controlado" cuando el estado de React es el único origen de verdad para los valores de los elementos de entrada. En otras palabras, el valor de cada campo del formulario está vinculado a una propiedad de estado en el componente React y, por lo tanto, el componente controla y gestiona el valor del campo.</p> 
                <p>A continuación veremos una forma de como podemos trabajar los formularios de forma "nativa".</p> 

                <CodeBox lang="jsx"> 
                    {
`import { useState } from "react";

export default function Formularios() {

    const [form, setForm] = useState({nombre: " ", sabor: " ", lenguaje: " ", terminos: false});   
    // Corresponde a la data del formulario

    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };  

    const handleChecked = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.checked,
      });
    };  

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(form)
      alert("El formulario se ha enviado");
    };  

    return (
      <>
        <h1>Formularios:</h1>

        <form onSubmit={handleSubmit}>

    {/* CLASSIC TEXT */}
          <label htmlFor="nombre">Nombre:</label> 
          <input
            type="text"
            id="nombre" 
            autoFocus /* Focus automatico sobre el input */
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
          />

    {/* RADIO */}
          <p>Elige tu Sabor JS Favorito:</p>
          <input
            type="radio"
            id="vanilla"
            name="sabor"
            value="vanilla"
            onChange={handleChange}
            defaultChecked /* Establece el valor predeterminado */
          />
          <label htmlFor="vanilla">Vanilla</label>
          <input
            type="radio"
            id="react"
            name="sabor"
            value="react"
            onChange={handleChange}
          />
          <label htmlFor="react">React</label>
          <input
            type="radio"
            id="angular"
            name="sabor"
            value="angular"
            onChange={handleChange}
          />
          <label htmlFor="angular">Angular</label>
          <input
            type="radio"
            id="vue"
            name="sabor"
            value="vue"
            onChange={handleChange}
          />
          <label htmlFor="vue">Vue</label>
          <input
            type="radio"
            id="svelte"
            name="sabor"
            value="svelte"
            onChange={handleChange}
          />
          <label htmlFor="svelte">Svelte</label>

    {/* SELECT */}
          <p>Elige tu lenguaje de programación favorito</p>
          <select name="lenguaje" onChange={handleChange} defaultValue="">
            <option value="">- - -</option>
            <option value="js">JavaScript</option>
            <option value="php">PHP</option>
            <option value="py">Python</option>
            <option value="go">GO</option>
            <option value="rb">Ruby</option>
          </select>

    {/* CHECKBOX */}
          <br />
          <label htmlFor="terminos">Acepto términos y condiciones</label>
          <input
            type="checkbox"
            id="terminos"
            name="terminos"
            onChange={handleChecked}
          />
          <br />

    {/* SUBMIT*/}
          <input type="submit" />

        </form>
        
      </>
    );
}`
                    }
                </CodeBox>
                <small>La propiedad "for" del label, pasa a ser "htmlFor" en JSX</small> 
            </TopicContainer>
            <br/>
            <TopicContainer id="react_forms" topic="Librería - React Hook Form" docUrl="https://react-hook-form.com/" ytUrl="https://www.youtube.com/watch?v=wgutyeQTGDA">
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

export default Formularios