import selectors from '../fixtures/amazonSelectors.json';

describe('First battery of tests', () => {
    it('Visit a random URL', () => {
        cy.visit('www.amazon.es');
        cy.clicker(selectors.navSearchBar);
        cy.typer(selectors.navSearchBar, 'Hola, esto es una prueba');
        cy.invokeText(selectors.testField);
        cy.get('@text').then(text => {
            console.log(text);
        });
    });
});
