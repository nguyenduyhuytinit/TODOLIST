import React from 'react';
import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import { useState } from 'react';
import { Modal, Button, Form, Input, Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';


function Item(props) {
    const { id,task, deleteTask, editTask } = props;

    /// Modal
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <div>
            <div className="item">
                <div className="plan">{task}</div>
                <div className="icon">
                    <AiTwotoneEdit id="btn-edit" onClick={() => setIsModalVisible(!isModalVisible)} />
                    <Modal title="Chỉnh Sửa Lịch" visible={isModalVisible}
                        footer={null}
                        closable={false}>
                        <Form
                            name="input"
                            initialValues={{ task: task }}
                            onFinish={(values) => {
                                editTask(id, values)
                                setIsModalVisible(!isModalVisible)
                            }}
                        >
                            <Form.Item name="task">
                                <Input  />
                            </Form.Item>
                            <Form.Item >
                                <Button
                                    type="ghost" htmlType="submit">
                                    Xác Nhận
                                </Button>
                                <Button onClick={() => setIsModalVisible(!isModalVisible)}
                                    type="ghost" >
                                    Hủy
                                </Button>
                            </Form.Item>
                        </Form>
                    </Modal>
                    <Popconfirm title="Are you sure？"
                        onConfirm={() => deleteTask(id)}
                        icon={<QuestionCircleOutlined style={{ color: 'red' }}
                        />}>
                        <AiFillDelete id="btn-delete" />
                    </Popconfirm>

                </div>
            </div>
        </div>
    );
}

export default Item;