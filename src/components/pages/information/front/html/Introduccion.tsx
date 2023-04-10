import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const IntroduccionHtml = () => {

    return (
        <Information subTopic={data.menu[0].array[0].array[0].subTopic}>

            <TopicContainer id="html5" topic="HTML5 - Introducción">
                <p>
                    HTML (Hypertext Markup Language) es un lenguaje de marcado utilizado para estructurar y presentar contenido en la web a través de etiquetas, y atributos.
                </p>
                <p>
                    La sintaxis de HTML5 es muy sencilla, veamos un ejemplo de como se componen las etiquetas, quienes terminarán por consolidar nuestras páginas Html:
                </p>
                <CodeBox lang="html"> 
                {
`<!-- <!DOCTYPE html> --> 

<etiqueta atributo="valor"> </etiqueta>

<section id="hero" class="hero"> 
    <!-- Contenido interno de la sección --> 
</section>
<!-- Etiqueta "section", atributos "id & class", ambos con valor "hero" -->`
                }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="basic_dom" topic="Estructura básica de un archivo HTML">
                <CodeBox lang="html"> 
                {
`<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Title </title>
        <meta name="keywords" content=" - ">
        <meta name="description" content=" - ">
        <meta name="author" content="MG">
        <meta name="copyright" content=" - ">
        <link rel="icon" href="fav.ico">
        <link rel="stylesheet" href="assets/scss/css/styles.css">
    </head>

    <body>
        <header>
            <nav>

            </nav>
        </header>

        <section>
            <main>

            </main>
            <div>

            </div>
        </section>

        <footer>

        </footer>
    </body>

</html>`
                }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="content" topic="Etiquetas de contenido">
                <CodeBox lang="html"> 
                    {
`<head></head>
<!-- Brinda info del sitio a los navegadores (metadatos). También en ella se importan estilos, librerias, etc -->

<body></body>
<!-- Representa el cuerpo entero de la página -->

<section></section>
<!-- Representa una sección X -->

<main></main>
<!-- Representa el contenido principal de la página en cuestión -->

<div></div>
<!-- Representa contenido genérico. Útil cuando no hay otra alternativa más específica para representarlo -->

<header></header>
<!-- Representa la cabezera de la página (comunmente contiene el típico menu de navegación) -->

<nav></nav>
<!-- Representa un menú de navegación -->

<footer></footer>
<!-- Representa el pie de la pagina (comunmente contiene el contacto, términos de uso, etc.)-->

<article></article>
<!-- Representa un árticulo (noticia/blog) -->

<aside></aside>
<!-- Representa contenido extra, indirectamente relacionado con la app, (publicidad, biografía del autor, etc) -->`
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="txt" topic="Etiquetas de texto">
                <CodeBox lang="html"> 
                    {
`<br>
<!-- Salto de linea (Enter comun) -->

<p> Texto </p>
<!-- Parrafo -->
<q> Texto </q>
<!-- Cita una frase corta, o oración. -->
<span> Texto </span>
<!-- Representa un texto genérico (Similar a la utilidad del <div>, pero para textos) -->

<h1> Título </h1>
<!--  Título principal del sitio. (Se utiliza solo una vez por página) -->
<h3> Título </h3>
<!--  Título o sub-titulo de prioridad (3). -->
<h6> Título </h6>
<!--  Título o sub-titulo con la prioridad más baja de todas (6). -->

<strong> Texto </strong>
<!-- Se utiliza para resaltar la importancia de un texto  -->
<em> Texto </em>
<!-- Indica enfasis -->
<small> Texto </small>
<!-- Se utiliza para disminuir la importancia de un texto (Ejemplo: pie de una imagen) -->

<hr>
<!-- Linea horizontal (Visual), que pretende definir un cambio de significado en un texto -->

<address>
    Martin Galenda <br>
    martingalenda@gmail.com <br>
    martingalenda.com
    Av. Libertador 10030 <br>
</address>
<!-- Representa información de contacto -->

<time>11:00</time>
<time datetime="2020-12-25 24:00">Navidad</time>    
<!-- Formas de representa el tiempo. -->

<pre> Texto </pre>
<!-- Muestra el texto preformateado -->
<code> Ejemplo de código </code>
<!-- Muestra un bloque de código  -->

________________________________________________________________________________________________

<!-- Menos utilizadas, ya que los estilos se modifican con CSS: -->

    <b> Texto </b>
    <!--  Negrita -->
    <i> Texto </i>
    <!-- Italica -->
    <u> Texto </u>
    <!-- Subrayado -->
    <del> Texto </del>
    <!-- Texto tachado, útil para una oferta por ejemplo -->
    <mark> Texto </mark>
    <!-- Texto resaltado -->`
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="list" topic="Etiquetas de listas">            
                <CodeBox lang="html"> 
                    {
`<ul>
    <li> Item de la lista </li>
    <ul> 
    <!-- Sub-lista desordenada -->
        <li>Sub-item de la lista</li>
    </ul>
</ul>
<!-- Lista desordenada  -->


<ol>
    <li> Item de la lista </li>
    <li> Otro item de la lista </li>
</ol>
<!-- Lista ordenada -->`
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="enlaces" topic="Etiquetas de enlace">
                <CodeBox lang="html"> 
                    {
`<a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Click aquí </a>
<!-- Ancla: Redirige a FB | target="_blank" indica que abrirá el enlace en una pestaña nueva | rel="noopener noreferrer" si se utiliza target"_blank" debe ser colocado por cuestiones de seguridad -->

<a href="pages/aboutus.html"> Click aquí </a>
<!-- Ancla: Regirige al usuario a otra parte del sitio web (local) -->

<a href="#testimonials"> Click aquí </a>
<!-- Se utiliza para redirigir al usuario a un lugar en concreto de la misma página -->
<!-- El elemento html a la que se quiere redirigir debe poseer un id con el mismo valor que el #valor del enlace -->

<a href="#testimonials"> 
    <img src="testimonials.png" alt="testimonials"> 
    <p> Todo lo que se encuentre dentro de la etiqueta (A) redijira al hacerle click!</p>
</a>
<!-- Ejemplo de una imagen + texto como contenido del ancla/redirección -->

<a href="mailto:email@email.com"> Envíame un email </a>
<!-- Ejemplo de redirección a nueva redacción de e-mail -->

<button> Click aquí </button>
<!-- Boton común -->

<iframe src="muestras/index.html" frameborder="0"></iframe>
<!-- Útil para imprimir contenido externo a la página. Videos, publicaciones, etc. -->
<!-- Se debe evaluar adecuadamente la fuente del contenido, ya que permite ejecución de codigo. -->`
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="media" topic="Etiquetas Media">
                <CodeBox lang="html"> 
                    {
`<img src="/img/martin.png" alt="Martin Galenda" title="Project Manager">
<!-- src (ruta local del archivo) | alt (txt para discapacitados) | title (text cuando no encuentra la imagen) -->

<picture>
    <source media="screen and (min-width: 500px)" srcset="notebook_martin.jpg">
    <source media="screen and (min-width: 200px)" srcset="mobile_martin.jpg">
    <img src="martin.png" alt="Martin Galenda" title="Project Manager">
</picture>
<!-- Picture: Se utiliza para mostrar x imagen dependiendo el tamaño del dispositivo (optimiza rendimiento) -->

<video controls>
    <source src="media/videos.mp4" type="video/mp4">
</video>
<!-- controls: Le ofrece controles al usuario. | autoplay: Reproduce automaticamente el video -->

<audio src="http://youtube.com/ejemplo" controls> </audio>
<!-- Traemos un video alojado en youtube | Atributo: controls. Le ofrece controles al usuario. -->

<figure>
    <img src="http://tynipic.com/hash" alt="Logo web">
    <figcaption> <!-- Leyenda o subtitulo asociado al contenido del figure --> </figcaption>
</figure>
<!-- Figure y figcaption para asociar un contenido semanticamente (imagenes, codigo, diagramas, etc)-->`
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="formularios" topic="Etiquetas de formularios">
                <CodeBox lang="html"> 
                    {
`<!-- <!DOCTYPE html> -->

<form action="/suscripcion.php" name="suscripcion" method="post">

    <input type="text" name="nombre" value="Escribí tu nombre" autocomplete="off">
    <input type="range" name="edad" min="1" max="150">
    <input type="email" name="email" placeholder="Dejame tu e-mail">

    <select name="paises" size="3" multiple>
        <option value="México" selected>México</option>
        <!-- selected = Opción seleccionada por defecto -->
        <option value="Colombia">Colombia</option>
        <option value="Peru">Peru</option>
    </select>

    <div>
        <input type="checkbox" id="red" value="red" name="red">
        <label for="red">Rojo</label>
        <br>
        <input type="checkbox" id="blue" value="blue" name="blue">
        <label for="blue">Azul</label>
        <br>
        <input type="checkbox" id="white" value="white" name="white">
        <label for="white">Blanco</label>
    </div>

    <textarea name="comentarioAdicional"></textarea>
    <!-- Crea un campo modificable en tamaño para mostrar o ingresar texto. -->

    <input type="file" name="fileToUpload" multiple>

    <input type="submit" value="Enviar">

</form>`
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="tablas" topic="Etiquetas de tablas">
                <p>
                Cuando creamos una tabla, para generarlas semanticamente, deberíamos utilizar estas etiquetas.
                </p>
                <ul>
                    <li> TR : Representa una fila </li> 
                    <li> TH : Representa una columna (del encabezado) </li> 
                    <li> TD : Representa una columna (del cuerpo) </li> 
                </ul>
                <CodeBox lang="html"> 
                    {
`<table>
    <thead> <!-- Encabezado -->
        <tr> 
            <th colspan="2"> Nombre </th> <!-- Ocupa dos columnas -->
            <th> Edad </th>
            <th> Correo electrónico </th>
        </tr>
    </thead>
    <tbody> <!-- Cuerpo de la tabla -->
        <tr>
            <td rowspan="2">Bepi</td> <!-- Ocupa dos filas -->
            <td>31</td>
            <td>mg@gmail.com</td>
        </tr>
        <tr>
            <td rowspan="2">Flor</td> 
            <td>30</td>
            <td>flor@gmail.com</td>
        </tr>
    </tbody>
</table>`
                    }
                </CodeBox>
                <small>
                - colspan / rowspan se utilizan solo en casos muy simples, de lo contrario, se modifican con css/scss.
                </small>
            </TopicContainer>

            <TopicContainer id="others" topic="Otras etiquetas">
                <p>
                    Mencionamos otras tags que no quedaron encasilladas en las demas secciones, o bien no son tan utilizadas.
                </p>
                <CodeBox lang="html"> 
                    {
`<data></data>
<!-- Datos de una estadística, por ejemplo  -->

<dfn></dfn>
<!-- Sirve para definir un término -->

<dl>
<!-- Lista de descripciones -->
    <dt>CSS</dt>
    <!-- Define el término en cuestión -->
    <dd>Es un lenguaje en estilo en cascada. Es la parte visual de un software. </dd>
    <!-- Define la descripcion de dicho termino (DT)-->
</dl>

<cite>El principito</cite>
<!-- Encierra el título de una obra: pelicula, canción, etc -->

<blockquote cite="http://es.wikipedia.org/wiki/programacion">
    La programacion
</blockquote>
<!-- Cita un bloque de texto, como por ejemplo un parrafo pudiendo colocar su fuente -->


<abbr title="Programacion Orientada a Objetos">POO</abbr>
<!-- Sirve para mencionar abreviaciones -->

<details></details>
<!-- Define detalles adicionales -->
<summary></summary>
<!-- Define un encabezado para el <details> -->

<progress></progress> 
<!-- se utiliza para mostrar el progreso de una tarea en una página web. -->

<p>Guarda pulsando</p><kbd>Ctrl + S</kbd></p>
<!-- Representa una entrada por parte del usuario por teclado -->
<p>Si ocurre un error el programa te dirá<samp>Error 4025</samp></p>
<!-- Se utiliza para mostrar un output del software -->
<var>E</var> = <var>2</var>
<!-- Representa variables a nivel matematico / programación -->`
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="template" topic="Etiqueta Template">
                <p>
                    Esta etiqueta se utiliza en complemento con VainillaJS, pero queda obsoleta con herramientas como React, o Angular.
                </p>
                <CodeBox lang="html"> 
                    {
`<template id="welcomeTemplate">
    <h1 class="mainTitle"> Welcome </h1>
    <p> Hola, me llamo <span>Pepe</span></p>
</template>

// Es un mecanismo para mantener el contenido HTML del lado del cliente que no se renderiza cuando se carga una página, 
pero que posteriormente puede ser instanciado durante el tiempo de ejecución empleando JavaScript.`
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="bem" topic="Metodología BEM">
                <p>
                    La metodología BEM (Block-Element-Modifier) es una convención para nombrar clases, con el fin de mejorar la legibilidad y escalabilidad del código.
                </p>
                <CodeBox lang="html"> 
                    {
`<div class="comments">
    <div class="comments__container">
      <h2 class="comments__title"> Comentario 1 </h2>
      <p class="comments__description"> Descripcion 1 </p>
    </div>
    <div class="comments__container container--destacado"> 
      <h2 class="comments__title"> Comentario 2 </h2>
      <p class="comments__description"> Descripcion 2 </p>
      <div class="comments__details"> 
        <p class="comments__detail"> Detalle 1</p>
        <p class="comments__detail"> Detalle 2</p>
        <p class="comments__detail detail--destacado"> Detalle 3 Destacadop>
      </div> 
    </div>
</div>`
                    }
                </CodeBox>
            </TopicContainer>

            <TopicContainer id="ejemplo" topic="Ejemplo final">
                <CodeBox lang="html"> 
                    {
`<!DOCTYPE html>
<!-- Determina que el archivo utilizado esta codeado en la ultima version de html -->

<html lang="en">

    <head> 
    <!-- "Lo no visible por el usuario". Información (metadatos) que le brindamos a los navegadores -->

        <meta charset="UTF-8">
        <!-- Codificación universal, necesaria para leer todos los caracteres -->

        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title> HTML5 Resume </title>
        <!-- Muestra el titulo que se verá en la pestaña del navegador -->

        <meta name="keywords" content="videojuego,moba,entretenimiento,juegopc">
        <!-- Informa las palabras/etiquetas más relacionadas con el proyecto-->

        <meta name="description" content=" Newline es un juego en linea tipo MOBA basado en L2">
        <!-- Describe el proyecto -->

        <meta name="author" content="Bepi">
        <!-- Define el autor del sitio -->

        <meta name="copyright" content="ILS: Ninja">
        <!-- Define los derechos de autor-->

        <link rel="icon" href="logo.ico">
        <!--  Asignamos el favico a la pagina (imagen de la pestaña) -->

        <link rel="stylesheet" href="file.css">
        <!--  Llamamos a la informacion del archivo file.css -->

    </head>

    <body>
    <!-- Acá dentro va todo el contenido del sitio que vera el usuario, las distintas secciones... -->
    </body>

    <script src="scripts.js" defer></script>
    <!--  Llamamos a la informacion del archivo scripts.js -->
        <!--  El atributo defer, indica al navegador que no espere por el script, y que continue procesando el html. El script carga en "segundo plano" y se ejecuta cuando el DOM esta completamente cargado  -->

</html>`
                    }
                </CodeBox>
            </TopicContainer>
        </Information>
    )
}

export default IntroduccionHtml