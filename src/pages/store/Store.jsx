import { FormControl, Select, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import "./store.css";
import moment from "moment";
import FeaturedInfo from "components/featuredinfo/FeaturedInfo";

export default class Store extends Component {
  constructor(props) {
    super(props);

    this.today = moment().format("DD MMM YYYY ");
    this.yesterday = moment().subtract(1, "days").format("DD MMM YYYY ");
    this.last7days = moment().subtract(7, "days").format("DD MMM YYYY ");
    this.last30days = moment().subtract(30, "days").format("DD MMM YYYY ");

    this.titleWidget = {
      title1: "Pendapatan bersih baru",
      title2: "Estimasi pengeluaran",
      title3: "Produk terjual",
    };

    this.state = {
      filterValue: this.today,
      dataKeys: {
        dataKeyX: "tgl",
        dataKeyY: "pendapatan",
        dataKeyBar: "pendapatan",
        selectedData: null,
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      filterValue: e.target.value,
    });
  }

  render() {
    const { filterValue, dataKeys, selectedData } = this.state;

    return (
      <div className="store">
        <div className="storeHeaderWrapper">
          <div className="storeHeaderLeft">
            <h3 className="storeTitle">Wawasan Toko</h3>
          </div>
          <div className="storeHeaderRight">
            <Box
              sx={{
                width: 550,
              }}
            >
              <FormControl sx={{ m: 1, minWidth: 450 }} size="small">
                <Select
                  value={filterValue}
                  onChange={this.handleChange}
                  displayEmpty
                >
                  <MenuItem value={this.today}>
                    <div className="fillSelect">
                      <div className="leftSelect">Hari Ini</div>
                      <div className="rightSelect">{this.today}</div>
                    </div>
                  </MenuItem>
                  <MenuItem value={this.yesterday}>
                    <div className="fillSelect">
                      <div className="leftSelect">Kemarin</div>
                      <div className="rightSelect">{this.yesterday}</div>
                    </div>
                  </MenuItem>
                  <MenuItem value={this.last7days}>
                    <div className="fillSelect">
                      <div className="leftSelect">7 hari terakhir</div>
                      <div className="rightSelect">
                        {this.last7days} - {this.today}
                      </div>
                    </div>
                  </MenuItem>
                  <MenuItem value={this.last30days}>
                    <div className="fillSelect">
                      <div className="leftSelect">30 hari terakhir</div>
                      <div className="rightSelect">
                        {this.last30days} - {this.today}
                      </div>
                    </div>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        <FeaturedInfo
          dataKeys={dataKeys}
          selectedData={selectedData}
          onDivClick={this.handleClick}
          titleWidget={this.titleWidget}
        />
      </div>
    );
  }
}
