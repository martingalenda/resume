import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const ExpresionesRegulares = () => {
 
    return (
        <Information subTopic={data.menu[0].array[3].array[24].subTopic}>
            <TopicContainer id="banderas" topic="Banderas" docUrl="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions" ytUrl="https://youtu.be/wfogZfIS03U">
            <p>Refiere a una secuencia de caracteres que forma un patrón de búsqueda, principalmente utilizado para la búsqueda de patrones en cadenas de caracteres/texto.</p> 
            <p>Para testeo rapido de las expresiones. Una herramienta online: <a href="https://regexr.com/" target="_blank"> https://regexr.com/ </a></p> 
                <CodeBox lang="javascript"> 
                    {
`let cadena = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga cupiditate.";

// Ejemplo de expresión regular 1:
let expReg = new RegExp("lorem", "ig");

// Ejemplo de expresión regular 2:
let expReg2 = /Lorem/ig;

console.log(expReg2.test(cadena)); // Devuelve un valor booleano
console.log(expReg2.exec(cadena)); // Devuelve un objeto con la información del resultado


// ! Banderas

/*
    g = Búsqueda global
    i = Ignora (no distingue) las mayusculas y minusculas
    m = Búsqueda multilínea
    s = Permite que el . coincida con caracteres de nueva línea
*/`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="caracteres_especiales" topic="Caracteres especiales">
                <p></p> 
                <CodeBox lang="javascript"> 
                    {
`// ! Caracteres especiales

/*  
Coincidencias Basicas:
    .   - Cualquier Caracter, excepto nueva linea
    \d  - Cualquier Digitos (0-9)
    \D  - No es un Digito (0-9)
    \w  - Caracter de Palabra (a-z, A-Z, 0-9, _)
    \W  - No es un Caracter de Palabra (a-z, A-Z, 0-9, _).
    \s  - Espacios de cualquier tipo. (espacio, tab, nueva linea)
    \S  - No es un Espacio, Tab o nueva linea.

Limites:
    \b  - Limite de Palabra
    \B  - No es un Limite de Palabra
    ^   - Inicio de una cadena de texto
    $   - Final de una cadena de texto

Cuantificadores:
    *       - 0 o Más
    +       - 1 o Más
    ?       - 0 o Uno
    {3}     - Numero Exacto
    {3,4}   - Rango de Numeros (Minimo, Maximo)

Conjuntos de Caracteres:
    []      - Caracteres dentro de los brackets
    [^ ]    - Caracteres que NO ESTAN dentro de los brackets

Grupos:
    ( ) - Grupo
    |   - Uno u otro 
*/`
                    }
                </CodeBox>
            </TopicContainer>
        </Information>
    )
}

export default ExpresionesRegulares