import ChannelIntro from "@/modules/content-exploration/components/ChannelIntro/ChannelIntro";
import OrgHero from "@/modules/content-exploration/components/OrgHero/OrgHero";
import SubjectList from "@/modules/content-exploration/components/SubjectList/SubjectList";
import { Container, Stack } from "@mui/material";

export default function ChannelPage({
  params,
}: {
  params: {
    domain: string;
    channel: string;
  };
}) {
  return (
    <Container>
      <Stack spacing={2}>
        <OrgHero />
        <ChannelIntro />
        <SubjectList />
      </Stack>
    </Container>
  );
}
