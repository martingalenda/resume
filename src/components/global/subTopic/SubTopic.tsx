import { NavLink } from "react-router-dom"

const SubTopic = ({subTopics}: any) => {

    const goToTopic = (event: any) => {
        const destino = event.target.hash;
        const elemento = document.querySelector(destino);
        elemento.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            {
                subTopics &&
                    <nav className="subTopic">
                        <h2>Índice:</h2>
                        <ol>
                            {
                            
                                subTopics.map((topic: any, i: any)=>(
                                    <NavLink to={topic.url} onClick={(e) => goToTopic(e)} key={i}>
                                        <li>
                                            {topic.subTopic}
                                        </li>
                                    </NavLink> 
                                ))
                            }
                        </ol>
                    </nav>
            }
        </>

    )
}

export default SubTopic