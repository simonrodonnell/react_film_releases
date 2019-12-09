import React, { Component } from 'react'
import FilmItem from './FilmItem'

class FilmList extends Component {

render(){
  const filmNodes = this.props.films.map(film =>{
    return (
      <FilmItem
      url={film.url}
      key={film.id}>
      {film.name}
      </FilmItem>
    )
  })


  return(
    <ul className="FilmList">
    {filmNodes}
    </ul>
  )
}


}

export default FilmList
