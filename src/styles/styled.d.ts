import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      bodyBackground: string;
      cardBackground: string;
      font: string;
      accentFont: string;
      shadow: string;
      primary: string;
      danger: string;
      success: string;
      attention: string;
    };
  }
}
