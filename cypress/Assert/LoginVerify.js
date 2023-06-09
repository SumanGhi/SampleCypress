import LoginObject from "../Object/LoginObject.js"
const login = new LoginObject()
export default class Loginverify{
    VerifyLogin(){
        login.dashboard().should('be.visible')
    }
}