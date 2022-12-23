export const theme = {
  white: "#FFFFFF",
  black: "#1A1718",
  grey: "#FAF7F8",
  border: "#DEDBDC",
  blue: "#3677F7",
  accent: "#F8346B",
  neutral_light_30: "#FCFBFB",
  neutral_light_60: "#FCFBFB",
  neutral_light_neg_30: "#FCFBFB",
  neutral_light_neg_10: "#DEDBDC",
  neutral_dark_30: "#737067",
  neutral_dark_60: "#737067",
  neutral_dark__neg_30: "#ADABAC",
  neutral_dark__neg_60: "#1A1718",
  appWidth: "1150px",
  navWidth: "180px"
} as const;

export type StyledTheme = typeof theme;
