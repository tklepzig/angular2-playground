import { AppdevBooksPage } from './app.po';

describe('appdev-books App', function() {
  let page: AppdevBooksPage;

  beforeEach(() => {
    page = new AppdevBooksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
