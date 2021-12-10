describe('Checkout', function (){
    it('Prueba checkout', function(){
        cy.visit('http://localhost/Boton_pre_prod.html');
        cy.wait(2000);
        cy.get(':nth-child(2) > .epayco-button-render > img').click();
       

     
    })

})