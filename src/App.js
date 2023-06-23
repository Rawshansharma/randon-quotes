import React, {useState,useEffect} from 'react'
import './App.css'
const App = () => {
  const [quotes  ,  setQuotes] = useState('')
  const [name , setName] = useState('')

     useEffect(() => {
       fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
      headers: {
        'X-RapidAPI-Key': '9e50b62fd3msh220a1dfcb23d091p190af0jsn95eaf0c7b459',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
      },
    })
      .then((response) =>   response.json())
      .then((data) => {
         setName(data.originator.name);
         setQuotes(data.content);
       })
      .catch((error) => console.log(error));
  }, []);
  
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className='text'>
      <h1>Randon Quotes:-</h1>
      <p>{quotes}</p>
      <button onClick={refreshPage}>Next</button>
      <span>-{name}</span>
    </div>
  )
}

export default App