import { Col, Layout, Row } from "antd";
import React from "react";
import Heading from "./header";

const PageLayout = ({ children }: any) => {
  return (
    <Layout>
      <Row justify={"center"} >
        <Col md={24} sm={16} xs={24}>
          <Heading />
        </Col>
      {children}
      </Row>
    </Layout>
  );
};

export default PageLayout;
