import Media from "./Media";

export const lightTheme = {
  primaryColor: "#FFB100",
  backgroundColor: "#ffffff",
  text: "#374957",
  textSoft: "#5F7D95",
  soft: "#f5f5f5",
  componentsHeight: "40px",
  searchBackground: "#ffffff",
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  ...Media,

  buttonSizes: {
    small: {
      fontSize: "15px",
      padding: `7px 15px`
    },
    medium: {
      fontSize: "18px",
      padding: `9px 20px`
    },
    large: {
      fontSize: "22px",
      padding: `15px 30px`
    }
  }
};
