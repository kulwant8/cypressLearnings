/// <reference types = "cypress" />

const baseURL = Cypress.config('baseUrl');
const username = "admin"

describe('login test', ()=>{

    it('valid user name and password',()=>{


        cy.visit(baseURL)
        cy.get('input[id*=textfield-6236]').type(username)
        cy.get('table> tbody > tr > td > input[id$=eld-6237-inputEl]').type('changeme')
        cy.get('span#button-6242-btnIconEl').click()
        cy.get('td#ext-gen9222 > div.x-grid-cell-inner').click()

    })

})
