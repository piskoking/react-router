import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Movielist from './Movielist';
import { useState } from "react";




function Home ()  {
    const [films, setFilms] = useState([
        {
          titre: 'the lastkingdom',
          description: 'Un groupe d\'explorateurs entreprend un voyage à travers les étoiles dans un trou de ver récemment découvert pour assurer la survie de l\'humanité.',
          posterURL: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQYJmrRncnoSa_-rQVt4EIwylj9Yz_gjlY28XMc8WSjSPeNVtAB',
          note: 9.2
        },
        {
          titre: 'blacklist',
          description: 'Dom Cobb est un voleur expérimenté, le meilleur dans l\'art dangereux de l\'extraction, voler les secrets les plus intimes enfouis au plus profond du subconscient pendant l\'état de rêve.',
          posterURL: 'https://fr.web.img5.acsta.net/pictures/210/051/21005165_20130808113654378.jpg',
          note: 8.8
        },
        {
          titre: 'The night agent',
          description: 'Lorsque le chaos se répand dans les rues de Gotham City, Batman se présente pour mettre fin à la montée du crime organisé provoquée par l\'homme qui se fait appeler le Joker.',
          posterURL: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSLQqa9pG_JFUZJovFtEmtG2ik8DJBtoPcpcAaGgvC1ilvb6kV',
          note: 9.0
        }
      ]);
    
      const handleAddFilm = (newFilm) => {
        setFilms([...films, newFilm]);
      };
    
      const handleFilter = ({ titre, note }) => {
        const filteredFilms = films.filter((film) => {
          if (titre && !film.titre.toLowerCase().includes(titre.toLowerCase())) {
            return false;
          }
          if (note && film.note < note) {
            return false;
          }
          return true;
        });
        setFilms(filteredFilms);
      };
    
  return (
    
    <div>
        <h1>Movie App</h1>
      {/* <Filter onFilter={handleFilter} /> */}
      <Movielist movies={films} />
      {/* <button onClick={() =>
        handleAddFilm({
          titre: 'Nouveau film',
          description: 'Description du nouveau film',
          posterURL: 'URL de l\'affiche',
          note: 8
        })}>
        Ajouter un film</button> */}
    </div>
  );
}

export default Home;
