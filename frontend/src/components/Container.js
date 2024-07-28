import React, { useState } from 'react';

export default function Container({ agregarPublicacion }) {
    const [texto, setTexto] = useState('');

    const manejarCambioTexto = (e) => {
        setTexto(e.target.value);
    };

    const manejarPublicacion = () => {
        if (texto.trim() !== "") {
            agregarPublicacion(texto.trim());
            setTexto('');
        } else {
            alert("Por favor, escribe algo antes de publicar.");
        }
    };

    return (
        <div className="container">
        <h2>Publicador de texto</h2>
        <textarea
            id="texto"
            placeholder="Escribe algo aquí..."
            value={texto}
            onChange={manejarCambioTexto}
        ></textarea>
        <button onClick={manejarPublicacion}>
            <span className="button-text">Postear</span>
        </button>
        </div>
    );
}