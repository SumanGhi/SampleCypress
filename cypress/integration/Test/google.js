import googlePage from '../Page/googlePage'

describe("Google", function () {
    const google = new googlePage()
        it("Open google", function () {
            google.navigate()
        })
        it('Enter text', () => {
            google.enterText('Suman_Raj_Ghimire')
        });
        it('Open search result', () => {
            google.openSearchResult()
        });
})