import { Button } from "@mui/material";
import ListTechnologies from "./ListTechnologies";
import Search from "./Search";
import Socials from "./Socials";

const Nav = () => {

    return (
        <nav className="main__nav">
                <Socials/>
                {/* <Search/> */}
            <ListTechnologies/>
        </nav>
    );
  }

export default Nav