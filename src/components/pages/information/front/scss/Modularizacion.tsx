import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const ModularizacionScss = () => {

    return (
        <Information>

            <TopicContainer topic="Modularización">
                <p>
                Para mejorar la estructura de nuestros estilos, debemos trabajar la modularidad de nuestro código, es decir, fragmentarlo en distintos archivos. Para hacerlo, usamos:
                </p> <br/>
                <h4> @use </h4> 
                <p>Video-tutorial: <a href="https://www.youtube.com/watch?v=YeMUU6gbX38&list=PLy7TtEmBFusKPlehbCaSyIl8OA2lf4Krh&index=21" target="_blank"> https://www.youtube.com/watch?v=YeMUU6gbX38&list=PLy7TtEmBFusKPlehbCaSyIl8OA2lf4Krh&index=21 </a></p> 
                <p>
                La sentencia @use es la forma más eficiente para trabajar la modularidad de nuestros archivos, ya que optimiza la consistencia de nuestros estilos, y el rendimiento de nuestra aplicación. Es una caracteristica nueva que permite:
                <ul>
                    <li> El uso de namespaces. Lo que evita conflictos (colisiones) entre variables, selectores, y mixins de diferentes módulos.</li>
                    <li> Contar con una funcionalidad incorporada de verficación de dependencias. Lo que evita que se importen módulos más de una vez.</li>
                </ul>
                </p>
                <CodeBox lang="scss"> 
                {
`@use "../component/customs.scss" as var 
// Nos importa el archivo y lo renombramos como "var"

.className {
    color: var.$deg-color;
    // Llamamos del archivo custom la variable deg-color
}`
                }
                </CodeBox>

                <br/> 
                <h4> @import </h4> 
                <p>Video-tutorial: <a href="https://www.youtube.com/watch?v=CxjPsswX7FI&list=PLy7TtEmBFusKPlehbCaSyIl8OA2lf4Krh&index=5" target="_blank"> https://www.youtube.com/watch?v=CxjPsswX7FI&list=PLy7TtEmBFusKPlehbCaSyIl8OA2lf4Krh&index=5 </a></p> 
                <p>
                La sentencia @import es otra forma de trabajar la modularización de nuestro código, en esta, lo habitual es poseer un archivo principal (scss) en donde se realicen todas las importaciones de archivos scss (respetando la jerarquía lineal requerida). En cuanto a este archivo (import.scss) bastará con importarlo solo una vez en el archivo html.<br/> Este método permite acceder de forma global a todos los estilos (respetendo la jerarquía de importaciones) pero resulta anticuado a la fecha, y ya no posee soporte.
                </p>
                <CodeBox lang="scss"> 
                {
`@import "./app",
        "../components/nav";`
                }
                </CodeBox>
                <small>
                Es muy importante el oden de las importaciones. En el ejemplo anterior, nav podría depender de los estilos de app sin problemas (porque esta declarado abajo de este), mientras que si fuera al revez (app dependiese de nav) la aplicación no funcionaría, ya que existiría un error en el orden de importación.
                </small>
                <br/>
                <br/> 
                <h4> Conclución final </h4> 
                <p> @use y @import son dos reglas en SCSS que permiten importar archivos, pero @use es una versión mejorada de @import, ya que tiene varias ventajas, incluyendo la encapsulación de archivos importados, la eliminación del ámbito global, y la protección contra duplicaciones. Además, con @use se pueden declarar miembros privados y tener mayor flexibilidad con librerías de terceros. Aunque @import sigue siendo popular, su uso será obsoleto en favor de @use y @forward. </p> 

            </TopicContainer> 

        </Information>
    )
}

export default ModularizacionScss