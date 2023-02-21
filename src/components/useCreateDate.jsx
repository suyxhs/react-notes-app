const useCreateDate = () => {
  const dateObj = new Date();
  const month = dateObj.getMonth();
  let monthName;
  switch (month) {
    case 0:
      monthName = "Январь";
      break;
    case 1:
      monthName = "Февраль";
      break;
    case 2:
      monthName = "Март";
      break;
    case 3:
      monthName = "Апрель";
      break;
    case 4:
      monthName = "Май";
      break;
    case 5:
      monthName = "Июнь";
      break;
    case 6:
      monthName = "Июль";
      break;
    case 7:
      monthName = "Август";
      break;
    case 8:
      monthName = "Сентябрь";
      break;
    case 9:
      monthName = "Октябрь";
      break;
    case 10:
      monthName = "Ноябрь";
      break;
    case 11:
      monthName = "Декабрь";
      break;
  }
  const date = `${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()} ${dateObj.toLocaleTimeString()}`;
  return date;
};

export default useCreateDate;
