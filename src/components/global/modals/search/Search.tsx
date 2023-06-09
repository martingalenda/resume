import SearchInput from './SearchInput'
import {useEffect} from 'react'


const Search = ({close} : any) => {
    
    useEffect(() => {
        const detectKeys = (e : any) => {
            if (e.key === 'Escape') {
                close(false)
            }
        }
        document.addEventListener('keyup', detectKeys)
        return () => {
            document.removeEventListener('keyup', detectKeys)
        }
    },[])


    return (
        <div className="search__modal">
            <SearchInput close={close}/>
        </div>
    )
}

export default Search