import { getMessage } from "../support/not-found-page.po";

describe('Not Found Page', () => {
  beforeEach(() => cy.visit("/page-potato-potato"));

  it('should show the right not found message', () => {
    getMessage().contains('Oops... Page Not Found');
  })
})
