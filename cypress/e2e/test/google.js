import googlePage from '../../Page/googlePage'

describe("Google", function () {
    const google = new googlePage()
    beforeEach(() => {
        google.navigate()
    });
    it('Search Suman', () => {
        google.enterText('Suman_Raj_Ghimire')
            .openSearchResult()
    });
})