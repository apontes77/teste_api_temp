const express = require('express');

const app = express()

app.use('/', require('./routes/rotasVendedores'))

app.listen(8081)