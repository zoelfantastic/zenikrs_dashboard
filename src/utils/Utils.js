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
  data.filter((f) => {
    let comparedData = moment(data.tgl);
    return dateIsBetween(comparedData, startDate, endDate);
  });
};

export const getDataLast30Days = () => {
    if (data.length > 0) {
        
    }
}
