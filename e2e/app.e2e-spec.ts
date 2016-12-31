import { TohngrxPage } from './app.po';

describe('tohngrx App', function() {
  let page: TohngrxPage;

  beforeEach(() => {
    page = new TohngrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
