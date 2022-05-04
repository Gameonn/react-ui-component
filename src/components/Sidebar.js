import React from "react";
import Sidenav from "rsuite/Sidenav";
import Nav from "rsuite/Nav";
import Dropdown from "rsuite/Dropdown";
import "rsuite/dist/rsuite.min.css";

const Sidebar = () => {
  console.log("Sidebar");
  return (
    <div style={{ display: "block", width: 300, paddingLeft: 30 }}>
      <Sidenav defaultOpenKeys={["3", "4"]}>
        <Sidenav.Body>
          <Nav activeKey="5">
            <Nav.Item>
              <h6>
                <span style={{ color: "red" }}>Dev</span>challenges.io
              </h6>
            </Nav.Item>
            <Nav.Item eventKey="1">Colors</Nav.Item>
            <Nav.Item eventKey="2">Typography</Nav.Item>
            <Nav.Item eventKey="3">Spaces</Nav.Item>
            <Nav.Item eventKey="4">Buttons</Nav.Item>
            <Nav.Item eventKey="5">Inputs</Nav.Item>
            <Dropdown eventKey="6" title="Grid">
              <Dropdown.Item eventKey="4-1">Privacy</Dropdown.Item>
              <Dropdown.Item eventKey="4-2">About</Dropdown.Item>
              <Dropdown.Item eventKey="4-3">Terms</Dropdown.Item>
            </Dropdown>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default Sidebar;
