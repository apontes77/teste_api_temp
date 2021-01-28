const { Router } = require('express');
const express = require('express');

const router = express.Router()

const basicURL = "https://api.connectycube.com"

router.post('basicURL/session', async function (req, res) {
    const dadosSessao = {
        login = ENV_EMAIL_CONFIG,
        password = ENV_PASSWORD_CONFIG,

    } = req.body

    
})