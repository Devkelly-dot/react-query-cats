import '../styles/Nav.css'
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '..';
import React from 'react';

export default function Nav()
{
    const {theme, setTheme} = React.useContext(ThemeContext)
    const navigate = useNavigate()

    function nav(address)
    {
        navigate(address);
    }
    function switchTheme()
    {
        if(theme === "dark")
            setTheme("light")
        else setTheme("dark")
    }
    return(
            <header className={`nav ${theme==="dark"&&"dark"}`}>
                <div onClick={()=>{nav('/')}} style={{cursor:'pointer', marginRight:"15px"}}>Home</div>
                <div onClick={()=>{nav('/cat')}} style={{cursor:'pointer', marginRight:"15px"}}>Large Fact</div>
                <div onClick={()=>{nav('/fav')}} style={{cursor:'pointer', marginRight:"15px"}}>Fav Facts</div>
                <div onClick={switchTheme} style={{cursor:'pointer', marginRight:"15px"}}>{theme} mode</div>
            </header>
    )
}