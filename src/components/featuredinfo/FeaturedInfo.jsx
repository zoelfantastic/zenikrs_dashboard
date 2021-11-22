import React, { Component } from "react";
import "./featuredinfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material/";

export default class FeaturedInfo extends Component {
  getSignArrow(percentageValue) {
    return percentageValue >= 0 ? (
      <ArrowUpward className="featuredIcon" />
    ) : (
      <ArrowDownward className="featuredIcon negative" />
    );
  }

  getPlusMinusSign(percentageValue) {
    return percentageValue >= 0 ? "+" : "-";
  }

  numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    const { dataKeyX, dataKeyY, dataKeyBar } = this.props.dataKeys;
    const { selectedData, onDivClick } = this.props;

    const percentageTotal = selectedData
      ? parseFloat(selectedData.percentageTotal).toFixed(2)
      : 0;

    const percentageViewed = selectedData
      ? parseFloat(selectedData.percentageViewed).toFixed(2)
      : 0;

    const percentageTerjual = selectedData
      ? parseFloat(selectedData.percentageTerjual).toFixed(2)
      : 0;

    return (
      <div className="featured">
        <div
          className="featuredItem"
          onClick={() =>
            onDivClick({
              dataKeyX: "tgl",
              dataKeyY: "penjualan",
              dataKeyBar: "penjualan",
            })
          }
        >
          <span className="featuredTitle">Pendapatan Bersih Baru</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">
              {selectedData
                ? `Rp.${this.numberWithCommas(selectedData.total)}`
                : "-"}
            </span>
            <span className="featuredMoneyRate">
              {this.getSignArrow(percentageTotal)}
              {percentageTotal}%{this.getPlusMinusSign(percentageTotal)}
            </span>
          </div>
          <span className="featuredSub">dari 30 hari yang lalu</span>
        </div>
        <div
          className="featuredItem"
          onClick={() =>
            onDivClick({
              dataKeyX: "tgl",
              dataKeyY: "jml",
              dataKeyBar: "jml",
            })
          }
        >
          <span className="featuredTitle">Produk dilihat</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">
              {selectedData ? selectedData.viewed : 0}{" "}
            </span>
            <span className="featuredMoneyRate">
              {this.getSignArrow(percentageViewed)}
              {percentageViewed}%{this.getPlusMinusSign(percentageViewed)}
            </span>
          </div>
          <span className="featuredSub">dari 30 hari yang lalu</span>
        </div>
        <div
          className="featuredItem"
          onClick={() =>
            onDivClick({
              dataKeyX: "tgl",
              dataKeyY: "terjual",
              dataKeyBar: "terjual",
            })
          }
        >
          <span className="featuredTitle">Produk Terjual</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">
              {selectedData ? selectedData.terjual : 0}
            </span>
            <span className="featuredMoneyRate">
              {this.getSignArrow(percentageTerjual)}
              {percentageTerjual}%{this.getPlusMinusSign(percentageTerjual)}
            </span>
          </div>
          <span className="featuredSub">dari 30 hari yang lalu</span>
        </div>
      </div>
    );
  }
}
