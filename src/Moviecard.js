import React from 'react';

const Moviecard = (props) => {
    const { posterURL, title, description, note } = props

    return (
        <div className="movie-card">
            <img src={posterURL} alt="" />
            <div className="movie-info">
                <h3>{title}</h3>
                <p> {description}</p>
                <p> Rating: {note}</p>
            </div>
        </div>
    );
};

export default Moviecard;

