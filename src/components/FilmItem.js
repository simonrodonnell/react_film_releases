import React, {Component} from 'react'

class FilmItem extends Component {

  render(){
    return(
      <li className="FilmItem">
        <a href={this.props.url}>
        {this.props.children}</a>
      </li>
    )
  }

}

export default FilmItem
