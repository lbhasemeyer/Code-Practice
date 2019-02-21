const insertDeleteChangeOne = require('./insertDeleteChangeOne');

describe ('insertDeleteChangeOne', () => {
    it('test cases pass', () => {
        expect(insertDeleteChangeOne('hello', 'jello')).toEqual(true);
        expect(insertDeleteChangeOne('hello', 'hezlo')).toEqual(true);
        expect(insertDeleteChangeOne('hello', 'hellos')).toEqual(true);
        expect(insertDeleteChangeOne('hello', 'heldlo')).toEqual(true);
        expect(insertDeleteChangeOne('hello', 'jdello')).toEqual(false);
        expect(insertDeleteChangeOne('hello', 'hello')).toEqual(false);
    })
})