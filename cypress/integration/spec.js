/// <reference types="cypress" />


describe('Cadastro de Usuário/Proprietário' , () => {

	beforeEach(() => {
		cy.visit('https://8081-lavender-cat-f6fn0mkm.ws-us11.gitpod.io')	
	});

	it('Abrir login de usuário inicial' , () => {

	});

	

});


/*
describe('Sapper template app', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', 'Great success!')
	});

	it('navigates to /about', () => {
		cy.get('nav a').contains('about').click();
		cy.url().should('include', '/about');
	});

	it('navigates to /blog', () => {
		cy.get('nav a').contains('blog').click();
		cy.url().should('include', '/blog');
	});
});
*/