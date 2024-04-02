import { render } from '@testing-library/react';
import Acceptor from './acceptor';

jest.unmock('@org/donor/shouldBeMocked');

describe('Acceptor', () => {
  it('should use unmocked function', () => {

    const { queryByText } = render(<Acceptor />);

    expect(queryByText('this function is mocked in Acceptor')).toBeNull();

    expect(queryByText('this function is mocked in Donor')).toBeNull();
  });
});
