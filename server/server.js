const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const cors = require('cors');

PORT=8080;

app = express();
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{
	//res.json($.getJSON("https://www.omdbapi.com/?i=tt3896198&apikey=613ddf44"));
	fetch("https://www.omdbapi.com/?s=Puss+in+Boots&type=movie&apikey=613ddf44")
  	.then((response) => response.json())
  	.then((data) => {
	res.json(data)
	console.log(data)
});

  

})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
