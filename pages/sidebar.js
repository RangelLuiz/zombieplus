var userActions = {
    expectLoggedUser: function (name) {
        return this
            .waitForElementVisible('@userInfo', 20000)
            .assert.containsText('@userInfo', name)
    }
}

module.exports = {
    commands: [userActions],
    elements: {
        userInfo: '.user .info span'
    }
}