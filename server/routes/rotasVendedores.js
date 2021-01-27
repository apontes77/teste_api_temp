const { Router } = require('express');
const dados = require('./../service/mock.json')
const express = require('express');

const router = express.Router()

router.get('/vendedores', async function (req, res) {
    
    res.json(dados);

})
router.get('/vendedores/:id', async function (req, res) {
    
})
router.put('/vendedores/:id', async function (req, res) {
    const id = req.body.id;
    const status = req.body.status;

    if(this.id==id) {
       status = res.body.status;
    }

    return status
})


module.exports = router


