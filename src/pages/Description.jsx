import { Link } from 'react-router-dom'
import './styles/description.css'
function Description(){
    return(
        <div>
            <p>Página 2</p>
            <li>
                <Link to="/">home</Link>
            </li>
        </div>
    )
}
export default Description