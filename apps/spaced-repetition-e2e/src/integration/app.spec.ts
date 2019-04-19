import { getGreeting } from "../support/app.po";

describe("Home Page", () => {
  beforeEach(() => cy.visit("/"));

  it("should display welcome message", () => {
    getGreeting().contains("Welcome to Spaced Repetition");
  });
});
