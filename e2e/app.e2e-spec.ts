import { NgTodosAnimationsPage } from './app.po';

describe('ng-todos-animations App', function() {
  let page: NgTodosAnimationsPage;

  beforeEach(() => {
    page = new NgTodosAnimationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
