describe('Testing dep1 Factory', function() {

  var factory;

  // excuted before each "it" is run
  beforeEach(function() {

    // load the module
    module('dep1');

    // inject dependencies
    inject(function(Dep1Factory) {
      factory = Dep1Factory;
    });

  });

  /*
  it('should be defined', function() {
    expect(factory).toBeDefined(true);
  });
  */

  // check to see if it has the expected function
  it('should have an exciteText function', function () {
    expect(angular.isFunction(factory.exciteText)).toBe(true);
  });

  // check to see if it does what it's supposed to do
  it('should make text exciting: aloha!!!', function () {
    var result = factory.exciteText('aloha');
    expect(result).toBe('aloha!!!');
  });

  it('should make text exciting: Hello!!!', function () {
    var result = factory.exciteText();
    expect(result).toBe('Hello!!!');
  });

});
