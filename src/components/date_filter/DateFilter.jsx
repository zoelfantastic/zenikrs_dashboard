import React from "react";
import { Box, FormControl, Select, MenuItem } from "@mui/material";
import "./datefilter.css";
import { formatDate, getDaysEarlier } from "utils/Utils";
import moment from "moment";

export default function DateFilter({ filterValue, handleChange }) {
  const today = formatDate(moment(), "DD MMM YYYY");
  // const yesterday = formatDate(getDaysEarlier(moment(), 1), "DD MMM YYYY");
  // const oneWeekAgo = formatDate(getDaysEarlier(moment(), 7), "DD MMM YYYY");
  // const oneMonthAgo = formatDate(getDaysEarlier(moment(), 30), "DD MMM YYYY");
  //const todayNoFormat = moment();
  // const yesterdayNoFormat = getDaysEarlier(moment(), 1);
  // const oneWeekAgoNoFormat = getDaysEarlier(moment(), 7);
  // const oneMonthAgoNoFormat = getDaysEarlier(moment(), 30);
  return (
    <Box
      sx={{
        width: 500,
      }}
    >
      <FormControl sx={{ m: 1, minWidth: 450 }} size="small">
        <Select
          value={filterValue}
          onChange={(e) => handleChange(e.target.value)}
          displayEmpty
        >
          <MenuItem value={today}>
            <div className="fillSelect">
              <div className="leftSelect">Hari Ini</div>
              <div className="rightSelect">{today}</div>
            </div>
          </MenuItem>
          {/* <MenuItem value={yesterdayNoFormat}>
            <div className="fillSelect">
              <div className="leftSelect">Kemarin</div>
              <div className="rightSelect">{yesterday}</div>
            </div>
          </MenuItem>
          <MenuItem value={oneWeekAgoNoFormat}>
            <div className="fillSelect">
              <div className="leftSelect">7 hari terakhir</div>
              <div className="rightSelect">
                {oneWeekAgo} - {yesterday}
              </div>
            </div>
          </MenuItem>
          <MenuItem value={oneMonthAgoNoFormat}>
            <div className="fillSelect">
              <div className="leftSelect">30 hari terakhir</div>
              <div className="rightSelect">
                {oneMonthAgo} - {yesterday}
              </div>
            </div>
          </MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
}
