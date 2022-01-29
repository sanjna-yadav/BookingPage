if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const path = require('path')
const mongoose = require('mongoose');
const Tour = require('./models/tour')
const methodOverride = require('method-override')

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/persistent';


mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


// app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.get('/tour', (req, res) => {
    res.render('app');
})
app.post('/tour', async (req, res,next) => {
    try{
    const newTour = new Tour(req.body);
    await newTour.save();
    res.redirect('/tour')
    }
    catch(e){
        next(e);
    }
})

app.listen(3000, () => {
    console.log('on port 3000!!')
})
