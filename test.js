const hello = require('./hello.js');
const test = require('tape');
const shot = require('shot');

test('Home route returns a status code of 403' , (t) => {
shot.inject(hello, { method:'get' , url: '/'}, (res) => {
  t.equal(res.statusCode, 200 , 'respond with 200');
  var expected = "Hello Travis!\n";

  t.deepEqual(res.payload, expected, 'should returns in the payload');
  t.end();
})
})
