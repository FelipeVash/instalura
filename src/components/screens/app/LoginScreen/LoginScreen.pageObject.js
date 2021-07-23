export default class LoginScreenPageObject {
  constructor(cy) {
    this.cy = cy;
    this.cy.visit('/app/login');
  }

  fillLoginForm({ user, password }) {
    this.cy.get('#formLogin input[name="usuario"]').type(user);
    this.cy.get('#formLogin input[name="senha"]').type(password);
    return this;
  }

  submitLoginForm() {
    this.cy.get('#formLogin button[type="submit"]').click();
    return this;
  }
}
