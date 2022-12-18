import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { ThemeContext } from '..';

export default function FavFacts()
{
    const {theme, setTheme} = React.useContext(ThemeContext)
    const favFacts = useSelector((state)=>state.favFacts)
    const dispatch = useDispatch()

    function removeFact(index)
    {
        dispatch({type: 'remFact', index:index})
    }
    return (
        <div className={`container ${theme==="dark"&&"dark"}`}>
            <h1>Fav Facts</h1>
            <ol>
                {
                    favFacts.map((fact,index)=>
                        <li style={{marginBottom:"1rem"}} key={toString(index)+fact}>{fact} <button onClick={()=>removeFact(index)} >Remove</button></li>
                    )
                }
            </ol>
        </div>
    )
}