import React from "react";
import { Content, Header as AppHeader } from "antd/es/layout/layout";
import { AutoComplete, Col, Flex, Input, Row } from "antd";
import Image from "next/image";

const HeaderStyle: React.CSSProperties = {
  backgroundColor: "#E1E3E5",
  height: "100px",
};

const options = [
  { value: "Burns Bay Road" },
  { value: "Downing Street" },
  { value: "Wall Street" },
];

const Heading = () => {
  return (
    <AppHeader style={HeaderStyle}>
      <Row justify="space-between" align="middle">
        <Col md={6} sm={12} xs={24}>
          <Flex justify="center">
            <Image
              src="/ii_logo.svg"
              alt="Vercel Logo"
              width={200}
              height={110}
              priority
            />
          </Flex>
        </Col>
        <Col md={6} sm={24} xs={24} style={{ textAlign: "center" }}>
          <Flex justify="center">
            <AutoComplete
              options={options}
              filterOption={(inputValue, option) =>
                option!.value
                  .toUpperCase()
                  .indexOf(inputValue.toUpperCase()) !== -1
              }
            >
                <Input.Search size="large" placeholder="Search" />
              </AutoComplete>
          </Flex>
        </Col>
      </Row>
    </AppHeader>
  );
};

export default Heading;
