import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const DOM = () => {

    return (
        <Information subTopic={data.menu[0].array[3].array[8]}>

            <TopicContainer id="definicion" topic="DOM (Document Object Model) - Definición"  ytUrl="https://www.youtube.com/watch?v=dF7lp_qBfV0&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=62&pp=iAQB"> 
                <p>Es la estructura y la representación de todos los nodos HTML requeridos para imprimir la página. (Podríamos verlo como un arbol genealógico de elementos html)</p> 
            </TopicContainer>
            <TopicContainer id="nodos" topic="Tipos de nodos" docUrl="https://developer.mozilla.org/es/docs/Web/API/Node/nodeType" ytUrl="https://youtu.be/zBmtmlB5b5g?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=434">
                <ul>
                    <li><strong>Element</strong>: (Value: 1) Nodos definidos por etiquetas html.</li> 
                    <li><strong>Text</strong>: (Value: 3) Nodos definidos por el texto dentro de una etiqueta html (nodo) </li> 

                    <li><strong>Processing instruction</strong>: (Value: 7) </li> 
                    <li><strong>Comentarios</strong>: {`(Value: 8) <!-- .... -->`}</li> 
                    <li><strong>Document</strong>: (Value: 9) El nodo raíz, a partir del cual derivan el resto de nodos.</li> 
                    <li><strong>Document type</strong>: (Value: 10) {`- <!DOCTYPE html>`}</li> 
                    <li><strong>Document fragment</strong>: (Value: 11)</li> 
                </ul> 
            </TopicContainer>
            <TopicContainer id="seleccion_elementos" topic="Selección de elementos"  ytUrl="https://youtu.be/zBmtmlB5b5g?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=550">
                <small>Estos métodos quedan "obsoletos" a la hora de trabajar con React. Con la librería usamos el hook useRef para identificar elementos.</small>

                <CodeBox lang="javascript"> 
                    {
`// Selecciona un elemento por ID
    const $objectName = document.getElementById("nameID"); 
// Seleccionamos el primer elemento que coincida con el grupo especificado de selectores
    const $objectName = document.querySelector(".className"); 
// Selecciona todos los elementos que coincidan con el grupo especificado de selectores. Devuelve un NodeList
    const $objectName = document.querySelectorAll(".className"); 
// Selecciona todos los elementos .textItem, que sean hijos de li, nietos de ul, y tatara de #menu
    const $objectName = document.querySelectorAll("#menu ul li .textItem") 
// Selecciona a los elementos que contengan la clase en cuestión
    const $objectName = document.getElementsByClassName('className') 
// Selecciona el primer elemento que corresponda a la etiqueta html (h1 en este caso)
    const $objectName = document.getElementsByTagName('h1') 


// Ejemplo de selección (complementar con html y css)
    const $objectTest = document.querySelectorAll(".className"); 
    console.log($objectTest) // Devuelve un nodelist
    console.log($objectTest[0]) // Devuelve el primer elemento de la lista de nodos en cuestión
    console.log($objectTest.length) // Devuelve la cantidad total de elementos que poseen la clase en cuestión
    $objectTest.forEach(elem => console.log(elem)) // Recorre los elementos de la lista de nodos en cuestión`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="traversing" topic="Traversing (Otras formas de selección/recorrido)" ytUrl="https://www.youtube.com/watch?v=m50UZkgV9-Q&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=69">
                <small>Estos métodos quedan "obsoletos" a la hora de trabajar con React. Con la librería usamos el hook useRef para seleccionar elementos.</small>
                <CodeBox lang="javascript"> 
                    {
`const $obj = document.querySelector(".className"); 

console.log($obj)
// Nos retorna el padre del elemento
    console.log($obj.parentElement) 
// Nos retorna una colección html, con todos los elementos hijos
    console.log($obj.children) 
// Nos retorna el elemento hijo ubicado en la segunda posición de la colección html
    console.log($obj.children[1]) 
// Nos retorna el primer hijo del elemento
    console.log($obj.firstElementChild) 
// Nos retorna el último hijo del elemento
    console.log($obj.lastElementChild)
// Nos retorna el hermano anterior del elemento
    console.log($obj.previousSibling) 
// Nos retorna el hermano posterior del elemento
    console.log($obj.nextSibling) 
// Nos retorna el padre más cercano que posea el selector en cuestión
    console.log($obj.children[2].closest(".selector"))`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="atributos" topic="Métodos de atributos" ytUrl="https://www.youtube.com/watch?v=l6npGZa_vgc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=65">
                <small>Estos métodos raramente se usan en React.</small>
                <CodeBox lang="javascript"> 
                    {
`// Modifica/reemplaza el valor de un atributo. O bien lo "crea" en caso de que este NO exista.
    $obj.setAttribute("atributo", "valor"); 
// Devuelve el valor asignado al atributo
    $obj.getAttribute("atributo"); 
// Remueve el atributo (completo/entero) definido
    $obj.removeAttribute("atributo"); 
// Devuelve un valor boolean, dependiendo si posee o no el atributo
    console.log($obj.hasAttribute("atributo")) 

// ? DATA ATRIBUTE
// Se utilizan para guardar información en las etiquetas html
// Este tipo de atributos se definen siempre con el prefijo data-*
    $obj.dataset.name = "El nombre" 
// Esto quiere decir que el atributo data-name del nodo/elemento html (obj) sera "El nombre"`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="classlist" topic="Métodos de classlist" ytUrl="https://youtu.be/x1bzRMEH89A?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=224">
                <small>Estos métodos raramente se usan en React.</small>
                <CodeBox lang="javascript"> 
                    {
`// Le estaría agregando UN valor al atributo clase del objeto
    $obj.classList.add("className"); 
// Le estaría removiendo UN valor al atributo clase del objeto
    $obj.classList.remove("className"); 
// Si la clase ya tiene el valor, se lo quita. Si no lo tiene, se lo agrega.
    $obj.classList.toggle("className"); 
// Reemplaza el valor className por el valor classNueva
    $obj.classList.replace("className", "classNueva"); 
// Nos devuelve un valor booleando en caso de que tenga o no la clase mencionada como parametro
    $obj.classList.contains("className"); 
// Nos devuelve el nombre de la segunda clase (si es que tuviese), el número corresponde a una posición de array, comenzando por 0
    $obj.classList.item(1);`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="propiedades_contenido" topic="Propiedades, tipos de contenidos" ytUrl="https://www.youtube.com/watch?v=ezjxA4o2-Ck&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=67">
                <small>Estos métodos raramente se usan en React.</small>
                <CodeBox lang="javascript"> 
                    {
`// Devuelve solamente el texto plano del elemento/nodo/objeto
    $obj.textContent; 
// InnerHTML es vulnerable a inyecciones  // $obj.innerHTML = \`<img src="https://placeimg.com/220/220/people" alt="People">\` - Devuelve el contenido html del elemento/nodo/objeto (etiquetas/código html en cuestión)
    $obj.innerHTML; 
// Devuelve el código html COMPLETO (incluyendo la etiqueta correspondiente del elemento/nodo/objeto seleccionado)
    $obj.outerHTML; 
// Devuelve todo el contenido html del objeto (cual es la dif con innerHTML???)
    $obj.content`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="propiedades_css" topic="Propiedades CSS en JS" ytUrl="https://youtu.be/asR6_XGzI3s?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=122">
                <small>Estos métodos raramente se usan en React.</small>
                <CodeBox lang="javascript"> 
                    {
`// Estariamos modificando el color del texto del objeto. Le podemos mandar otras propiedades
    $obj.style.color = "#000"; 
// Modificamos el color de fondo del objeto
    $obj.style.backgroundColor = "gray"; 
// Devuelve los valores asignados al atributo class de html
    console.log($obj.className) 
// Devuelve  los valores asignados al atributo class de html, en forma de lista
    console.log($obj.classList) 
// ( Obviamente existen muchos más de los enumerados... )`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="management_nodes" topic="Metodos para crear agrupar y eliminar nodos">
                <small>Estos métodos quedan "obsoletos" a la hora de trabajar con React.</small>
                <CodeBox lang="javascript"> 
                    {
`// Creamos un elemento html tipo lista
    const $item = document.createElement("li"); 
// Creamos un nodo tipo texto
    const $itemText = document.createTextNode("Un item de la lista"); 
// Estariamos haciendo que el elemento/nodo (itemText) pase a ser un hijo del elemento/nodo (item)
    $item.appendChild($itemText); 
// Remueve el último elemento hijo de la sección en cuestión
    $section.removeChild($section.lastElementChild)`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="management_elements" topic="Métodos para insertar, modificar, y clonar elementos" ytUrl="https://www.youtube.com/watch?v=tqqw2b1kasg&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=73&t=88s">
                <small>Estos métodos quedan "obsoletos" a la hora de trabajar con React.</small>
                <CodeBox lang="javascript"> 
                    {
`// ? OLD STYLE:
// Link: https://www.youtube.com/watch?v=epMoFp_2ay8&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=71
// Reemplaza un elemento hijo de section (posicion 3), por un nuevo elemento
    $section.replaceChild($newElement, $section.children[2]) 
// Agrega un nuevo elemento, antes del hijo del section (posicion 2)
    $section.insertBefore($newElement, $section.children[1]) 
// Realiza un clon de la sección en cuestión, obviamente a posterior habría que insertarlo en el DOM
    $sectionClone = $section.cloneNode(true) 


// ? COOL STYLE:
// 3 Métodos de inserción, según tipo (Element, código html, text):

// Inserta un nodo/elemento en X posicion respecto a $section
    $section.insertAdjacentElement(posicion, element) 
// Inserta código html dentro del nodo/elemento $section
    $section.insertAdjacentHtml(posicion, html) 
// Agrega texto plano dentro del nodo/elemento $section
    $section.insertAdjacentText(posicion, text) 

// Posiciones: (Hace referencia al primer parametro que reciben los mètodos de inseciòn cool style)
//  - afterbegin (primer hijo)
//  - beforeend (ultimo hijo)
//  - beforebegin (hermano anterior)
//  - afterend (hermano posterior)  

// Otras formas de insertar elementos dentro de otros, escogiendo la posición:

// Agrega a $newElement como Primer hijo de $section
    $section.prepend($newElement) 
// Agrega a $newElement como Ultimo hijo de $section
    $section.append($newElement) 
// Agrega a $newElement como Hermano anterior de $section
    $section.before($newElement) 
// Agrega a $newElement como Hermano posterior de $section
    $section.after($newElement)` 
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id ="fragments" topic="Fragmentos" ytUrl="https://www.youtube.com/watch?v=tFSFX37Yah4&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=70">
                <ul>
                    <li>Es un tipo de nodo que sirve para almacenar un conjunto dinamico de elementos.</li> 
                    <li>Se utiliza como "dom virtual" para optimizar el rendimiento a la hora de generar muchos elementos.</li> 
                    <li>Gracias a estos fragmentos, solo hacemos una insercción al DOM, y NO una insercción por cada ciclo iterativo, por lo que evitamos lo que se conoce como reflow (pegarle al dom real en cada iteraciòn)</li> 
                </ul> 
                <small>El uso de fragmentos queda obsoleto si se utilizan frameworks o librerias como Angular, o React.</small><br/> <br/> 
                <CodeBox lang="javascript"> 
                    {
`const $fragment = document.createDocumentFragment() // Inicializamos un nuevo fragmento
const meses = ["Enero", "Febrero","Marzo", "Abril","Mayo", "Junio", "Julio", "Agosto" ]
       
meses.forEach( elem => {
    const $li = document.createElement("li") // creo etiqueta <li>
    // asigno el valor del texto de cada <li>, referenciando a los items de array: (meses)
        $li.textContent = elem 
    // agrego los <li> que voy creando al $fragment
        $fragment.appendChild($li) 
})

const $ul = document.createElement("ul") // creo etiqueta <ul>
$ul.appendChild($fragment) // Agrego el $fragmento con la info pre-cargada al <ul>

// Declaro al id/etiqueta que hago referencia en el dom
    const $sectionFragment = document.getElementById("sectionFragment") 
// Agrego el <ul> finalizado a la sección en la que se requiere $testFragment
    $sectionFragment.appendChild($ul)`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="template" topic="Etiqueta template" ytUrl="https://www.youtube.com/watch?v=Q9y9BugN8-s&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=71">
                <ul>
                    <li>Se utiliza la etiqueta {`<template>`} en html para generar contenido en base a una plantilla de forma dinamica (NO-estatica).</li> 
                    <li>Es un COMPLEMENTO que potencia los FRAGMENTOS. Gracias a este, podemos reducir y optimizar la estructura de código.</li> 
                    <li>Algunos ejemplos de uso podrían ser: noticias, items de un carrito de compras, etc.</li> 
                </ul>  
                <small>El uso de template queda obsoleto si se utilizan frameworks o librerias como Angular, o React.</small><br/> <br/> 
                <h4>EJ1: El contenido html de este ejemplo se encuentra en muestras/index.html.</h4>
                <CodeBox lang="javascript"> 
                    {
`// Refiero al contenido del template (document-fragment) gracias a la prop (.content)
    const $templateMeses  = document.getElementById("templateMeses").content 
// Inicializamos un nuevo fragmento
    const $fragment = document.createDocumentFragment() 
    
// Recorro todos los elementos del array [meses] para devolver/añadir un <li>, por cada item
    const meses = ["Enero", "Febrero","Marzo", "Abril","Mayo", "Junio", "Julio", "Agosto"]
    meses.forEach( elem => {
        // Clonamos el template original
            const $cloneTemplate = $templateMeses.cloneNode(true) 
        // Selecciono la etiqueta <li> del template clonado y le asigno el valor del texto (que corresponde a cada item del array [meses])
            const $li = $cloneTemplate.querySelector("li").textContent = elem 
        // Incorporamos el template clonado al fragmento
            $fragment.appendChild($cloneTemplate) 
    })

// Seleccionamos la seccion en donde ira el contenido
    const $section = document.getElementById("listaMeses") 
// Selecciono el boton que mostrarà los meses
    const $btnMeses = document.getElementById("btnMeses") 
// Añado una escucha al botón para que al recibir un click, añada el fragmento a la secciòn
    $btnMeses.addEventListener("click", () => {
// Añadimos el fragmento a la secciòn seleccionada
    $section.appendChild($fragment) 
})`
}
</CodeBox>
<h4>EJ2: El contenido html de este ejemplo se encuentra en muestras/index.html.</h4>
<CodeBox lang="javascript"> 
                    {
`// Contenido del template de figuras
    const $templateFigure = document.getElementById("templateFigure").content 
// Creo un fragmento
    const $fragment2 = document.createDocumentFragment() 

// Data:
    const cardContent = [
        {
            title:"Tech",
            img: "https://placeimg.com/200/200/tech"
        },
        {
            title:"People",
            img: "https://placeimg.com/200/200/people"
        },
        {
            title:"Animals",
            img: "https://placeimg.com/200/200/animals"
        },
        {
            title:"Nature",
            img: "https://placeimg.com/200/200/nature"
        }
    ]

// Obtengo la data del array (simulación de peticion API)
    const getData = () => {
        return new Promise((resolved, reject) => {
            // Chequeo el caso (reject) primero, por buena practica:
            if (cardContent.length === 0) {
                reject("Hemos encontado un error. El array esta vacio")
            }
            // En caso de que no haya errores genero de forma dinamica el contenido deseado dentro del template:
            // Recorro el array, y por cada item iterable, voy completando los datos recorridos
            setTimeout (() => {
                cardContent.forEach( el => {
                    // Clono el template con las insercciones completas
                        const $clone = $templateFigure.cloneNode(true) 
                    // Atributo src (html)
                        $clone.querySelector("img").setAttribute("src", el.img) 
                    // Atributo alt (html)
                        $clone.querySelector("img").setAttribute("alt", el.title) 
                    // Texto plano del figcaption (html)
                        $clone.querySelector("figcaption").textContent = el.title 
                    // Agrego el template clonado al fragmento
                        $fragment2.appendChild($clone) 
                })
                // Respuesta positiva de la promesa: Retorna el fragmento completo
                resolved($fragment2) 
            }, 3000)
        })
    }

// Refiere a la sección donde se introducirá el contenido
    const $testFragment = document.getElementById("testFragment") 

// Función que espera el resultado de getData, para incorporarla luego en el DOM
    const printFigures = async () => {
        const data = await getData()
        // console.log(data) // Devuelve el resultado de getData

                                // IMPORTANTE: Estoy haciendo de cuenta que la promesa siempre se resuelve de forma positiva (resolved), ya que data bien podrìa ser un error (reject), y rompería el programa. Por lo que en un caso real, deberìa realizar la validación pertinente. En el caso positivo de resolución, data en este caso refiere al fragmento con las incersiones hechas. Por lo que estarìa agregando a la sección requerida, la informaciòn dinamica de este ejemplo.
            $testFragment.appendChild(data) 
    }

// Boton para ver las imagenes (figures) al hacer click
    const $btnFigures = document.getElementById("btnFigures")
    $btnFigures.addEventListener("click", () => {
        printFigures()
    })`
                    }
                </CodeBox>
            </TopicContainer>
        </Information>
    )
}

export default DOM