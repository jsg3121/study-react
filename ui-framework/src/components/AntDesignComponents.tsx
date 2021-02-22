import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const http = axios;

interface tableInterface {
  id: number;
  culture_name: string;
  category: string;
  district: string;
  start_date: string;
  end_date: string;
  usage_fee: string;
}

interface editTableInterface {
  key: number;
  title: string;
  category: string;
  district: string;
  start_date: string;
  end_date: string;
  usage_fee: string;
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: string;
  inputType: 'number' | 'text';
  record: editTableInterface;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item name={dataIndex} style={{ margin: 0 }} rules={[
          {
            required: true,
            message: `Please Input ${title}`
          }
        ]}>
          {inputNode}
        </Form.Item>
      ) : (
          children
        )}
    </td>
  );
};

const AntDesignComponents = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([{
    key: 0,
    title: "",
    category: "",
    district: "",
    start_date: "",
    end_date: "",
    usage_fee: ""
  }]);
  const [editingKey, setEditingKey] = useState('');


  useEffect(() => {
    http.get("/api/greeting").then((res) => {
      const tableData = res.data.map((list: tableInterface) => {
        return {
          key: list.id,
          title: list.culture_name,
          category: list.category,
          district: list.district,
          start_date: list.start_date,
          end_date: list.end_date,
          usage_fee: list.usage_fee,
        };
      });
      setData(tableData);
    });
  }, []);


  const isEditing = (record: editTableInterface) => String(record.key) === editingKey;
  const edit = (record: Partial<editTableInterface> & { key: React.Key; }) => {
    form.setFieldsValue({ title: '', category: '', district: '', ...record });
    setEditingKey(String(record.key));
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as editTableInterface;

      const newData = [...data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const columns = [
    {
      title: 'Id',
      dataIndex: 'key',
      sorter: (a: { key: number; }, b: { key: number; }) => a.key - b.key,
      width: "5%",
      fixed: true
    }, {
      title: 'Title',
      dataIndex: 'title',
      width: "50%",
      ellipsis: true,
      editable: true
    }, {
      title: 'Category',
      dataIndex: 'category',
      width: "10%",
      editable: true
    }, {
      title: 'District',
      dataIndex: 'district',
      width: "10%",
      editable: true
    }, {
      title: 'Date',
      dataIndex: 'start_date',
      colSpan: 2,
      width: "7%",
    }, {
      title: 'EndDate',
      dataIndex: 'end_date',
      colSpan: 0,
      width: "7%",
    }, {
      title: 'UsageFee',
      dataIndex: 'usage_fee',
      ellipsis: true,
    }, {
      title: 'operation',
      dataIndex: 'operation',
      render: (_: any, record: editTableInterface) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <p onClick={() => save(record.key)} style={{ marginRight: 8 }}>
              Save
            </p>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <p>Cancel</p>
            </Popconfirm>
          </span>
        ) : (
            <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
              Edit
            </Typography.Link>
          );
      }
    }
  ];

  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: editTableInterface) => {
        return {
          record,
          inputType: col.dataIndex === 'age' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record)
        };
      }
    };
  });

  return (
    <div>
      <Form form={form} component={false}>
        <Table components={{ body: { cell: EditableCell } }} bordered columns={mergedColumns} rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }} dataSource={data} scroll={{ x: 2000 }}></Table>
      </Form>
    </div>
  );
};

export default AntDesignComponents;