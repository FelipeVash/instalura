export default class ProfileScreenPageObject {
  constructor(cy) {
    this.cy = cy;
    this.cy.url().should('include', '/app/profile');
  }

  openNewPostWindow() {
    this.cy.get('[name=newPostBtn]').click();
  }
}
