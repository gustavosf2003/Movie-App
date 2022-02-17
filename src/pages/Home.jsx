import { Link } from 'react-router-dom'
function Home(){
    return(
        <div>
            <p>Página 1</p>
            <li>
                <Link to="/description">description</Link>
            </li>
        </div>
    )
}
export default Home