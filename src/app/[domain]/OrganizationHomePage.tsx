import ChannelList from "@/modules/content-exploration/components/ChannelList/ChannelList";
import { Alert, Button, Container, Stack, Typography } from "@mui/material";
import OrgHero from "@/modules/content-exploration/components/OrgHero/OrgHero";

export default function OrganizationHomePage({
  params,
}: {
  params: {
    domain: string;
  };
}) {
  return (
    <Container component="main">
      <Stack spacing={2}>
        <OrgHero />
        <ChannelList />

        <Typography variant="h2" textAlign="center">
          Buttons
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="contained">Default Button</Button>
          <Button variant="contained" color="secondary">
            Secondary button
          </Button>
        </Stack>

        <Typography variant="h2" textAlign="center">
          Alerts
        </Typography>
        <Alert severity="error">This is an error alert — check it out!</Alert>
        <Alert severity="warning">
          This is a warning alert — check it out!
        </Alert>
        <Alert severity="info">This is an info alert — check it out!</Alert>
        <Alert severity="success">
          This is a success alert — check it out!
        </Alert>
      </Stack>
    </Container>
  );
}
