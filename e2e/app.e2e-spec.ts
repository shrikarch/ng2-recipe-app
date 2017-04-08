import { Ng2RecipeGuidePage } from './app.po';

describe('ng2-recipe-guide App', function() {
  let page: Ng2RecipeGuidePage;

  beforeEach(() => {
    page = new Ng2RecipeGuidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
