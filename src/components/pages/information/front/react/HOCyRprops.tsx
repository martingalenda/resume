import Information from "../../Information"
import data from "../../../../data/data"
import TopicContainer from "../../../../global/topicContainer/TopicContainer"

const HOCyRprops = () => {
    return (
        <Information subTopic={data.menu[0].array[5].array[16]}>

            <TopicContainer id="hoc" topic="HOC">
                <p>
                    .
                </p>
            </TopicContainer>
            <TopicContainer id="rp" topic="Render Props">
                <p>
                    .
                </p>
            </TopicContainer>
    </Information>
    )
}

export default HOCyRprops