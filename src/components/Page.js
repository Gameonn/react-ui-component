import React from "react";
import Main from "./Main";
import Menu from "./Menu";
import { Container, Content } from "rsuite";

const Page = () => {
  return (
    <div className="show-fake-browser sidebar-page">
      <Container>
        <Menu />
        <Container>
          <Content>
            <Main />
          </Content>
        </Container>
      </Container>
    </div>
  );
};

export default Page;
