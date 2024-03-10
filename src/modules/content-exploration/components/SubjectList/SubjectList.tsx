"use client";
import useCurrentDomain from "@/modules/utils/hooks/useCurrentDomain";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { Subject } from "@/graphql/graphql-types.generated";
import { OrgSubjectsForDomainAndChannelDocument } from "./SubjectList.queries.generated";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useParams } from "next/navigation";

type SubjectListProps = {
  subjects: Pick<Subject, "id" | "alias" | "description">[];
};

const SubjectListComponent = ({ subjects }: SubjectListProps) => {
  return (
    <Box>
      <Grid container spacing={2}>
        {subjects.map((subject) => (
          <Grid item xs={12} sm={4} key={subject.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {subject.alias}
                </Typography>
                <Typography variant="body2">{subject.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const SubjectList = () => {
  const domain = useCurrentDomain();
  const { channel: channelParam } = useParams<{ channel: string }>();
  const channelAlias = decodeURIComponent(channelParam);
  const orgSubjectsForDomainQuery = useSuspenseQuery(
    OrgSubjectsForDomainAndChannelDocument,
    {
      variables: { domainName: domain, channelAlias },
    }
  );

  const subjects =
    orgSubjectsForDomainQuery.data.organization_domain[0]?.organization
      .channels[0]?.subjects || [];

  return <SubjectListComponent subjects={subjects} />;
};

export default SubjectList;

export { SubjectListComponent };
