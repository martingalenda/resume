import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const POOJS = () => {

    return (
        <Information subTopic={data.menu[0].array[3].array[6]}>

            <TopicContainer id="requerimientos" topic="Requerimientos de los lenguajes POO">
                <small><strong style={{textTransform: 'uppercase'}}>POO</strong>: Paradigma de programación enfocado en resolver problemas mediante objetos en lugar de funciones.</small><br/><br/>
                <span>El objetivo principal de este paradigma es proveer/garantizar modularidad y reusabilidad de código.</span><br/>
                <span>Para que un lenguaje (POO) pueda cumplir con estos objetivos, debe cumplir con ciertos requisitos:</span><br/>
                <ul>
                    <li><strong>Modularidad</strong>: Capacidad de modelar problemas a travez de objetos.</li>
                    <ul>
                        <li><strong>Asosiación</strong>: Capacidad de que los objetos refieran a otros objetos. Es decir, poder unir/enlazar dos objetos.</li>
                        <li><strong>Agregación</strong>: Capacidad de referir objetos independientes</li>
                        <li><strong>Composición</strong>: Capacidad de referir objetos dependientes</li>
                    </ul> 
                    <li><strong>Principios</strong> dedicados a la orientación de objetos, para proveer modularidad y reusabilidad de código</li>
                    <ul>
                        <li><strong>Encapsulamiento</strong>: Establece que los datos (propiedades) y las operaciones (métodos) relacionados deben estar agrupados y ocultos dentro de un objeto.</li>
                        <li><strong>Polimorfismo</strong>: Capacidad que poseen los objetos para comportarse distinto bajo un mismo metodo (debido a sus propiedades).</li>
                        <li><strong>Herencia (extend & super)</strong>: Capacidad jerarquica de los objetos (clases) para heredar propiedades y metodos de otros objetos (clases) "padres"`</li>
                        <li><strong>Abstracción</strong>: Es el proceso de identificar las características esenciales de un objeto y modelar solo lo necesario para su representación. Permite simplificar y enfocarse en los aspectos relevantes de un objeto, ignorando los detalles innecesarios.</li>
                    </ul> 
                </ul> 
            </TopicContainer>
            <TopicContainer id="conceptos" topic="Conceptos relacionados" ytUrl="https://youtu.be/nS5FmAx4u_0?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=170">
                <ul>
                    <li><strong>Clases</strong>: Podriamos verlas como "Fabricas de objetos", o "Modelo de datos (propiedades y funciones)"</li>
                    <li><strong>Objetos</strong>: Todos los objetos creados/instanciados por "las fabricas" (es decir, las clases).</li>
                    <li><strong>Atributos</strong>: Caracteristicas/Propiedades (variables) de los objetos.</li>
                    <li><strong>Métodos</strong>: Funciones propias de los objetos en cuestión (internas).</li>
                    <li><strong>Constructor</strong>: Método principal y "obligatorio" de las clases para  crear (plantillas) objetos.</li>
                    <li><strong>this</strong>: Hace referencia al contexto del objeto que ejecuta el método/función en un momento dado.</li>
                </ul>
            </TopicContainer>
            <TopicContainer id="metodos" topic="Tipos de métodos" ytUrl="https://www.youtube.com/watch?v=TEzu31q9MVA&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=27">
                <ul>
                    <li><strong>Métodos estáticos</strong>: Si colocamos (static) antes del nombre del metodo, podremos acceder al mismo desde la clase: (clase.metodo) sin necesidad de que haya instanciado objetos como tal.</li>
                    <li><strong>Métodos accesores</strong>: Se utilizan comúnmente para encapsular la lógica y el acceso a los atributos o propiedades de la clase. Estos métodos son parte del concepto de encapsulamiento, que es uno de los principios fundamentales de la programación orientada a objetos.</li>
                    <ul>
                        <li><strong>get (getter)</strong>: Se utiliza para obtener los valores de un objeto (propiedades).</li>
                        <li><strong>set (setter)</strong>: Se utiliza para manipular los valores de un objeto (métodos que modifican las propiedades).</li>
                    </ul>
                </ul>
            </TopicContainer>
            <TopicContainer id="objetos" topic="Ejemplo de clases/objetos" ytUrl="https://youtu.be/C86JvqET61A?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=93">
                <CodeBox lang="javascript"> 
                    {
`class Animales {
    // METODO CONSTRUCTOR. En este caso solicita 3 parametros
    constructor(especie,edad,color) { 
        // PROPIEDADES (key = value)
        // this.propiedad (this = Hace referencia al objeto en cuestión "Animales" en este caso)
        this.especie = especie;
        this.age = edad; 
        this.color = color; 
        this.extra = "Ninguno"; // En lugar de solicitarla, le asignamos un valor por defecto.
        this.sleeping = true;
        this.info = \`- Especie: \${especie} - Edad: \${edad} - Color: \${color}\`;
    };

    // MÉTODOS
    verInfo() {
        console.log(this.info); // Imprime la propiedad info del objeto
    };
    set setModificarEdad(newEdad) {
        this.age = newEdad;
    };
    get getEdad(){
        return this.age;
    }
};

// ? CLASE PERRO - HIJA DE CLASE ANIMAL (HEREDA TODO DE ELLA)
    class Perros extends Animales {
        constructor(especie,edad,color,raza){
            super(especie,edad,color); // Hereda las propiedades de su clase padre (Animales)
            this.raza = raza;
        };
    
        ladrar() {
            console.log("WAW!");
        };
    
        // El metodo tipo static permite ser invocado fuera de la clase, sin necesidad de que exista un objeto instanciado
        static animalInfo() {
            console.log("Somos los mejores amigos del hombre")
        } 
    };

// ? CREACIÓN DE OBJETOS
// Data: Los objetos no pueden poseer el mismo nombre que su clase

    // Creo un nuevo objeto (INSTANCIA) de la clase animal, llamado gato.
        const gato = new Animales("gato",2,"gris");
    // Creo un nuevo objeto (INSTANCIA) de la clase perro llamado perro.
        const perro = new Perros("perro",5,"marron","Australian Sheperd");

// ? LLAMADAS
    console.log(perro) // Imprimo el objeto instanciado (perro)
    console.log(gato.info) // Imprimo la propiedad info del objeto (gato)
// Llamo al metodo (verInfo) heredado de la clase Animales
    perro.verInfo();
// Invocando el metodo static (animalInfo) de la clase Perros
    Perros.animalInfo() 

// Los tipos de metodos get y set se utilizan como si fueran atributos/propiedades
// A continuación invoco los metodos getEdad y setModificarEdad como ejemplo: 
    console.log(perro.getEdad)
    perro.setModificarEdad = 8 // Estariamos utilizando el metodo set
    console.log(perro.getEdad)`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="call_apply_bind" topic="This - call, apply & bind" ytUrl="https://youtu.be/qy6IIjlykD0?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&t=141">
                <br/>
                <h4><strong>this</strong>: Comportamiento por defecto</h4> 
                <p>Como vimos, anteriormente this hace referencia al contexto de ejecución en el que es invocado. Por lo que su valor variará dependiendo de ello. Veamos</p> 
                <CodeBox lang="javascript"> 
                    {
`// Si this no se encuentra dentro de una función regular, o método (otro scope), pertenecerá al objeto global de JS (window), y en NodeJS, al objeto global.
// Si usaramos JS en modo estricto con "use strict", this pasaría a ser undefined por defecto.

// console.log(this) // Por defecto como mencionamos, hace referencia al objeto global window del navegador
this.lugar = "Scope GLOBAL (window)"

function saludar(nombre) {
    // this.lugar = "Scope de FUNCIÓN"
    console.log(\`Hola \${nombre} desde el contexto: \${this.lugar}\`)
}

// En primer instancia el motor buscara si this se encuentra declarado en la misma función en donde es llamada
// Si no lo encuentra, continuará buscando en el scope padre (desactivar lo comentado para visualizarlo)
    saludar("Bepi")`
}
</CodeBox>
                <h4><strong>Call & Apply</strong>: Métodos útiles para declarar/invocar distintos scopes/contextos de this</h4> 
                <CodeBox lang="javascript"> 
                    {
`this.lugar = "Scope GLOBAL (window)"

function saludar(nombre) {
    // this.lugar = "Scope de FUNCIÓN"
    console.log(\`Hola \${nombre} desde el contexto: \${this.lugar}\`)
}

const obj = {
    lugar: "Scope de OBJETO LITERAL (obj)"
}
// El metodo call invoca la función con el contexto this especificado. En este caso, referencia al contexto del objeto (obj), el cual siempre es enviado como primer argumento. Como segundo argumento, los parametros solicitados, en este caso el nombre.
    saludar.call(obj, "Martín") 
// null en este caso hace referencia al contexto por defecto de this (objeto window)
    saludar.call(null, "Bepsoñar") 

// El metodo apply funciona igual que el metodo call, pero los parametros se envian en un array
    saludar.apply(obj, ["Martín"])`
}
</CodeBox>

        <h4><strong>bind</strong>: Vincula un método o función con un objeto determinado, pero, al contrario de call & apply, este no se ejecuta de forma inmediata, ya que no se vincula con la invocación, sino con la declaración de el método/objeto en cuestión dejandolo vinculados previamente para su posterior ejecución.</h4> 
        <CodeBox lang="javascript"> 
            {
`const bindeado = {
    nombre: "Martincho"
}

const persona = {
    nombre: "El bind ignora este nombre",
    lugar: "OBJETO (persona)",
    saludar: function () {
        console.log(\`Hola \${this.nombre}\`)
    }.bind(bindeado)
}

persona.saludar()`
                    }
                </CodeBox>
            </TopicContainer>
        </Information>
    )
}

export default POOJS



