describe('Open Step-1 test', () => {
  beforeEach(() => cy.visit('http://localhost:5173'))
  it('Opens the first step!', () => {
    cy.get('.first-step-button').click();
  })
})

describe('The specific word test', () => {
  beforeEach(() =>  cy.visit('http://localhost:5173'))
  it('Checks specific sentence!', () => {
    cy.contains('.velkommen', 'ChatGPT')
    cy.contains('.introduksjon', 'Open AI')
    cy.contains('.steg-1', 'ctrl + t')
    cy.contains('.steg-1', 'Mac')
  })
})


describe('The completed-button test', () => {
  beforeEach(() => cy.visit('http://localhost:5173'))
  it('Presses the two buttons!', () => {
    cy.get('.fullført').click()
    cy.get('.ikke-fullført').click()
  })
})