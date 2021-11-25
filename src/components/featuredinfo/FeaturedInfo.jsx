import React, { Component } from "react";
import "./featuredinfo.css";
import ItemFeaturedInfo from "./ItemFeaturedInfo";

export default class FeaturedInfo extends Component {
  render() {
    const { widgets, onDivClick } = this.props;
    let w = widgets.map((m) => {
      const { data } = m;
      return (
        <ItemFeaturedInfo
          onHandleClick={onDivClick}
          selectedWidget={m.id}
          key={m.id}
          title={data.title}
          mainData={data.mainData}
          percentage={data.percentage}
          subText={data.subText}
        />
      );
    });
    return <div className="featured">{w}</div>;
  }
}
