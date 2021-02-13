import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tag,
  Text,
} from "@chakra-ui/react";
import { FiMoreHorizontal } from "react-icons/fi";
import { useSubscriber } from "../bread-delivery/useSubscriber";

const SubscriberRow = (props) => {
  const { subscriber, subscribe, unsubscribe, destroy } = useSubscriber(
    props.subscriber
  );
  if (!subscriber) return null;

  const { id, subscribed } = subscriber;

  return (
    <Flex key={id} p={2} _hover={{ bg: "gray.50" }}>
      <Box flex={1}>
        <Text
          fontWeight="bold"
          borderBottom="1px"
          borderColor="gray.200"
          as="span"
        >
          {id}
        </Text>
      </Box>
      <Flex align="center" justify="flex-end" flexBasis="50px">
        <Menu>
          <MenuButton>
            {subscribed ? (
              <Tag variant="subtle" colorScheme="green">
                Subscribed
              </Tag>
            ) : (
              <Tag variant="subtle" colorScheme="red">
                Unsubscribed
              </Tag>
            )}
          </MenuButton>
          <MenuList>
            {subscribed ? (
              <MenuItem onClick={unsubscribe}>Unsubscribe</MenuItem>
            ) : (
              <MenuItem onClick={subscribe}>Subscribe</MenuItem>
            )}
            <MenuItem>Cancel</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Flex align="center" justify="flex-end" flexBasis="30px">
        <Menu>
          <MenuButton>
            <FiMoreHorizontal />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={destroy}>Delete</MenuItem>
            <MenuItem>Cancel</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default SubscriberRow;
