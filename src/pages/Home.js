import {useQuery} from '@tanstack/react-query'
import Axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '..';
import React from 'react';

export default function Home()
{
    const {theme, setTheme} = React.useContext(ThemeContext)
    const navigate = useNavigate()
    const favFacts = useSelector((state)=>state.favFacts)
    const dispatch = useDispatch()

    function nav(address)
    {
        navigate(address);
    }

    async function getCatFact()
    {
        const res = await Axios.get("https://catfact.ninja/fact")
        const data = res.data 
        return data
    }

    function favThisFact(fact)
    {
        for(let i in favFacts)
        {
            if(favFacts[i]===fact)
            {
                refetch()
                return false;
            }
        }

        dispatch({type: 'addFact', fact:fact})
        refetch()
        return true;
    }

    const {data:catFact, isLoading, isError, refetch} = useQuery(["cat"], getCatFact);
    return(
        <div className={`container ${theme==="dark"&&"dark"}`}>
            <h1>Home</h1>
            {
                isError?(
                    <p>Couldn't grab a cat fact :O</p>
                ):
                (
                    !isLoading?(
                        <>
                            <p  style={{minHeight:"3em"}}>{catFact?.fact}</p>
                            <button onClick={()=>favThisFact(catFact?.fact)}>Add To Favorites</button>
                            <button onClick={refetch}>New Fact</button>
                        </>
                    ):
                    (
                        <p>Grabbing Cat Fact</p>
                    )
                )      
            }
            <h2>Your favorite facts</h2>
            <ol>
            {
                favFacts.slice(0,5).map((fact,index)=><li key={toString(index)+fact}>{fact}</li>)
            }
            </ol>
            {
                favFacts[5]?<p style={{cursor:"pointer"}} onClick={()=>nav('/fav')}>... click here to see more</p>:<></>
            }
        </div>
    )
}