import { MeuProjetoFinalPage } from './app.po';

describe('meu-projeto-final App', () => {
  let page: MeuProjetoFinalPage;

  beforeEach(() => {
    page = new MeuProjetoFinalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
