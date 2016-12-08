import { HalloWorldPage } from './app.po';

describe('hallo-world App', function() {
  let page: HalloWorldPage;

  beforeEach(() => {
    page = new HalloWorldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
