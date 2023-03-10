describe('Demoblaze app add to cart scenario', () => {
    it('Successfully add to cart', () => {
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

         // click product 1
         cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click().wait(1000)

         // add to cart
         cy.get('.col-sm-12 > .btn').click().wait(1000)

         // back to home
         cy.get('.active > .nav-link').click().wait(1000)

         // click product 2
         cy.get(':nth-child(2) > .card > :nth-child(1) > .card-img-top').click().wait(1000)

         // add to cart
         cy.get('.col-sm-12 > .btn').click().wait(1000)

        // click link text cart
         cy.get("#cartur").click().wait(1000)

         // delete
         cy.get(':nth-child(2) > :nth-child(4) > a').click().wait(1000)

        // click link text place order
        cy.get(".btn-success").click().wait(1000)
        cy.get("#month").should('be.visible')

        // fill place order
         cy.get('#name').type('order 1').should('have.value', 'order 1')
         cy.get('#country').type('jakarta').should('have.value', 'jakarta')
         cy.get('#city').type('indonesia').should('have.value', 'indonesia')
         cy.get('#card').type('12345').should('have.value', '12345')
         cy.get('#month').type('maret').should('have.value', 'maret')
         cy.get('#year').type('2023').should('have.value', '2023')

         // click button purchase
         cy.get("[onclick='purchaseOrder()']").click().wait(1000)
         
         // confirm
         cy.get('.confirm').click()




    })
})