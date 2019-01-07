const countSmiles = require('./countSmiles-CW.js');

describe('countSmiles', () => {
  it('test cases pass', () => {
    expect(countSmiles([])).toEqual(0);
    expect(countSmiles([':D',':~)',';~D',':)'])).toEqual(4);
    expect(countSmiles([':)',':(',':D',':O',':;'])).toEqual(2);
    expect(countSmiles([';]', ':[', ';*', ':$', ';-D'])).toEqual(1);
  });
});


expect(countSmiles([])).toEqual(0);
expect(countSmiles([':D',':~)',';~D',':)'])).toEqual(4);
expect(countSmiles([':)',':(',':D',':O',':;'])).toEqual(2);
expect(countSmiles([';]', ':[', ';*', ':$', ';-D'])).toEqual(1);