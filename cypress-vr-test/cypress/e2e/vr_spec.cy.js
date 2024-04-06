  /// <reference types="cypress" />
  describe('Adicionar Cartões VR ao Carrinho', () => {
      it('Deve adicionar cartões do produto "Auto" ao carrinho com sucesso', () => {
        //Adicionado tratamento de erro de exceção não capturada na aplicação
        //para evitar que o cypress falhe o teste.  //o site estava apresentando erro "(uncaught exception)TypeError: Cannot set properties of null (setting 'value')"
        //Também foi usado para permitir o comando windowOpen devido apresentar erro na política de segurança do CSP
        //(uncaught exception)EvalError
        
        cy.on('uncaught:exception', (err, runnable) => {
              // Não falha o teste quando uma exceção não capturada ocorrer
              return false;
          });
        
          // Acessar a home do portal web
          cy.visit('/')

          // Navegar até a loja 
          //Comando adicionado para interceptar a abertura de uma nova janela do navegador dentro do Cypress.
          const newUrl = "https://loja.vr.com.br/";
          cy.window().then(win => {
              cy.stub(win, 'open').as('windowOpen');
          });
          cy.get('#buttonCompreOnline').click();
          cy.get('@windowOpen').should('be.calledWith', newUrl);
          cy.window().then(win => {
              win.location.href = newUrl;
          });

          // Fechar modal de informativos 
          cy.get('.fas').click()
          cy.get('[data-testid="terms-consent"]').click()

          // Selecionar produto/Cartão 
          cy.get('#btn-selecionar-modalidade-avulso').click()
          const quantidadeAleatoria = Math.floor(Math.random() * 5) + 1 // De 1 a 5 cartões
          cy.get('#produto-auto-quantidade').type(quantidadeAleatoria)
          const valorCreditoAleatorio = (Math.floor(Math.random() * 10) + 1) * 100 // De R$100 a R$1000)
          cy.get('#produto-auto-valor').type(valorCreditoAleatorio)

          // Adicionar e validar o produto no carrinho 
          cy.get('#btn-adicionar-carrinho-auto').click()
          cy.get('#btn-meu-carrinho > .fa-light').click()
          cy.contains('Seguir para o carrinho').click()
          cy.get('.content > .lojavr-style-c-kFqMqW')
            .type('15.436.940/0001-03')
          cy.get('#representante-nome').type('Testador Vr')
          cy.get('#representante-email').type('testadorvr@test.com')
          cy.get('#representante-telefone').type('11969991712')
          cy.get('#btn-modal-ver-resultado').click()
          cy.url({
                  timeout: 8000
              })
              .should('include', '/carrinho')
          cy.get('.product-item__title')
              .should('be.visible')
          cy.get('#product-summary-auto-amount')
              .should('not.have.value', "")
          cy.get('#product-summary-auto-amount')
              .should('not.have.value', "")
              
      })
  })
