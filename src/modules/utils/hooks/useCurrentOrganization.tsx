import { OrgDetailsForDomainDocument } from "@/app/[domain]/OrganizationHomePage.queries.generated";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import useCurrentDomain from "./useCurrentDomain";

export const useCurrentOrganization = () => {
  const domain = useCurrentDomain();
  const orgDetailsResponse = useSuspenseQuery(OrgDetailsForDomainDocument, {
    variables: {
      domainName: domain,
    },
  });
  if (orgDetailsResponse.error) {
    throw new Error(
      "Failed to fetch organization details. " +
        orgDetailsResponse.error.message
    );
  }
  const orgData = orgDetailsResponse.data.organization_domain[0]?.organization;

  return orgData;
};
