import { Component } from "react";
import axios from "axios";

const http = axios;

class ComponentsTest extends Component {
  state = {
    getData: [
      { id: 1, culture_name: "ADF" }
    ],
    loading: true,
  };

  componentDidMount() {
    http.get("/").then((res) => {
      // this.setState({ getData: res.data, loading: false });
      // console.log(this.state.getData[0]);
    });
  }

  // render() {
  //   if (this.state.loading) {
  //     return (
  //       <div>
  //         <h1>Loading...</h1>
  //       </div>
  //     );
  //   }
  //   return (
  //     <div>
  //       {this.state.getData.map((list) => {
  //         return <p key={list.id}>{list.culture_name}</p>;
  //       })}
  //     </div>
  //   );
  // }
}

export default ComponentsTest;
