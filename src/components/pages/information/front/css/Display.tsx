import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const Display = () => {

    return (
        <Information subTopic={data.menu[0].array[1].array[4]}>

            <TopicContainer id="tipos" topic="Tipos de Display" ytUrl="https://youtu.be/OWKXEJN67FE?t=10041">
            <p>La propiedad "display" en CSS se utiliza para definir cómo se mostrará un elemento HTML en una página web. </p>
                <CodeBox lang="css"> 
                {
`* {
    display: none;
    display: block;
    display: inline;
    display: inline-block;
    display: flex;
    display: inline-flex;
    display: grid;
}`
                }
                </CodeBox>
                <ul>
                    <li><strong>none</strong> = Oculta al elemento afectado.</li>
                    <li><strong>block</strong> = El elemento abarca todo el ancho posible (respecto a su caja contenedora).</li>
                    <li><strong>inline</strong> = Reduce su tamaño exclusivamente hasta lo que abarca su contenido, DESCARTANDO las propiedades width y height (si existiesen).</li>
                    <li><strong>inline-block</strong> = Combina "lo mejor de block e inline". Respeta las dimensiones indicadas en width y height (si existen), y coloca el elemento en línea (al costado) de elementos hermanos que también tengan display: inline o inline-block.</li>
                    <li><strong>flex</strong> = Transforma al elemento en un modelo de layout (Flex box).</li>
                    <li><strong>inline-flex</strong> = Funciona como el flex, pero el ancho del contenedor (si no posee width) se ajusta a su contenido automaticamente.</li>
                    <li><strong>grid</strong> = Transforma al elemento en un modelo de layout (GRID).</li>
                </ul>
            </TopicContainer>
            <TopicContainer id="flex" topic="Display Flex" ytUrl="https://youtu.be/OWKXEJN67FE?t=17210">
                <p>
                Este valor de display se utiliza para crear diseños de cajas flexibles, permitiendo el posicionamiento de los elementos hijos dentro de un contenedor.
                <br/> 
                </p>
                <h4> Propiedades correspondientes al <em>flex-container</em>: </h4>
                <CodeBox lang="css"> 
                {
`* {
    display: flex;
    flex-direction: row;
    flex-direction: column-reverse;
    justify-content: center;
    justify-content: space-between;
    justify-content: space-evenly;
    justify-content: end;
    align-content: center;
    align-content: space-around;
    align-content: flex-end;
    align-items: center;
    align-items: flex-start;
    flex-wrap: wrap;
}`
                }
                </CodeBox>
                <ul>
                    <li><strong>flex-direction</strong> = Dispone la dirección en la que se mostrarán los flex-items, definiendo también, cual será el eje principal (por defecto: horizontal)</li>
                    <li><strong>justify-content</strong> = Indica como se distribuirán los flex-items dentro de su contenedor (con respecto a su eje principal, por defecto horizontal)</li>
                    <li><strong>align-items</strong> = Indica como se distribuirán los flex-items dentro de su contenedor (con respecto a su eje secundario, por defecto vertical)</li>
                    <li><strong>align-content</strong> = Funciona similar al align-items, pero se utiliza solo cuando hay más de una fila de flex-items (determina el posicionamiento de todas las filas o columnas de elementos flexibles dentro del contenedor flexible)</li>
                    <li><strong>flex-wrap</strong> = Determina si los items se posicionaran por debajo de otros a medida que no tengan espacio disponible en su caja contenedora.</li>
                    <ul>
                    <li>stretch: Es un valor por defecto de posicionamiento. Rellena todo el espacio del eje secundario (en caso de no poseer height definido)</li>
                    </ul>
                </ul>
                <h4>
                Propiedades correspondientes a los <em>flex-items</em>:
                </h4>
                <CodeBox lang="css"> 
                {
`* {
    align-self: center;
    justify-self: center;
    flex-basis: 100px;
    flex-grow: 1;
    /* flex-grow: 0; - No crecería en ningun momento */
    flex-shrink: 2;
    /* flex-shrink: 0; - No cederia espacio en ningun momento */
    order: 2;
    /* (-1) ubicaría el item al comienzo */
}`
                }
                </CodeBox>
                <ul>
                    <li><strong>align-self & justify-self</strong> = Se utilizan para definir la posición (x/y) de forma individual a un flex-item. Superponiendo a los valores asignados en align/justify-items. </li>
                    <li><strong>flex-basis</strong> = Asigna el tamaño del flex-item en cuanto a su eje principal (posee mas prioridad que el height y el width)</li>
                    <li><strong>flex-grow</strong> = (REPARTE) Su valor define como repartir el espacio vacio de un flex-container, entre los flex-items ------- (respeta los tamaños previamente asignados, sea width, o height, dependiendo el eje principal)</li>
                    <li><strong>flex-shrink</strong> = (CEDE) Su valor define la proporción en la que los elementos flexibles deben reducirse cuando el tamaño total del contenedor flexible no alcance para el tamaño asignado a todos los elementos previamente. </li>
                    <li><strong>order</strong> = Ordena los flex items dependiendo el valor asignado, (con respecto a la direcci+on del main axis) valor mas alto = al final del main axis.</li>
                </ul>
            </TopicContainer>
            <TopicContainer id="grid" topic="Display Grid" ytUrl="https://youtu.be/OWKXEJN67FE?t=21901">
                <p>
                Grid se utiliza para crear diseños de cajas flexibles y permitir un posicionamiento flexible de los elementos hijos dentro de un contenedor, utilizando un modelo de layout de cuadrícula. Con display: grid, se puede dividir el contenedor en filas y columnas, y colocar los elementos hijos en cualquier celda de la cuadrícula. 
                </p>
                <h4> Nuevos valores de medida/tamaño:</h4>
                <ul>
                    <li><strong>fr</strong> = {`Unidad de medida "Fracción" (parecia al flex-grow). Ajusta los tamños por % cuando sobra, y cuando falta tamaño.`}</li>
                    <li><strong>auto-fill</strong> =  {`Efecto de flex-wrap + Genera grid implicito ilimitado + LIMITA el tamaño máximo de las columnas (logic?).`}</li>
                    <li><strong>auto-fit</strong> = {`Efecto de flex-wrap + Genera el (grid implicito) MÍNIMO indispensable + tamaño de columnas máximo sin limite.`}</li>
                    <li><strong>auto</strong> = {`Tamaño mínimo (el contenido del contenedor), tamaño máximo ilimitado.`}</li>
                    <li><strong>{`minmax(min,max)`}</strong> = Configura el tamaño mínimo y máximo de la celda.</li>
                    <li><strong>min-content</strong> = {`El valor de la celda será igual al tamaño minimo de su contenido (una palabra, por ejemplo)`}.</li>
                    <li><strong>max-content</strong> = {`El valor de la celda será igual al tamaño máximo de su contenido (un texto por ejemplo)`} </li>
                    <li><strong>span x</strong> = {`Valor para asignar cuantas lineas sumar (en filas o columnas), para que finalice la celda/el area creada.`}</li>
                </ul>
                <h4> Propiedades correspondientes al <em>grid-container</em>:</h4>
                <CodeBox lang="css"> 
                {
`* {
    display: grid;
    gap: 10px;

    /* DEFINICION DE ESTRUCTURA OPC 1 ___ */
    grid-template-rows: auto auto ;
    grid-template-columns: 10em 150px 20% 1fr;
    grid-template-columns: repeat(3, 150px) 20% 1fr;
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    /* repeat(cantidad, minmax(tamaño minimo, tamaño máximo)) */
    grid-template-columns: repeat(auto-fill, minmax(min-content, 200px));
    grid-template: 10% 10% / 20% 20%;

    /* DEFINICION DE DIMENSIONES OPC 2 (POR LÍNEAS A LOS GRID-ITEMS) ___ */
    grid-column: 1 / -1;
    /* Empieza en la primer (1) linea, y termina en la ultima linea (-1) */
    grid-row: 3 / span 2;
    /* Arranca en la linea (3), y ocupa dos filas (hasta la 5) */

    /* DEFINICION DE DIMENSIONES OPC 3 (Creación de areas) ___ */
    grid-template-areas: "header header header" "aside main main" "aside main main" "footer footer footer";
    grid-area: footer;

    /* DEFINICION DE DIMENSIONES OPC 4 (Creación de areas por lineas) ___ */
    grid-area: 1 / 2 / -1 / -1;
    /* start row / start column / end row / end column */

    /* DEFINICION DE DIMENSIONES OPC 5 (Nombramos las lineas) ___ */
    grid-template-rows: [f-line] 150px [s-line] 150px [t-line]150px;
    grid-row: f-line / t-line;

    /* - POSICIONAMIENTO - */
    justify-content: space-around;
    align-content: space-between;
    justify-items: center;
    align-items: center;
    place-content: center;
    place-items: center;
}`
                }
                </CodeBox>
                <h4> Definición de la estructura:</h4>

                <ul>
                    <li><strong>grid-template-rows</strong> = Define las dimensiones de nuestras filas.</li>
                    <li><strong>grid-template-columns</strong> = Define las dimensiones de nuestras columnas.</li>
                    <li><strong>grid-template</strong> = Short de rows / columns.</li>
                    <li><strong>grid-template-areas</strong> = Armamos la estructura de la grilla con areas nombradas.</li>
                    <li><strong>gap</strong> ={` Define el espacio que existirá entre celdas (rows & columns). Shorthand de column-gap y row-gap.`}</li>
                </ul>

                <h4> Posicionamiento:</h4>

                <ul>
                    <li><strong>justify-content & align-content</strong> = Se utilizan para posicionar todas las columnas y/o filas con respecto a su grid-container.</li>
                    <li><strong>justify-items & align-items</strong> = Se utiliza para posicionar los grid-items, no como todo un bloque, sino por celdas.</li>
                    <li><strong>place-content & place-items</strong> = Representan la union de justify y align en una sola sentencia.</li>
                </ul>

                <h4> Propiedades correspondientes a los <em>grid-items</em>:</h4>
                <CodeBox lang="css"> 
                {
`* {
    justify-self: end;
    align-self: start;
    place-self: center; /* combina justify/align-self */
    grid-column: 3 / 4;
    order: 3; 
    grid-area: 1 / 2 / -1 / -1; /* start row / start column / end row / end column */
}`
                }
                </CodeBox>
                <ul>
                    <li><strong>grid-column & grid-row</strong> = Define en que linea comenzara y finalizara cada celda/area que creemos.</li>
                    <li><strong>align-self & justify-self</strong> = {`Se utiliza para posicionar a una celda/grid-item en particular. -> shorthand = (place-self: align justify).`}</li>
                    <li><strong>order</strong> = Aplica igual que en flex, sirve para elegir el orden en el que iran los grid-items.</li>
                    <li><strong>grid-area</strong> = {`Definimos a que area pertenece el grid-item. (se usa cuando creamos las dimensiones del grid con grid-template-areas)`}</li>
                    <ul>
                        <li>{`row = Las celdas implicitas se iran colocando/ordenando en filas (Valor default).`}</li>
                        <li>column = Las celdas implicitas se iran colocando/ordenando en columnas.</li>
                        <li>{`dense = Se intenta rellenar de forma automatica, todos los huecos disponibles (si hubiere).`}</li>
                    </ul>
                </ul>
                <h4> Propiedades correspondientes al <em>grid-implicito</em>:</h4>
                
                <CodeBox lang="css"> 
                {
`* {
    grid-auto-rows: 200px;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    grid-auto-flow: dense;
}`
                }
                </CodeBox>
                <small> Entendemos al grid implicito, como las celdas extras (indefinidas) que pudieran llegar a generarse. Es decir, las que no han sido declaradas con anteriorioridad (grid explicito)</small>
                <ul>
                    <li><strong>grid-auto-rows & grid-auto-columns</strong> = {`Propiedades para definir las dimensiones de las celdas implicitas. (funcion = grid-template-columns/rows).`}</li>
                    <li><strong>grid-auto-flow</strong> = {`Definimos en que direccion se iran generando las celdas implicitas (filas o columnas).`}</li>
                </ul>
            </TopicContainer>

        </Information>
    )
}

export default Display