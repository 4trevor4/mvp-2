const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/../public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/buildings', (req, res) => {

});

app.post('/buildings', (req, res) => {

});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});