import React, { Component } from "react";
import "./store.css";
import DateFilter from "components/date_filter/DateFilter";
import FeaturedInfo from "components/featuredinfo/FeaturedInfo";
import { formatDate, getFilteredDataByDate } from "utils/Utils";
import moment from "moment";
import { dataHistori } from "src/dummyData";

export default class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterValue: moment(),
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
          id: "pengeluaran",
          dataKeys: {
            dataKeyX: "tgl",
            dataKeyY: "pengeluaran",
            dataKeyBar: "pengeluaran",
          },
          data: {
            title: "Estimasi pengeluaran",
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

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    //this.getdataHistoriSebulan();
  }

  getDataByFilterDate(filter) {
    const currentData = formatDate(moment(), "YYYY-MM-DD");
    const filteredData = formatDate(filter, "YYYY-MM-DD");
    console.log(filteredData);
    //let filtered = getFilteredDataByDate(dataHistori, )
  }

  handleChange(value) {
    this.setState(
      {
        filterValue: value,
      },
      console.log(value)
    );
  }

  handleClick = (data) => {
    const { widgets } = this.state;
    let selected = widgets.find((f) => f.id === data).dataKeys;
    // this.setState((prevState) => ({
    //   selectedWidget: { ...prevState.selectedWidget, ...selected },
    // }));
  };

  render() {
    const { filterValue, widgets } = this.state;

    return (
      <div className="store">
        <div className="storeHeaderWrapper">
          <span className="storeTitle">
            <h3>Wawasan Toko</h3>
          </span>
          <DateFilter
            filterValue={filterValue}
            handleChange={this.handleChange}
          />
        </div>
        <FeaturedInfo widgets={widgets} onDivClick={this.handleClick} />
      </div>
    );
  }
}
