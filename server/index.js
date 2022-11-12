//imports
const express = require('express');
const app = express();
const router = require('./router.js');
const db = require('./models/index')
const cors = require('cors');
//Port
const PORT = 8095;
//Cors
app.use(cors());
//app.use

app.use(express.json());
app.use(router);


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`); // eslint-disable-line no-console
})