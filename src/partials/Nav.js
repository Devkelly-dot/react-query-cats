import '../styles/Nav.css'
import { useNavigate } from 'react-router-dom';

export default function Nav()
{
    const navigate = useNavigate()

    function nav(address)
    {
        navigate(address);
    }
    return(
        <header style={{display:"flex"}}>
            <div onClick={()=>{nav('/')}} style={{cursor:'pointer', marginRight:"5px"}}>Home</div>
            <div onClick={()=>{nav('/cat')}} style={{cursor:'pointer'}}>Cat Facts</div>
        </header>
    )
}