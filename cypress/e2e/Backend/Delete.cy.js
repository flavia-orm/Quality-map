it('Deve excluir um usuário', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://serverest.dev/usuarios/3JysX53uwoZIAp8A', 
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
  