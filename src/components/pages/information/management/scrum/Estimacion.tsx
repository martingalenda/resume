import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import Alert from "@mui/material/Alert"


const Estimacion = () => {

    return (
        <Information subTopic={data.menu[3].array[0].array[5]}>

            <TopicContainer id="unidades" topic="Estimación del esfuerzo" ytUrl="https://www.youtube.com/watch?v=4I6F0nSCdmE">
                
                <p>Existen diversas unidades para estimar el esfuerzo que conlleva una tarea, el equipo puede utilizar la que considere que mejor se adapte a sus necesidades.</p> <br/>
                <Alert variant="outlined" severity="info">Cuando alguien necesita investigar sobre una incidencia en concreto para poder estimarla, se debe aclarar que se requiere un Spike. Un Spike refiere un trabajo temporal que se lleva a cabo para investigar, explorar, y aprender algo nuevo en un proyecto. Es una forma de lidiar con la incertidumbre y los riesgos técnicos que pueden surgir durante el desarrollo de Software.</Alert> <br/>
                <br/>
                <h4>Estimación basada en puntos:</h4> 
                <p>Video relacionado: <a href="https://www.youtube.com/watch?v=O-D22kLYi2M&t=2s" target="_blank">Link</a></p>
                
                <p>En lugar de estimar en horas, que pueden ser difíciles de predecir, y pueden variar mucho según la persona que realiza la tarea, se puede estimar en puntos. Los puntos pueden basarse en factores como el esfuerzo requerido, la complejidad técnica, el riesgo, y la incertidumbre.<br/><br/>- Para definir la escala de puntos, es común el uso de la secuencia Fibonacci (1, 2, 3, 5, 8, 13, 21...). Aunque hay equipos que prefieren una simple escala del 1 al 10.<br/> - También es común que se posea una tarea genérica (muy conocida por el equipo) como referencia de valor. A esta se la conoce como "tarea pibote". <br/> Esto simplifica la estimación, y resulta muy útil parar comparar el esfuerzo de distintas tareas.</p> <br/>

                <h4>Estimación basada en tiempo:</h4> 
                <p>La idea de basar la estimación en tiempo es proporcionar de forma más precisa el tiempo que se necesitará para completar una tarea o historia de usuario. Esto puede ser especialmente útil cuando se trabaja con tareas muy específicas o repetitivas, o bien cuando se requiere una estimación más detallada.</p>
                <small>Comunmente, estimar en tiempo lleva más esfuerzo que estimar en puntos, o t-shirt sizing.</small>
                <br/><br/><br/>

                <h4>Estimación basada en T-shirt sizing:</h4> 
                <p>Video relacionado: <a href="https://www.youtube.com/watch?v=DmxTaPzXpYg" target="_blank">Link</a></p>
                <p>Algunos equipos optan por usar el tamaño de las camisetas para respresentar los rangos de esfuerzo o complejidad. Por ejemplo XS puede representar una tarea muy pequeña y sencilla, mientras que XL puede representar una tarea muy grande y compleja. El equipo de desarrollo debe acordar los criterios para cada tamaño de camiseta antes de comenzar a estimar.</p>
            
            </TopicContainer>


            <TopicContainer id="poker" topic="Scrum Poker" ytUrl="https://www.youtube.com/watch?v=ey6Pm46WXkY">


                <p>Existen diversas técnicas para estimar el esfuerzo que conlleva una tarea, en esta ocasión hablaremos de la técnica llamada Scrum Poker.</p> <br/>
                <p>El Scrum Poker suele darse durante la planeación del sprint, o durante el refinamiento. Esta técnica se basa en la colaboración y la participación de todo el equipo de desarrollo, (incluyendo los desarrolladores, el Scrum Master y el Product Owner). El objetivo principal es lograr una estimación consensuada y precisa, evitando sesgos y permitiendo que todos los miembros del equipo tengan voz y voto en el proceso de estimación. El proceso de Scrum Poker implica lo siguiente:</p> 
                <ol>
                    <li>Preparación: Antes de comenzar, el equipo debe tener una lista de las tareas o historias de usuario a estimar. Estas se presentan en forma de tarjetas, o en una herramienta colaborativa.</li>
                    <li>Reunión: El equipo se reúne en un lugar físico o virtual y se asegura de que todos comprendan la tarea o historia de usuario que se va a estimar.</li>
                    <li>Estimación: Se utiliza una baraja de cartas especiales, conocidas como cartas de Scrum Poker, que tienen valores numéricos o representaciones de tamaño (como Fibonacci) impresos en ellas. Cada miembro del equipo elige una carta que representa su estimación de la complejidad de la tarea.</li>
                    <li>Revelación y discución: Todos los miembros del equipo revelan simultáneamente sus cartas. Si hay diferencias significativas en las estimaciones, se promueve la discusión para entender los diferentes puntos de vista y aclarar cualquier ambigüedad (dandole la prioridad de la palabra a quien/es estimaron con números más altos, y más bajos).</li>
                    <li>Reestimación: Si existe una amplia discrepancia en las estimaciones, se realiza otra ronda de estimación después de la discusión. El objetivo es llegar a un consenso en la estimación.</li>
                    <li>Registro: Se registra la estimación acordada para la tarea o historia de usuario. Puede ser en forma de un número específico, una escala de puntos o cualquier otro sistema de medición que el equipo haya acordado previamente.</li>
                </ol>
            
                <p>Los valores de las cartas más comunes son:</p> 
                <ul>
                    <strong>Tareas muy pequeñas</strong>
                    <ul>
                        <li>1/2</li>
                    </ul>
                    <strong>Tareas pequeñas</strong>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                    <strong>Tareas medianas</strong>
                    <ul>
                        <li>5</li>
                        <li>8</li>
                        <li>13</li>
                    </ul>
                    <strong>Tareas grandes:</strong>
                    <ul>
                        <li>20</li>
                        <li>40</li>
                    </ul>
                    <strong>Tareas muy grandes:</strong>
                    <ul>
                        <li>100</li>
                    </ul>
                    <strong>Otras cartas:</strong>
                    <ul>
                        <li>? (Tarea inestimable / Spike)</li>
                        <li>∞ (Tarea enorme que debería ser fragmentada)</li>
                        <li>☕ Hora de una pausa</li>
                    </ul>
                </ul>
            </TopicContainer>

        </Information>
    )
}

export default Estimacion