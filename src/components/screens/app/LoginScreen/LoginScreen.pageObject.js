export default class LoginScreenPageObject {
  constructor(cy) {
    this.cy = cy;
    this.cy.visit('/app/login');
  }

  fillLoginForm({ user, password }) {
    this.cy.get('#formLogin input[name="user"]').type(user);
    this.cy.get('#formLogin input[name="password"]').type(password);
    return this;
  }

  submitLoginForm() {
    this.cy.get('#formLogin button[type="submit"]').click();
    return this;
  }
}
