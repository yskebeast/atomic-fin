import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件" />
      <SButtonWrappper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrappper>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SButtonWrappper = styled.div`
  padding-left: 8px;
`;
