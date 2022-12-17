import { useSelector, useDispatch } from 'react-redux';

export default function FavFacts()
{
    const favFacts = useSelector((state)=>state.favFacts)
    const dispatch = useDispatch()

    function removeFact(index)
    {
        dispatch({type: 'remFact', index:index})
    }
    return (
        <div>
            <h1>Fav Facts</h1>
            <ol>
                {
                    favFacts.map((fact,index)=>
                        <li style={{marginBottom:"1rem"}} key={fact}>{fact} <button onClick={()=>removeFact(index)} >Remove</button></li>
                    )
                }
            </ol>
        </div>
    )
}