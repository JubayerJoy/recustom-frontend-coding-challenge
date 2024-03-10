import { useParams } from "next/navigation";

const useCurrentDomain = () => {
  const { domain } = useParams<{
    domain: string;
  }>();

  return decodeURIComponent(domain);
};

export default useCurrentDomain;
