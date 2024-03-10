import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import useCurrentDomain from "./useCurrentDomain";
import { useParams } from "next/navigation";
import { ChannelDetailsForDomainAndAliasDocument } from "@/app/[domain]/channels/[channel]/ChannelPage.queries.generated";

export const useCurrentChannel = () => {
  const domain = useCurrentDomain();
  const { channel: channelParam } = useParams<{ channel: string }>();
  const channelAlias = decodeURIComponent(channelParam);
  const channelDetailsResponse = useSuspenseQuery(
    ChannelDetailsForDomainAndAliasDocument,
    {
      variables: {
        domainName: domain,
        channelAlias,
      },
    }
  );
  if (channelDetailsResponse.error) {
    throw new Error(
      "Failed to fetch channel details. " + channelDetailsResponse.error.message
    );
  }
  const channelData =
    channelDetailsResponse.data.organization_domain[0]?.organization
      .channels[0];

  return channelData;
};
