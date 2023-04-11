import ListTechnologies from "./ListTechnologies";
import TopNav from "./TopNav";

const Nav = () => {

    return (
        <nav className="main__nav">
            <TopNav/>
            <ListTechnologies/>
        </nav>
    );
  }

export default Nav