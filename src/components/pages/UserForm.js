import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Typography,
  Input,
  Form,
  Button,
  Radio,
  Switch,
  Slider,
  Select,
  message,
} from "antd";
import axios from "axios";
import useCrud from "../../hook/useCrud";
import { connect } from "react-redux";
import {
  ACTION_CREATE,
  ACTION_UPDATE,
  ACTION_VIEW,
} from "../../store/action/crud-action";
import CrudApiService from "../../service/crud-api-service";

const { Title } = Typography;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const FormApp = (props) => {
  console.log(props);
  const [form] = Form.useForm();
  const [isEdit, setIsEdit] = useState(false);
  const initialValue = props.data.fromValue || null;
  const { loading, setLoading, history } = useCrud();

  useEffect(() => {
    const mode = props.data.mode;
    if (mode === ACTION_CREATE || ACTION_UPDATE) {
      setIsEdit(false);
    }
    if (mode === ACTION_VIEW) {
      setIsEdit(true);
    }
  }, [props]);

  const handleSubmit = (values) => {
    setLoading(true);
    const { id } = values;
    if (!id) {
      CrudApiService.createUser(values).then((res) => {
        setLoading(false);
        message.success("User Added Successfully!");
        history.push("/list");
      });
    } else {
      CrudApiService.updateUser(values, id).then((res) => {
        setLoading(false);
        message.success("User Update Successfully!");
        history.push("/list");
      });
    }
  };
  return (
    <div>
      <Row gutter={[40, 0]}>
        <Col span={23}>
          <Title style={{ textAlign: "center" }} level={2}>
            Please Fill the User Form
          </Title>
        </Col>
      </Row>
      <Row gutter={[40, 0]}>
        <Col span={18}>
          <Form
            {...layout}
            form={form}
            initialValues={initialValue}
            onFinish={handleSubmit}
          >
            <Form.Item
              name="username"
              label="UserName"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input
                placeholder="Please Enter your username"
                disabled={isEdit}
              />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please input your correct email",
                  type: "email",
                },
              ]}
            >
              <Input placeholder="Please Enter your email" disabled={isEdit} />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[
                {
                  required: true,
                  message: "Please select your gender",
                },
              ]}
            >
              <Radio.Group disabled={isEdit}>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
                <Radio value="others">Others</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="hobbies"
              label="Hobbies"
              rules={[
                {
                  required: true,
                  message: "Please select your hobbies",
                  type: "array",
                },
              ]}
            >
              <Select
                mode="multiple"
                placeholder="Please select you hobbies"
                disabled={isEdit}
              >
                <Select.Option value="Reading">Reading</Select.Option>
                <Select.Option value="Writing">Writing</Select.Option>
                <Select.Option value="Coding">Coding</Select.Option>
                <Select.Option value="Singing">Singing</Select.Option>
                <Select.Option value="Dancing">Dancing</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="review" label="Review">
              <Slider disabled={isEdit} />
            </Form.Item>
            <Form.Item
              name="notificaiton"
              label="Notificaiton"
              valuePropName="checked"
            >
              <Switch disabled={isEdit} />
            </Form.Item>
            <Form.Item name="id" />
            <div style={{ textAlign: "right" }}>
              <Button
                disabled={isEdit}
                type="primary"
                loading={loading}
                htmlType="submit"
              >
                Save
              </Button>{" "}
              <Button
                type="danger"
                htmlType="button"
                onClick={() => history.push("/list")}
              >
                Back
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};
export default connect(mapStateToProps)(FormApp);
