import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"

const ConceptosFront = () => {
    return (
        <Information subTopic={data.menu[0].array[7].array[0]}>

            <TopicContainer topic="Conceptos relacionados al Front-end">
            <p>Aprovecharemos este tópico para hablar sobre varios conceptos generales relacionados al desarrollo Front-end. En nuestra jerga es habitual encontrarnos con infinidad de nuevos conceptos técnicos. En ocasiones, muchos de ellos no son tratados en profundidad en los cursos que consumimos para capacitarnos, o inclusive en la facultad. Por eso vengp a resumir varios de estos términos tipicos en nuestra profesión, y los incentivo por supuesto a profundizar en ellos.</p> 
            </TopicContainer>
            <br/> 
             

            
            <TopicContainer topic="Sentencias Imperativas & Declarativas">
            <p>En programación, existen dos enfoques principales para describir cómo se realiza una tarea: las sentencias imperativas y las sentencias declarativas. Veamos de que tratan.</p> 
            <br/> 
            <h4>Sentencias imperativas:</h4> 
                <ul>                
                    <li>Estas sentencias se centran en indicar explícitamente los pasos y las instrucciones detalladas para lograr un resultado. Se enfocan en cómo se debe hacer una tarea paso a paso. El programador describe cada paso de manera secuencial, especificando cómo se deben realizar las operaciones. Los ejemplos comunes de sentencias imperativas son los bucles (for, while), las estructuras de control (if, else), las asignaciones de variables y las operaciones de manipulación de datos. En resumen, las sentencias imperativas se enfocan en los detalles y en cómo se debe realizar una tarea.</li> 
                </ul> 
            <br/> 
            <h4>Sentencias declarativas:</h4> 
                <ul>                
                    <li>Estas sentencias se centran en describir el resultado deseado sin especificar los pasos detallados para lograrlo. Se enfocan en qué se debe lograr en lugar de cómo se debe hacer. El programador declara el objetivo o el resultado esperado y confía en que el lenguaje de programación o el entorno se encargará de ejecutar las operaciones subyacentes. Los ejemplos comunes de sentencias declarativas son consultas de bases de datos, manipulación de listas, operaciones matemáticas y funciones de transformación de datos. Las sentencias declarativas tienden a ser más concisas y expresivas.</li> 
                </ul> 
            </TopicContainer>
            <TopicContainer topic="API">
            <p>API (Application Programming Interface) es un conjunto de reglas y protocolos que permiten que diferentes aplicaciones y sistemas se comuniquen entre sí. Básicamente, una API define cómo interactuar con un software o servicio específico, proporcionando una interfaz que expone funciones, métodos y datos que se pueden utilizar y manipular.</p> 
            <p>Una API actúa como un intermediario entre las aplicaciones, permitiendo que una aplicación haga uso de las funcionalidades o acceda a los datos de otra aplicación de manera controlada y segura. Al utilizar una API, los desarrolladores pueden aprovechar la funcionalidad existente de un sistema sin necesidad de conocer todos los detalles internos de su implementación.</p> 
            <p>Las API pueden tomar diferentes formas y seguir diversos estándares. Las API web son comunes y se basan en protocolos de comunicación estándar como HTTP. Estas API permiten la comunicación y el intercambio de datos entre diferentes aplicaciones a través de solicitudes y respuestas HTTP.</p> 
            <p>En general, una API proporciona una interfaz bien definida y documentada que especifica cómo interactuar con un sistema o servicio, incluyendo detalles sobre los parámetros de entrada, los métodos disponibles y los formatos de datos utilizados. Esto permite que los desarrolladores puedan integrar servicios externos, construir aplicaciones sobre plataformas existentes, o crear complementos y extensiones para software preexistente.</p> 
            <p>Las API desempeñan un papel fundamental en el desarrollo de aplicaciones modernas, ya que permiten la integración, la reutilización de código y la creación de ecosistemas de software más amplios y conectados.</p> 
            <br/>
            <h4>API REST</h4> 
            <p>Una API REST (Representational State Transfer / Transferencia de estado representacional) es un estilo de arquitectura para el diseño de servicios web que se basa en los principios y protocolos del protocolo HTTP. Aquí tienes un resumen de los conceptos clave relacionados con las APIs REST:</p> 
            <ul>                
                <li>Estas sentencias se centran en describir el resultado deseado sin especificar los pasos detallados para lograrlo. Se enfocan en qué se debe lograr en lugar de cómo se debe hacer. El programador declara el objetivo o el resultado esperado y confía en que el lenguaje de programación o el entorno se encargará de ejecutar las operaciones subyacentes. Los ejemplos comunes de sentencias declarativas son consultas de bases de datos, manipulación de listas, operaciones matemáticas y funciones de transformación de datos. Las sentencias declarativas tienden a ser más concisas y expresivas.</li> 
                <li><strong>Métodos HTTP</strong>: Los métodos HTTP, como GET, POST, PUT y DELETE, se utilizan para realizar operaciones en los recursos de la API. Cada método tiene un propósito específico: GET para obtener información, POST para crear recursos, PUT para actualizar recursos y DELETE para eliminar recursos.</li> 
                <li><strong>Endpoints</strong>: Los endpoints son las URL específicas a las que se accede para interactuar con los recursos de la API. Cada recurso se identifica mediante su URL única y se pueden aplicar diferentes métodos HTTP a cada endpoint para realizar operaciones específicas.</li> 
                <li><strong>Formato de datos</strong>: En una API REST, los datos se transfieren generalmente en un formato estructurado como JSON o XML. Estos formatos permiten representar los datos de manera legible y estructurada para su intercambio entre el cliente y el servidor.</li> 
                <li><strong>Estado de la aplicación</strong>: En una API REST, el estado de la aplicación se maneja mediante las respuestas HTTP. El servidor responde con códigos de estado como 200 OK para respuestas exitosas, 404 Not Found para recursos no encontrados, y 500 Internal Server Error para errores internos del servidor.</li> 
                <li><strong>Sin estado</strong>: Una API REST es "sin estado" en el sentido de que no mantiene información sobre el estado de la sesión del cliente en el servidor. Cada solicitud del cliente debe contener toda la información necesaria para ser procesada por el servidor, lo que permite una mayor escalabilidad y flexibilidad.</li> 
                <li><strong>HATEOAS</strong>: HATEOAS (Hypertext As The Engine Of Application State) es un principio de diseño en las APIs REST que proporciona enlaces hipertexto en las respuestas para permitir a los clientes descubrir y navegar los recursos relacionados de manera dinámica.</li> 
            </ul> 
            </TopicContainer>
            <TopicContainer topic=".">
                <p>.</p> 
            </TopicContainer>
        </Information>
    )
}

export default ConceptosFront