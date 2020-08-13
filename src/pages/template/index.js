import React from "react";
import { Layout, Menu, Icon } from "antd";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const { Header, Sider, Content } = Layout;

export default function Index({ component }) {
  const Name = component;
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={false}>
        <div className="logo" style={{ height: "32px", margin: "16px" }} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="user" />
              <span>catalog</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/admin">
              <Icon type="user" />
              <span>admin</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/home">
              <Icon type="user" />
              <span>home</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          <Icon
            className="trigger"
            type={false ? "menu-unfold" : "menu-fold"}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            minHeight: 280
          }}
        >
          <Name />
        </Content>
      </Layout>
    </Layout>
  );
}
