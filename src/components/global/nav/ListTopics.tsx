// ? MUI list
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// ? Rutas
import { NavLink } from "react-router-dom";
// ? Icons
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';
// ? REACT
import {useState} from 'react';
import { Link } from 'react-router-dom';


// Imprimi nombre de tecnologias y topicos de estas
const ListTopics = ({data}: any) => {

    const [openStates, setOpenStates] = useState(data.map(()=> false));

    const handleClick = (i: any) => {
        setOpenStates( (prevOpenStates: any) => {
            const newOpenStates = [...prevOpenStates];
            newOpenStates[i] = !newOpenStates[i]
            return newOpenStates
    })
    };

    return (
    <>
        {
            data.map((tema: any, i: any) => (
                <div className="topic" key={i}>
                    <div className="topic__content">
                        <ListItemButton sx={{width: '85%'}} onClick={() => handleClick(i)}>
                            <ListItemText className="topic__name" primary={tema.name} />
                            {openStates[i] ? <ExpandLess sx={{ fontSize: '1em' }}/> : <ExpandMore sx={{ fontSize: '1em' }}/>}
                        </ListItemButton>
                        <div className="topic__urls">
                            {
                                tema.doc &&
                                    <Link to={tema.doc} target="_blank"> 
                                        <LanguageIcon sx={{ fontSize: '1em' }}/> 
                                    </Link> 
                            }
                            {
                                tema.tutorial &&
                                    <Link to={tema.tutorial} target="_blank"> 
                                        <YouTubeIcon sx={{ fontSize: '1em' }}/> 
                                    </Link> 
                            }
                        </div>
                    </div>

                    <Collapse in={openStates[i]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {
                                tema.array.map((data: any, j: any)=> (
                                    <NavLink className="topic__redirect" key={j} to={data.url}>
                                        <ListItemButton sx={{ pl: 4 }}>
                                                <ListItemText primary={data.topic} />
                                        </ListItemButton>
                                    </NavLink>
                                )) 
                            }
                        </List>
                    </Collapse>
                </div>
            ))
        }
    </>
    )
}

export default ListTopics 