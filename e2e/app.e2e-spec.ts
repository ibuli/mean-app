import { MEANAPPPage } from './app.po';

describe('mean-app App', () => {
  let page: MEANAPPPage;

  beforeEach(() => {
    page = new MEANAPPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
