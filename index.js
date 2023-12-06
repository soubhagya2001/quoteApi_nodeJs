const express = require('express');
const app = express(); //instance of express js
const quotesJsonArray = require('./quotes.json');
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Random Quotes');
});

app.get('/quotesList',(req,res)=>{
    res.send({'quotesList':quotesJsonArray});
});

app.get('/randomQuote',(req,res)=>{
    const randomNumber = Math.floor(Math.random() * quotesJsonArray.length);
    //console.log(randomNumber);
    const quoteItem = quotesJsonArray[randomNumber];
    res.send(quoteItem);
});

app.listen(PORT,()=>{
    console.log(`App running in the port ${PORT}` );
});