
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

const SearchBtn = () => {
    return (
        <div className="search">
            <ManageSearchIcon/>
            <span>Look for a topic...</span>
            <div className="search__atajo"><span>Ctrl + k</span></div> 
        </div>
    )
}

export default SearchBtn