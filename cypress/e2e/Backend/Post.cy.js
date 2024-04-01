describe('API Post', () => {
  
  it('API - Teste funcional de criação de usuario', () => {
    const timestamp = new Date().getTime();
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: {
        "nome": "Flávia Morais",
        "email":`flavia${timestamp}@mailinator.com`,
        "password": "#teste123",
        "administrador": "true"
      },
    }).then((response) => {
      expect(response.status).to.eq(201) 
      expect(response.body.message).to.equal('Cadastro realizado com sucesso')
    })
  })

  it('API - Teste funcional de login', () => {
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: {
            "email": "flavia1711984461686@mailinator.com",
            "password": "#teste123"
        }
      }).then((response) => {
        expect(response.status).to.eq(200) 
        expect(response.body.message).to.equal('Login realizado com sucesso')
      })
    })
  

  it('API - Senha incorreta', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
          "email": "fulano@qa.com",
          "password": "test1234"
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(401) 
      expect(response.body.message).to.equal('Email e/ou senha inválidos')
    })
  })
})
  


