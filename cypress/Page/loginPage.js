import Loginverify from "../Assert/LoginVerify.js"
import LoginObject from "../Object/LoginObject.js"
const login = new LoginObject()
export default  class Login {
    navigate(url){
        cy.visit(url)
        return this
    }
    LoginWithValidCred(data){
        login.username().type(data.username)
        login.password().type(data.password).type('{enter}')
        return new Loginverify()
    }
}