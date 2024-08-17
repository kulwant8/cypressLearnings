
      /// <reference types = "cypress" />

      describe('adding_accertion', ()=>{
       it('testing_url', ()=>{
        cy.visit("https://www.automationexercise.com/category_products/1")
        cy.url().should('not.equal','100')
 
        cy.get('.single-products').should('have.length.greaterThan',2)
 
        cy.get('.panel-heading>h4').first().should('have.class','panel-title')
 
        cy.get('.productinfo>h2').first().should('include.text','Rs. 1000')
 
        cy.get('.productinfo>a>i').first().should('be.visible')
 
        cy.get('.product-overlay').first().should('exist')

       })


      })

 
        // visibility of locator
        // invisibility of locator
        // existence of locator in dom: locator is present in dom but it can be visible or hidden
        // non existence of locator
 
 