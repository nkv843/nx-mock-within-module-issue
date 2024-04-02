import styled from '@emotion/styled';
import { thisFunctionShouldBeMocked } from './shouldBeMocked';

/* eslint-disable-next-line */
export interface DonorProps { }

const StyledDonor = styled.div`
  color: pink;
`;

export function Donor(props: DonorProps) {
  return (
    <StyledDonor>
      <h1>Welcome to Donor!</h1>
      <h2>{thisFunctionShouldBeMocked('Donor')}</h2>
    </StyledDonor>
  );
}

export default Donor;
