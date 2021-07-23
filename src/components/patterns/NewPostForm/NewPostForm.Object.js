export default class NewPostFormObject {
  constructor(cy) {
    this.cy = cy;
  }

  selectImg(url) {
    this.cy.get('#newPostForm [name=url]').type(url);
    this.cy.get('#newPostForm [name=selectUrlBtn]').click();
    return this;
  }

  goToNextStep() {
    this.cy.get('#newPostForm [name=nextStepBtn]').click();
    return this;
  }

  selectFilter() {
    this.cy.get('#newPostForm [name=Normal]').click();
    return this;
  }

  describePost(description) {
    this.cy.get('#newPostForm [name=descriptionField]').type(description);
    return this;
  }

  submitPost() {
    this.cy.get('#newPostForm [name=nextStepBtn]').click();
  }
}
