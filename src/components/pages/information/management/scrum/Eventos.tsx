import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"

const EventosScrum = () => {

    return (
        <Information subTopic={data.menu[3].array[0].array[4]}>

            <TopicContainer id="intro" topic="Eventos. Flujo de trabajo en scrum.">

                <p>En Scrum el trabajo se organiza en Sprints, que, como ya vimos, son iteraciones de tiempo fijo que duran entre una, y cuatro semanas (depende el proyecto).<br/> Durante cada Sprint, el equipo de Scrum se enfoca en entregar un incremento de valor del producto. Para lograr esto, Scrum utiliza un flujo de eventos estructurado que consta de cuatro eventos formales: La planificación de sprint, la reunión diaria, la revisión del sprint y la retrospectiva de este.<br/> Estos eventos proporcionan al equipo la oportunidad de inspeccionar y adaptar su trabajo, para garantizar que estan entregando valor de forma constante.</p><br/> <br/> 

                <img src="/scrum.png" alt="Flujo de Scrum" style={{width: '27em', margin: 'auto'}} /><br/> 
            
            </TopicContainer>

            <TopicContainer id="planning" topic="Sprint planning - El inicio" ytUrl="https://www.youtube.com/watch?v=FhiOeECwsS8">

                <p>Corresponde al evento que dará inicio al sprint. El objetivo será definir las HDU del product backlog con las que el equipo va a comprometerse, y como lo hará.</p> 
                <p>Durante el evento el equipo coge las HDU seleccionadas <small>(priorizadas por el P.O)</small>, las analiza, resuelve dudas, las estima, y luega las fragmenta en tareas más pequeñas para construir el sprint backlog. Luego, en conjunto, estas tareas son estimadas y asignadas a los distintos miembros del equipo de desarrollo.<br/><small> Conoceremos metodos de estimación en el topico correspondiente.</small></p> 

                <p>Consejos útiles:</p>

                <ul>
                    <li>Centrar la primera parte de la planificación en el objetivo del sprint en vez de en los detalles del backlog. Al centrarse en el objetivo, es posible encontrar alternativas inteligentes para ver cómo se consigue ese objetivo.</li>
                    <li>Si las estimaciones se utilizan de una forma negativa y confrontacional una vez que se ha terminado el sprint, es probable que las futuras estimaciones sean superiores para asegurarse de no quedar mal nunca más.</li>
                    <li>Cuando se realiza la estimacion por primera vez, el equipo no conoce la capacidad de story points totales que puede llegar a cubrir, lo normal es hacer hasta donde se pueda, para, en el siguiente sprint tener ese valor de referencia.</li>
                    <li>Si el sprint es de dos semanas, organizar una reunión a la mitad del sprint para refinar el product backlog, podría ser una buena idea.<br/> Comunmente al equipo le sienta bien distanciarse del sprint y mirar qué viene a continuación. Eso no solo ayuda a prepararse para la planificación del siguiente sprint, sino que también puede darle otra perspectiva al trabajo actual.</li>
                </ul>
                <ul className="events-data">
                    <li>Momento en el que se realiza: Antes de iniciar el sprint.</li>
                    <li>Participantes: Todo el equipo Scrum.</li>
                    <li>Duración aproximada: Máximo 2 horas por semana de duración (Dependiendo la complejidad del producto).</li>
                </ul>

            </TopicContainer>

            <TopicContainer id="daily" topic="Daily Scrum - Actualización diaria" ytUrl="https://www.youtube.com/watch?v=16IoziutCZs">

                <p>La reunión diaria, también conocida como Daily Scrum, es un evento de Scrum que tiene como objetivo sincronizar al equipo de desarrollo y asegurar que todos estén alineados en torno al objetivo del sprint. Durante la reunión, los miembros del equipo responden a tres preguntas claves:</p> 

                <ul>
                    <li>¿Qué hice ayer?</li>
                    <li>¿Qué voy a hacer hoy?</li>
                    <li>¿Hay algún impedimento que me esté impidiendo avanzar?</li>
                </ul>

                <p>Estas preguntas ayudan al equipo a actualizar el estado de las tareas, y a identificar posibles obstáculos que puedan estar impidiendo el progreso del sprint. Además, la reunión diaria fomenta la colaboración y la comunicación dentro del equipo.</p>

                <p>Consejos útiles:</p>
                <ul>
                    <li>Resuelve tus dudas fuera de este tiempo. Si algo que dijo un compañero no lo entendiste, o te genero alguna duda en concreto, charlalo despues.</li>
                </ul>

                <ul className="events-data">
                    <li>Momento en el que se realiza: Todos los días laborales, a excepción comunmente del día de la planificación.</li>
                    <li>Participantes: Todo el equipo Scrum.</li>
                    <li>Duración: Máximo 15 minutos.</li>
                </ul>
            
            </TopicContainer>

            <TopicContainer id="review" topic="Sprint Review - Evaluación del sprint" ytUrl="https://www.youtube.com/watch?v=NPc7YyBUrMk">

                <p>Este evento se lleva a cabo al final de cada Sprint, donde el equipo presenta el trabajo completado a los interesados, y al Product Owner. El objetivo principal del evento es obtener feedback sobre el trabajo realizado, para asegurarse de que se está avanzando en la dirección correcta.</p> 
                <p>Si por alguna razón el equipo no llego a cumplir alguna de sus tareas, estas serán incorporadas en el siguiente sprint. Bajo ningún concepto debe modificarse la fecha del sprint.</p> 

                <ul className="events-data">
                    <li>Momento en el que se realiza: Al finalizar cada Sprint.</li>
                    <li>Participantes: Todo el equipo Scrum, y comunmente los stakeholders.</li>
                    <li>Duración: Aprox 1 hora por semana de duración (Dependiendo la complejidad del producto).</li>
                </ul>
            
            </TopicContainer>

            <TopicContainer id="retro" topic="Sprint Retrospective - Reflexionando y buscando de la mejora continua" ytUrl="https://www.youtube.com/watch?v=W6jZptSd3eM&list=PLotrodX72SrSZkMY_droNB0hk2lRFfCws&index=2">

                <p>Una vez que el sprint fue finalizado, incicia la retrospectiva. El objetivo principal es que el equipo logre reflexionar sobre el sprint que acaba de finalizar. Durante la reunión, el equipo revisa como se llevó a cabo el srpint, y se enfoca en identificar:</p> 
                <ul >
                    <li>Las cosas que se hicieron bien.</li>
                    <li>Las cosas que se podrían mejorar.</li>
                    <li>Las oportunidades de crecimiento.</li>
                </ul>
                
                <small>Es una buena idea utilizar la reunión para festejar logros, y reconocer el esfuerzo del equipo.</small> 

                <ul className="events-data">
                    <li>Momento en el que se realiza: Al finalizar cada Sprint.</li>
                    <li>Participantes: Todo el equipo Scrum.</li>
                    <li>Duración: Aprox 40 min. por semana de duración (Dependiendo la complejidad del producto).</li>
                </ul>
            
            </TopicContainer>

        </Information>
    )
}

export default EventosScrum