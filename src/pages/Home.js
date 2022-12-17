import {useQuery} from '@tanstack/react-query'
import Axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Home()
{
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
        dispatch({type: 'addFact', fact:fact})
        refetch()
    }

    const {data:catFact, isLoading, isError, refetch} = useQuery(["cat"], getCatFact);
    return(
        <>
            <h1>Home</h1>
            {
                isError?(
                    <p>Couldn't grab a cat fact :O</p>
                ):
                (
                    !isLoading?(
                        <>
                            <p>{catFact?.fact}</p>
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
        </>
    )
}