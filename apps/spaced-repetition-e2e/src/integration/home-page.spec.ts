import { getHeader } from "../support/home-page.po";

describe("Home Page", () => {
  beforeEach(() => cy.visit("/"));

  it("should display welcome message", () => {
    getHeader().contains("Welcome to Spaced Repetition");
  });
});
