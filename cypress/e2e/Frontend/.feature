Feature: Registro de Usuário no Nopcommerce
  Como um novo cliente
  Eu quero me registrar no Nopcommerce
  Para poder fazer compras online

  Scenario: Registro de novo usuário
    Given que estou na página inicial do Nopcommerce
    When eu clico no botão de registro
    And seleciono o gênero "Feminino"
    And preencho o campo de nome "Flávia"
    And preencho o campo de sobrenome "Morais"
    And seleciono a data de nascimento "21 de fevereiro de 1998"
    And preencho o campo de e-mail "flavia.morais@mailinator.com"
    And preencho o campo de nome da empresa "Company name"
    And preencho o campo de senha e de confirmação de senha "#123test"
    And clico no botão de registro 
    Then vejo a mensagem "Your registration completed" confirmando o registro bem-sucedido

Feature: Mensagens de erro durante o registro
    Como um usuário
    Eu quero ver mensagens de erro claras
    Para entender quais campos são obrigatórios durante o registro
  
    Scenario: Exibir mensagens de erro de campos obrigatórios
      Given que estou na página inicial do Nopcommerce
      When eu clico no botão de registro
      And preencho apenas o campo de data de nascimento e o campo de nome da empresa
      And clico no botão de registro
      Then devo ver mensagens de erro indicando campos obrigatórios ausentes
      And a mensagem "First name is required." deve ser exibida
      And a mensagem "Last name is required." deve ser exibida
      And a mensagem "Email is required." deve ser exibida
      And a mensagem "Password is required." deve ser exibida
      And a mensagem "Password is required." deve ser exibida
    