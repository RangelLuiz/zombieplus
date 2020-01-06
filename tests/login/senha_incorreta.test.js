
module.exports = {

    'senha incorreta': (browser) => {     
        let login = browser.page.login()
        login
            .with('zumbi@dospalmares.com.br','pwd124')
            .expectAlertDanger('Usuário e/ou senha inválidos')
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