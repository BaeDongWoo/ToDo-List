export const DateFormat = (date) => {
  const tempY = date.getFullYear();
  const tempM = date.getMonth();
  const tempD = date.getDate();
  const dateFormat = [tempY, tempM + 1, tempD].join('-');
  return dateFormat;
};
