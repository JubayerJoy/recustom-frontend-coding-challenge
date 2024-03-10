"use client";
import useCurrentDomain from "@/modules/utils/hooks/useCurrentDomain";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { Channel } from "@/graphql/graphql-types.generated";
import { OrgChannelsForDomainDocument } from "./ChannelList.queries.generated";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Link,
  Typography,
} from "@mui/material";

type ChannelListProps = {
  channels: Pick<Channel, "id" | "alias" | "description">[];
};

const ChannelListComponent = ({ channels }: ChannelListProps) => {
  return (
    <Box>
      <Grid container spacing={2}>
        {channels.map((channel) => (
          <Grid item xs={12} sm={4} key={channel.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {channel.alias}
                </Typography>
                <Typography variant="body2">{channel.description}</Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" href={`/channels/${channel.alias}`}>
                  Explore
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const ChannelList = () => {
  const domain = useCurrentDomain();
  const orgChannelsForDomainQuery = useSuspenseQuery(
    OrgChannelsForDomainDocument,
    {
      variables: { domainName: domain },
    }
  );

  const channels =
    orgChannelsForDomainQuery.data.organization_domain[0]?.organization
      .channels || [];

  return <ChannelListComponent channels={channels} />;
};

export default ChannelList;

export { ChannelListComponent };
