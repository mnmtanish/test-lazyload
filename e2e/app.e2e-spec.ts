import { TestLazyloadPage } from './app.po';

describe('test-lazyload App', () => {
  let page: TestLazyloadPage;

  beforeEach(() => {
    page = new TestLazyloadPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
