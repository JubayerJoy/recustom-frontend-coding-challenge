"use client";
import { ThemeProvider } from "@mui/material";
import { createMuiThemeFromOrgTheme } from "@/modules/utils/theming/createMuiThemeFromOrgTheme";
import { useCurrentOrganization } from "@/modules/utils/hooks/useCurrentOrganization";

export default function OrgMaterialThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgData = useCurrentOrganization();

  const theme = createMuiThemeFromOrgTheme(orgData?.organization_theme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
