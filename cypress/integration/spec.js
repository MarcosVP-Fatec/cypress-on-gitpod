describe('Saloon',()=>{

	beforeEach(() => {
		cy.visit('https://8081-turquoise-cattle-h7umftdh.ws-us11.gitpod.io/')
	});

	it('Cadastro de Usuário/proprietário' , () => {

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
			expect(xhr.status).be.eq(200);
			expect(xhr.response.body).has.property('token');
			expect(xhr.response.body.token).is.not.null;
		});

		cy.route('GET', '**/saloon/proprietario').as('getProprietario');
		cy.get('[href="/proprietario"]').click();
		cy.get('[data-cy=titulo]').contains('Proprietário');
		cy.wait('@getProprietario').then( (xhr) => {
			expect(xhr.status).be.eq(200);
		});

		cy.route('POST', '**/saloon/proprietario').as('postProprietario');
		cy.get('#apelido').type('Zotoati');
		cy.get('#email').type('zotoati@saloon.br');
		cy.get('#senha').type('123');
		cy.get('#nome').type('Mitces Valacae Zotoati');
		cy.get('#dtnascimento').type('1969-04-12');
		cy.get('#cpf').type('77777777777');

		let id;
		cy.get('[type=submit]').click();
		cy.wait('@postProprietario').then((xhr) => {
			expect(xhr.status).be.eq(201);
			expect(xhr.response.body).has.property('id');
			id = xhr.response.body.property.id;
			expect(xhr.response.body.id).is.not.null;
		});

		cy.route('DELETE', '**/proprietario/'+id).as('deleteProprietario');
		cy.get('')


	});

});
