const express = require('express');

const app = express();

app.get('/', ()=>{
  console.log('lalalal');
}); 

app.listen(3000);