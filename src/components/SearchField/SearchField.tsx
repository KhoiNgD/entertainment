import styled from "styled-components";
import { ReactComponent as SearchIcon } from "assets/icon-search.svg";
import { Input } from "components/Input";
import { useData } from "context/data-context";
import React from "react";
import { DataActionType } from "helpers";

type Prop = { placeholder: string };

function SearchField({ placeholder }: Prop) {
  const [, dispatch] = useData();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const payload = event.target.value;
    sessionStorage.setItem(DataActionType.SEARCH, payload);
    dispatch({
      type: DataActionType.SEARCH,
      payload,
    });
  }

  return (
    <Wrapper>
      <Icon>
        <SearchIcon />
      </Icon>
      <Field
        onChange={handleChange}
        placeholder={placeholder}
        value={`${sessionStorage.getItem(DataActionType.SEARCH) || ""}`}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 24px;
  margin-bottom: 34px;
`;

const Icon = styled.div`
  transform: translateY(20%);
`;

const Field = styled(Input)`
  width: 100%;
  font-size: 24px;
  padding-left: 0;
  padding-bottom: 15px;
  border: none;
  outline: none;

  &:focus,
  &:active {
    box-shadow: 0 1px 0 hsl(var(--grey));
  }

  @media (max-width: 550px) {
    font-size: 16px;
  }
`;

export { SearchField };
