/* Components */
import TopNav from "./TopNav";
import ListTechnologies from "./ListTechnologies";

const Nav = () => {
    return (
        <nav className="main__nav">
            <TopNav/>
            <ListTechnologies/>
        </nav>
    );
}

export default Nav