import { acceptorJs } from './acceptor-js';

/**
 * With mocked x
 * Original value of x is 9
 * since we are mocking x to 10 in test-setup file, the result should be 10 * 10 + 10 = 110
 *
 * but instead of 110, the result is 91. It's because mocked value of x is visible only in acceptor-js file.
 * inside fx function in donor-js library, the original value of x is used.
 * so we get 9 * 9 + 10 = 91
 *
 * this problem only occurs on windows machine. On linux and macOS, the result is 110 as expected. (strange af)
 */

describe('acceptorJs', () => {
  it('should work with mocked value of x', () => {
    expect(acceptorJs()).toEqual(110);
  });
});
