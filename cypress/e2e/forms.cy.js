describe('Formulario', () => {
    it('teste', () => {
       
        cy.login('4DM@gmail.com', '4DM')

        cy.contains('Formulários')
            .should('be.visible')
            .click()

        cy.get('#name')
            .should('be.visible')
            .type('Teste Teste')

        cy.get('#email')
            .should('be.visible')
            .type('4DM@gmail.com')

        cy.get('#phone')
            .should('be.visible')
            .type('1234567890')

        cy.contains('label', 'Pessoa Jurídica')
            .should('be.visible')
            .click()

        cy.contains('label', 'Pessoa Jurídica')
            .find('input[type="radio"]')
            .should('be.checked')

        cy.get('input[placeholder="00.000.000/0000-00"]')
            .should('be.visible')
            .type('12.345.678/0001-95')

        cy.contains('label', 'Instagram')
            .should('be.visible')
            .click()

        cy.contains('label', 'LinkedIn')
            .should('be.visible')
            .click()

        cy.contains('label', 'Indicação de Amigo')
            .should('be.visible')
            .click()

        cy.contains('label', 'Instagram')
            .find('input[type="checkbox"]')
            .should('be.checked')

        cy.contains('label', 'LinkedIn')
            .find('input[type="checkbox"]')
            .should('be.checked')

        cy.contains('label', 'Indicação de Amigo')
            .find('input[type="checkbox"]')
            .should('be.checked')

        cy.get('textarea')
            .should('be.visible')
            .type(
                'Preciso de uma consultoria para desenvolver uma aplicação web moderna, ' +
                'responsiva e escalável. Gostaria de receber orientação sobre arquitetura, ' +
                'tecnologias, desenvolvimento e boas práticas para o projeto.'
            )

        const tecnologias = [
            'React',
            'Java',
            'Spring Boot',
            'Node.js',
            'TypeScript'
        ]

        cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
            .should('be.visible')
            .as('tecnologiaInput')

        tecnologias.forEach((tecnologia) => {
            cy.get('@tecnologiaInput')
                .type(tecnologia)
                .type('{enter}')
        })

        tecnologias.forEach((tecnologia) => {
            cy.contains(tecnologia)
                .should('be.visible')
        })

 
        cy.contains('label', 'Li e aceito os termos de uso')
            .should('be.visible')
            .click()

      
        cy.contains('label', 'Li e aceito os termos de uso')
            .find('input[type="checkbox"]')
            .should('be.checked')
    })
})