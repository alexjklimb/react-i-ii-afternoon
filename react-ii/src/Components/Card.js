import React from 'react';
function Card(props){
    return(
        <div className="card">
            <div className="id">{props.current.id}/25 </div>
            <span className="name">{props.current.name.first}  {props.current.name.last}</span>
            <span>
                <div><b>From: </b>{props.current.city}, {props.current.country}</div>
                <div><b>Job Title: </b>{props.current.title}</div>
                <div><b>Employer: </b>{props.current.employer}</div>
            </span>
            <span>
                <div><b>Favorite Movies: </b><br/>&nbsp;&nbsp;&nbsp;&nbsp;1. {props.current.favoriteMovies[0]}<br/>&nbsp;&nbsp;&nbsp;&nbsp;2. {props.current.favoriteMovies[1]}<br/>&nbsp;&nbsp;&nbsp;&nbsp;3. {props.current.favoriteMovies[2]}</div>
            </span>
        </div>
    )
}
export default Card;
