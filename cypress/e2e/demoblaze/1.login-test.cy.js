describe('Demoblaze app login scenario', () => {
    it('Successfully login using correct username password', () => {
        cy.visit('https://demoblaze.com/index.html')

        // click link text login
        cy.get("[data-target='#logInModal']").click()
        cy.get("[onclick='logIn()']").should('be.visible')
        cy.wait(1000)

       
        // fill username password
        cy.get('#loginusername').type('komaruddin').should('have.value', 'komaruddin')
        cy.get('#loginpassword').type('komar123').should('have.value', 'komar123')

        // click button login
        cy.get("[onclick='logIn()']").click()

        // assert homescreen
        cy.get('#nameofuser').should('contain', 'komaruddin')
    })
})