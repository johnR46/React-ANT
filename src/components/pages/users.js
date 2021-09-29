import { useEffect } from "react";
import {
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import { connect } from "react-redux";

import List from "./list";
import CrudApiService from "../../service/crud-api-service";
import useCrud from "../../hook/useCrud";
import { create, update, view } from "../../store/action/crud-action";
import { Button, Row, Col, Typography } from "antd";
import { Popconfirm, message } from "antd";

const { Title } = Typography;

const Users = (props) => {
  console.log(props);
  const { datas, setDatas, history } = useCrud();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDatas([]);
        setDatas(await CrudApiService.listUser());
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [setDatas]);

  const columns = [
    {
      title: "Username",
      dataIndex: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: "Review",
      dataIndex: "review",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  const toView = (select) => {
    props.dispatch(view(select));
    history.push("/users/view");
  };

  const toUpdate = (select) => {
    props.dispatch(update(select));
    history.push("/users/update");
  };

  const toDelete = async (id) => {
    await CrudApiService.deleteUser(id).then((r) => r.data);
    setDatas(await CrudApiService.listUser());
  };

  const actionFn = (user) => {
    return (
      <>
        <Row>
          <Col span={8}>
            <SearchOutlined onClick={() => toView(user)} />
          </Col>
          <Col span={8}>
            <EditOutlined onClick={() => toUpdate(user)} />
          </Col>
          <Col span={8}>
            <Popconfirm
              title="Are you sure to delete this user?"
              onConfirm={() => toDelete(user.id)}
              onCancel={() => ({})}
              okText="Yes"
              cancelText="No"
            >
              <DeleteOutlined></DeleteOutlined>
            </Popconfirm>
          </Col>
        </Row>
      </>
    );
  };

  const data = datas.map((user) => {
    return {
      key: user.id,
      username: user.username,
      email: user.email,
      gender: user.gender,
      review: user.review + "%",
      action: actionFn(user),
    };
  });

  const handleClick = () => {
    props.dispatch(create());
    history.push("/users/add");
  };

  return (
    <>
      <Row gutter={[40, 0]}>
        <Col span={18}>
          <Title level={2}>User List</Title>
        </Col>
        <Col span={6}>
          <Button onClick={handleClick} block>
            Add User
          </Button>
        </Col>
      </Row>
      <List columns={columns} data={data}></List>;
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

export default connect(mapStateToProps)(Users);
