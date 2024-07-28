import './App.css';
import { useEffect, useState } from 'react';
import Container from "./components/Container.js";
import Publicaciones from "./components/Publicaciones.js";

function App() {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then(res => res.json())
      .then(res => console.log(res))
  }, []);

  const agregarPublicacion = (texto) => {
    const fecha = new Date();
    const horario = `${fecha.getHours()}:${fecha.getMinutes() < 10 ? '0' : ''}${fecha.getMinutes()}`;
    const nuevaPublicacion = { texto, fecha: horario };
    setPublicaciones([nuevaPublicacion, ...publicaciones]);

    //Enviar publicacion al BACK
    fetch("http://localhost:8000/publicaciones", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevaPublicacion),
    })
      .then(res => res.json())
      .then(data => {
        // Actualizar el estado local solo si la publicación fue exitosa
        setPublicaciones([nuevaPublicacion, ...publicaciones]);
      })
      .catch(error => {
        console.error("Error al enviar la publicación:", error);
      });
  };

  return (
    <main>
      <Container agregarPublicacion={agregarPublicacion} />
      <Publicaciones publicaciones={publicaciones} />
    </main>
  );
}

export default App;

//npm start