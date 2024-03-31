describe('Teste de PUT de Usuário', () => {
    it('Deve editar um usuário existente', () => {
      const timestamp = new Date().getTime();
      const userId = '0uxuPY0cbmQhpEz1'; 
      const userData = {
        "nome": "Flávia Morais",
        "email": `flavia${timestamp}@mailinator.com`,
        "password": "teste",
        "administrador": "true"
      };
  cy.request({
        method: 'PUT',
        url: `https://serverest.dev/usuarios/${userId}`, 
        body: userData,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.equal(201) 
      })
    })
})
