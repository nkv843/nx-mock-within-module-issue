import { render } from '@testing-library/react';
import Acceptor from './acceptor';

describe('Acceptor', () => {
  it('should mock function inside Donor lib', () => {

    const { getByText } = render(<Acceptor />);

    expect(getByText('this function is mocked in Acceptor')).toBeTruthy();

    expect(getByText('this function is mocked in Donor')).toBeTruthy();
  });
});
