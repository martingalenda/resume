import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import NavigationIcon from '@mui/icons-material/Navigation';

export const actions = [
    { 
        icon: <SkipNextIcon />,
        name: 'Next Topic',
        action: () => console.log("1")    
    },
    { 
        icon: <SkipPreviousIcon />,
        name: 'Prev Topic',
        action: () => console.log("2")    
    },
    { 
        icon: <NavigationIcon />,
        name: 'Go top',
        action: () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
          }    
    },
];