import styled from "styled-components";

function Dot() {
  return <StyledDot />;
}

const StyledDot = styled.div`
  width: 3px;
  height: 3px;
  background: hsl(var(--white) / 0.5);
`;

export default Dot;
