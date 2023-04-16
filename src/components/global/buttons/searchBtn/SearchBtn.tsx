
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import {useState, useEffect} from 'react';
import Search from '../../modals/search/Search';


const SearchBtn = () => {

    const [searchOpen, setSearchOpen] = useState(false)

    useEffect(() => {
        const detectKeys = (e : any) => {
            if (e.keyCode === 191) { // f10
                setSearchOpen(true)
            }
        }
        document.addEventListener('keyup', detectKeys)
        return () => {
            document.removeEventListener('keyup', detectKeys)
        }
    },[])


    return (
        <>
            <div className="search-btn" onClick={() => setSearchOpen(true)}>
                <ManageSearchIcon/>
                <span>Look for a topic...</span>
                <div className="search-btn__shortcut">
                    <span>ç</span>
                </div> 
            </div>
            {
                searchOpen && <Search close={setSearchOpen}/>
            }
        </>
    )
}

export default SearchBtn