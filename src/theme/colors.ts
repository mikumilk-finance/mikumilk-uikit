import { Colors } from "./types";

export const baseColors = {
  failure: "#e12885",
  primary: "#86cecb",
  primaryBright: "#86cecb",
  primaryDark: "#86cecb",
  secondary: "#137a7f",
  success: "#31D0AA",
  warning: "#e12885",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#373b3e",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#137a7f",
  textDisabled: "#BDC2C4",
  textSubtle: "#86cecb",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#137a7f",
  background: "#20242b",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#86cecb",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#292c35",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #86cecb 100%)",
  },
};
