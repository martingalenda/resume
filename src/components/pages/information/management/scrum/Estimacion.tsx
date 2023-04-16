import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"

const Estimacion = () => {

    return (
        <Information subTopic={data.menu[3].array[0].array[5].subTopic}>

            <TopicContainer id="unidades" topic="Estimación del esfuerzo" ytUrl="https://www.youtube.com/watch?v=4I6F0nSCdmE">

                <p>Existen diversas unidades para estimar el esfuerzo que conlleva una tarea, el equipo puede utilizar la que considere que mejor se adapte a sus necesidades.</p> <br/>

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

            
            </TopicContainer>

        </Information>
    )
}

export default Estimacion