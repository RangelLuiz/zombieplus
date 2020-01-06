
module.exports = {

    'nao cadastrado': (browser) => {
        let login = browser.page.login()
        login
            .with('404@yahoo.com.br','pwd124')
            .expectAlertDanger('Usuário e/ou senha inválidos')
    }
} 
