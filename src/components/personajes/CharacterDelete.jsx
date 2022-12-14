import { React, useState } from 'react';
import { urlDeleteCharacters } from '../endpoints';

import axios from 'axios';

function DeleteCharacters() {
  const [id, setId] = useState([]);

  const deletecharacter = async () => {
    const response = await axios.delete(urlDeleteCharacters + `/${id}`, {
      withCredentials: true,
    });
    console.log(response.data);
  };

  return (
    <div className='Nombre de Personajes:'>
      <ul>
        <form className='Form2'>
          <label>
            CharacterID :
            <input
              value={id}
              onChange={(e) => setId(e.target.value)}
              type='text'
              placeholder='Id del Personaje'
              className='form-control p-1
          shadow-sm mb-1'
            />
          </label>
        </form>
      </ul>
      <p>Introduce el id del personaje a eliminar </p>
      <button onClick={deletecharacter}>Busqueda!</button>
    </div>
  );
}

export default DeleteCharacters;
