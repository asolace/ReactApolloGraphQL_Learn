const getMonthName = dateMonth => {
  const MonthIndex = {
    0: "January",
    1: "Feburary",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  return MonthIndex[dateMonth];
};

module.exports.converQuakeDateToDateString = quakeDateFormat => {
  const date = new Date(quakeDateFormat);

  const year = date.getFullYear();
  const month = getMonthName(date.getMonth());
  const day = date.getDate();
  const hour = date.getDate();
  const minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  const seconds = date.getSeconds();

  return `${month} ${day}, ${year} at ${hour}:${minute} and ${seconds} seconds`;
};