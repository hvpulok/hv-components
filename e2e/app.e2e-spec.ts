import { HvComponentsPage } from './app.po';

describe('hv-components App', () => {
  let page: HvComponentsPage;

  beforeEach(() => {
    page = new HvComponentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
