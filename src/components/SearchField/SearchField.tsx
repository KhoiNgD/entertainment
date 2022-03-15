import styled from "styled-components";
import { ReactComponent as SearchIcon } from "assets/icon-search.svg";
import { Input } from "components/Input";

function SearchField() {
  return (
    <Wrapper>
      <Icon>
        <SearchIcon />
      </Icon>
      <Field placeholder="Search for movies or TV series" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 24px;
`;

const Icon = styled.div`
  transform: translateY(20%);
`;

const Field = styled(Input)`
  font-size: 24px;
  padding-left: 0;
  padding-bottom: 15px;
  border: none;
  outline: none;

  &:focus,
  &:active {
    border-bottom: 1px solid hsl(var(--grey));
  }
`;

export { SearchField };
