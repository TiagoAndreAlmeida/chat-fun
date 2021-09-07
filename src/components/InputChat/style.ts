import styled from "styled-components";

export const Container = styled.div`
  padding: 12px;
`;

export const ChatInput = styled.input`
  background-color: #2d2c2c;
  border: none;
  height: 38px;
  width: 100%;
  color: white;
`;

export const Button = styled.button`
  background-color: #639a27;
  border: none;
  border-radius: 0;
  outline: none;
  padding: 6px;
  margin-top: 8px;
  float: right;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #91bd61;
  }

  &:active {
    transform: scale(.96);
  }
`;