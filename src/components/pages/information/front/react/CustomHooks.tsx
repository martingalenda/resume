import Information from "../../Information"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"
import CodeBox from "../../../../global/code/CodeBox"

const CustomHooks = () => {

    return (
        <Information>

            <TopicContainer topic="Custom hooks" docUrl="https://es.react.dev/learn/reusing-logic-with-custom-hooks" ytUrl="https://www.youtube.com/watch?v=odpX-rJ_R4Q&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=24">
                <p>Los custom hooks son una funcionalidad poderosa y útil en React que permiten reutilizar lógica entre componentes de una forma más eficiente y organizada. <br/>Con los custom hooks se puede extraer la lógica común en una función personalizada, y usarla en diferentes componentes, lo que ayuda a reducir la duplicación de código, mejorar la legibilidad, y el mantenimiento. Al utilizar custom hooks, se pueden encapsular diferentes lógicas, como: el manejo de estados complejos, la gestión de efectos secundarios, el consumo de datos de API, entre otros. Además, los custom hooks se pueden compartir fácilmente entre diferentes proyectos y equipos de desarrollo.<br/>Cabe recalcar que el nombre de los custom hook debe iniciar con la palabra use en minúscula, de esta forma React comprende que se trata de un hook personalizado.</p> 
                <br/>
                <h4>EJ1: Un custom hook sumamente simple. Representa un contador:</h4> 
                <p>Creando el hook:</p> 
                <CodeBox lang="jsx">            
                    {
`import {useState} from "react";

export const useCounter = (initialValue) => {

    // DECLARO VARIABLES Y FUNCIONES
    let [numero, setNumero] = useState(initialValue)

    const incrementar = () => setNumero(numero + 1)
    const decrementar = () => setNumero(numero - 2)
    const reiniciar = () => setNumero(numero = 0)

    // RETORNO LO QUE SERÁ UTILIZADO EN OTROS COMPONENTES
    return { numero, incrementar, decrementar, reiniciar }
}`
                    }
                </CodeBox>
                <p>Usando el hook:</p> 
                <CodeBox lang="jsx"> 
                {
`import {useCounter} from "../../hooks/useCounter";

const UsandoCounter = () => {

    const {numero, incrementar, decrementar, reiniciar} = useCounter(5);

    return (
        <section>
          <h1> Custom Hook - useCounter </h1>
          <h2> El número es {numero}</h2>
          <button onClick={incrementar}>+</button>
          <button onClick={reiniciar}>0</button>
          <button onClick={decrementar}>-</button>
        </section>
    )
}

export default UsandoCounter`
    }
    </CodeBox>
               <br/>
                <h4>EJ2: Un custom hook que realiza una petición generica utilizado Fetch de forma asíncrona.</h4> 
                <p>Creando el hook:</p> 
                <CodeBox lang="jsx"> 
                    {
`import {useState, useEffect} from 'react';

export const useFetch = (url) => {

    const [data, setData] = useState() // Corresponde a la data general que devolverá la petición
    const [isPending, setIsPending] = useState(true) // Corresponde al estado de la petición
    const [error, setError] = useState(false) // Corresponde al posible error de respuesta
 
    // El siguiente efecto representa la lógica de la petición.
    // Se ejecuta cuando la propiedad (url) recibida se ve modificada
    useEffect(() => { 
        const getData = async (url) => {
            try {
                let res = await fetch(url)

                // Si existe error en la respuesta, retornamos el error en un objeto
                if (!res.ok) {
                    let e = {
                        err: true,
                        status: res.status,
                        statusText: !res.statusText ? "Ocurrio un eror" : res.statusText
                    }
                    throw e
                }

                let data = await res.json()

                setData(data)
                setIsPending(false)
                setError( {err:false} )
            }
            catch (e){
                setIsPending(true)
                setError(e)
            }
        }

        getData(url)

    },[url])

    // Retorna un efecto con las 3 variables de estado
    return { data, isPending, error }
}`
                    }
                </CodeBox>
                <p>Usando el hook:</p> 
                <CodeBox lang="jsx"> 
                    {
`import React, {useState, useEffect} from "react";
import {useCounter} from "../../hooks/useCounter";
import { useFetch } from "../hooks/useFetch.jsx";

const PokemonList = ({avatar, name}) => {
    return(
        <figure>
            <img src={avatar} alt={name} />
            <figcaption>{name}</figcaption>
        </figure> 
    )
}


const UsandoFetch = () => {

    let [pokemons, setPokemons] = useState([]);
    let url = "https://pokeapi.co/api/v2/pokemon/"
    let {data, isPending, error} = useFetch(url);
    // console.log(pokemons) 
    // Muestra como se van añadendo uno a uno los objetos al array

    // Continuamos con la petición
    useEffect(() => {
        // console.log(data)
        if (data != null) {
            const getPokemons = async () => {
                data.results.forEach(async (el) => {
                    let res = await fetch(el.url),
                        json = await res.json();
                    // Creo un objeto con los datos de interes
                    let pokemon = {
                      id: json.id,
                      name: json.name,
                      avatar: json.sprites.front_default,
                    };
                    // Seteamos el estado pokemons, generando un nuevo array, concatenando el nuevo objeto,
                     // con todos los objetos obtenidos previamente. Así acumulamos el total de 20 pokemones en este caso.
                    setPokemons((pokemons) => [...pokemons, pokemon]);
                });
            };
            getPokemons();
        }
    }, [data]);


    return (
        <section>
            <h1> Custom Hook - Petición Asíncrona con useFetch </h1>

            { pokemons.length === 0 ? (
                <h3>Cargando...</h3>
            ) : (
                <section className="pokemons">
                    {pokemons.map((el, i) => (
                        <PokemonList key={i} name={el.name} avatar={el.avatar} />
                    ))}
                </section>
            )}
                    
            { error.err === true &&
                <>
                    <h3>Is pending? {JSON.stringify(isPending)}</h3>
                    <h3>{JSON.stringify(error.status)} - {JSON.stringify(error.statusText)}</h3>
                </>
            }
        </section>
    )
}

export default UsandoFetch`
                    }
                </CodeBox>
                <br/>
                <h4>EJ3: Un custom hook que activa o desactiva un modal.</h4> 
                <CodeBox lang="jsx"> 
                    {
`import {useState} from 'react';

export const useModals = (initialState = false) => {

    let [active, setActive] = useState(initialState)

    let openModal = () => {
        setActive(true) 
    }
    let closeModal = () => {
        setActive(false) 
    }

    return [active, openModal, closeModal]
}`
                    }
                </CodeBox>
            </TopicContainer>

        </Information>
    )
}

export default CustomHooks