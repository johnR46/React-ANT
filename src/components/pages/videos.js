import React, { useEffect, useState } from "react";
import { Table, Row, Col, Button, Typography } from "antd";
import { Empty } from "antd";
const { Title } = Typography;

const Videos = () => {
  const handleClick = () => {};
  const data = [];
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Comment",
      dataIndex: "comment",
    },
    {
      title: "Rating",
      dataIndex: "rating",
    },
    {
      title: "Tag",
      dataIndex: "tag",
    },
  ];

  return (
    <div>
      <Row gutter={[40, 0]}>
        <Col span={18}>
          <Title level={2}>Video List</Title>
        </Col>
        <Col span={6}>
          <Button onClick={handleClick} block>
            Add User
          </Button>
        </Col>
      </Row>
      <Row gutter={[40, 0]}>
        <Col span={24}>
          <Table columns={columns} dataSource={data} />
        </Col>
      </Row>
    </div>
  );
};
export default Videos;
