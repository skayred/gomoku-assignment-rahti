describe("non_styled_game", () => {
  beforeEach(function () {
    cy.visit("/");
  });

  it("renders_table", () => {
    cy.get('table');
  });
});
