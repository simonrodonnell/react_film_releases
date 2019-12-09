import React, { Component } from 'react'
import FilmList from '../components/FilmList'

class FilmBox extends Component {

  render() {

    return(
      <div className="FilmBox">
        <h4>Upcoming Film Releases for UK</h4>
        <hr>
        <FilmList/>
      </div>
    )

  }

}
