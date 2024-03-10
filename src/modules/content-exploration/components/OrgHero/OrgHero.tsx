"use client";

import { Organization } from "@/graphql/graphql-types.generated";
import { useCurrentOrganization } from "@/modules/utils/hooks/useCurrentOrganization";
import { Alert, Box, Container, Typography } from "@mui/material";

type OrgHeroProps = {
  organization: Pick<Organization, "name" | "bio">;
};

const OrgHeroComponent = ({ organization }: OrgHeroProps) => {
  return (
    <Box py={2}>
      <Typography variant="h1" textAlign="center" mb={2} color="primary">
        {organization.name}
      </Typography>

      <Typography textAlign="center">{organization.bio}</Typography>
    </Box>
  );
};

const OrgHero = () => {
  const organization = useCurrentOrganization();

  if (!organization) {
    return (
      <Container>
        <Alert severity="error">Organization not found</Alert>
      </Container>
    );
  }

  return <OrgHeroComponent organization={organization} />;
};

export default OrgHero;
