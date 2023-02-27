import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaCog, FaUserTie, FaColumns, FaThList } from "react-icons/fa";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import styled from "styled-components";

const Menuitem = styled(MenuItem)`
  :hover {
    background-color: #ffdb58;
    padding: 5px;
    border-radius: 10px;
  }
`;

const SideNavigation = () => {
  const [collapsed, setCollapsed] = useState(false);
  const styles = {
    sideBarHeight: {
      height: "145vh",
    },
    menuIcon: {
      float: "right",
      margin: "10px",
    },
  };
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };
  return (
    <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
      <SidebarHeader>
        <div style={styles.menuIcon} onClick={onClickMenuIcon}>
          <AiOutlineMenu />
        </div>
      </SidebarHeader>
      <Menu iconShape="square">
        <Menuitem icon={<FaColumns />}> Dashboard</Menuitem>
        <Menuitem icon={<FaUserTie />} href="/employees">
          Employees
        </Menuitem>
        <SubMenu title="Stages" icon={<FaThList />}>
          <Menuitem>Offer Letter</Menuitem>
          <MenuItem>Skill Matrix</MenuItem>
          <MenuItem>Know Your Company</MenuItem>
          <MenuItem>Joining Day Information</MenuItem>
          <MenuItem>Feedback</MenuItem>
          <MenuItem>Background Check</MenuItem>
        </SubMenu>
        <Menuitem icon={<FaCog />}>Settings</Menuitem>
      </Menu>
    </ProSidebar>
  );
};
export default SideNavigation;
