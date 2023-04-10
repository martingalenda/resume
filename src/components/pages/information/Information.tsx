import GoTop from '../../global/buttons/GoTop';
import SubTopic from '../../global/subTopic/SubTopic';

const Information = ({children, subTopic = false}: any) => { 

    return (
        <>
            <section className="information">
                {children}
            </section>

            <GoTop/>
            <SubTopic subTopics={subTopic}/>
        </>
    )
}

export default Information