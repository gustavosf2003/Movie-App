import { Link } from 'react-router-dom'
function Movie(){
    return(
        <div>
            <p>Página 2</p>
            <li>
                <Link to="/">home</Link>
            </li>
        </div>
    )
}
export default Movie