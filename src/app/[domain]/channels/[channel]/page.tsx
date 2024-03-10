import { makeApolloClient } from "@/providers/apollo-client";
import ChannelPage from "./ChannelPage";
import { Metadata } from "next";
import { ChannelDetailsForDomainAndAliasDocument } from "./ChannelPage.queries.generated";

export default ChannelPage;

export async function generateMetadata({
  params,
}: {
  params: { domain: string; channel: string };
}): Promise<Metadata> {
  if (!process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT) {
    throw new Error("NEXT_PUBLIC_GRAPHQL_ENDPOINT is not set");
  }

  const client = makeApolloClient();
  const channelDetailsResponse = await client.query({
    query: ChannelDetailsForDomainAndAliasDocument,
    variables: {
      domainName: params.domain,
      channelAlias: decodeURIComponent(params.channel),
    },
  });

  if (channelDetailsResponse.error) {
    throw new Error(
      "Failed to fetch organization details. " +
        channelDetailsResponse.error.message
    );
  }

  const orgDetails =
    channelDetailsResponse.data.organization_domain[0]?.organization;

  const channelDetails =
    channelDetailsResponse.data.organization_domain[0]?.organization
      .channels[0];

  return {
    title: `${orgDetails?.name || "Recustom"} - ${channelDetails?.alias || ""}`,
    description: channelDetails?.description || "",
  };
}
