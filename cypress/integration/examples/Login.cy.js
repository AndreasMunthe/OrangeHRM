context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
  //TC-0001
    it('Succes Login', () => {

      // Fill with right username
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('Admin').should('have.value', 'Admin')
  
        // .type() with special character sequences
        .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
        .type('{del}{selectall}{backspace}')
  
        // .type() with key modifiers
        .type('{alt}{option}') //these are equivalent
        .type('{ctrl}{control}') //these are equivalent
        .type('{meta}{command}{cmd}') //these are equivalent
        .type('{shift}')
  
        // Delay each keypress by 0.1 sec
        .type('Admin', { delay: 100 })
        .should('have.value', 'Admin')
      
      // Fill with right password  
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('admin123').should('have.value', 'admin123')   

        // .type() with special character sequences
        .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
        .type('{del}{selectall}{backspace}')
  
        // .type() with key modifiers
        .type('{alt}{option}') //these are equivalent
        .type('{ctrl}{control}') //these are equivalent
        .type('{meta}{command}{cmd}') //these are equivalent
        .type('{shift}')

        .type('admin123', { delay: 100 })
        .should('have.value', 'admin123')
        cy.get('.oxd-button').click()
    })

    

    it('Failed login - Username & Password is empty', () => {

      //Press button login
      cy.get('.oxd-button').click()

      // Fill with right password       
      //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')        
      cy.get('.oxd-input-group > .oxd-text').should('be.visible')

      //cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')        
      cy.get('.oxd-input-group > .oxd-text').should('be.visible')
    })

    it('Failed login - Wrong Username right Password', () => {
      // Fill with wrong username       
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('Username123').should('have.value', 'Username123')
  
        // .type() with special character sequences
        .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
          
        // .type() with key modifiers
        .type('{alt}{option}') //these are equivalent
        .type('{ctrl}{control}') //these are equivalent
        .type('{meta}{command}{cmd}') //these are equivalent
        .type('{shift}')        
      

      // Fill with wrong password
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('admin123').should('have.value', 'admin123')
  
        // .type() with special character sequences
        .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
          
        // .type() with key modifiers
        .type('{alt}{option}') //these are equivalent
        .type('{ctrl}{control}') //these are equivalent
        .type('{meta}{command}{cmd}') //these are equivalent
        .type('{shift}')

      //Press button login
      cy.get('.oxd-button').click()

      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
      cy.get('.oxd-alert-content > .oxd-text').should('be.visible')
    })    

    it('Failed login - right Username wrong Password', () => {
      // Fill with right username       
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('Admin').should('have.value', 'Admin')
  
        // .type() with special character sequences
        .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
          
        // .type() with key modifiers
        .type('{alt}{option}') //these are equivalent
        .type('{ctrl}{control}') //these are equivalent
        .type('{meta}{command}{cmd}') //these are equivalent
        .type('{shift}')        
      

      // Fill with wrong password
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('Password').should('have.value', 'Password')
  
        // .type() with special character sequences
        .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
          
        // .type() with key modifiers
        .type('{alt}{option}') //these are equivalent
        .type('{ctrl}{control}') //these are equivalent
        .type('{meta}{command}{cmd}') //these are equivalent
        .type('{shift}')

      //Press button login
      cy.get('.oxd-button').click()

      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
      cy.get('.oxd-alert-content > .oxd-text').should('be.visible')
    })

})