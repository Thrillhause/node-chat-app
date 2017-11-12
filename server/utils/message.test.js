var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', function() {
  it('should generate the correct message object', () => {
    var from = 'Jen';
    var text = 'Some Text';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from: message.from, text: message.text});
  });
});
