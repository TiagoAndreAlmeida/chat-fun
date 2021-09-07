import React from "react";
import { SideMenuContainer } from "./style";

const SideMenu: React.FC = () => {
  return (
    <SideMenuContainer>
      <li>#Geral</li>
      <li>User 1</li>
      <li>User 2</li>
    </SideMenuContainer>
  );
}

export default SideMenu;