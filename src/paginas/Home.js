import React, { Component } from 'react';
import { Title } from '../componentes/titulo'
import { SearchForm } from '../componentes/SearchForm'
import { MoviesList } from '../componentes/MoviesList'

export class Home extends Component {
    state = { usedSerach: false, results: [] }

    handleResults = (results) => {
      this.setState({ results, usedSerach: true })
    }
  
    renderResults() {
      return this.state.results.length === 0 ? <p>Sin resultados.</p> 
        : <MoviesList movies={this.state.results} />
    }

    render() {
        return (
            <div>
                <Title>Buscar película</Title>
                <div className="SearchForm">
                    <SearchForm onResults={this.handleResults} />
                </div>
                {this.state.usedSerach ?
                    this.renderResults() :
                    <p>Use el formulario para buscar una movie.</p>}
            </div>
        )
    }
}



