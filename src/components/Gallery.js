import React, { useEffect, useState } from 'react';
import CarCards from './CarCards';
import './Gallery.css'

const Gallery = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    const startTime = performance.now()
    fetch('http://localhost:3000/images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
        const endTime = performance.now()
        console.log("Get images call took " + (endTime - startTime) + " milliseconds.")
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className='grid'>
      {
        images && images.map(img => (
          <CarCards key={img.id} img={img} />
        ))
      }
    </div>
  )
}

export default Gallery
