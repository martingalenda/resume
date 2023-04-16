import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"

const Artefactos = () => {

    return (
        <Information subTopic={data.menu[3].array[0].array[2].subTopic}>

            <p>Los artefactos de Scrum son herramientas valiosas para el equipo de Scrum, ya que les ayudan a mantenerse enfocados, medir su progreso, y mantener la transparencia con los stakeholders. Si se utilizan correctamente, estos artefactos pueden ser la clave para el éxito del proyecto y la satisfacción del cliente.</p>

            <TopicContainer id="pb" topic="Product backlog">

                <p>En pocas palabras podríamos decir que es una lista dinámica de todos los objetivos a cumplir (caracteristicas, funcionalidades, y requisitos del producto), el valor que se pretende conseguir. El principal responsable de gestionar esta lista, como ya hemos visto, es el Product Owner. En el product backlog se detallan las características, funcionalidades y requisitos del proyecto. Esta lista se organiza según la importancia de cada objetivo, mostrando los más importantes desde la parte superior, estos deben ser prioridad a la hora de ser detallados. Cabe destacar, que se actualiza constantemente para mantener reflejado los cambios de las necesidades del cliente. En ocasiones, por ejemplo, resulta normal que uno, o varios objetivos del product backlog nunca terminen llegando a producción, esto se debe a cambios bruzcos en las necesidades del cliente.</p> 
            
            </TopicContainer>

            <TopicContainer id="sb" topic="Sprint backlog">

                <p>Representa una lista de los objetivos seleccionados del product backlog para ser abordados en el siguiente sprint. Es propiedad del equipo de desarrollo, por lo que son ellos mismos quienes lo definenen en común acuerdo, el momento de hacerlo es justo antes de iniciar un sprint, en el evento conocido como sprint planning (hablaremos sobre ello en su respectivo topico).</p> 
                <small>El Sprint Backlog es una herramienta clave para la transparencia y la comunicación en el marco de trabajo Scrum. Permite al equipo de Scrum y a los stakeholders tener una visión clara de lo que se está trabajando durante el Sprint, y cómo se está avanzando hacia el objetivo acordado.</small> 

            </TopicContainer>

            <TopicContainer id="incremento" topic="Incremento">

                <p>Representa la suma de todas las historias de usuario completadas y verificadas durante un sprint.<br/> El incremento debe ser potencialmente utilizable por el cliente, y debe cumplir con todos los criterios de aceptación acordados.<br/> El objetivo principal del incremento, es mejorar continuamente el producto, proporcionando valor al cliente de manera incremental.</p> 
                <p>El equipo de Scrum inspecciona el Incremento al final de cada Sprint y lo utiliza como base para planificar el siguiente Sprint. El Incremento también es inspeccionado y adaptado durante la Revisión del Sprint, en la que el equipo de Scrum y los interesados en el producto revisan el trabajo completado y planifican la siguiente iteración del desarrollo del producto..</p> 
            
            </TopicContainer>


        </Information>
    )
}

export default Artefactos