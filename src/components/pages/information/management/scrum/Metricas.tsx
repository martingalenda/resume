import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"

const Metricas = () => {

    return (
        <Information>

            <TopicContainer topic="Velocidad del equipo">

                <p>La velocidad de un equipo Scrum se ve reflejada en el total de puntos de historia que el equipo logra resolver en los sprints. Es común utilizar de referencia los últimos 3/12 sprints (dependiendo la duración de estos).</p> 

            </TopicContainer>

            <TopicContainer topic="Burn-down chart">

                <p>.</p> 
            
            </TopicContainer>
            <TopicContainer topic="Diagrama de flujo acumulado" docUrl="https://kanbanize.com/es/recursos-de-kanban/metricas-kanban/diagrama-de-flujo-acumulado">

                <p>El gráfico rastrea el número total de elementos de trabajo que se encuentran en las columnas de la sección en curso en tu tablero Kanban cada día.</p> 
                <p>El eje horizontal del DFA representa el período para el cual el gráfico está visualizando datos. El eje vertical muestra el número acumulado de tarjetas que se encuentran en el flujo de trabajo en los distintos puntos en el tiempo.</p> 
                <ul>
                    <li>Si las bandas progresan en paralelo, significa que el rendimiento es estable y que nuevas tareas están ingresando al flujo de trabajo en paralelo a las que salen. Este es el resultado idea, y muestra que puedes enfocar tus esfuerzos en acortar los tiempos de ciclo de las tareas.</li>
                    <li>Si una banda en tu DFA se está reduciendo continuamente, eso significa que el rendimiento de la etapa que representa es mayor que la tasa de entrada. Esta es una señal de que tienes más capacidad de la que realmente necesitas en esta etapa y debes reubicarla para optimizar el flujo.</li>
                    <li>Si una banda en tu DFA se está ensanchando rápidamente, el número de tarjetas que entran en la etapa correspondiente en el tablero Kanban es mayor que el número de tareas que lo están dejando. Es un problema común que generalmente es causado por la multitarea y otras actividades de desperdicio que no generan valor.</li> 
                </ul> 
            
            </TopicContainer>

            <TopicContainer topic="Lead time">

                <p>Refiere a la duración total (promedio) desde que las incidencias ingresan al backlog hasta ser resueltas.</p> 
            
            </TopicContainer>

            <TopicContainer topic="Cycle time">

                <p>Refiere a la duración total (promedio) desde que las incidencias ingresan en estado de progreso, hasta ser resueltas. Es decir, a diferencia del Lead Time, el cycle time no toma en consideración el tiempo que transcurre antes de que la incidencia ingrese en estado de progreso. </p> 
            
            </TopicContainer>

        </Information>
    )
}

export default Metricas