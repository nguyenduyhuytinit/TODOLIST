import './App.css';
//import { createTaskListAction } from '../redux/actions';
import Item from './Item';
import { useState,useEffect } from 'react';
import { Form, Input, Button, Space, Card } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from "react-redux";

function App() {

  useEffect(()=>{
    dispatch({
      type: 'GET_TASK'
    })
  },[])
  
  const taskList = useSelector((state) => state.taskReducer.taskList);
  
  const dispatch = useDispatch();
  //const [taskList, setTasklist] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [clearForm] = Form.useForm();

  //search
  const searchList = taskList.filter((item) => {
    return item.task.toLowerCase().indexOf(searchKey.toLowerCase()) !== -1;
  })

  //add
  function AddTask(values) {
    dispatch(
      {
        type:'CREATE_TASK',
        payload: values
      }
    )

    clearForm.resetFields();
    
  }
  //delete
  function deleteTask(id) {
    dispatch(
      {
        type:'DELETE_TASK',
        payload: id
      }
    )
  }
  //edit
  function editTask(id, values) {
    dispatch(
      {
        type:'EDIT_TASK',
        payload: {
          id : id,
          data : values
        }
      }
    )
  }
  //render
  function render() {
    if (searchList.length > 0) {
      return searchList.map((item) => {
        return (
          <Item
            key={item.id}
            id={item.id}
            task={item.task}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        )
      })
    }
     else {
      return taskList.map((item) => {
        return (
          <Item
            key={item.id}
            id={item.id}
            task={item.task}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        )
      })
    }
  }
  return (
    <div className="App">
      <Card id="form-list" bordered={true} style={{ width: 300 }}>
        <Form
          name="input"
          /* initialValues={{ remember: true }} */
          onFinish={(values) => {
            if (values.task === null) {
              alert('Nhập zô bạn ei !!!')
            } else {
              AddTask(values)
            }
          }}
          form={clearForm}
        >
          <Space >
            <Form.Item
              name="task"
              rules={[{ required: true, message: 'Nhập zô bạn ơi !!!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item >
              <Button id="btn-them" type="ghost" htmlType="submit">
                Thêm
              </Button>
            </Form.Item>
          </Space>
        </Form>
        <div>
          <Input prefix={<SearchOutlined />} onChange={(e) => setSearchKey(e.target.value)} />
          <h1 id="title">My Schedule</h1>
        </div>

        <div className="form-item">
          {render()}
        </div>
      </Card>
    </div>
  );
}

export default App;
