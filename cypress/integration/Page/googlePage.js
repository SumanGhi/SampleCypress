export default class Google {
    navigate(){
        cy.visit('https://www.google.com/')
        return this
    }
    enterText(text){
        cy.get('input[name="q"]').type(text).type('{enter}');
        return this

    }
    openSearchResult(){
        cy.get('a[href*="suman_raj_ghimire').first().click();
        return this

    }
}