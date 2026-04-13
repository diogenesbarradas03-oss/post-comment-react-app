describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-qa="profile-box"]')
    cy.get('[data-qa="delete-button"]').eq(0).scrollIntoView({ duration: 2000 }).click()
    cy.get('[data-qa="comment-input"]').first().type('Legal demais!', {delay: 200})
    cy.get('[type="submit"]').first().click()
    cy.get('[data-qa="comment-text"]').first().should('contain.text', 'Legal demais!')
    //cy.get('[data-qa="like-button"]').eq(0).dblclick()
  cy.get('[data-qa="comment-text"]').each(($element) => {
    cy.log($element.text)
    if($element.text() === 'Legal demais!') {
      cy.get($element).siblings('header').children('[data-qa="delete-button"]').click()
    }
  })
})
})