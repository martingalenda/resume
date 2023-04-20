import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"

const ConceptosScrum = () => {

    return (
        <Information subTopic={data.menu[3].array[0].array[1]} >

            <TopicContainer id="hdu" topic="Historias de usuario" ytUrl="https://www.youtube.com/watch?v=ky6wFiF5vMk">

                <p>Una historia de usuario es una descripción simple y concisa de una funcionalidad que el usuario final necesita para cumplir con un objetivo específico.</p><br/>

                <h4>Estructura de una HDU:</h4> 
                    <p>La estructura recomendada para una HDU se escribe desde la perspectiva del usuario, y se enfoca en los requisitos del negocio. Veamos un ejemplo:</p>
                <p>
                    <strong>Yo como</strong>: Pasajero <small>(Usuario final que va a requerir la funcionalidad)</small>
                    <br/>
                    <strong>Quiero</strong>: Calificar a mi conductor <small>(Cual es la funcionalidad)</small>
                    <br/>
                    <strong>Para</strong>: Que se conozca la calidad de servicio brindada por cada conductor. <small>(La utilidad, que resuelve?)</small>       
                </p> 
                    <strong>Criterios de aceptación</strong>:
                    <ul>
                        <li>El usuario debe poder calificar máximo una vez por viaje</li>
                        <li>El usuario debe poder añadir un comentario</li>
                    </ul>
                <p>
Si una HDU llegase a tener demasaiados criterios de aceptación, lo indicado sería fragmentarla en dos o más historias.
                </p>  <br/>

                <h4>Características:</h4> 

                <ul>
                    <li>Las HDU son escritas por el Product Owner, y forman parte del product backlog.</li>
                    <li>Cada HDU posee un nivel de prioridad que lo identifica, y define su posición respecto al resto de historias.</li>
                    <li>Las HDU son fragmentadas en pequeñas tareas cuando el equipo las selecciona para ser desarrolladas en el siguiente sprint.</li>
                    <li>Las HDU poseen 3 elementos (CCC) fundamentales que la representan:</li>
                    <ul>
                        <li>Una tarjeta pequeña que contiene la información necesaria <small>(El valor que otorga, el usuario final, y las características fundamentales)</small></li>
                        <li>Una confirmación, es decir los criterios de aceptación de la historia <small>(Lo que termina por confirmar que una HDU ha sido completada).</small></li>
                        <li>Una conversación final en el sprint planning parar aclarar lo que haga falta.</li>
                    </ul>
                </ul><br/>

                <h4>Que se espera que cumpla una buena HDU <strong>( INVEST )</strong></h4> 
                
                <ul>
                    <li>I - Independiente: Refiere al presente. La historia debe poder completarse sin que otra historia lo impida.</li>
                    <li>N - Negociable: Debe poder ser negociada con el equipo de desarrollo, pudiendo adaptarla si se considera necesario.</li>
                    <li>V - Valiosa: Que no dependa de otra historia para generar valor por si sola.</li>
                    <li>E - Estimable: Que el equipo pueda comparar la dificultad de la historia, en comparación a otras. Una HDU no estimable se la conoce como <strong>spike</strong>.</li>
                    <li>S - Small: En primer instancia debe caber en un sprint, y tampoco debería de abarcarlo todo. Comunmente, en un sprint se resuelven varias HDU.</li>
                    <li>T - Testeable: Que cualquier miembro del equipo pueda definir que una tarea esta lista, y que pueda verificarlo.</li>
                </ul>

            
            </TopicContainer>

            
            <TopicContainer id="sprint" topic="Sprint" ytUrl="https://www.youtube.com/watch?v=02_WIm5UubU">

                <p>Un sprint es un período breve de tiempo fijo en el que un equipo de scrum trabaja para completar una cantidad de trabajo establecida. Los sprints se encuentran en el corazón de las metodologías scrum y ágil, y representan el ciclo iterativo, e incremental sobre el cual se construye el producto o servicio. Al finalizar un sprint, se espera que el equipo haya generando un incremento de valor agregado sobre el producto en cuestión.<br/><br/> Durante el sprint, el equipo de Scrum se concentra en cumplir los objetivos del sprint (sprint goal), que son establecidos en la reunión de planificación del sprint (en base a las HDU), donde se define justamente que formará parte del Sprint Backlog. Estos objetivos se basan en los elementos del product backlog (que han sido priorizados con anterioridad por el Product Owner). El equipo de Scrum trabaja juntos en estrecha colaboración para completar las tareas necesarias para alcanzar estos objetivos y entregar un incremento potencialmente entregable del producto o servicio.</p> 
                <p>Veremos más sobre los sprint en los siguientes tópicos, haremos un apartado exclusivo para comprender todos sus eventos.<br/> Antes de pasar al siguiente sub-topico, conozcamos algunas caracteristicas importantes de los sprint</p> 
                <ul>
                    <li>La duración de un sprint es fija, y va desde un mínimo de (1) semana, hasta un máximo de (4) dependiendo el proyecto.</li>
                    <li>Potencian una mejora continua, y mantienen al equipo enfocado en lo importante.</li>
                    <li>Son transparentes, y le permiten al equipo saber en que esta trabajando cada miembro.</li>
                    <li>Aportan una visión clara sobre el progreso del equipo en base a los objetivos previamente pactados.</li>
                    <li>Las tareas que por "x" razón no se logren finalizar al término del sprint, deberán ser analizadas para determinar si es viable incorporarlas al siguiente sprint, y si continuan siendo prioridad para el producto (comunmente lo será).</li>
                    <li>Una vez iniciado el sprint, salvo casos EXCEPCIONALES/EXTREMOS, no debería ser añadida ninguna nueva tarea, funcionalidad, o criterio de aceptación.</li>
                </ul>

            
            </TopicContainer>

            <TopicContainer id="epics" topic="Épicas">

                <p>Son similares a las HDU, pero poseen un nivel más alto de abstracción. Mientras que una HDU se puede finalizar en un Sprint, una épica sería imposible.<br/> El objetivo de las épicas es facilitar la planificación del proyecto, ofreciendo una visión más simplificada de los requerimientos del producto.
                <br/>
                Cabe destacar que las epicas no son elementos finales, ya que deberán ser desglosadas en historias de usuario más pequeñas durante el proceso de planificiación y desarrollo.
                </p> 
            
            </TopicContainer>

            <TopicContainer id="versiones" topic="Versiones">

                <p>En Scrum, una versión (release) es una entrega de software que contiene una serie de funcionalidades y características del producto que se han completado después de varios sprints. Cada versión se considera una entrega incremental del producto y se utiliza para demostrar el progreso del equipo.<br/><br/>
Las versiones en Scrum se crean a partir de historias de usuario completadas y se entregan al cliente o usuario final. Las versiones también pueden incluir mejoras en el rendimiento, la usabilidad y la estabilidad del producto. Una versión puede ser tan pequeña como una o dos historias de usuario o tan grande como un conjunto completo de funcionalidades y características.</p> 
            
            </TopicContainer>

        </Information>
    )
}

export default ConceptosScrum