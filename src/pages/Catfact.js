import {useQuery} from '@tanstack/react-query'
import Axios from "axios";

export default function Catfact()
{
    async function getCatFact()
    {
        const res = await Axios.get("https://catfact.ninja/fact")
        const data = res.data 
        return data
    }
    const {data:catFact, isLoading, isError, refetch} = useQuery(["cat"], getCatFact);
    return(
        <>
            <h1>Cat</h1>
            {
                isError?(
                    <p>Couldn't grab a cat fact :O</p>
                ):
                (
                    !isLoading?(
                        <>
                            <p>{catFact?.fact}</p>
                            <button onClick={refetch}>New Fact</button>
                        </>
                    ):
                    (
                        <p>Grabbing Cat Fact</p>
                    )
                )      
            }
        </>
    )
}