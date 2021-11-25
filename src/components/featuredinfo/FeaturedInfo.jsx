import React, { Component } from "react";
import "./featuredinfo.css";
import Chart from "components/chart/Chart";
import ItemFeaturedInfo from "./ItemFeaturedInfo";

export default class FeaturedInfo extends Component {
  render() {
    const { widgets } = this.props;
    let w = widgets.map((m) => {
      const { data } = m;
      return (
        <ItemFeaturedInfo
          key={m.id}
          title={data.title}
          mainData={data.mainData}
          percentage={data.percentage}
          subText=""
        />
      );
    });
    return <div className="featured">{w}</div>;
  }
}
