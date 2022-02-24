import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
import './styles/description.css'
function Description(){
    const pageName = "Description"
    const {season} = useParams()
    const {episode} = useParams()
    fetch(`https://api.tvmaze.com/shows/6771/episodebynumber?season=${season}&number=${episode}`)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        document.getElementById("name").innerHTML = res.name
        var episodeReleased = new Date(res.airstamp)
        document.getElementById("date").innerHTML = ` ${episodeReleased.getFullYear()}`
        document.getElementById("season").innerHTML = ` ${res.season} `
        document.getElementById("episode").innerHTML = ` ${res.number} `
        document.getElementById("description").innerHTML = res.summary
        document.getElementById("cover").src = res.image.original
    })
    return(
            <div>
                <ul className="breadcrumb">
                    <li className="breadcumb-item">
                    <Link to={'/'}>
                        <span>Home</span>
                    </Link>
                    </li>
                    <li>{pageName}</li>
                </ul>
                <section className="ghost"></section>
                <section className="movie_section">
                    <article className="movie_description">
                        <article>
                            <h3 className="movie_title" id="name"></h3>
                            <article className="movie_subtitle">
                                <article className="imdb_content">
                                    <p>
                                        Season 
                                        <span id="season"></span>
                                        x Ep
                                        <span id="episode"></span> 
                                    </p>
                                </article>
                                <p> Released 
                                    <span id="date"></span>
                                </p>
                            </article>
                            <p className="description" id="description">
                            </p>
                        </article>
                    </article>
                    <article className="movie_cover">
                        <img className="episode_img" id="cover" alt="Power Puff Girls" />
                    </article>
                </section>
            </div>
    )
}
export default Description