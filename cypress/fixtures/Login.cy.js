context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('.type() - type into a DOM element', () => {
      // https://on.cypress.io/type
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('ADD22').should('have.value', 'ADD22')
  
        // .type() with special character sequences
        .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
        .type('{del}{selectall}{backspace}')
  
        // .type() with key modifiers
        .type('{alt}{option}') //these are equivalent
        .type('{ctrl}{control}') //these are equivalent
        .type('{meta}{command}{cmd}') //these are equivalent
        .type('{shift}')
  
        // Delay each keypress by 0.1 sec
        .type('slow.typing@email.com', { delay: 100 })
        .should('have.value', 'slow.typing@email.com')
  
      
    })
})