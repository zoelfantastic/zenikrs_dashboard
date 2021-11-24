import React, { Component } from "react";
import "./featuredinfo.css";
import { numberWithCommas } from "utils/Utils";
import Chart from "components/chart/Chart";
import ItemFeaturedInfo from "./ItemFeaturedInfo";

export default class FeaturedInfo extends Component {
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
      <div>
        <div className="featured">
          <ItemFeaturedInfo
            title={title1}
            mainData={
              selectedData ? `Rp.${numberWithCommas(selectedData.total)}` : "0"
            }
            percentage={percentageTotal}
            subText="dari 30 hari yang lalu"
          />
          {/* <div
            className="featuredItem"
            onClick={() =>
              onDivClick({
                dataKeyX: "tgl",
                dataKeyY: "penjualan",
                dataKeyBar: "penjualan",
              })
            }
          >
            
          </div> */}
          {/* <div
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
          </div> */}
        </div>
        <Chart data={data} title="Statistik Toko" grid dataKeys={dataKeys} />
      </div>
    );
  }
}
