describe('My suite', function () {
  beforeEach(function () {
    jasmine.addMatchers(matchers);
  });

  it('passes if the element has the specified class', function () {
    expect($('<div class="some-class"></div>')).toHaveClass('some-class');
  });
});