import { useSelector } from 'react-redux';


export default function TopFact()
{
    const favFacts = useSelector((state)=>state.favFacts)
    let favFact = "";
    if (favFacts.length > 0)
        favFact = favFacts[favFacts.length-1]

    return(
        <div style={{minHeight:"4em"}}>
            {favFact!==""?<>Most recent fact: <b>{favFact}</b></>:<></>}
        </div>
    )
}