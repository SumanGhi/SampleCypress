import loginPage from '../../Page/loginPage'

describe("Gateway admin", function () {
    const login = new loginPage()
    beforeEach(() => {
        cy.fixture('users').then((data)=>{
            this.user = data
        })
    });
    it('LoginWithValidCred', () => {
        login.navigate(this.user.url)
            .LoginWithValidCred(this.user)
            .VerifyLogin()
    });
})