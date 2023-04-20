import GoTop from '../../global/buttons/goTopBtn/GoTop';
import SubTopic from '../../global/subTopic/SubTopic';

const Information = ({children, subTopic = false}: any) => { 

    return (
        <>
            <section className="information">
                {children}
            </section>

            <GoTop/>
            <SubTopic subTopics={subTopic.subTopic}/>
        </>
    )
}

export default Information