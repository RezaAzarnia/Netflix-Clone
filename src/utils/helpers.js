export const converNumberToTime = (minutes) => {
  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;
  return `${hour}h ${minute}m`;
};

export const voteRateColor = (rate) => {
  switch (true) {
    case rate < 5:
      return "red.400";
    case rate < 7:
      return "orange.400";
    default:
      return "green.500";
  }
};
