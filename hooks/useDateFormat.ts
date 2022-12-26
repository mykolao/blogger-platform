export const useDateFormat = (value: string) => {
  const dateInstance = new Date(value);

  const month = dateInstance.getMonth();
  const day = dateInstance.getDate();
  const year = dateInstance.getFullYear();

  const dateStr = [month, day, year].join(".");

  const hours = dateInstance.getHours();
  const minutes = dateInstance.getMinutes();
  const seconds = dateInstance.getSeconds();

  const timeStr = [hours, minutes, seconds].join(":");

  return { dateStr, timeStr };
};
