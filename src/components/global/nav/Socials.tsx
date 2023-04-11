import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

 
const Socials = () => {
    return (
        <div className="socials">
            <Link to="https://martingalenda.github.io/portfolio/" target="_blank"><img src="/mg.svg" alt="Logo MG" /></Link>
            <Link to="https://github.com/martingalenda/" target="_blank"><GitHubIcon style={{fontSize: '1.5em'}} /></Link>
            <Link to="https://www.linkedin.com/in/martingalenda/" target="_blank"><LinkedInIcon style={{marginTop: '-0.05em'}} /></Link>
        </div>
    )
}

export default Socials 