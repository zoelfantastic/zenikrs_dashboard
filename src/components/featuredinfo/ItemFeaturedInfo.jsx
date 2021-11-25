import React, { Component } from "react";
import "./itemfeaturedinfo.css";
import { getPlusMinusSign } from "utils/Utils";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material/";

const getSignArrow = (percentageValue) => {
  return percentageValue >= 0 ? (
    <ArrowUpward className="featuredIcon" />
  ) : (
    <ArrowDownward className="featuredIcon negative" />
  );
};

export default class ItemFeaturedInfo extends Component {
  render() {
    const { title, mainData, percentage, subText } = this.props;
    return (
      <div className="featuredItem">
        <span className="featuredTitle">{title}</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{mainData}</span>
          <span className="featuredMoneyRate">
            {getSignArrow(percentage)}
            {percentage}%{getPlusMinusSign(percentage)}
          </span>
        </div>
        <span className="featuredSub">{subText}</span>
      </div>
    );
  }
}
