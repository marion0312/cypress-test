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

    it('Login should display error', () => {
        cy.visit('https://codedamn.com/login')

        cy.contains('Unable to authorize').should('not.exist')

        cy.get('[data-testid=username]').type('admin')
        cy.get('[data-testid=password]').type('admin')

        cy.get('[data-testid=login]').click()

        cy.contains('Unable to authorize').should('exist')
    })

    it.only('Login should work fine', () => {
        cy.visit('https://codedamn.com/login')


        cy.get('[data-testid=username]').type('iosdev')
        cy.get('[data-testid=password]').type('iosdev')

        cy.get('[data-testid=login]').click()

    })
})