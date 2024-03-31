describe('Registro de Usuário no Nopcommerce', () => {
    beforeEach(() => {
        cy.visit('https://demo.nopcommerce.com/');
        cy.viewport(1280, 720);
    });

    const preencherFormularioRegistro = () => {
        cy.contains('Register').scrollIntoView().click(); 
        cy.get('[id="gender-female"]').click();
        cy.get('[id="FirstName"]').type("Flávia");
        cy.get('[id="LastName"]').type(`Morais +${new Date().getTime()}`);
        cy.get('select[name="DateOfBirthDay"]').select('21');
        cy.get('select[name="DateOfBirthMonth"]').select('February');
        cy.get('select[name="DateOfBirthYear"]').select('1998');
        cy.get('[id="Email"]').type(`flavia+${new Date().getTime()}@mailinator.com`);
        cy.get('[id="Company"]').type(`Company name+${new Date().getTime()}`);
        cy.get('[id="Password"]').type('#123test', { log: false });
        cy.get('[id="ConfirmPassword"]').type('#123test', { log: false });
    };

    const clicarEmRegistrar = () => {
        cy.get('[id="register-button"]').click();
    };

    it('deve registrar um novo usuário com sucesso', () => {
        preencherFormularioRegistro();
        clicarEmRegistrar();
        cy.contains('Your registration completed').should('be.visible');
    });
});
