describe.only("FormSignIn", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/login");
  });

  it("should display validation messages for empty fields", () => {
    cy.get("form").submit();
    cy.get(".text-red-500").should("contain", "Email is required");
  });

  it("should display validation message for invalid email", () => {
    cy.get('input[name="email"]').type("invalid-email");
    cy.get("form").submit();
    cy.get(".text-red-500").should("contain", "Invalid email address");
  });

  it("should display validation message for password less than 6 characters", () => {
    cy.get('input[name="password"]').type("12345");
    cy.get("form").submit();
    cy.get(".text-red-500").should(
      "contain",
      "Password must be at least 6 characters"
    );
  });

  it("should submit the form with valid data", () => {
    cy.get('input[name="email"]').type("111202214345@mhs.dinus.ac.id");
    cy.get('input[name="password"]').type("123456");
    cy.get("form").submit();
    cy.get("form").should("not.exist"); // Assuming form disappears on successful submission
  });
});
