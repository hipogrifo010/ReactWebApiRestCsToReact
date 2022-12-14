import { React, useState } from 'react';
import { urlNewCharacters } from '../endpoints';
import axios from 'axios';

function CharacterPost() {
  const [nombre, setNombre] = useState('');
  const [imagen, setImagen] = useState('');
  const [edad, setEdad] = useState('');
  const [peso, setPeso] = useState('');
  const [historia, setHistoria] = useState('');
  const [movieId, setMovieid] = useState('');

  const insert = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        urlNewCharacters,
        {
          characterId: 0,
          nombre,
          imagen,
          edad,
          peso,
          historia,
          movieId,
        },
        { withCredentials: true }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.data);
    }
  };

  return (
    <div>
      <form className='Form2'>
        <label>
          Nombre:
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type='text'
            placeholder='Nombre del Personaje'
            className='form-control p-1
          shadow-sm mb-1'
          />
        </label>
      </form>
      <form className='Form3'>
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
      <form className='Form4'>
        <label>
          Edad :
          <input
            value={edad}
            onChange={(c) => setEdad(c.target.value)}
            type='text'
            placeholder='Edad Del Personaje'
            className='form-control p-1
          shadow-sm mb-1'
          />
        </label>
      </form>
      <form className='Form5'>
        <label>
          Peso :
          <input
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            type='text'
            placeholder='Peso del personaje '
            className='form-control p-1
          shadow-sm mb-1'
          />
        </label>
      </form>
      <form className='Form6'>
        <label>
          Historia :
          <input
            value={historia}
            onChange={(e) => setHistoria(e.target.value)}
            type='text'
            placeholder='Historia del personaje '
            className='form-control p-1
          shadow-sm mb-1'
          />
        </label>
      </form>
      <form className='Form7'>
        <label>
          movieId :
          <input
            value={movieId}
            onChange={(e) => setMovieid(e.target.value)}
            type='text'
            placeholder='MovieId '
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

export default CharacterPost;
