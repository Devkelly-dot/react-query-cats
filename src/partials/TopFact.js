import { useSelector } from 'react-redux';
import React from 'react';
import { ThemeContext } from '..';

export default function TopFact()
{
    const {theme, setTheme} = React.useContext(ThemeContext)
    const favFacts = useSelector((state)=>state.favFacts)
    let favFact = "";
    if (favFacts.length > 0)
        favFact = favFacts[favFacts.length-1]

    return(
        <div style={{minHeight:"4em"}} className={`container ${theme==="dark"&&"dark"}`}>
            {favFact!==""?<>Most recent fact: <b>{favFact}</b></>:<></>}
        </div>
    )
}