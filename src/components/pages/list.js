import React from "react";
import { Table, Row, Col } from "antd";

const List = ({ columns, data }) => {
  return (
    <div>
      <Row gutter={[40, 0]}>
        <Col span={24}>
          <Table columns={columns} dataSource={data} />
        </Col>
      </Row>
    </div>
  );
};
export default List;
