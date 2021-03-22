import React from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

export default function SavedList(props) {
  
  // add functionality to the Home Div
  const history = useHistory();
  const routeHome = () => {
    console.log(history)
    history.push(`/`)
  }

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div onClick={routeHome} className="home-button">Home</div>
    </div>
  );
}
