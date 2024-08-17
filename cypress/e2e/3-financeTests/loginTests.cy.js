// /// <reference types="cypress" />



// describe ("Login tests suite",()=>{
// it("correct username and correct pwd",()=>{
// // cy.visit("https://parabank.parasoft.com/parabank/register.htm")
// cy.visit("https://www.saucedemo.com/")
// cy.get('#user-name').click()
// cy.get('#user-name').type("standard_user")
// // cy.get("#password").type("secret_sauce")
// // cy.get("input[class ='submit-button btn_action']").click();
// // cy.get(button#react-burger-menu-btn)click()
// // cy.get(a[id = "inventory_sidebar_link"]).click()

// })

// })


/// <reference types="cypress" />
 
describe ("Login tests suite",()=>{
    it("correct username and correct pwd",()=>{
    // cy.visit("https://parabank.parasoft.com/parabank/register.htm")
    cy.visit("https://www.saucedemo.com/")
    cy.get('#user-name').click()
    cy.get('#user-name').type("standard_user")
    cy.get("#password").type("secret_sauce{enter}")
    cy.get("input[class ='submit-button btn_action']").click();
    cy.get('button#react-burger-menu-btn').click()
    cy.get('a#logout_sidebar_link').click()
    })
     
    })

// /// <reference types="cypress" />

// describe('Login tests suite', () => {
//     it('correct username and correct pwd', ()=>{
//     cy.visit('')


//     })
// })
 