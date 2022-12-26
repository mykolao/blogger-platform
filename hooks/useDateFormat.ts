export const useDateFormat = (value: string) => {
  const dateInstance = new Date(value);

  const month = dateInstance.getMonth();
  const day = dateInstance.getDate();
  const year = dateInstance.getFullYear();

  const dateStr = [month, day, year].join(".");

  return { dateStr };
};
