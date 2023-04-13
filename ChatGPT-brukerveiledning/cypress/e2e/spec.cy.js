describe('The specific word test', () => {
  beforeEach(() =>  cy.visit('http://localhost:5173'))
  it('Checks specific sentence!', () => {
    cy.contains('.velkommen', 'ChatGPT')
    cy.contains('.introduksjon', 'Open AI')
    cy.contains('.steg-1', 'ctrl + t')
    cy.contains('.steg-1', 'Mac')
  })
})