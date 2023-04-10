import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Socials = () => {
    return (
        <div className="socials">
            <Link to="/" target="_blank"><img src="/mg.svg" alt="Logo MG" /></Link>
            <Link to="/" target="_blank"><GitHubIcon/></Link>
            <Link to="/" target="_blank"><LinkedInIcon/></Link>
        </div>
    )
}

export default Socials