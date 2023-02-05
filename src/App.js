import React, {useState, useEffect} from 'react'
import Home from './pages/Home';
import './App.css';

function App() {

  const [photos, setPhotos] = useState([])


  const fetchPhotos = async () => {
    ///using a json list and limiting it to the first 5 items
  
    const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=100')
    const data = await res.json()
    setPhotos(data)
    console.log(data)
  }

  const deletePhotos = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
      method: 'DELETE'
      
    })
    console.log(res.status)
  }

  useEffect(() => {
    fetchPhotos()
  },[])
 

  /*My return needs to include calling my home page and using map to call my data*/
  return (
    <div className="App">
          <div className="container">
          <Home />
          </div>
          <br/>  <br/> 
        {photos.map(photos => 
        <p key={photos.id} onClick={() => deletePhotos(photos.id)}>
          <li>{photos.id}.  Album Id:{photos.albumId} Title: {photos.title} <button className='Delete btn-outline-danger'>X</button></li></p>)}
        
      
          

    </div>
  );
}

export default App;
