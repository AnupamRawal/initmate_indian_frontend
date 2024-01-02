import React from "react";
import PageLayout from "@/components/pageLayout";
import Head from "next/head";
import {
  Col,
  Row,
  Card,
  Flex,
  Grid,
  Typography,
  Divider,
  Input,
  Checkbox,
  Space,
} from "antd";
import Image from "next/image";
import { Content } from "antd/es/layout/layout";
import Search from "antd/es/input/Search";
import Title from "antd/es/skeleton/Title";

// Sample data for blogs
const blogs = [
  {
    id: 1,
    tag: "Growth & Culture",
    title: "AI and Customer Experience: The Basics + 5 Tools to Try in 2024",
    date: "2023-11-10",
    image:
      "https://theintimateindian.in/wp-content/uploads/2020/04/1587563976934162-0-e1703853287639.jpg",
    description:
      "In this article, we’ll explore how companies are currently using AI to improve customer experience, and we’ll offer some options for tools to consider if you’re ready to add an AI layer to your efforts.",
  },
];
const blogs2 = [
  {
    id: 2,
    title: "Making the Most of Remote Meetings",
    date: "2023-11-10",
    tag: "Inside Help Scout",
    image:
      "https://theintimateindian.in/wp-content/uploads/2020/04/1587563976934162-0-e1703853287639.jpg",
    description: "Making the Most of Remote Meetings",
  },
  {
    id: 3,
    title: "Evolving Brand Design at Help Scout",
    date: "2023-11-10",
    tag: "Inside Help Scout",
    image:
      "https://theintimateindian.in/wp-content/uploads/2020/04/1587563976934162-0-e1703853287639.jpg",
    description: "Making the Most of Remote Meetings",
  },
];

const { useBreakpoint } = Grid;
const Home = () => {
  const screen = useBreakpoint();
  return (
    <>
      <Head>
        <title>Intimate Indian</title>
        <meta name="description" content="intimate indian" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <Content>
          <Divider />
          <Row gutter={[8, 8]} justify="center" style={{ margin: "10px 0px" }}>
            {/* Left section (70% width on larger screens, 100% on smaller screens) */}
            <Col xs={24} md={14}>
              {/* Blog Card */}
              {/* <Row> */}
              {blogs.map((blog) => (
                <Card key={blog.id}>
                  {/* <Col> */}
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={0}
                    height={0}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    style={{ height: "100%", width: "100%" }} //The point is right there!
                  />
                  {/* </Col> */}
                  <p>{blog.tag}</p>
                  <h2>{blog.title}</h2>
                  <p>{blog.description}</p>
                </Card>
              ))}
              {/* </Row> */}
            </Col>

            {/* Right section (30% width on larger screens, 100% on smaller screens) */}
            <Col xs={24} md={8}>
              {/* Two smaller blogs */}
              {blogs2.map((blog, index: any) => (
                <Card
                  key={blog.id}
                  style={{
                    height: "calc(50% - 10px)",
                    marginTop: index > 0 ? "10px" : "2px", // Add margin to the top of cards except the first one
                  }}
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                    style={{ height: "100%", width: "100%" }}
                  />
                  <p>{blog.tag}</p>
                  <h3>{blog.title}</h3>
                </Card>
              ))}
            </Col>
          </Row>

          <Row
            justify={"center"}
            align={"middle"}
            style={{ backgroundColor: "#E1E3E5" }}
          >
            <Col xs={20} md={12}>
              <Typography.Title>
                Get our best content in your inbox
              </Typography.Title>
              <Typography.Paragraph>
                All the tips, stories, and resources you could ever need or want
                — straight to your email!
              </Typography.Paragraph>
            </Col>
            <Col xs={20} md={8}>
              <Space direction="vertical">
                <Checkbox.Group
                  style={{ width: "100%" }}
                  onChange={(value: any) => {
                    console.log(value);
                  }}
                >
                  <Row>
                    <Col span={12}>
                      <Checkbox defaultChecked={true} value="Monthly">
                        Monthly
                      </Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value="Weekly">Weekly</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
                <Row>
                  <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={(value: string) => console.log(value)}
                  />
                </Row>
                <Row>
                Your privacy matters! Help Scout only uses this info to send content and updates. You may unsubscribe anytime. View our privacy policy for more.
                </Row>
              </Space>
            </Col>
          </Row>
        </Content>
      </PageLayout>
    </>
  );
};

export default Home;
