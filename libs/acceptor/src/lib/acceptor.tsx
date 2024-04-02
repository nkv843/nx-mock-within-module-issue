import styled from '@emotion/styled';
import { Donor } from '@org/donor'
import { thisFunctionShouldBeMocked } from '@org/donor/shouldBeMocked'

/* eslint-disable-next-line */
export interface AcceptorProps { }

const StyledAcceptor = styled.div`
  color: pink;
`;

export function Acceptor(props: AcceptorProps) {
  return (
    <StyledAcceptor>
      <h1>Welcome to Acceptor!</h1>
      <Donor />
      <p>{thisFunctionShouldBeMocked('Acceptor')}</p>
    </StyledAcceptor>
  );
}

export default Acceptor;
