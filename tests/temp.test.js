module.exports = {

    before: (browser) => {
        console.log('antes de todos os steps.')

    },

    after: (browser) => {
        console.log('depois de todos os steps.')
    },

    beforeEach: (browser) => {
        console.log('antes de cada step.')
    },

    afterEach: (browser) => {
        console.log('depois de caad step.')
    },


    'step one': (browser) => {
        browser
            .url('http://zombie-web:5000/login')
            .waitForElementVisible('.card-login', 10000)
            .resizeWindow(1920, 1080)
    },

    'step two': (browser) => {
        browser
            .url('http://zombie-web:5000/login')
            .waitForElementVisible('.card-login', 10000)
            .resizeWindow(1920, 1080)
    }
}