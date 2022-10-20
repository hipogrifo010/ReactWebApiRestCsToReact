import { React, useState } from 'react';
import { urlEditMovies } from '../endpoints';
import { useParams } from 'react-router-dom';
import axios from 'axios';

var token = window.localStorage.getItem('userstored');
const authAxios = axios.create({
  urlEditMovies,
  headers: { Authorization: `Bearer ${token}` },
});

function MovieEdit() {
  const [movieId, setMovieId] = useState(['']);
  const [titulo, setTitulo] = useState(['']);
  const [imagen, setImagen] = useState(['']);
  const [fechaDeCreacion, setFechaDeCreacion] = useState(['']);
  const [calificacion, setCalificacion] = useState(['']);
  const [personajesAsociados, setPersonajesAsociados] = useState(['']);
  const [genreId, setGenreId] = useState(['']);
  const { id } = useParams();
  const insert = async (e) => {
    e.preventDefault();

    try {
      const response = await authAxios.put(urlEditMovies + `/${id}`, {
        movieId,
        titulo,
        imagen,
        fechaDeCreacion,
        calificacion,
        personajesAsociados,
        genreId,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className='Form'>
        <label>
          movieId:
          <input
            value={movieId}
            onChange={(e) => setMovieId(e.target.value)}
            type='text'
            placeholder='MovieId'
            className='form-control p-1
          shadow-sm mb-1'
          />
        </label>
      </form>
      <form className='Form1'>
        <label>
          Titulo:
          <input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            type='text'
            placeholder='Titulo de la pelicula'
            className='form-control p-1
          shadow-sm mb-1'
          />
        </label>
      </form>
      <form className='Form2'>
        <label>
          Imagen :
          <input
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            type='text'
            placeholder='Imagen'
            className='form-control p-1
          shadow-sm mb-1'
          />
        </label>
      </form>
      <form className='Form3'>
        <label>
          FechaDeCreacion :
          <input
            value={fechaDeCreacion}
            onChange={(e) => setFechaDeCreacion(e.target.value)}
            type='text'
            placeholder='Fecha De Creacion'
            className='form-control p-1
          shadow-sm mb-1'
          />
        </label>
      </form>
      <form className='Form4'>
        <label>
          Calificacion :
          <input
            value={calificacion}
            onChange={(c) => setCalificacion(c.target.value)}
            type='text'
            placeholder='Calificacion de la pelicula'
            className='form-control p-1
          shadow-sm mb-1'
          />
        </label>
      </form>
      <form className='Form5'>
        <label>
          Personajes Asociados :
          <input
            value={personajesAsociados}
            onChange={(e) => setPersonajesAsociados(e.target.value)}
            type='text'
            placeholder='Personajes Asociados '
            className='form-control p-1
          shadow-sm mb-1'
          />
        </label>
      </form>
      <form className='Form5'>
        <label>
          GenreId :
          <input
            value={genreId}
            onChange={(e) => setGenreId(e.target.value)}
            type='text'
            placeholder='GenreId '
            className='form-control p-1
          shadow-sm mb-1'
          />
        </label>
      </form>

      <p>Introduce los valores"(puedes agregar uno o mas a la vez)"</p>
      <button onClick={insert}>Crear Nuevo!</button>
    </div>
  );
}

export default MovieEdit;
