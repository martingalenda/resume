import NavigationIcon from '@mui/icons-material/Navigation';

const GoTop = () => {

    const topHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }  

    return (
        <div className="goTop" onClick={() => topHandler()}>
            <NavigationIcon/>
        </div>
    )
}

export default GoTop