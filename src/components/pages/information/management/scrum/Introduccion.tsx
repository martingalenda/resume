import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"

const IntroduccionScrum = () => {

    return (
        <Information subTopic={data.menu[3].array[0].array[0].subTopic}>

            <TopicContainer id="resume" topic="Scrum - Introducción">

                <h4>Que es Scrum?</h4> 
                <p>Scrum es un framework <strong>(estructura de trabajo)</strong> perteneciente a las metodologías ágiles de desarrollo, ideal para la gestión de proyectos, sean simples, o complejos. El mismo se basa en la idea de dividir el trabajo en ciclos (iteraciones) llamados <strong>sprints</strong>, <small>(que suelen durar de 1 a 4 semanas)</small>, en donde el equipo de trabajo se enfoca en completar un conjunto de objetivos bien definidos (conocidos como <strong>sprints goals</strong>).<br/><br/> Uno de los objetivos principales a la hora de iniciar un proyecto con esta metodología, sera abstraer la complejidad del proyecto en items más pequeños, conocidos como <strong>historias de usuario</strong>, estas nos facilitaran la gestión del trabajo, pudiendo comenzar a definir las prioridades actuales del proyecto, revisar su avance, controlar los riesgos, y adaptarse a cualquier cambio que vaya surgiendo en el camino.</p> <br/> 

                <h4>De donde proviene el nombre Scrum?</h4> 
                <p>El nombre "Scrum" proviene del rugby, un deporte en el que los jugadores se juntan en una formación conocida como "scrum" para reiniciar el juego. Jeff Sutherland, uno de los creadores de Scrum, adoptó este nombre para describir el proceso de desarrollo de software que estaba diseñando, ya que consideró que el enfoque colaborativo y en equipo del rugby se ajustaba bien a la metodología ágil de Scrum. La idea era que los miembros del equipo trabajen juntos para avanzar hacia una meta común, como lo hacen los jugadores de rugby en un scrum.</p> <br/>
                <img src="/scrum_rugby.png" alt="scrum rugby" style={{width: '60em', margin: 'auto', filter: 'brightness(0.6)', opacity: '0.8', borderRadius: '4em'}} />
            </TopicContainer>

            <TopicContainer id="values" topic="Valores y principios">

                <p>En conjunto, estos valores y principios forman la base de Scrum, y guían la forma en la que los equipos trabajan para entregar valor de manera ágil y eficaz.</p> <br/>

                <h4>Valores de Scrum:</h4> 
                <ul>
                    <li> <strong>Compromiso</strong>: El equipo de scrum se compromete a alcanzar sus objetivos, y cumplir con sus responsabilidades.</li>
                    <li> <strong>Enfoque en el equipo</strong>: Scrum enfatiza la importancia del trabajo en equipo y la colaboración para lograr los objetivos.</li>
                    <li> <strong>Transparencia</strong>: El proceso y el progreso de Scrum deben ser visibles y comprensibles para todos los miembros del equipo, así como también para las partes interesadas (stake-holders)</li>
                    <li> <strong>Adaptación</strong>: Scrum fomenta la capacidad de adaptación para responder a los cambios y desafios a medida que surgen.</li>
                </ul>
                <h4>Principios de Scrum:</h4> 
                <ul>
                    <li><strong>Empirisimo</strong>: Scrum se basa en la toma de decisiones basada en la observación, la experiencia y los datos obtenidos.</li>
                    <li><strong>Auto-organización</strong>: Los equipos de Scrum tienen la capacidad y la responsabilidad de gestionar su propio trabajo y tomar decisiones.</li>
                    <li><strong>Entrega continua de valor</strong>: Scrum se centra en la entrega frecuente y continua de productos y características de valor (conocido como incremento).</li>
                    <li><strong>Enfoque en el cliente</strong>: Scrum se enfoca en satisfacer las necesidades del cliente y en la creación de valor para el usuario final.</li>
                    <li><strong>Gestión del riesgo:</strong>: Scrum aborda el riesgo de forma proactiva mediante la identificación temprana de problemas y su resolución o mitigación.</li>
                    <li><strong>Mejora continua</strong>: Scrum fomenta la reflexión y la mejora continua a través de la revisión y adaptación constante del proceso y el trabajo del equipo.</li>
                </ul>
            
            </TopicContainer>

            <TopicContainer id="pilares" topic="Pilares">
                <p>Scrum posee 2 pilares fundamentales:</p> 
                <ul>
                    <li>El empirismo: El conocimiento proviene de la experiencia y la toma de decisiones basado en lo que se observa.</li>
                    <li>El pensamiento Lean: Reduce los desperdicios y se centra en lo esencial para maximizar el valor del producto de manera continua.</li>
                </ul>
            </TopicContainer>
            <TopicContainer id="advanges" topic="Ventajas de uso">
                <p>Entre las ventajas de usar scrum nos encontraremos con que:</p> 
                <ul>
                    <li>Nos ayuda a gestionar todo el flujo de trabajo, tanto a nivel individual, como colectivo. </li>
                    <li>Nos otorga un/a macro & micro visión sobre el avance del producto.</li>
                    <li>Fomenta la entrega continua de valor en productos versionados.</li>
                    <li>Es un sistema ágil que permite adaptarse y poder gestionar los cambios.</li>
                    <li>Nos ofrece una retroalimentación constante, y nos incita a superarnos día a día.</li>
                    <li>Nos ofrece un entorno de trabajo colaborativo, y transparente.</li>
                    <li>Fomenta la comunicación, el compromiso, y la responsabilidad de todo el equipo.</li>
                    <li>Nos ayuda a gestionar los riesgos del proyecto.</li>
                    <li>Actualmente es la metodología de trabajo más reconocida/utilizada a nivel mundial (para desarrollo de software).</li>
                    <li>Scrum es un marco adaptable. Algunos equipos optan por refinar algunas reglas, otros incluso por convinarlos con otras metodologías agiles.</li>
                </ul>
            </TopicContainer>

        </Information>
    )
}

export default IntroduccionScrum