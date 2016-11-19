import { ChorpAngularPage } from './app.po';

describe('chorp-angular App', function() {
  let page: ChorpAngularPage;

  beforeEach(() => {
    page = new ChorpAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
