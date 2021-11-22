import React, { Component } from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo";
import "./home.css";
import { dataBarang, dataHistori } from "../../dummyData";
import moment from "moment";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.date = new Date().toLocaleString("en-US", { day: "2-digit" });
    this.month = new Date().toLocaleString("en-US", { month: "long" });
    this.year = new Date().getFullYear();
    this.hours = new Date().getHours();

    this.state = {
      dataKeys: {
        dataKeyX: "tgl",
        dataKeyY: "penjualan",
        dataBar: "penjualan",
      },
      dataChart: dataHistori,
      selectedData: null,
    };
  }

  componentDidMount() {
    this.getdataHistoriSebulan();
  }

  getdataHistoriSebulan() {
    let oneMonthBefore = moment().subtract(1, "months").format("YYYY-MM-DD");
    let twoMonthBefore = moment().subtract(2, "months").format("YYYY-MM-DD");
    let current = moment().format("YYYY-MM-DD");
    if (dataHistori.length > 0) {
      const filtered = dataHistori.filter((p) => {
        let compareDate = moment(p.tgl).format("YYYY-MM-DD");
        return moment(compareDate).isBetween(oneMonthBefore, current);
      });

      const filtered2Months = dataHistori.filter((p) => {
        let compareDate = moment(p.tgl).format("YYYY-MM-DD");
        return moment(compareDate).isBetween(twoMonthBefore, oneMonthBefore);
      });

      let totalBefore = 0;
      let viewedBefore = 0;
      let terjualBefore = filtered2Months.length;
      for (let f in filtered2Months) {
        totalBefore += filtered[f].penjualan;
        viewedBefore += filtered[f].jml;
      }

      let total = 0;
      let viewed = 0;
      let terjual = filtered.length;
      for (let f in filtered) {
        total += filtered[f].penjualan;
        viewed += filtered[f].jml;
      }

      let totalTwoMonths = totalBefore + total;
      let totalViewedTwoMonths = viewedBefore + viewed;
      let terjualTwoMonths = terjualBefore + terjual;

      let percentageTotal = ((total - totalBefore) / totalTwoMonths) * 100;
      let percentageViewed =
        ((viewed - viewedBefore) / totalViewedTwoMonths) * 100;
      let percentageTerjual =
        ((terjual - terjualBefore) / terjualTwoMonths) * 100;

      this.setState({
        dataChart: filtered,
        selectedData: {
          total: total,
          viewed: viewed,
          terjual: terjual,
          percentageTotal: percentageTotal,
          percentageViewed: percentageViewed,
          percentageTerjual: percentageTerjual,
        },
      });
    }
  }

  handleClick = (data) => {
    this.setState({
      dataKeys: {
        dataKeyX: data.dataKeyX,
        dataKeyY: data.dataKeyY,
        dataKeyBar: data.dataKeyBar,
      },
    });
  };

  render() {
    const { dataKeys, selectedData, dataChart } = this.state;
    return (
      <div className="home">
        <FeaturedInfo
          dataKeys={dataKeys}
          selectedData={selectedData}
          onDivClick={this.handleClick}
        />
        <div className="titleAnalis">
          <h3>Analis Produk</h3>
          <span>
            Update Terakhir : {this.date} {this.month} {this.year}
          </span>
        </div>
        {selectedData && (
          <Chart
            data={dataChart}
            title="Statistik Toko"
            grid
            dataKeys={dataKeys}
          />
        )}
      </div>
    );
  }
}
