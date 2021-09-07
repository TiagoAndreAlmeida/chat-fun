import styled from "styled-components";

export const SideMenuContainer = styled.aside`
  background-color: #2d2c2c;
  min-width: 115px;
  /* margin: 0 10px 0 0; */
  padding: 10px;
  color: white;

  & > li {
    list-style: none;
    margin: 12px auto;
    cursor: pointer;
  }

  & > li:hover {
    text-decoration: underline;
    font-weight: 600;
  }
`;