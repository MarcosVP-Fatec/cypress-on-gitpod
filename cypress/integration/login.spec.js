/// <reference types="cypress" />


describe('Saloon',()=>{

	beforeEach(() => {
		cy.visit(Cypress.env("host"));
	});

	it.skip('Login com falha' , () => {

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
			cy.get('[data-cy=situacao]').contains('Usuário ou senha inválidos');
		});

	});

	it('Login bem sucedido' , () => {

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
		cy.get('#username').type('admin');
		cy.get('#inputPassword').type('admin');
		cy.get('[data-cy=submit]').click();

		cy.wait('@postLogin').then((xhr) => {

			cy.get('[data-cy=situacao]').contains('Usuário logado');
			expect(xhr.status).be.eq(200);
			expect(xhr.response.body).has.property('token');
			expect(xhr.response.body.token).is.not.null;
			cy.get('[data-cy=logout]').click()
			cy.get('[data-cy=submit-sair]').click()
/*			
			cy.wait("@postLogin").then( (xhr) => {
				expect(xhr.status).be.eq(200);
			});
*/

		});
	
	});

	it.skip('Logout' , () => {

		// cy.get = busca um elemento
		// cy.type = insere um texto

		// routing
		// start server com cy.server()
		// criar uma rota com cy.route()
		// atribuir a rota a um alias 
		// esperar esta rota com cy.wait()

		cy.server()
		cy.route('GET', '**/login').as('getLogin');
		cy.get('[data-cy=home]').click(); 
		cy.get('[href="/logar"]').click(); 
		//cy.url().should('include', '/login').click()
		//cy.get('[data-cy=submit-sair]').click();

		/*
		cy.wait('@postLogin').then((xhr) => {

//			cy.get('[data-cy=situacao]').contains('Usuário logado');
			expect(xhr.status).be.eq(200);
			expect(xhr.response.body).has.property('token');
			expect(xhr.response.body.token).is.null;

		});
	*/
	});

});
