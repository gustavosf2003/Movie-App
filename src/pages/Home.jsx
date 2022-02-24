
import React from 'react';
import { Link } from 'react-router-dom'
import Imdb from '../assets/img/imdb.png'
//styles
import './styles/home.css'
class Home extends React.Component {
    state = {
        movie: [],
        image: [],
        rating: [],
        episodes: []
    };
    componentDidMount() {
        //Description movie
        fetch('https://api.tvmaze.com/shows/6771')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    movie: res,
                    image: res.image.medium,
                    rating: res.rating.average 
                });
                console.log(res)
            });
        //Single Episode
        fetch('https://api.tvmaze.com/shows/6771/episodes')
        .then(res => res.json())
        .then(res => {
            this.setState({
                episodes: res,
            });
            console.log(res)
        });
    }
    render() {
        const movie = this.state.movie
        const image = this.state.image
        const rating = this.state.rating
        const episodes = this.state.episodes
        const season1 = episodes.slice(0,39)
        const season2 = episodes.slice(39,80)
        const season3 = episodes.slice(80,119)
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
                            <p> Release {String(movie.premiered).slice(0,4)}</p>
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
                        {
                            season1.map(item => (
                                <article key={item.id} className="accordion_item">
                                    {   <Link to={'/description/' + item.season + '/' + item.number}>
                                            <p>•{item.name}-{item.number}</p>
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
                                    <p>•{item.name}-{item.id}</p>   
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
                                    <p>•{item.name}-{item.id}</p>   
                                </article>
                            ))
                        }
                    </section>
                </section>
            </section>
        </div>
        );
    }
}

export default Home;