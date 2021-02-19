import { Form, Table } from 'antd';
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

const AntDesignComponents = () => {
  const [data, testData] = useState([]);

  useEffect(() => {
    http.get("/api/greeting").then((res: any) => {
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
      testData(tableData);
    });
  });

  const columns = [
    {
      title: 'Id',
      dataIndex: 'key',
      sorter: (a: any, b: any) => a.key - b.key,
      width: "5%",
      fixed: true
    }, {
      title: 'Title',
      dataIndex: 'title',
      width: "50%",
      ellipsis: true,
    }, {
      title: 'Category',
      dataIndex: 'category',
      width: "10%",
    }, {
      title: 'District',
      dataIndex: 'district',
      width: "10%",
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
    }
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} scroll={{ x: 2000 }}></Table>
    </div>
  );
};

export default AntDesignComponents;