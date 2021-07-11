import { makeStyles, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useState } from 'react'
import './App.css';
import './searchbar.css'

function App() {

  const [data, setData] = useState([
    "Java","Javascript","Html","Css","Python","C++"
  ]);

  const[input , setInput] = useState('')
   
  const useStyles = makeStyles({
    '@global': {
        '.MuiAutocomplete-option[data-focus="true"]': {
            background: '#EBF6FF'
        },
        '.MuiAutocomplete-tag':{
          backgroundColor: '#EBF6FF',
      }
    }

});

useStyles()

 const onKeyDown = (ev) =>{

      if(ev.keyCode === 13){
        setData((word) => {
          return [...word, input]
        })
      }
 }

  return (
    <div className="container">
      <h1>TAGS</h1>
      <p>Select time for your event</p>
      <Autocomplete
        multiple
        id="tags-standard"
        options={data}
        freeSolo
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField id="filled-basic" {...params} placeholder="Add Label" variant="filled" className='input' value={input} onKeyDown={onKeyDown} onChange={(ev) => setInput(ev.target.value)}  />
        )}
      />
    </div>
  );
}

export default App;
