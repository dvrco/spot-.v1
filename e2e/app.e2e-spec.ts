import { AgPage } from './app.po';

describe('ag App', function() {
  let page: AgPage;

  beforeEach(() => {
    page = new AgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
