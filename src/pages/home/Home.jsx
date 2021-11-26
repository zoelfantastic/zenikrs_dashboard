import React, { Component } from "react";
import Chart from "components/chart/Chart";
import FeaturedInfo from "components/featuredinfo/FeaturedInfo";
import { numberWithCommas } from "utils/Utils";
import "./home.css";
import { dataHistori } from "src/dummyData";
import moment from "moment";
import {
  getMonthEarlier,
  getFilteredDataByDate,
  getPercentageData,
  formatDate,
} from "utils/Utils";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedWidget: {
        dataKeyX: "tgl",
        dataKeyY: "penjualan",
        dataKeyBar: "penjualan",
      },
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
    };
  }

  componentDidMount() {
    this.getdataHistoriSebulan();
  }

  getdataHistoriSebulan() {
    let current = formatDate(moment(), "YYYY-MM-DD");
    let oneMonthEarlier = formatDate(getMonthEarlier(current, 1), "YYYY-MM-DD");
    let filtered = getFilteredDataByDate(
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
    let twoMonthData = getFilteredDataByDate(
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
            subText: "dari 30 hari yang lalu",
          };
          copyWidgetData[index].data = dataDilihat;
          break;
        case "terjual":
          let dataTerjual = {
            title: "Produk terjual",
            mainData: terjual,
            percentage: percentageTerjual,
            subText: "dari 30 hari yang lalu",
          };
          copyWidgetData[index].data = dataTerjual;
          break;
        default:
          let dataPendapatan = {
            title: "Pendapatan bersih baru",
            mainData: numberWithCommas(total),
            percentage: percentageTotal,
            subText: "dari 30 hari yang lalu",
          };
          copyWidgetData[index].data = dataPendapatan;
      }
    });

    this.setState({
      widgets: copyWidgetData,
    });
  }

  handleClick = (data) => {
    const { widgets } = this.state;
    let selected = widgets.find((f) => f.id === data).dataKeys;
    this.setState((prevState) => ({
      selectedWidget: { ...prevState.selectedWidget, ...selected },
    }));
  };

  render() {
    const { widgets, selectedWidget } = this.state;

    return (
      <div className="home">
        <FeaturedInfo widgets={widgets} onDivClick={this.handleClick} />
        <div className="titleAnalis">
          <h3>Analis Produk</h3>
          <span className="subtitleAnalis">
            Update Terakhir : {formatDate(moment(), "DD MMMM YYYY HH:mm")}
          </span>
        </div>
        {selectedWidget && (
          <Chart
            data={dataHistori}
            title="Statistik Toko"
            grid
            dataKeys={selectedWidget}
          />
        )}
      </div>
    );
  }
}
