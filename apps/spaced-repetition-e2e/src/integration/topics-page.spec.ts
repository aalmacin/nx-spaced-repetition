import { getHeader } from "../support/topics-page.po";

describe('Topics Page', () => {
  beforeEach(() => cy.visit("/topics"));

  it('should show the right header', () => {
    getHeader().contains('Topics');
  })
})
