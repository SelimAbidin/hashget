

describe('Empty hash test', () => {
    
    var locHash = new HashGet();
    
    beforeEach(function (done) {
        window.location.hash = ""
        done();
    })
    
    it('count should be 0', function() {
        var count = locHash.getCount()
        expect(0).toEqual(count);
    });

    it('check "test" if exist with has should be false', function() {
        var has = locHash.has('test')
        expect(false).toEqual(has);
    });

    it('"test" value name should return undefined', function() {
        var value = locHash.get('test')
        expect(undefined).toEqual(value);
    });

})

describe('one value hash test (example #test=100) ', () => {
    
    var locHash = new HashGet();
    
    beforeEach(function (done) {
        window.location.hash = "#test=100"
        done();
    })
    
    it('has get value should be 1', function() {
        var count = locHash.getCount()
        expect(1).toEqual(count);
    });

    it('check "test" if exist with has should be true', function() {
        var has = locHash.has('test')
        expect(true).toEqual(has);
    });

    it('"test" value name should return 100', function() {
        var value = locHash.getValue('test')
        expect('100').toEqual(value);
    });

})



describe('two value pair test (example #test=100&test2=200) ', () => {
    
    var locHash = new HashGet();
    
    beforeEach(function (done) {
        window.location.hash = "#test=100&test2=200"
        done();
    })
    
    it('has get value should be 2', function() {
        var count = locHash.getCount()
        expect(2).toEqual(count);
    });

    it('check "test" if exist with has should be true', function() {
        var has = locHash.has('test')
        expect(true).toEqual(has);
    });

    it('check "test2" if exist with has should be true', function() {
        var has = locHash.has('test2')
        expect(true).toEqual(has);
    });

    it('"test" value name should return 100', function() {
        var value = locHash.getValue('test')
        expect('100').toEqual(value);
    });

    it('"test2" value name should return 200', function() {
        var value = locHash.getValue('test2')
        expect('200').toEqual(value);
    });

})



describe('same value pair test (example #test=100&test=200) ', () => {
    
    var locHash = new HashGet();
    
    beforeEach(function (done) {
        window.location.hash = "#test=100&test=200"
        done();
    })
    
    it('has get value should be 1', function() {
        var count = locHash.getCount()
        expect(1).toEqual(count);
    });

    it('check "test" if exist with has should be true', function() {
        var has = locHash.has('test')
        expect(true).toEqual(has);
    });

    
    it('"test" value name should return 200 (last defined overrides)', function() {
        var value = locHash.getValue('test')
        expect('200').toEqual(value);
    });

})



describe('non pair value after has (example #testtest) ', () => {
    
    var locHash = new HashGet();
    
    beforeEach(function (done) {
        window.location.hash = "#testtest"
        done();
    })
    
    it('has get value should be 2', function() {
        var count = locHash.getCount()
        expect(1).toEqual(count);
    });

    it('check "test" if exist with has should be false', function() {
        var has = locHash.has('test')
        expect(false).toEqual(has);
    });

    
    it('"test" value name should return undefined', function() {
        var value = locHash.getValue('test')
        expect(undefined).toEqual(value);
    });

})


describe('pair and non-pair mix value after has (example #testtest&test=100) ', () => {
    
    var locHash = new HashGet();
    
    beforeEach(function (done) {
        window.location.hash = "#testtest&test=100"
        done();
    })
    
    it('has get value should be 2', function() {
        var count = locHash.getCount()
        expect(2).toEqual(count);
    });

    it('check "test" if exist with has should be false', function() {
        var has = locHash.has('test')
        expect(true).toEqual(has);
    });

    it('check "testtest" if exist with has should be false', function() {
        var has = locHash.has('testtest')
        expect(true).toEqual(has);
    });
    
    it('"test" value name should return "100"', function() {
        var value = locHash.getValue('test')
        expect('100').toEqual(value);
    });

})