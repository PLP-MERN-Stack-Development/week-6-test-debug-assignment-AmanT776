describe('Home Page', () => {
  it('should load the home page', () => {
    cy.visit('/');
    cy.contains('Welcome').should('exist'); // Adjust text as needed for your app
  });
}); 