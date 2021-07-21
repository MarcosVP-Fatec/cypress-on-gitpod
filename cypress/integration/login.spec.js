/// <reference types="cypress" />


describe('Saloon',()=>{

	beforeEach(() => {
		cy.visit(Cypress.env("host"));
	});

	it('Login com Falha' , () => {

		// cy.get = busca um elemento
		// cy.type = insere um texto

		// routing
		// start server com cy.server()
		// criar uma rota com cy.route()
		// atribuir a rota a um alias 
		// esperar esta rota com cy.wait()

		cy.server()
		cy.route('POST', '**/login').as('postLogin');
		
		cy.get('[href="/logar"]').click() //cy.get('[data-cy=submit]').click();
		cy.get('#username').type('#Eu Não Existo !!!');
		cy.get('#inputPassword').type('1234567');
		cy.get('[data-cy=submit]').click();

		cy.wait('@postLogin').then((xhr) => {
			expect(xhr.status).be.eq(403);
			cy.log(xhr.response);
			//expect(xhr.response.body).has.property('token');
			//expect(xhr.response.body.token).is.null;
		});

	});

});

