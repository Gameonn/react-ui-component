import React, { useState } from "react";
import Buttons from "./Button/Buttons";
import Inputs from "./Input/Inputs";
import {
  Sidenav,
  Nav,
  Dropdown,
  Navbar,
  Container,
  Sidebar,
  Content,
} from "rsuite";
import {
  ArrowRightLine as AngleRight,
  Code,
  ArrowLeftLine as AngleLeft,
  Peoples as Group,
  Rate,
  AdvancedAnalytics as LogoAnalytics,
  Dashboard,
  Grid,
} from "@rsuite/icons";
import "rsuite/dist/rsuite.min.css";
import { NavLink, useParams } from "react-router-dom";

const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  background: "#34c3ff",
  color: " #fff",
  whiteSpace: "nowrap",
  overflow: "hidden",
};

const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Nav>
        <Dropdown placement="topStart" trigger="click">
          <Dropdown.Item>Help</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </Nav>

      <Nav pullRight>
        <Nav.Item onClick={onChange} style={{ width: 56, textAlign: "center" }}>
          {expand ? <AngleLeft /> : <AngleRight />}
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

const Page = () => {
  console.log("page component");
  const { page } = useParams();
  const [expand, setExpand] = useState(true);
  const content = page === "button" ? <Buttons /> : <Inputs />;
  return (
    <div className="show-fake-browser sidebar-page">
      <Container>
        <Sidebar
          style={{
            boxShadow: "0 4px 4px rgb(0 0 0 / 12%), 0 0 10px rgb(0 0 0 / 6%)",
            background: "#f2f2f5",
          }}
          width={expand ? 260 : 56}
          collapsible
        >
          <Sidenav.Header>
            <div style={headerStyles}>
              <LogoAnalytics style={{ fontSize: 20 }} />
              <span style={{ marginLeft: 20, fontWeight: 600 }}>
                <span style={{ color: "red" }}>Dev</span>challenges.io
              </span>
            </div>
          </Sidenav.Header>
          <Sidenav expanded={expand} appearance="subtle">
            <Sidenav.Body>
              <Nav>
                <Nav.Item eventKey="1" title="Colors" icon={<Dashboard />}>
                  Colors
                </Nav.Item>
                <Nav.Item eventKey="2" title="Typography" icon={<Group />}>
                  Typography
                </Nav.Item>
                <Nav.Item eventKey="5" title="Buttons" icon={<Rate />}>
                  <NavLink
                    to="/page/button"
                    style={({ isActive }) => ({
                      color: isActive ? "#1675e0" : "#8e8e93",
                    })}
                  >
                    Buttons
                  </NavLink>
                </Nav.Item>
                <Nav.Item eventKey="6" title="Inputs" icon={<Code />}>
                  <NavLink
                    to="/page/input"
                    style={({ isActive }) => ({
                      color: isActive ? "#1675e0" : "#8e8e93",
                    })}
                  >
                    Inputs
                  </NavLink>
                </Nav.Item>
                <Dropdown
                  eventKey="3"
                  trigger="hover"
                  title="Grid"
                  icon={<Grid />}
                  placement="rightStart"
                >
                  <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
                  <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
                  <Dropdown.Item eventKey="3-4">Loyalty</Dropdown.Item>
                </Dropdown>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
        </Sidebar>
        <Container>
          <Content>{content}</Content>
        </Container>
      </Container>
    </div>
  );
};

export default Page;
