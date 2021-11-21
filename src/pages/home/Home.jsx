import React, { Component } from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo";
import "./home.css";
import { userData1, userData2, userData3 } from "../../dummyData";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.date = new Date().toLocaleString("en-US", { day : '2-digit'});
    this.month = new Date().toLocaleString("en-US", { month: "long" });
    this.year = new Date().getFullYear();
    this.hours = new Date().getHours();

    this.state = {
      userDatas: [userData1, userData2, userData3],
      selectedData: userData1,
    };
  }

  handleClick = (data) => {
    this.setState({
      selectedData: data,
    });
  };

  render() {
    const { userDatas, selectedData } = this.state;
    return (
      <div className="home">
        <FeaturedInfo datas={userDatas} onDivClick={this.handleClick} />
        <div className="titleAnalis">
          <h3>Analis Produk</h3>
          <span>Update Terakhir : {this.date}  {this.month} {this.year}</span>
        </div>
        <Chart
          data={selectedData}
          title="User Analytics"
          grid
          dataKey="Active User"
        />
      </div>
    );
  }
}
