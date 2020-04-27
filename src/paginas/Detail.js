import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { ButtonBackHome } from "../componentes/ButtonBackHome";

import PropTypes from 'prop-types'
const API_KEY = '7e92a6f6'

export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        }),
    }
    //creo el objeto movie (vacío) como un state
    state = { movie: {} }

    fetchMovie({ id }) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res =>
                res.json())
            .then(
                movie => {
                    this.setState({ movie })
                }
            )
    }

    componentDidMount() {
        console.log(this.props.match)
        const { movieId } = this.props.match.params
        this.fetchMovie({ id: movieId })
    }

    render() {
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie
        return (
            <div>
                <ButtonBackHome />
                <h1>{Title}</h1>
                <img src={Poster} />
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        )
    }
}