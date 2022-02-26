//Router
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
//Medias
import noImage from '../assets/img/noImage.png'
//Styles
import './styles/description.css'
function Description(){
    const pageName = "Description"
    const {season} = useParams()
    const {episode} = useParams()
    //This API was made without React.js
    try {
        fetch(`https://api.tvmaze.com/shows/6771/episodebynumber?season=${season}&number=${episode}`)
        .then(res => res.json())
        .then(res => {
            document.getElementById("name").innerHTML = res.name
            const episodeReleased = new Date(res.airstamp)
            document.getElementById("season").innerHTML = ` ${res.season} `
            document.getElementById("episode").innerHTML = ` ${res.number} `
            try{
                document.getElementById("cover").src = res.image.original
            }catch{
                document.getElementById("cover").src = noImage
            }
            if (res.airstamp) {
                document.getElementById("date").innerHTML = ` ${episodeReleased.getFullYear()}`
            } else {
                document.getElementById("date").innerHTML = "XX/YY/ZZZZ"
            }
            if (res.runtime) {
                document.getElementById("runtime").innerHTML = ` ${res.runtime} minutes`
            } else {
                document.getElementById("runtime").innerHTML = "0"
            }
            if (res.summary) {
                document.getElementById("description").innerHTML = res.summary
            } else {
                document.getElementById("description").innerHTML = `Oops!! We don't have a summary for ${res.name} yet`
            }
        })
    } catch (e) {
        console.log(`Ooops!! There was a problem in the API connection: ${e}`)
    }
    return(
        <section className="description">
            <ul className="breadcrumb">
                <li className="breadcumb-item">
                <Link to={'/movie-app/'}>
                    <span>Home</span>
                </Link>
                </li>
                <li>{pageName}</li>
            </ul>
            <section className="ghost"></section>
            <section className="description_container">
                <article className="description_text">
                        <h3 className="movie_title" id="name"></h3>
                        <article className="episode_subtitle">
                            <p>
                                Season
                                <span id="season"></span>
                                x Ep
                                <span id="episode"></span> 
                            </p>
                            <p>
                                Released
                                <span id="date"></span>
                            </p>
                            <p> 
                                Runtime
                                <span id="runtime"></span>
                            </p>
                        </article>
                        <p className="description" id="description"></p>
                </article>
                <article className="movie_cover">
                    <img className="episode_img" id="cover" alt="Power Puff Girls" />
                </article>
            </section>
        </section>
    )
}
export default Description