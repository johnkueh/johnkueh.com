import { Box, Heading } from "@chakra-ui/react";
import { getSubscribers } from "../../shared/adminApi";

const Subscribers = ({ subscribers }) => {
  return (
    <Box>
      <Box height={5} />
      <Heading size="md">Subscribers ({subscribers.length})</Heading>
      {subscribers.map(({ id, subscribed }) => (
        <Box py={2} key={id}>
          {id}
        </Box>
      ))}
    </Box>
  );
};

export async function getServerSideProps({ query }) {
  const { ADMIN_AUTH_TOKEN } = query;
  const authed = ADMIN_AUTH_TOKEN === process.env.ADMIN_AUTH_TOKEN;

  if (!authed) {
    return {
      notFound: true,
    };
  }

  const subscribers = await getSubscribers();

  return {
    props: {
      subscribers,
    },
  };
}

export default Subscribers;
