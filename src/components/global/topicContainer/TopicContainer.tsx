import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';

const TopicContainer = ({children, topic, id, docUrl, ytUrl} : any) => {
    return (
        <div id={id} className="topic__container">
            <div className="topic__title">
                <h2> {topic} </h2>
                <div className="topic__urls">
                    {
                        docUrl &&   
                        <Link to={docUrl} target="_blank"> 
                            <LanguageIcon/> 
                        </Link> 
                    }
                    {
                        ytUrl && 
                        <Link to={ytUrl} target="_blank"> 
                            <YouTubeIcon/> 
                        </Link> 
                    }
                </div>
            </div>

            {children}
        </div>
    )
}

export default TopicContainer 