import { NeutrinoPage } from './app.po';

describe('neutrino App', function() {
  let page: NeutrinoPage;

  beforeEach(() => {
    page = new NeutrinoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
