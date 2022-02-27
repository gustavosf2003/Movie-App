
import React from 'react';
//Router
import { Link } from 'react-router-dom'
//Medias
import Imdb from '../assets/img/imdb.png'
//styles
import './styles/home.css'
class Home extends React.Component {
    state = {
        api: [],
        movie: [],
        image: [],
        rating: [],
        episodes: []
    };
    //This API was made using react js
    componentDidMount() {
        //API that returns general show data
        const apiUrl = "https://api.tvmaze.com/shows/6771"
        try {
            fetch(apiUrl)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    movie: res,
                    image: res.image.medium,
                    rating: res.rating.average,
                    api: apiUrl
                });
                console.log("First connection")
            });
        } catch (e) {
            console.log(`Ooops!! There was a problem in the API connection: ${e}`)
        }
        //API that returns single episode data
        try{
            fetch(`${apiUrl}/episodes`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    episodes: res,
                });
                console.log("Second connection")
            });
        }catch (e){
            console.log(`Ooops!! There was a problem in the API connection: ${e}`)
        }
    }
    render() {
        //Api data
        const api = this.state.api
        const movie = this.state.movie
        const image = this.state.image
        const rating = this.state.rating
        const episodes = this.state.episodes
        const season1 = episodes.slice(0,39)
        const season2 = episodes.slice(39,80)
        const season3 = episodes.slice(80,119)
        return (
            <section className="home">
                <section className="ghost"></section>
                <p className="api">{api}</p>
                <section className="description_container">
                    <article className="description_text">
                        <h3 className="movie_title" translate="no" id="title">{movie.name}</h3>
                        <article className="movie_subtitle">
                            <article className="imdb_content">
                                <img className="imdb_image" src={Imdb} alt="Imdb" />
                                <p>{rating}</p>
                            </article>
                            <p> Released {String(movie.premiered).slice(0,4)}</p>
                        <p className="description" dangerouslySetInnerHTML={{__html:movie.summary}}/>
                        </article>
                    </article>
                    <article className="movie_cover">
                        <img src={image} className="movie_img" alt={movie.name} />
                    </article>
                </section>
                <section className="episodes_container">
                    <p className="episodes_title">Episodes:</p>
                    <section className="accordions">
                        <section className="accordion">
                            <input className="accordion_click" type="checkbox" id="acc"/>
                            <article className="accordion_title">
                                <label className="accordion_label" htmlFor="acc">
                                    Season 1
                                </label>
                            </article>
                            {
                                season1.map(item => (
                                    <article key={item.id} className="accordion_item">
                                        {   <Link to={`/Movie-App/description/${item.season}/${item.number}`}>
                                                <p>
                                                    <span>•</span>
                                                    {item.name}
                                                </p>
                                            </Link>
                                        }
                                    </article>
                                ))
                            }
                        </section>
                        <section className="accordion">
                            <input className="accordion_click" type="checkbox" id="bbb"/>
                            <article className="accordion_title">
                                <label className="accordion_label" htmlFor="bbb">
                                    Season 2
                                </label>
                            </article>
                            {
                                season2.map(item => (
                                    <article key={item.id} className="accordion_item">
                                        {   <Link to={`/Movie-App/description/${item.season}/${item.number}`}>
                                                <p>
                                                    <span>•</span>
                                                    {item.name}
                                                </p>
                                            </Link>
                                        }
                                    </article>
                                ))
                            }
                        </section>
                        <section className="accordion">
                            <input className="accordion_click" type="checkbox" id="ggg"/>
                            <article className="accordion_title">
                                <label className="accordion_label" htmlFor="ggg">
                                    Season 3
                                </label>
                            </article>
                            {
                                season3.map(item => (
                                    <article key={item.id} className="accordion_item">
                                        {   <Link to={`/Movie-App/description/${item.season}/${item.number}`}>
                                                <p>
                                                    <span>•</span>
                                                    {item.name}
                                                </p>
                                            </Link>
                                        }
                                    </article>
                                ))
                            }
                        </section>
                    </section>
                </section>
            </section>
        );
    }
}
export default Home;