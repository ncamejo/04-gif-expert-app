/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && ( <h2>Cargando...</h2> )
      }

      <div className='card-grid'>
        {images.map((image) => (
          <GifItem
            key={image.id}
            // Tecnica para cuando se tienen muchas propiedes, se propagan usando ...
            {...image}
          />
        ))}
      </div>
    </>
  );
};
