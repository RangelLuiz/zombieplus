
module.exports = {
    '@disabled': true,
    'email não informado': (browser) => {
        let login = browser.page.login()
        login
            .with('','pwd124')
            .expectAlertInfo('Opps. Cadê o email?')
    }
} 
