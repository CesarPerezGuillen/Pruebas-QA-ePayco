describe('Prueba1', function (){
    it('Prueba Cypress', function(){
        cy.visit('https://dashboard.epayco.xyz/login');
        cy.wait(5000);
        cy.get('#inputEmail').type('paola.alzate@payco.co');
        cy.get('#inputPassword').type('Is-1053814720');
        cy.get('.py-3 > .mb-3 > .btn-t').click();
        cy.wait(10000);
    })

})