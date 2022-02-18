import { Link } from 'react-router-dom'
import Imdb from '../assets/img/imdb.png'
import PowerPuff from '../assets/img/powerpuff.png'
//styles
import './styles/home.css'
function Home(){
    return(
        <div>
            <section className="movie_title">
                <article className="movie_description">
                    <article>
                        <h3>PowerPuff Girls</h3>
                        <article className="movie_subtitle">
                            <article className="imdb_content">
                                <img className="imdb_image" src={Imdb} alt="Imdb Image" />
                                <p>9.5 </p>
                            </article>
                            <p> Release 2004</p>
                        </article>
                    </article>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptas eos eum veniam aut officiis, repellat distinctio recusandae esse asperiores, nobis itaque qui animi quisquam facere blanditiis culpa dolores mollitia!</p>
                </article>
                <article className="movie_cover">
                    <img src={PowerPuff} alt="Power Puff Girls" />
                </article>
            </section>
            <section>
                <h3>Episodes</h3>
            </section>
            <li>
                <Link to="/description">description</Link>
            </li>
        </div>
    )
}
export default Home