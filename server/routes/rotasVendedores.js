const { Router } = require('express');
const dados = require('./../service/mock.json')
const express = require('express');

const router = express.Router()

router.get('/vendedores', async function (req, res) {

    // const response = await db.query('SELECT * FROM vendedores ORDER BY nome ASC');
    // res.status(200).send(response.rows);
    
    res.json(dados);

})

router.post('/vendedores', async function (req, res) {

    const dadosNovoVendedor =  {
        login: "",
        full_name: "",
        email: ""
    } = req.body

    


    res.status(201).send({ message: "Vendedor inserido na API ConnectyCube com sucesso!"})

})

router.get('/vendedores/:id', async function (req, res) {
    
})
router.put('/vendedores/:id', async function (req, res) {

    const id = parseInt(req.params.id);
    const { nome, empresa, url_foto_perfil, status } = req.body;

    // const response = await db.query(
    //     "UPDATE vendedores SET nome = $1, empresa = $2, url_foto_perfil = $3, status= $4 WHERE id = $5",
    //     [nome, empresa, url_foto_perfil, status, id]
    // );

    res.status(200).send({ message: "Vendedor com status corretamente atualizado!"});
})


module.exports = router


