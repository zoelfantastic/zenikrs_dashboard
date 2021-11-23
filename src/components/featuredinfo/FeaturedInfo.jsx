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
    const { title1, title2, title3 } = this.props.titleWidget;
    const { selectedData, onDivClick, ...dataKeys } = this.props;

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
          <span className="featuredTitle">{title1}</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">
              {selectedData
                ? `Rp.${this.numberWithCommas(selectedData.total)}`
                : "0"}
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
          <span className="featuredTitle">{title2}</span>
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
          <span className="featuredTitle">{title3}</span>
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
