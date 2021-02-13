import { Box, Divider, Flex } from "@chakra-ui/react";
import Subscriber from "../../features/admin-subscriber/SubscriberRow";
import { getSubscribers } from "../../shared/adminApi";

const Subscribers = ({ subscribers }) => {
  return (
    <Box>
      <Box height={3} />
      <Flex px={2} fontSize="15px" color="gray.500">
        <Box flex={1}>Email ({subscribers.length})</Box>
        <Box flexBasis="50px"></Box>
      </Flex>
      <Box height={3} />
      <Divider />
      {subscribers.map((subscriber) => (
        <Subscriber subscriber={subscriber} />
      ))}
      <Box height={24} />
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
