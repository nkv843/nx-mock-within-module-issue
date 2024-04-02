import { acceptorJs } from './acceptor-js';

jest.unmock('@org/donor-js/x');

/**
 * With unmocked x
 * Original value of x is 9
 * since we are unmocking x, the result should be 9 * 9 + 9 = 90
 */

describe('acceptorJs', () => {
  it('should work with unmocked value of x', () => {
    expect(acceptorJs()).toEqual(90);
  });
});
