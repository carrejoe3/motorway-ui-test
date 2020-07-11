import React, { useEffect, useState } from 'react';
import CarCards from './components/CarCards';
import BottomNavbar from './components/BottomNavbar';
import './App.css';

const App = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch('http://localhost:3000/images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className='app'>
      <div className='grid'>
        {
          images && images.map(img => (
            <CarCards key={img.id} imgSrc={img.url} />
          ))
        }
      </div>
      <BottomNavbar />
    </div>
  );
}

export default App;
