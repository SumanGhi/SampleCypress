export default class LoginObject{
        username = ()=> cy.get('input[id="username"]')
        password = ()=> cy.get('input[id="password"]')
        dashboard = ()=> cy.get('a[href="/v2/dashboard"]')
}