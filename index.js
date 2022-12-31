const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.get('/', (req, res) => {
    res.send('Hello, Khalid! Your Birmingham news is on live channel');
})

app.get('/news-categories', (req, res) => {
    res.send(categories)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    if(id === '08'){
        res.send(news);
    }
    else {
        const categoryNews = news.filter(cat => cat.category_id === id)
        res.send(categoryNews)
    }
})
// We have filtered categories news because it contains more categories news
app.get('/news', (req, res) => {
    res.send(news);
})
app.get('/news/:id', (req, res) => {
    // console.log(req.params)
    const id = req.params.id;
    const selectedNews = news.find(news => news._id === id);
    res.send(selectedNews)
})

app.listen(port, () => {
    console.log('Birmingham news server on port', port)
})