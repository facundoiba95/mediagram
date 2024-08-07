import styled from "styled-components";

export const LabelStyles = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  height: 20px;
`;

export const SwitchStyles = styled.div`
  position: relative;
  width: 50px;
  height: 10px;
  background: crimson;
  border-radius: 32px;
  padding: 0px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 35px;
    top: 50%;
    left: 0px;
    background: white;
    transform: translate(0, -50%);
  }
`;

export const InputStyles = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${SwitchStyles} {
    background: yellowgreen;

    &:before {
      transform: translate(32px, -50%);
    }
  }
`;