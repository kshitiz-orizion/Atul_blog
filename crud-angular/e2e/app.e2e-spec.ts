import { CrudAngularPage } from './app.po';

describe('crud-angular App', function() {
  let page: CrudAngularPage;

  beforeEach(() => {
    page = new CrudAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
