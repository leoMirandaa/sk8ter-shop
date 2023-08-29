export const dateFormat = (date: any) => {
  const newDate = new Date(date);

  const options: any = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return newDate.toLocaleDateString("en-US", options);
};
