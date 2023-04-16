import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"

const EquipoScrum = () => {

    return (
        <Information subTopic={data.menu[3].array[0].array[3].subTopic}>

            <TopicContainer id="intro" topic="El equipo Scrum">

                <p>Un equipo Scrum representa un grupo de personas altamente colaborativas, quienes trabajan de forma conjunta para lograr objetivos específicos.</p> 
                <small>Se aconseja que un equipo scrum este consolidado por un máximo de 10 personas. Si el proyecto requisiera de más colaboradores, lo ideal sería escalar scrum utilizando una técnica complementaria, veremos un ejemplo en el topico Scrum a escala.</small> 
            
            </TopicContainer>

            <TopicContainer id="master" topic="Scrum Master" ytUrl="https://www.youtube.com/watch?v=cXinM8juOoc">
            <p>Su responsabilidad principal radica en guiar/mentorear al equipo Scrum en la implementación efectiva de la metodología ágil de trabajo. Entre sus funciones, también se encuentran:</p>
                <ul>
                    <li>Supervisar y ayudar a que el equipo comprenda Scrum, sus reglas, y sus buenas prácticas. Se espera que sea un experto en la materia.</li>
                    <li>Facilitar las reuniones de Scrum, realizando anotaciones, recopilando feedback, y comentarios relevantes.</li>
                    <li>Facilitar la comunicación entre el PO & los stakeholders.</li>
                    <li>Asegurarse de que el equipo esté enfocado en el objetivo del sprint.</li>
                    <li>Colaborar con el PO para comprender a detalle el valor esperado del producto, traslando luego su comprensión al equipo de desarrollo.</li>
                    <li>Ayudar al equipo a identificar y resolver los impedimentos, gestionando a su vez el riesgo.</li>
                    <li>Promover un ambiente de colaboración y trabajo en equipo, buscando motivar a todos los miembros.</li>
                    <li>Fomentar la mejora continua y el aprendizaje dentro del equipo.</li>
                    <li>Proteger al equipo de distracciones externas, y cambios no planificados.</li>
                    <li>Ser un líder servicial y estar comprometido con el éxito del equipo.</li>
                    <li>Tener conocimientos sólidos de otras metodologías agiles, como Kanban o XP, y saber cuando aplicarlas.</li>
                    <li>Asegurar que la transparencia sea una prioridad en todo momento, y que toda la información necesaria esté al alcance de todo el equipo.</li>
                    <li>Analizar los informes de forma regular, como por ejemplo el diagrama de trabajo pendiente.</li>
                </ul>

                <small>Data: No debería estar en más de dos equipos Scrum. Siendo lo ideal, que forme parte de un solo equipo.</small>
            
            </TopicContainer>

            <TopicContainer id="po" topic="Product owner" ytUrl="https://www.youtube.com/watch?v=X7gh07V6aKo&t=122s">

            <p>Su responsabilidad principal es maximizar el valor del producto, tanto para el negocio (stakeholders), como para los usuarios finales.</p>
            <p>Para lograr esta meta tan importante, el product owner debe:</p>
                <ul>
                    <li>Investigar en profundidad las necesidades del proyecto, para poder representar las expectativas del cliente. Es habitual que requiera recopilar y analizar datos, como también participar frecuentemente en reuniones con stakeholders, y con el equipo Scrum.</li>
                    <li>Gestionar el product backlog. Sera quien establezca y comunique las prioridades y las caracateristicas del proyecto al equipo de desarrollo.</li>
                    <li>Tener un enfoque empresarial y comprender a detalle el valor que el producto aporta al negocio. Así mismo, se espera que tenga buenas habilidades comunicativas, que sea efectivo a la hora de transmitir información.</li>
                    <li>Ser accesible. Debe estar disponible para el equipo Scrum, y los stakeholders, bien sea para responder preguntas, dar feedback, o tomar decisiones.</li>
                    <li>Asegurar que el equipo Scrum tenga todos los recursos necesarios para completar el trabajo, y que este, cumpla con los estandares de calidad.</li>
                    <li>Participar en todas los eventos (ceremonias, reuniones) de Scrum.</li>
                    <li>Ser un líder. Debe poseer poder político dentro de la compañía, ya que debe ser capaz de poder tomar decisiones informadas, y negociar con los stakeholders para asegurar que el proyecto avance de forma efectiva.</li>
                </ul>

                <small>Data adicional: <br/>El product owner puede bien ser el dueño del proyecto, o el intermediario entre: El equipo Scrum, y los stakeholders.<br/> No es aconsejable que cumpla su rol en más de dos equipos, ya que sería muy dificil poder abarcar bien su función, por lo que preferentemente, debería formar parte de un solo equipo.</small>

            </TopicContainer>
            
            <TopicContainer id="devs" topic="Devs team">

                <p>Representa al conjunto de los distintos profesionales de desarrollo como: ui dev, devsOps, diseñadores, copywriters, marketing, etc (expertos técnicos).<br/> Su función es, valga la redundancia, desarrollar los proyectos. Para hacerlo de una forma exitosa, se espera que cada uno de ellos:</p> 
                <ul>
                    <li>Priorize la colaboración y el trabajo en equipo.</li>
                    <li>Sepa autogestionarse, y sea responsable con sus funciones.</li>
                    <li>Sea capaz de realizar entregas de valor de forma periodica.</li>
                    <li>Tenga su enfoque en la calidad del producto, y la satisfacción del cliente.</li>
                    <li>Sea capaz de adaptarse ante cambios en los requisitos del proyecto.</li>
                    <li>Sea proactivo para identificar, prevenir, y resolver problemas.</li>
                    <li>Posea habilidad para trabajar bajo presión, con plazos de entrega.</li>
                </ul>

            </TopicContainer>

        </Information>
    )
}

export default EquipoScrum