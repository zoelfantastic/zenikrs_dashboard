import React from "react";
import "./featuredinfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material/";

export default function FeaturedInfo({ datas, onDivClick }) {
  return (
    <div className="featured">
      <div className="featuredItem" onClick={() => onDivClick(datas[0])}>
        <span className="featuredTitle">Pendapatan Bersih Baru</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rp.3.750.000</span>
          <span className="featuredMoneyRate">
            +689.47% <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">dari 30 hari yang lalu</span>
      </div>
      <div className="featuredItem" onClick={() => onDivClick(datas[1])}>
        <span className="featuredTitle">Produk dilihat</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">372</span>
          <span className="featuredMoneyRate">
            +50.61% <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">dari 30 hari yang lalu</span>
      </div>
      <div className="featuredItem" onClick={() => onDivClick(datas[2])}>
        <span className="featuredTitle">Produk Terjual</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2</span>
          <span className="featuredMoneyRate">
            +100% <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">dari 30 hari yang lalu</span>
      </div>
    </div>
  );
}
