import { OrgChannelsForDomainDocument } from "@/modules/content-exploration/components/ChannelList/ChannelList.queries.generated";
import { makeApolloClient } from "@/providers/apollo-client";

export default function ChannelPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

export async function generateStaticParams({
  params,
}: {
  params: { domain: string };
}): Promise<{ channel: string }[]> {
  if (!process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT) {
    throw new Error("NEXT_PUBLIC_GRAPHQL_ENDPOINT is not set");
  }

  const client = makeApolloClient();
  const orgChannelsResponse = await client.query({
    query: OrgChannelsForDomainDocument,
    variables: {
      domainName: params.domain,
    },
  });

  if (orgChannelsResponse.error) {
    throw new Error(
      "Failed to fetch organization channels. " +
        orgChannelsResponse.error.message
    );
  }

  const orgChannels =
    orgChannelsResponse.data.organization_domain[0].organization.channels;

  return orgChannels.map((channel) => ({
    channel: channel.alias || String(channel.id),
  }));
}
