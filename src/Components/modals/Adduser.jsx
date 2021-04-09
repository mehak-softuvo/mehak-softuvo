import React from 'react';
import {
    Modal,
    Button,
    Form,
    Input,
} from 'antd';
import {POP_UP_MODAL_HEADER_CONSTANTS} from '../Constants/constants';
var {
    ADD_USER
} = POP_UP_MODAL_HEADER_CONSTANTS;

export const AddUser = (props) => {
    const [form] = Form.useForm();
    let {
        title,
    } = props;
    const layout = {
        labelCol: {
            span: 28,
        },
        wrapperCol: {
            span: 24,
        },
    };
    return (
       <Modal
       title={title}
       centered
       style={{justifyContent: 'center'}}
       visible={props.visible}
       onCancel={() => props.onCancel(false)}
       okButtonProps={{ title: "Submit" }}
       footer={null}>
            <Form {...layout} form={form} layout="vertical" onFinish={(event) => props.onOk(event)} >
                    <Form.Item
                        label={"Identifier"}
                        name="identifier"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Identifier!',
                            },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={"Password"}
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Last Name!',
                            },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={"Confirm Password"}
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Last Name!',
                            },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={"Role"}
                        name="role"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your role!',
                            },
                        ]}>
                        <Input />
                    </Form.Item>
                    <div className="add-user-btn"><Button type="primary" htmlType="submit">{title === ADD_USER ? 'Add User' : 'Update User'} </Button></div>
                </Form>
       </Modal>
    )
}
