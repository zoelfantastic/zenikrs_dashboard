import React, { Component } from "react";
import Chart from "components/chart/Chart";
import FeaturedInfo from "components/featuredinfo/FeaturedInfo";

import { numberWithCommas } from "utils/Utils";
import "./home.css";
import { dataHistori } from "src/dummyData";
import moment from "moment";
import {
  getMonthEarlier,
  getFilteredDataByMonth,
  getPercentageData,
  formatDate,
} from "utils/Utils";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.date = new Date().toLocaleString("en-US", { day: "2-digit" });
    this.month = new Date().toLocaleString("en-US", { month: "long" });
    this.year = new Date().getFullYear();
    this.hours = new Date().getHours();

    this.state = {
      widgets: [
        {
          id: "pendapatan",
          dataKeys: {
            dataKeyX: "tgl",
            dataKeyY: "penjualan",
            dataKeyBar: "penjualan",
          },
          data: {
            title: "Pendapatan bersih baru",
            mainData: 0,
            percentage: 0,
          },
        },
        {
          id: "dilihat",
          dataKeys: {
            dataKeyX: "tgl",
            dataKeyY: "jml",
            dataKeyBar: "jml",
          },
          data: {
            title: "Produk dilihat",
            mainData: 0,
            percentage: 0,
          },
        },
        {
          id: "terjual",
          dataKeys: {
            dataKeyX: "tgl",
            dataKeyY: "terjual",
            dataKeyBar: "terjual",
          },
          data: {
            title: "Produk terjual",
            mainData: 0,
            percentage: 0,
          },
        },
      ],
      dataChart: dataHistori,
    };
  }

  componentDidMount() {
    this.getdataHistoriSebulan();
  }

  getdataHistoriSebulan() {
    let current = formatDate(moment(), "YYYY-MM-DD");
    let oneMonthEarlier = formatDate(getMonthEarlier(current, 1), "YYYY-MM-DD");
    let filtered = getFilteredDataByMonth(
      dataHistori,
      oneMonthEarlier,
      current
    );
    let total = 0;
    let viewed = 0;
    let terjual = filtered.length;
    for (let f in filtered) {
      total += filtered[f].penjualan;
      viewed += filtered[f].jml;
    }
    let twoMonthBefore = formatDate(getMonthEarlier(current, 2), "YYYY-MM-DD");
    let twoMonthData = getFilteredDataByMonth(
      dataHistori,
      twoMonthBefore,
      oneMonthEarlier
    );

    let totalBefore = 0;
    let viewedBefore = 0;
    let terjualBefore = twoMonthData.length;
    for (let f in twoMonthData) {
      totalBefore += filtered[f].penjualan;
      viewedBefore += filtered[f].jml;
    }

    let percentageTotal = getPercentageData(total, totalBefore);
    let percentageViewed = getPercentageData(viewed, viewedBefore);
    let percentageTerjual = getPercentageData(terjual, terjualBefore);
    const { widgets } = this.state;
    let copyWidgetData = [...widgets];
    copyWidgetData.forEach((f, index) => {
      switch (copyWidgetData[index].id) {
        case "dilihat":
          let dataDilihat = {
            title: "Produk terlihat",
            mainData: viewed,
            percentage: percentageViewed,
          };
          copyWidgetData[index].data = dataDilihat;
          break;
        case "terjual":
          let dataTerjual = {
            title: "Produk terjual",
            mainData: terjual,
            percentage: percentageTerjual,
          };
          copyWidgetData[index].data = dataTerjual;
          break;
        default:
          let dataPendapatan = {
            title: "Pendapatan bersih baru",
            mainData: numberWithCommas(total),
            percentage: percentageTotal,
          };
          copyWidgetData[index].data = dataPendapatan;
      }
    });
    
    this.setState({
      widgets: copyWidgetData,
    });
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
    const { widgets } = this.state;

    return (
      <div className="home">
        <FeaturedInfo widgets={widgets} />
        {/* <div className="titleAnalis">
          <h3>Analis Produk</h3>
          <span>
            Update Terakhir : {this.date} {this.month} {this.year}
          </span>
        </div> */}
        {/* {selectedData && (
          <Chart
            data={dataChart}
            title="Statistik Toko"
            grid
            dataKeys={dataKeys}
          />
        )} */}
      </div>
    );
  }
}
