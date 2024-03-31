describe('Mnesagens de erro durante o registro', () => {
    beforeEach(() => {
        cy.visit('https://demo.nopcommerce.com/');
        cy.viewport(1280, 720);
    });

    const preencherFormularioRegistro = () => {
        cy.contains('Register').scrollIntoView().click(); 
        cy.get('select[name="DateOfBirthDay"]').select('21');
        cy.get('select[name="DateOfBirthMonth"]').select('February');
        cy.get('select[name="DateOfBirthYear"]').select('1998');
        cy.get('[id="Company"]').type(`Company name+${new Date().getTime()}`);
    };

    const clicarEmRegistrar = () => {
        cy.get('[id="register-button"]').click();
    };

    it('deve exibir erros de campo obrigatório', () => {
        preencherFormularioRegistro();
        clicarEmRegistrar();

        cy.get('#FirstName-error').should('be.visible').and('contain', 'First name is required.');
        cy.get('#LastName-error').should('be.visible').and('contain', 'Last name is required.');
        cy.get('#Email-error').should('be.visible').and('contain', 'Email is required.');
        cy.get('#Password-error').should('be.visible').and('contain', 'Password is required.');
        cy.get('#ConfirmPassword-error').should('be.visible').and('contain', 'Password is required.');
    });
});
