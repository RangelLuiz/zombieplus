

module.exports = {

    '@tags': ['smoke'],

    // 'login com sucesso': function (browser) {
    //     var userInfo = '.user .info span'
    //     browser
    //         .url('http://zombie-web:5000/login')
    //         .waitForElementVisible('.card-login', 3000)
    //         .resizeWindow(1920, 1080)
    //         .setValue('input[name=email]', 'zumbi@dospalmares.com.br')
    //         .setValue('input[name=password]', 'pwd123')
    //         .click('.login-button')
    //         .waitForElementVisible(userInfo, 3000)
    //         .assert.containsText(userInfo, 'Quilombo')
    //         .end();
    // },
    // 'dado que eu acesso a pagina de login': function (browser) {
    //     browser
    //         .url('http://zombie-web:5000/login')
    //         .waitForElementVisible('.card-login', 3000)
    //         .resizeWindow(1920, 1080)
    // },
    // 'quando faço login com sucesso': function (browser) {
    //     browser
    //         .setValue('input[name=email]', 'zumbi@dospalmares.com.br')
    //         .setValue('input[name=password]', 'pwd123')
    //         .click('.login-button')
    // },
    // 'então devo ver o meu nome na área logada': function (browser) {
    //     var userInfo = '.user .info span'
    //     browser            
    //         .waitForElementVisible(userInfo, 3000)
    //         .assert.containsText(userInfo, 'Quilombo')
    //         .end();
    // }

    // 

    // login com ES6
    'login com sucesso': (browser) => {
        
        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login.with('zumbi@dospalmares.com.br','pwd123')            
        sidebar.expectLoggedUser('Quilombo')

    }
}




















// Transpilação Babel = pega o código ES6 e passa para javascript padrão e o navegador entender.
// diferença de usar VAR e LET
// function qualquerCoisa() {
//     var a = 1

//     if (a == 1) {
//         var b = 2; // b é declarado dentro do if mas fica visivel fora
//     }

//     var c = a + b;
// }

// function qualquerCoisa2() {
//     let a = 1;

//     if (a == 1) {
//         let b = 2 // b é declarado dentro do if e não é visivel fora
//     }

//     let c = a + b
// }