import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

export const ModalContent = styled.div`
  display: grid;
  background-color: white;
  margin: auto;
  width: fit-content;
  padding: 20px;

  & > h3 {
    color: #2d2c2c;
  }

  & > label {
    color: #2d2c2c;
  }

  & > span {
    margin-top: 8px;
    font-size: 14px;
    font-weight: 600;
    font-style: italic;
    color: red;
  }

  
`;