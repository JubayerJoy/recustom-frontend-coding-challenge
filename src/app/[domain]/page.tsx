import { Metadata } from "next";
import { OrgDetailsForDomainDocument } from "./OrganizationHomePage.queries.generated";
import { makeApolloClient } from "@/providers/apollo-client";
import OrganizationHomePage from "./OrganizationHomePage";

export default OrganizationHomePage;

export async function generateMetadata({
  params,
}: {
  params: { domain: string };
}): Promise<Metadata> {
  if (!process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT) {
    throw new Error("NEXT_PUBLIC_GRAPHQL_ENDPOINT is not set");
  }

  const client = makeApolloClient();
  const orgDetailsResponse = await client.query({
    query: OrgDetailsForDomainDocument,
    variables: {
      domainName: params.domain,
    },
  });

  if (orgDetailsResponse.error) {
    throw new Error(
      "Failed to fetch organization details. " +
        orgDetailsResponse.error.message
    );
  }

  const orgDetails =
    orgDetailsResponse.data.organization_domain[0]?.organization;

  return {
    title: orgDetails?.name || "Recustom",
    description: orgDetails?.bio || "",
  };
}
