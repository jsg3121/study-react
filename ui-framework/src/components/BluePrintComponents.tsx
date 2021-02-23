import React from 'react';
// import axios from 'axios';
import { Cell, Column, Table } from '@blueprintjs/table';

// const http = axios;

// interface tableInterface {
//   id: number;
//   culture_name: string;
//   category: string;
//   district: string;
//   start_date: string;
//   end_date: string;
//   usage_fee: string;
// }

const BluePrintComponents = () => {
  // const [Data, setData] = useState([{
  //   key: 0,
  //   title: "",
  //   category: "",
  //   district: "",
  //   start_date: "",
  //   end_date: "",
  //   usage_fee: ""
  // }]);

  // http.get("/api/greeting").then((res) => {
  //   const getData = res.data.map((list: tableInterface) => {
  //     return {
  //       key: list.id,
  //       title: list.culture_name,
  //       category: list.category,
  //       district: list.district,
  //       start_date: list.start_date,
  //       end_date: list.end_date,
  //       usage_fee: list.usage_fee,
  //     };
  //   });
  //   setData(getData);
  // });
  console.log(1);

  const cellRenderer = (index: number) => {
    console.log(1231516151);
    return <Cell>{index}</Cell>;
  };
  console.log(2);

  return (
    <div>
      <Table numRows={10}>
        <Column name="dataCol" cellRenderer={cellRenderer} />
      </Table>
    </div>
  );
};

export default BluePrintComponents;