import { Angular4RouterSamplePage } from './app.po';

describe('angular4-router-sample App', () => {
  let page: Angular4RouterSamplePage;

  beforeEach(() => {
    page = new Angular4RouterSamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
