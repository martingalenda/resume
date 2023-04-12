import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from "react-router-dom";
import { subTopics } from '../../../data/subTopics';

const SearchInput = ({close} :any) => {

  const options = subTopics.map((option) => {return {...option}});

  const navigate = useNavigate()
  
 const optionSelected = (option: any) => {
    close(false)
    navigate(option.url)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
 }

  return (
    <div className="search">
      <div className="search__container">
        <Autocomplete
          id="grouped-demo"
          options={options}
          onChange={(e, option) => optionSelected(option)}
          groupBy={(option) => option.category}
          getOptionLabel={(option) => option.title}
          sx={{ width: '41.5em', margin: '0 auto 22em', background: '#111626', padding: '1em 2em' }}
          renderInput={(params) => <TextField {...params} autoFocus label="Que es lo que buscas?" />}
        />
      </div>
    </div>
  );
}

export default SearchInput

