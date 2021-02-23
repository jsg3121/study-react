import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Cell, Column, Table } from '@blueprintjs/table';

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

const BluePrintComponents = () => {
  const [data, setData] = useState([{
    key: 0,
    title: "",
    category: "",
    district: "",
    start_date: "",
    end_date: "",
    usage_fee: ""
  }]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    http.get("/api/greeting").then((res) => {
      const getData = res.data.map((list: tableInterface) => {
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
      setData(getData);
      setLoading(false);
    });
  }, []);

  const cellRenderer = (index: number) => {
    return (
      <Cell>{data[index]}</Cell>
    );
  };

  if (loading) {
    return (
      <div>
        Loading...
      </div>
    );
  } else {
    return (
      <div>
        <Table numRows={10}>
          <Column name="Title" cellRenderer={cellRenderer} />
          <Column name="Category" cellRenderer={cellRenderer} />
          <Column name="District" cellRenderer={cellRenderer} />
        </Table>
      </div>
    );
  }
};

export default BluePrintComponents;