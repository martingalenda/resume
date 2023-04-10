import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Selectores = () => {

    return (
        <Information subTopic={data.menu[0].array[1].array[1].subTopic}>

            <TopicContainer topic="Selectores" id="tipos" docUrl="https://www.w3schools.com/cssref/css_selectors.asp" ytUrl="https://youtu.be/OWKXEJN67FE?t=1228">
                <p>
                Existen diversas formas de seleccionar elementos html, y cada una de ellas posee un nivel de prioridad:
                </p>

                <CodeBox lang="css"> 
                {
`    /* El punto 1 y 2 no corresponden a selectores, pero afectan también en los estilos */ 
    1. !important
    2. Estilos en linea

    -------------------
    
    /* Selectores */ 
    3. *
    4. #id
    5. .class
    6. :pseudo-class ... :hover :focus :visited :active :valid :first-child :nth-child(2) :last-child :target
    7. [atributos]
    8. Elementos ... h1 p button input, etc
    9. ::pseudo-elements ... ::after ::before ::placeholder ::first-letter ::selection`
                }
                </CodeBox>
                <ol>
                    <li><strong>!important</strong> = Se escribe a la derecha del valor de la propiedad. Ignora el orden de prioridad jerarquico, <em> NO RECOMENDABLE UTILIZARLO</em> ya que al romper la jerarquia de estilos, y luego se dificulta el rastreo de los estilos, ergo, no fomenta en lo absoluto la escalabilidad.</li> 
                    <li><strong>Estilos en linea</strong> = Estilos colocados sobre el propio archivo html, <em> NO RECOMENDABLE</em>, ya que fomenta el desorden.</li> 
                    <li><strong>*</strong> = Aplica a TODOS los elementos.</li> 
                    <li><strong>#id</strong> = Identificador único, aplicable a un solo elemento html. Es decir, su valor no debe repetirse nunca.</li> 
                    <li><strong>{`.class`}</strong> = Clases que pueden ser utilizadas en distintos elementos html a la vez.</li> 
                    <li><strong>:pseudo-class</strong> = </li> 
                    <ul>
                        <li>:hover = Se activa cuando el usuario pasa el cursor del ratón sobre un elemento.</li>
                        <li>:focus = Se activa cuando el elemento recibe el enfoque.</li>
                        <li>:visited = Se activa cuando un enlace ha sido visitado.</li>
                        <li>:active = Se activa cuando el usuario hace clic en un elemento.</li>
                        <li>:first-child = Primer hijo del contenedor</li>
                        <li>:last-child = Último hijo del contenedor</li>
                        <li>:nth-child(2) = Seleccionamos al segundo hijo del contenedor</li>
                    </ul>
                    <li><strong>[atributos]</strong> = https://lenguajecss.com/css/selectores/atributos/ </li> 
                    <li><strong>Elementos</strong> = Refiere a la seleccion de nodos html por los nombres de sus etiquetas.</li> 
                    <li><strong>::pseudo-elements</strong> = </li> 
                    <ul>
                        <li>::after & ::before = Inserta contenido antes, o despues del contenido del elemento seleccionado.</li>
                        <li>::placeholder = Refiere al texto que aparece en un input antes de que el usuario escriba algo sobre este.</li>
                        <li>::selection = Refiere al sombreado del texto que seleccionemos</li>
                    </ul>
                </ol>
            </TopicContainer>
            <TopicContainer topic="Ejemplos de selección combinados" id="combinados">
                <p>
                A la hora de seleccionar un elemento, podemos utilizar distintas combinaciones con los selectores, para ser bien especificos. Veamos ejemplos:
                </p>

                <CodeBox lang="css"> 
                {
`/* Afecta a los elementos que posean la clase (item1) & (item2)  */
.item1,
.item2 {
    background-color: red;
}

/* Todas las clases (hijo) que pertenezcan a una clase (padre) se veran afectadas | COMBINADOR DESCENDIENTE | */
.padre .hijo {
    color: red;
}

/* Cuando se haga hover sobre la clase (item1), afectara al elemento (A) | (>) SOLO APLICA EN HIJOS DIRECTOS | */
.item1:hover>a {
    color: red;
}

/* Todos los parrafos (P) que contengan la clase (parrafo). */
p.parrafo {
    color: red;
}

/* Selecciona la primer letra, del primer hijo del elemento (P) */
p:first-child::first-letter {
    font-size: 40px;
}

/* Selecciona a todos los hermanos de (item1) que posean la clase (hermano) */
.item1 ~ .hermano {
    color: red;
}

/* Selecciona solo al primer hermano adyacente de (item1) | 5-Selecciona (6) | 7-Selecciona (8) */
.item1 + * {
    color: red;
}

/* Selecciona a los elementos que contengan el valor (Ingrese ...) correspondiente al atributo (placeholder) */
[placeholder = "Ingrese su nombre"] {
    background-color: beige;
}`
                }
                </CodeBox>
            </TopicContainer>
        </Information>
    )
}

export default Selectores