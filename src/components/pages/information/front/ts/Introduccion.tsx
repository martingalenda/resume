import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"

const IntroduccionTS = () => {

    return (
        <Information>

            <TopicContainer topic="TS - Introducción">
                <p>
                Typescript es un lenguaje que ofrece todas las características de Javascript, además de una capa adicional sobre ellas: el sistema de tipos de Typescript. Para que quede claro, TS es un supraconjunto (superset) de JS. En esta ruta de aprendizaje, descubrirá cómo el uso de TS para el desarrollo de JS, puede ayudarle a crear código más sólido, reducir los errores de tipos en tiempo de ejecución, aprovechar las ventajas de las modernas características de JS, y trabajar mejor con los equipos de desarrollo.
                </p>
                <br/> 
                <h4>Características del lenguaje:</h4> 
                <ul>                
                    <li>La principal diferencia ente JS & TS, es que TS es un lenguaje de tipado estático (fuertemente tipado).</li> 
                    <li> TS extiende la sintaxis de JS, por lo que todo código de JS, es compatible con TS. Esto hace que se puede usar en cualquier entorno que admita JS.</li> 
                    <li>Los navegadores no interpretan TS. De hecho, TS es un lenguaje hecho para el desarrollador, ya que, a la hora de compilarse, se transpila en Vainilla.JS.</li> 
                    <li>TS es un lenguaje orientado a objetos, soporta: Clases, interfaces, herencia, polimorfismo, encapsulamiento y otros conceptos de la POO.</li> 
                    <li>TS tiene un sistema de módulos que permite organizar el código en unidades lógicas y reutilizables. Puede utilizar los estándares de módulos de JS, como CommonJS o AMD, o aprovechar las capacidades de módulos propias de TS.</li> 
                    <li>TS se mantiene actualizado con las especificaciones de ECMAScript (el estándar en el que se basa JavaScript).</li> 
                    <li>TS incorpora otras características adicionales como: Interfaces, espacios de nombres, genéricos, clases abstractas, modificadores de datos, valores opcionales, sobrecarga de funciones, elementos Decorator, tipos de utilidad, palabra clave readonly, entre otros.</li> 
                    <li>TS fue desarrollado por Microsoft.</li> 
                </ul>
                <br/> 
                <h4>Ventajas de usar Typescript:</h4>
                
                <ul>                
                    <li>Al ser más estricto a la hora de declarar los típos de datos, nos ayuda a detectar errores antes de que estos lleguen a producción.</li>  
                    <li>Al ser compatible con JS, se puede migrar el código a TS de forma gradual.</li>  
                    <li>Proporciona una mejor experiencia de desarrollo, incluyendo: autocompletado de código, verificación de errores en tiempo real, refactorización, navegación más fácil entre archivos, documentación en linea, integración con herramientas de construcción y pruebas, etc.</li>  
                    <li>TypeScript aborda las limitaciones de JavaScript sin poner en peligro la propuesta de valor clave de JavaScript.</li>
                    <li>Al utilizar TypeScript, el código es más fácil de mantener y evolucionar a medida que el proyecto crece.</li>  
                    <li>Typescript cuenta con una comunidad activa de desarrolladores y tiene un amplio soporte en términos de documentación, tutoriales, librerías y frameworks. Además, grandes compañías como Microsoft y Google respaldan y utilizan TypeScript en sus proyectos.</li>  
                </ul>
            </TopicContainer>
          
        </Information>
    )
}

export default IntroduccionTS