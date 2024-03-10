"use client";

import { Channel } from "@/graphql/graphql-types.generated";
import { useCurrentChannel } from "@/modules/utils/hooks/useCurrentChannel";
import { Alert, Box, Container, Typography } from "@mui/material";

type ChannelIntroProps = {
  channel: Pick<Channel, "alias" | "description">;
};

const ChannelIntroComponent = ({ channel }: ChannelIntroProps) => {
  return (
    <Box py={2}>
      <Typography variant="h3" textAlign="center" mb={2} color="primary">
        {channel.alias}
      </Typography>

      <Typography textAlign="center">{channel.description}</Typography>
    </Box>
  );
};

const ChannelIntro = () => {
  const channel = useCurrentChannel();

  if (!channel) {
    return (
      <Container>
        <Alert severity="error">Channel not found</Alert>
      </Container>
    );
  }

  return <ChannelIntroComponent channel={channel} />;
};

export default ChannelIntro;
