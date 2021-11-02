/// <reference types="cypress" />

describe('Basic Test', () => {
    it('Loading webpage', () => {
        cy.visit('https://codedamn.com')
    })

    it('Login page looks good', () => {
        cy.viewport(700, 720)

        cy.visit('https://codedamn.com/login')

        cy.contains('Forgot your password').click()
        
        cy.url().should('include', '/password-reset')

        cy.contains('Reset your password').should('exist')

        cy.go('back')

        cy.contains('Sign in to your account')

        cy.url().should('include', '/login')
    })
})