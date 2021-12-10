describe('Checkout', function (){
    it('Prueba checkout', function(){
        cy.visit('http://localhost/Boton_pre_prod.html');
        cy.wait(2000);
        cy.get(':nth-child(6) > .epayco-button-render > img').click();
        cy.wait(5000);
        cy.get('.form-control').type('litapao.1621@gmail.com');
        cy.get('.continuebutton').click();
        cy.get(':nth-child(6) > #oneclick-form > .card-oc > .normalinput > #card_cvc').type('123');
        cy.get(':nth-child(6) > #oneclick-form > .cuotas > .select').click();
       

     
    })

})