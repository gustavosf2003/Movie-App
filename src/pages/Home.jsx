
import React from 'react';
import { Link } from 'react-router-dom'
import Imdb from '../assets/img/imdb.png'
import PowerPuff from '../assets/img/powerpuff.png'
//styles
import './styles/home.css'
class Home extends React.Component {
    state = {
        movie: [],
        image: [],
        rating: []
    };
    componentDidMount() {
        fetch('https://api.tvmaze.com/shows/6771')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    movie: res,
                    image: res.image.medium,
                    rating: res.rating.average 
                });
            });
    }
    render() {
        var movie = this.state.movie
        var image = this.state.image
        var rating = this.state.rating
        return (
            <div>
            <section className="ghost"></section>
            <section className="movie_section">
                <article className="movie_description">
                    <article>
                        <h3 className="movie_title">PowerPuff Girls</h3>
                        <article className="movie_subtitle">
                            <article className="imdb_content">
                                <img className="imdb_image" src={Imdb} alt="Imdb Image" />
                                <p>{rating}</p>
                            </article>
                            <p> Release {movie.premiered}</p>
                        </article>
                        <p className="description" dangerouslySetInnerHTML={{__html:movie.summary}}/>
                    </article>
                </article>
                <article className="movie_cover">
                    <img src={image} className="movie_img" alt="Power Puff Girls" />
                </article>
            </section>
            <section>
                <p className="episodes_title">Episodes:</p>
                <section className="accordions">
                    <section className="accordion">
                        <input className="accordion_click" type="checkbox" id="abc"/>
                        <article className="accordion_title">
                            <label className="accordion_label" htmlFor="abc">
                                Season 1
                            </label>
                        </article>
                        <article className="accordion_item">
                            <p>
                                • Episode 1
                            </p>
                        </article>
                        <article className="accordion_item">
                            <p>
                                • Episode 1
                            </p>
                        </article>
                    </section>
                    <section className="accordion">
                        <input className="accordion_click" type="checkbox" id="bbb"/>
                        <article className="accordion_title">
                            <label className="accordion_label" htmlFor="bbb">
                                Season 1
                            </label>
                        </article>
                        <article className="accordion_item">
                            <p>
                                • Episode 1
                            </p>
                        </article>
                        <article className="accordion_item">
                            <p>
                                • Episode 1
                            </p>
                        </article>
                    </section>
                    <section className="accordion">
                        <input className="accordion_click" type="checkbox" id="ggg"/>
                        <article className="accordion_title">
                            <label className="accordion_label" htmlFor="ggg">
                                Season 1
                            </label>
                        </article>
                        <article className="accordion_item">
                            <p>
                                • Episode 1
                            </p>
                        </article>
                        <article className="accordion_item">
                            <p>
                                • Episode 1
                            </p>
                        </article>
                    </section>
                </section>
            </section>
            <li>
                <Link to="/description">description</Link>
            </li>
        </div>
        );
    }
}

export default Home;