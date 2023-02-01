import React,{useState,useEffect} from 'react';
import './App.css';
import Card from '@mui/material/Card';


function App() {

  const [text,setText]=useState('')
  const [container,setContainer]=useState([])
  const [final,setFinal]=useState('')

  useEffect(()=>{
    // console.log("Hi");
      const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a559ec0f00mshdca23a1ff8f2c7ep178543jsn751f64ee02ad',
        'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
      }
    };
    
    fetch(`https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=+${text}`, options)
      .then(response => {
        return response.json()
      })
      .then(data=>{
        setContainer(data.hints)
        // console.log(data);
      })
      .catch(err => console.error(err));
  },[final])



    const submitHandler=e=>{
      e.preventDefault();
      setFinal(text)
      // console.log(final);
    }

  


  return (
      <form onSubmit={submitHandler}>
      <input type='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder='Search here'/>
      <button type='submit'>Submit</button>
<div>
      {
        container?.map((obj,index)=>{
          return(
            <Card key={index}  
            
            sx={{width:'200px',float:'left',minHeight:'400px',m:'5px'}}>
              <img src={obj.food.image} alt={obj.food.label}/>
              <p>{obj.food.label}</p>
              <span id='box'>{obj.food.category}</span>
            </Card>
          )
        })
      }
      </div>
      </form>
  )
    }


export default App;
