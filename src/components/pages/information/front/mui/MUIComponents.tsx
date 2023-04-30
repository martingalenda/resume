import data from "../../../../data/data"
import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"
import { Link } from "react-router-dom"

const MUIComponents = () => {
    return (
        <>
        <Information subTopic={data.menu[0].array[6].array[1]}>

            <TopicContainer id="msg" topic="A tener en cuenta" docUrl="https://github.com/martingalenda/mui/tree/master/src">
                <p> Como vimos en el tópico de introducción, MUI es una librería desarrollada para ofrecer componentes prefabricados, y reutilizables.<br/>
Por lo que, como se imaginarán, este tópico podría subdivirse en muuuuchos otros tópicos (debido a que son demasiados componentes).<br/>
En cada uno de esos posibles tópicos podría haber puesto un ejemplo (en código) de cada componente, pero me pareció poco práctico, ya que la propia documentación de MUI es excepcional, y se encarga perfectamente de ello, poniendo varios ejemplos de cada componente, y brindando todos los detalles necesarios de cada uno de ellos.</p> 

<p> 
Debido a esto, decidí limitarme en la presentación de este contenido de la siguiente forma:</p> 
<ul>
    <li>
    Esta página explicará lo fundamental, y con ello, me refiero a las típicas dudas que uno suele hacerse cuando apenas comienza a usar MUI. Además, mencionaré a la ligera cada uno de los componentes existentes, resumiendo su caso de uso, y facilitando el acceso directo a la documentación oficial de MUI.
    </li> 
    <li> 
    Por otro lado, vengo a compartirles dos links:
    <ol>
        <li> El link a una página (hecha a la ligera con MUI) que ya contiene incorporado la gran mayoría de los componentes existentes: <Link to="https://martingalenda.github.io/mui/" target="_blank">Visita la página</Link> </li>
        <li> El repositorio de la página mencionada, para que puedan jugar con los componentes que deseen: <Link to="https://github.com/martingalenda/mui/tree/master/src" target="_blank">Visita el repositorio</Link></li>
    </ol>
    </li> 
</ul> 

            </TopicContainer>

            <TopicContainer id="inputs" topic="Inputs Components" docUrl="https://martingalenda.github.io/mui/inputs/">
                <ul> 
                    <li><strong>Autocomplete</strong>: <Link to="https://mui.com/material-ui/react-autocomplete/" target="_blank">Doc</Link></li>
                    <p>Podríamos verlo como un Select avanzado. El usuario podrá buscar entre diversas opciones predefinidas, interactuando con el teclado, o desplazandose con el mouse. Es útil para formularios que requieren la entrada de datos repetitivos, o para búsquedas en grandes bases de datos.</p>
                    <li><strong>Button</strong>: <Link to="https://mui.com/material-ui/react-button/" target="_blank">Doc</Link></li>
                    <p>Representa un botón en la interfaz. Hay diversos estilos listos para ser usados, y por supuesto podemos crear nuestras versiones personalizadas.</p>
                    <li><strong>Button Group</strong>: <Link to="https://mui.com/material-ui/react-button-group/" target="_blank">Doc</Link></li>
                    <p>Representa un grupo de botones relacionados en una sola unidad visual. Es útil para mejorar la organización y la accesibilidad en la interfaz.</p>
                    <li><strong>Checkbox</strong>: <Link to="https://mui.com/material-ui/react-checkbox/" target="_blank">Doc</Link></li>
                    <p>El típico checkbox de toda la vida, pero con distintos diseños personalizados.</p>
                    <li><strong>Floating Action Button</strong>: <Link to="https://mui.com/material-ui/react-floating-action-button/" target="_blank">Doc</Link></li>
                    <p>Representa un botón circular y prominente en la interfaz, es útil para llamar la acción principal de la aplicación. Si son varias acciones será más útil utilizar: <Link to="https://mui.com/material-ui/react-speed-dial/" target="_blank">Speed-Dial</Link></p>
                    <li><strong>Radio Group</strong>: <Link to="https://mui.com/material-ui/react-radio-button/" target="_blank">Doc</Link></li>
                    <p>El típico radio de los formularios, pero con distintos diseños personalizados.</p>
                    <li><strong>Rating</strong>: <Link to="https://mui.com/material-ui/react-rating/" target="_blank">Doc</Link></li>
                    <p>Permite al usuario calificar un elemento en una escala numérica (de una forma visual). Es útil para recopilar la opinión del usuario sobre una película, libro o producto.</p>
                    <li><strong>Select</strong>: <Link to="https://mui.com/material-ui/react-select/" target="_blank">Doc</Link></li>
                    <p>El típico select de toda la vida, pero con distintos diseños, y funcionalidades personalizadas.</p>
                    <li><strong>Slider select</strong>: <Link to="https://mui.com/material-ui/react-slider/" target="_blank">Doc</Link></li>
                    <p>Permite al usuario seleccionar un valor numérico en un rango definido (de una forma visual). Es útil para configurar ciertas preferencias.</p>
                    <li><strong>Switch</strong>: <Link to="https://mui.com/material-ui/react-switch/" target="_blank">Doc</Link></li>
                    <p>Permite al usuario alternar entre dos estados, como encendido/apagado (de una forma visual). Es útil para activar o desactivar una función o característica específica.</p>
                    <li><strong>Text Field (Input clásico)</strong>: <Link to="https://mui.com/material-ui/react-text-field/" target="_blank">Doc</Link></li>
                    <p>El típico input de toda la vida, pero con distintos diseños y funcionalidades personalizadas.</p>
                    <li><strong>Transfer List</strong>: <Link to="https://mui.com/material-ui/react-transfer-list/" target="_blank">Doc</Link></li>
                    <p>Permite al usuario transferir elementos de una lista a otra. Es útil para organizar elementos en diferentes categorías.</p>
                    <li><strong>Toogle Button</strong>: <Link to="https://mui.com/material-ui/react-toggle-button/" target="_blank">Doc</Link></li>
                    <p>Permite al usuario alternar entre dos estados, como encendido/apagado. Es como el switch pero con una visualización diferente.</p>
                </ul>
                </TopicContainer>
                <br/>
                <TopicContainer id="data_display" topic="Data Display Components" docUrl="https://martingalenda.github.io/mui/data_display/">
                <ul> 
                    <li><strong>Avatar</strong>: <Link to="https://mui.com/material-ui/react-avatar/" target="_blank">Doc</Link></li>
                    <p>Representa una imagen o ícono asociado a un usuario o entidad.</p>
                    <li><strong>Badge</strong>: <Link to="https://mui.com/material-ui/react-badge/" target="_blank">Doc</Link></li>
                    <p>Muestra un número o mensaje corto asociado a otro elemento en UI. Es útil para indicar una notificación, un mensaje nuevo, o el número de elementos en una lista.</p>
                    <li><strong>Chip</strong>: <Link to="https://mui.com/material-ui/react-chip/" target="_blank">Doc</Link></li>
                    <p>Representa una etiqueta o categoría en la interfaz. Es útil para organizar elementos en una lista o para mostrar información resumida sobre un elemento.</p>
                    <li><strong>Divider</strong>: <Link to="https://mui.com/material-ui/react-divider/" target="_blank">Doc</Link></li>
                    <p>Representa una línea horizontal o vertical en la interfaz. Es útil para separar secciones o elementos en una lista o en una página.</p>
                    <li><strong>Icons</strong>: <Link to="https://mui.com/material-ui/icons/" target="_blank">Doc</Link></li>
                    <p>Introducción al uso de iconos.</p>
                    <li><strong>Material Icons</strong>: <Link to="https://mui.com/material-ui/material-icons/" target="_blank">Doc</Link></li>
                    <p>Conjunto de iconos específicos de Material Design que se pueden utilizar en la interfaz.</p>
                    <li><strong>List</strong>: <Link to="https://mui.com/material-ui/react-list/" target="_blank">Doc</Link></li>
                    <p>Representa listas html para items, avatars, buttons, icons, text, subHeaders (categorias) .</p>
                    <li><strong>Table</strong>: <Link to="https://mui.com/material-ui/react-table/" target="_blank">Doc</Link></li>
                    <p>Representa una típica tabla html pero con un diseño elegante, y funcionalidades personalizables.</p>
                    <li><strong>Tooltip</strong>: <Link to="https://mui.com/material-ui/react-tooltip/" target="_blank">Doc</Link></li>
                    <p>Muestra información adicional cuando el usuario hace hover sobre un elemento en la UI. Es útil para proporcionar información complementaria sobre un elemento.</p>
                    <li><strong>Typography</strong>: <Link to="https://mui.com/material-ui/react-typography/" target="_blank">Doc</Link></li>
                    <p>Representa la mayor parte del contenido de tipo texto de la aplicación. h1 ... h6, p, subtitle, body, etc.</p>
                </ul>
                </TopicContainer>
                <br/>
                <TopicContainer id="feedback" topic="Feedback Components" docUrl="https://martingalenda.github.io/mui/feedback/">
                <ul> 
                    <li><strong>Alert</strong>: <Link to="https://mui.com/material-ui/react-alert/" target="_blank">Doc</Link></li>
                    <p>Representa un mensaje de alerta en la interfaz. Es útil para informar al usuario sobre una situación importante o un evento crítico, como un error o una confirmación.</p>
                    <li><strong>Backdrop</strong>: <Link to="https://mui.com/material-ui/react-backdrop/" target="_blank">Doc</Link></li>
                    <p>Cubre la pantalla con un fondo opaco para mostrar un modal o una ventana emergente en la UI. Es útil para centrar la atención del usuario.</p>
                    <li><strong>Dialog</strong>: <Link to="https://mui.com/material-ui/react-dialog/" target="_blank">Doc</Link></li>
                    <p>Representa un modal o una ventana emergente en la interfaz. Es útil para mostrar contenido adicional, solicitar confirmación o realizar una acción importante.</p>
                    <li><strong>Progress</strong>: <Link to="https://mui.com/material-ui/react-progress/" target="_blank">Doc</Link></li>
                    <p>Muestra el progreso de una tarea en la interfaz.</p>
                    <li><strong>Skeleton</strong>: <Link to="https://mui.com/material-ui/react-skeleton/" target="_blank">Doc</Link></li>
                    <p>Muestra una representación visual de un elemento en la interfaz mientras se carga la información real. Es útil para mejorar la experiencia del usuario.</p>
                    <li><strong>Snackbar</strong>: <Link to="https://mui.com/material-ui/react-snackbar/" target="_blank">Doc</Link></li>
                    <p>Muestra un mensaje breve y temporal en la interfaz (tipo notificación). Es útil para informar al usuario sobre una acción o evento que acaba de ocurrir.</p>
                </ul>
                </TopicContainer>
                <br/>
                <TopicContainer id="surfaces" topic="Surfaces Components" docUrl="https://martingalenda.github.io/mui/surfaces/">
                <ul> 
                    <li><strong>Accordion</strong>: <Link to="https://mui.com/material-ui/react-accordion/" target="_blank">Doc</Link></li>
                    <p>Representa un conjunto de paneles colapsables en la UI. Útil para mostrar contenido detallado en un espacio reducido.</p>
                    <li><strong>App Bar</strong>: <Link to="https://mui.com/material-ui/react-app-bar/" target="_blank">Doc</Link></li>
                    <p>Respresenta una barra/menú de navegación clásica (muy utilizada en ordenadores de escritorio).</p>
                    <li><strong>Card</strong>: <Link to="https://mui.com/material-ui/react-card/" target="_blank">Doc</Link></li>
                    <p>Representa un contenedor de información. Útil para mostrar información detallada sobre un elemento, como una noticia, un producto o una publicación en redes.</p>
                    <li><strong>Paper</strong>: <Link to="https://mui.com/material-ui/react-paper/" target="_blank">Doc</Link></li>
                    <p>Representa un contenedor rectangular en la interfaz. Útil para agrupar elementos relacionados y separar visualmente diferentes secciones de la página. También puede utilizarse como base para otros componentes, como los card.</p>
                </ul>
                </TopicContainer>
                <br/>
                <TopicContainer id="navigation" topic="Navigation Components" docUrl="https://martingalenda.github.io/mui/navigation/">
                <ul> 
                    <li><strong>Bottom Navigation</strong>: <Link to="https://mui.com/material-ui/react-bottom-navigation/" target="_blank">Doc</Link></li>
                    <p>Representa una barra/menú de navegación clásica (muy utilizada en aplicaciones mobiles).</p>
                    <li><strong>Breadcrumbs</strong>: <Link to="https://mui.com/material-ui/react-breadcrumbs/" target="_blank">Doc</Link></li>
                    <p>Representa una ruta de navegación. Es útil para informarle al usuario su ubicación actual, y que este pueda navegar sobre dicha ruta.</p>
                    <li><strong>Drawer</strong>: <Link to="https://mui.com/material-ui/react-drawer/" target="_blank">Doc</Link></li>
                    <p>Representa un menú de navegación desplegable en la interfaz.</p>
                    <li><strong>Link</strong>: <Link to="https://mui.com/material-ui/react-link/" target="_blank">Doc</Link></li>
                    <p>Representa el típico enlace (ancla html). Útil para permitir al usuario navegar a otra sección de la aplicación o a una página externa.</p>
                    <li><strong>Menu</strong>: <Link to="https://mui.com/material-ui/react-menu/" target="_blank">Doc</Link></li>
                    <p>Representa un menú de opciones desplegables.</p>
                    <li><strong>Pagination</strong>: <Link to="https://mui.com/material-ui/react-pagination/" target="_blank">Doc</Link></li>
                    <p>Representa una lista de páginas en la interfaz. Es útil para permitir al usuario navegar a diferentes páginas del contenido.</p>
                    <li><strong>Speed Dial (Boton multi-función)</strong>: <Link to="https://mui.com/material-ui/react-speed-dial/" target="_blank">Doc</Link></li>
                    <p>Representa un botón fijo en el viewport, cuando el usuario hace hover sobre este, mostrará una lista de botones/acciones disponibles.</p>
                    <li><strong>Stepper</strong>: <Link to="https://mui.com/material-ui/react-stepper/" target="_blank">Doc</Link></li>
                    <p>Representa un indicador de progreso en la interfaz. Es útil para mostrar al usuario en qué paso se encuentra un proceso.</p>
                    <li><strong>Tabs</strong>: <Link to="https://mui.com/material-ui/react-tabs/" target="_blank">Doc</Link></li>
                    <p>Representa una lista de pestañas en la interfaz. Es útil para permitir al usuario cambiar entre diferentes secciones de contenido en la misma página.</p>
                </ul>
                </TopicContainer>
                <br/>
                <TopicContainer id="layout" topic="Layout Components" docUrl="https://martingalenda.github.io/mui/layout/">
                <ul> 
                    <li><strong>Box</strong>: <Link to="https://mui.com/material-ui/react-box/" target="_blank">Doc</Link></li>
                    <p>Representa un contenedor flexible y personalizable en la interfaz. Es útil para agrupar y organizar elementos relacionados en la página.</p>
                    <li><strong>Container</strong>: <Link to="https://mui.com/material-ui/react-container/" target="_blank">Doc</Link></li>
                    <p>Componente que proporciona un ancho máximo y un espaciado predefinido en la interfaz. Es útil para crear una zona de contenido centrada y legible</p>
                    <li><strong>Grid</strong>: <Link to="https://mui.com/material-ui/react-grid/" target="_blank">Doc</Link></li>
                    <p>Representa un sistema de cuadrícula para organizar elementos en la página. Es útil para crear diseños complejos y responsivos.</p>
                    <li><strong>Grid v2</strong>: <Link to="https://mui.com/material-ui/react-grid2/" target="_blank">Doc</Link></li>
                    <p>Versión mejorada del componente Grid, que proporciona una sintaxis más clara y flexible para crear diseños responsivos.</p>
                    <li><strong>Stack</strong>: <Link to="https://mui.com/material-ui/react-stack/" target="_blank">Doc</Link></li>
                    <p>Componente que permite apilar elementos en la interfaz. Es útil para crear diseños de tipo "caja de herramientas" o para organizar elementos de manera jerárquica.</p>
                    <li><strong>Image List</strong>: <Link to="https://mui.com/material-ui/react-image-list/" target="_blank">Doc</Link></li>
                    <p>Representa una lista de imágenes en la interfaz. Es útil para crear una galería.</p>
                </ul>
                </TopicContainer>
                <br/>
                <TopicContainer id="utils" topic="Utils Components" docUrl="https://martingalenda.github.io/mui/utils/">
                    <ul> 
                        <li><strong>Click-Away Listener</strong>: <Link to="https://mui.com/material-ui/react-click-away-listener/" target="_blank">Doc</Link></li>
                        <p>Componente que detecta cuando se hace click fuera de un elemento y ejecuta una función. Es útil para cerrar elementos emergentes como menús, diálogos, etc.</p>
                        <li><strong>CSS Baseline</strong>: <Link to="https://mui.com/material-ui/react-css-baseline/" target="_blank">Doc</Link></li>
                        <p>Componente que establece estilos básicos para la página, como la altura de línea y los márgenes. Es útil para garantizar la consistencia y la legibilidad de la página.</p>
                        <li><strong>Modal</strong>: <Link to="https://mui.com/material-ui/react-modal/" target="_blank">Doc</Link></li>
                        <p>El típico modal de toda la vida.</p>
                        <li><strong>NO SSR</strong>: <Link to="https://mui.com/material-ui/react-no-ssr/" target="_blank">Doc</Link></li>
                        <p>Componente que oculta el contenido durante el proceso de renderizado en el servidor, para que solo se muestre en el navegador. Es útil para evitar problemas de compatibilidad entre el servidor y el navegador.</p>
                        <li><strong>Popover</strong>: <Link to="https://mui.com/material-ui/react-popover/" target="_blank">Doc</Link></li>
                        <p>Representa un contenido emergente en respuesta a una acción del usuario, como un clic o un hover. Es útil para mostrar información adicional o opciones de navegación.</p>
                        <li><strong>Popper</strong>: <Link to="https://mui.com/material-ui/react-popper/" target="_blank">Doc</Link></li>
                        <p>Componente que posiciona un elemento emergente con respecto a otro elemento en la página. Es útil para mostrar elementos emergentes de forma precisa y dinámica.</p>
                        <li><strong>Portal</strong>: <Link to="https://mui.com/material-ui/react-portal/" target="_blank">Doc</Link></li>
                        <p>Componente que permite renderizar elementos en un nodo específico fuera del árbol DOM principal de la aplicación. Es útil para mostrar elementos emergentes o flotantes sin interferir con la estructura de la página.</p>
                        <li><strong>Textarea Autosize</strong>: <Link to="https://mui.com/material-ui/react-textarea-autosize/" target="_blank">Doc</Link></li>
                        <p>Componente que ajusta automáticamente el tamaño de un campo de texto según el contenido. Es útil para mejorar la experiencia de usuario al escribir texto largo o múltiples líneas.</p>
                        <li><strong>Transitions</strong>: <Link to="https://mui.com/material-ui/transitions/" target="_blank">Doc</Link> </li>
                        <p>Componente que permite animar la entrada y salida de elementos en la página. Es útil para mejorar la experiencia de usuario y hacer que la página sea más dinámica.</p>
                        <li><strong>useMediaQuery</strong>: <Link to="https://mui.com/material-ui/react-use-media-query/" target="_blank">Doc</Link></li>
                        <p>Hook que permite detectar el tamaño de la pantalla del usuario y ejecutar código en consecuencia. Es útil para crear diseños responsivos y adaptativos a diferentes dispositivos.</p>
                    </ul>
                </TopicContainer>

        </Information>

        </> 
    )
}

export default MUIComponents