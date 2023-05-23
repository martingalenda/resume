import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const AlmacenamientoLocal = () => {

    return (
        <Information subTopic={data.menu[0].array[3].array[16]}>

            <TopicContainer id="local" topic="Local storage" ytUrl="https://youtu.be/EbMi1Qj4rVE?t=7989">
                <ul>
                    <li>Se utiliza para guardar los datos de forma persistente en el ordenador del usuario (en el disco duro).</li> 
                    <li>Los datos serán almacenados hasta que nosotros mismos programemos el borrado de los datos, o hasta que el usuario decida borrarlos desde su navegador.</li> 
                </ul> 
                <CodeBox lang="javascript"> 
                    {
`localStorage.setItem("user", "Bepi") // Agrega una variable a localStorage ("user") con valor ("Bepi")
localStorage.getItem("user") // Accede al valor de la variable/key del localStorage ("user")
localStorage.removeItem("user") // Eliminar la key ("user") con su respectivo valor
localStorage.clear() // Elimina todo lo almacenado en localStorage

document.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("user")) {
        alert("LocalStorage esta guardando el usuario")
    } else {
        alert("El usuario esta deslogeado")
    }
})` 
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="session" topic="Session storage" ytUrl="https://youtu.be/EbMi1Qj4rVE?t=7989">
                <ul>
                    <li>Se utiliza para guardar los datos de forma persistente en el ordenador del usuario (en la memoria RAM).</li> 
                    <li>En este caso, los datos se pierden de forma automatica cuando el usuario cierra la página/pestaña, o el navegador.</li> 
                </ul> 
                <CodeBox lang="javascript"> 
                    {
`sessionStorage.setItem("user", "Bepi") // Agrega una variable a sessionStorage ("user") con valor ("Bepi")
sessionStorage.getItem("user") // Accede al valor de la variable/key del sessionStorage ("user")
sessionStorage.removeItem("user") // Eliminar la key ("user") con su respectivo valor
sessionStorage.clear() // Elimina todo lo almacenado en sessionStorage

document.addEventListener("DOMContentLoaded", (e) => {
    if (sessionStorage.getItem("user")) {
        alert("sessionStorage esta guardando el usuario")
    } else {
        alert("El usuario esta deslogeado")
    }
})`
                    }
                </CodeBox>
            </TopicContainer>
            <TopicContainer id="cookies" topic="Cookies">
                <ul>
                    <li>Se utiliza para guardar los datos de forma persistente en el ordenador del usuario (en el disco duro).</li> 
                    <li>Los datos almacenados poseen una fecha de caducidad determinada, en donde se eliminarán automaticamente.</li> 
                </ul>
                <CodeBox lang="javascript"> 
                    {
`// Creamos una cookie
    document.cookie = "usuario=marko; expires=Thu, 31 Dec 2020 12:00:00 UTC; path=/"
// Mostramos la cookie
    console.log(document.cookie)
// Modificar
    document.cookie = "usuario=saraza1234; expires=Thu, 31 Dec 2020 12:00:00 UTC; path=/"
// Eliminar
    document.cookie = "usuario=saraza1234; expires=Thu, 31 Dec 2021 12:00:00 UTC; path=/"`
                    }
                </CodeBox>
            </TopicContainer>
        </Information>
    )
}

export default AlmacenamientoLocal