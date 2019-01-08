describe("netflixroulette end to end testing", () => {
    it('should open localhost with proper header text', () => {
        cy.visit('http://localhost:4000/');

        cy.title().should('include', "ReactJS App");
    });

    it('should display searchby title and genre text with total number of movie found', () => {
        cy.get('label').should('have.text','SEARCH BY');

        cy.get('#title-btn').should('contain', 'TITLE');
        cy.contains('TITLE').click(); 

        cy.get('#genre-btn').should('contain', 'GENRE');
        cy.contains('GENRE').click();

        cy.get('.results').should('have.text', '10 movies found');    
    });    
});
