import {
  Font_Family_Enum,
  Organization_Theme,
} from "@/graphql/graphql-types.generated";
import { Theme, createTheme } from "@mui/material";
import { Roboto, ABeeZee, Satisfy } from "next/font/google";
import Link from "next/link";
import { forwardRef } from "react";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const aBeeZee = ABeeZee({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const satisfy = Satisfy({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const fontFamilyEnumToFont: Record<Font_Family_Enum, typeof roboto> = {
  [Font_Family_Enum.Roboto]: roboto,
  [Font_Family_Enum.Abeezee]: aBeeZee,
  [Font_Family_Enum.Satisfy]: satisfy,
};

export const createMuiThemeFromOrgTheme = (
  orgTheme:
    | Pick<
        Organization_Theme,
        | "primaryColor"
        | "secondaryColor"
        | "successColor"
        | "warningColor"
        | "errorColor"
        | "infoColor"
        | "fontFamily"
        | "fontSize"
        | "buttonRadius"
      >
    | undefined
    | null
): Theme => {
  const font = orgTheme?.fontFamily
    ? fontFamilyEnumToFont[orgTheme.fontFamily]
    : roboto;
  const theme = createTheme({
    palette: omitUndefined({
      primary: orgTheme?.primaryColor
        ? {
            main: orgTheme.primaryColor,
          }
        : undefined,
      secondary: orgTheme?.secondaryColor
        ? {
            main: orgTheme.secondaryColor,
          }
        : undefined,
      success: orgTheme?.successColor
        ? {
            main: orgTheme.successColor,
          }
        : undefined,
      warning: orgTheme?.warningColor
        ? {
            main: orgTheme.warningColor,
          }
        : undefined,
      error: orgTheme?.errorColor
        ? {
            main: orgTheme.errorColor,
          }
        : undefined,
      info: orgTheme?.infoColor
        ? {
            main: orgTheme.infoColor,
          }
        : undefined,
    }),
    typography: omitUndefined({
      fontFamily: font.style.fontFamily,
      fontSize: orgTheme?.fontSize || undefined,
    }),
    components: {
      MuiLink: {
        defaultProps: {
          component: LinkBehaviour,
        },
      },
      MuiButton: {
        defaultProps: {
          LinkComponent: LinkBehaviour,
        },
        styleOverrides: {
          root: {
            borderRadius: orgTheme?.buttonRadius || undefined,
          },
        },
      },
    },
  });

  return theme;
};

const omitUndefined = <T extends Record<string, unknown>>(obj: T): T =>
  Object.fromEntries(
    Object.entries(obj).filter(([, value]) => value !== undefined)
  ) as T;

const LinkBehaviour = forwardRef<HTMLAnchorElement>(function LinkBehaviour(
  props,
  ref
) {
  // @ts-ignore - NextLink expects an href but MuiLink doesn't necessarily expect one
  return <Link ref={ref} {...props} />;
});
