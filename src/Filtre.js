import React, { useState } from 'react';

const Filtre = ({ onFilter }) => {
    const [titre, setTitre] = useState('');
    const [note, setNote] = useState('');

    const handleFilter = () => {
        onFilter({ titre, note });
    };

    return (
        <div className="filter">
            <input
                type="text"
                placeholder="Titre"
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
            />
            <input
                type="number"
                placeholder="Note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />
            <button onClick={handleFilter}>Filtre</button>
        </div>
    );
};

export default Filtre;