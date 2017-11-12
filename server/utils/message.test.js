var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', function() {
  it('should generate the correct message object', () => {
    var from = 'Jen';
    var text = 'Some Text';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', function() {
  it('should generate a geolocation object', () => {
    var from = 'Jen';
    var latitude = 1;
    var longitude = 1;
    var url = 'https://www.google.com/maps?q=1,1';

    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA('number');
    expect(url).toMatch(message.url);
    expect(message).toInclude({from, url});
  });
});
