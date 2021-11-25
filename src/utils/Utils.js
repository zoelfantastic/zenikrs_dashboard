import moment from "moment";


export const formatDate = (date, format) => {
  return moment(date).format(format);
};

export const dateIsBetween = (dateX, startDate, endDate) => {
  return moment(dateX).isBetween(startDate, endDate);
};

export const getMonthEarlier = (date, x) => {
  return moment(date).subtract(x, "months");
};

export const getFilteredDataByMonth = (data, startDate, endDate) => {
  let result = data.filter((f) => {
    let comparedData = moment(f.tgl);
    return dateIsBetween(comparedData, startDate, endDate);
  });
  return result;
};

export const getPercentageData = (xCurrent, xBefore) => {
  let sumTotal = xCurrent + xBefore;
  let diffTotal = xCurrent - xBefore
  return ((diffTotal/sumTotal) * 100).toFixed(2);
};

export const numberWithCommas= (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export const getPlusMinusSign = (percentageValue) => {
  return percentageValue >= 0 ? "+" : "-";
}