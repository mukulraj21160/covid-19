import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let Theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 750,
      lg: 1025,
      xl: 1920,
    },
  },
});
Theme = responsiveFontSizes(Theme);

export default Theme;
