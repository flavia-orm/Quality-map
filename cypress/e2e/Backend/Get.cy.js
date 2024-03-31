describe('Teste de GET', () => {
    it('Deve obter informações de um usuário existente', () => {
      const userId = "0KnyVdRUjcnRr8IC"; 
      cy.request({
        method: 'GET',
        url: `https://serverest.dev/usuarios/${userId}` 
      }).then((response) => {
        expect(response.status).to.equal(200) 
       })
    })

    it('Usúario não encontrado', () => {
        const userId = "0uxuPY0cbmQhpEz"; 
        cy.request({
          method: 'GET',
          url: `https://serverest.dev/usuarios/${userId}`,
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.equal(400) 
         })
      })

    it('Deve obter o produto Mouse Gamer Logitech G403 ', () => {
      cy.request({
        method: 'GET',
        url: 'https://serverest.dev/produtos', // URL do endpoint GET de produtos
        qs: {
          _id: 'TSVq1xNi7O8yMe9m',
          nome: 'Mouse Gamer Logitech G403',
          preco: '300',
          descricao: 'Mouse',
          quantidade: '500'
        } 
      }).then((response) => {
        expect(response.status).to.equal(200) 
      })
    })
  })

  