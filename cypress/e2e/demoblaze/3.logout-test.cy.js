describe('Demoblaze app logout scenario', () => {
    it('Successfully logout', () => {
        cy.visit('https://demoblaze.com/index.html')

        //   click link text login
        cy.get("[data-target='#logInModal']").click()
        cy.get("[onclick='logIn()']").should('be.visible').wait(1000)

        // fill username password
        cy.get('#loginusername').type('komaruddin').should('have.value', 'komaruddin')
        cy.get('#loginpassword').type('komar123').should('have.value', 'komar123')

        // click button login
        cy.get("[onclick='logIn()']").click()

        // assert homescreen
        cy.get('#nameofuser').should('contain', 'komaruddin')

        // click button logout
         cy.get("[onclick='logOut()']").should('be.visible').click().wait(1000)
         // assert homescreen
         cy.get("[data-target='#logInModal']").should('be.visible')
    })
})