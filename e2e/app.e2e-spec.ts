import { DndRatingPage } from './app.po';

describe('dnd-rating App', function() {
  let page: DndRatingPage;

  beforeEach(() => {
    page = new DndRatingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
