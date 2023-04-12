import NavigationIcon from '@mui/icons-material/Navigation';
import { useState, useEffect } from 'react';

const GoTop = () => {

    const [scrollY, setScrollY] = useState(0)
    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        const scrollYDetect = () => setScrollY(window.pageYOffset)
        scrollYDetect();
        window.addEventListener("scroll", scrollYDetect)
        if (scrollY > 300) {
            setShowBtn(true)
        }
        return () => {
            window.removeEventListener("scroll", scrollYDetect)
        }
    }, [scrollY]);

    const topHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }  

    return (
        <>
            {
                showBtn && 
                    <div className="goTop" onClick={() => topHandler()}>
                        <NavigationIcon/>
                    </div>
            }
        </>
    )
}

export default GoTop