import { makeApolloClient } from "@/providers/apollo-client";
import { OrgDomainsListDocument } from "./OrganizationHomePage.queries.generated";
import OrgMaterialThemeProvider from "@/providers/material";

export default function OrganizationPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <OrgMaterialThemeProvider>{children}</OrgMaterialThemeProvider>;
}

export async function generateStaticParams() {
  if (!process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT) {
    throw new Error("NEXT_PUBLIC_GRAPHQL_ENDPOINT is not set");
  }
  const client = makeApolloClient();
  const orgDomainsResponse = await client.query({
    query: OrgDomainsListDocument,
  });

  if (orgDomainsResponse.error) {
    throw new Error(
      "Failed to fetch organization domains. " +
        orgDomainsResponse.error.message
    );
  }

  const orgDomains = orgDomainsResponse.data.organization_domain;

  return orgDomains.map((domain) => ({
    domain: domain.name,
  }));
}
