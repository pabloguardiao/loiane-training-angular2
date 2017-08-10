import { PrimiroProjetoPage } from './app.po';

describe('primiro-projeto App', () => {
  let page: PrimiroProjetoPage;

  beforeEach(() => {
    page = new PrimiroProjetoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
