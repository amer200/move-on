require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const dbUrl = process.env.DB_URL;
const port = process.env.PORT;
/********************************************************************************* */
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
/********************************************************************************* */
const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);
/********************************************************************************* */
mongoose.connect(dbUrl)
    .then(resu => {
        console.log('conected to db')
        app.listen(port, () => {
            console.log(`conected to port ${port}`)
        })
    })
    .catch(err => {
        console.log(err)
    })