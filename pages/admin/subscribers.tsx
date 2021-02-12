import { Box } from "@chakra-ui/react";

const Subscribers = () => {
  return <Box>Subscribers</Box>;
};

export async function getServerSideProps({ query }) {
  const { ADMIN_AUTH_TOKEN } = query;
  const authed = ADMIN_AUTH_TOKEN === process.env.ADMIN_AUTH_TOKEN;

  if (!authed) {
    return {
      notFound: true,
    };
  }

  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Subscribers;
