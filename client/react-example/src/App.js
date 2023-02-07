import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() { 

  return (
    <>
<html>

<head>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet" 
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"/>
</head>

<body>
    <div class="input-group input-group-lg">
      <span class="input-group-text" id="inputGroup-sizing-lg">Title</span>
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></input>
    </div>
    <button type="button" class="btn btn-secondary btn-lg">Enter</button>
</body>

</html>
</>);        
}

export default App;
//
