import { NgNotiPage } from './app.po';

describe('ng-noti App', () => {
  let page: NgNotiPage;

  beforeEach(() => {
    page = new NgNotiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
