import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { subscribe } from "./data";

const STATES = ["INITIAL", "LOADING", "SUCCESS", "ERROR"] as const;
type SubscriptionState = typeof STATES[number];

const SubscribeForm = () => {
  const [status, setStatus] = useState<SubscriptionState>("INITIAL");
  const [email, setEmail] = useState("");

  async function handleSubmit() {
    setStatus("LOADING");
    try {
      await subscribe(email);
      setStatus("SUCCESS");
      setEmail("");
      setTimeout(() => {
        setStatus("INITIAL");
      }, 3000);
    } catch (e) {
      setStatus("ERROR");
    }
  }

  return (
    <Box
      onSubmit={handleSubmit}
      as="form"
      maxW="480px"
      rounded="lg"
      border="1px"
      borderColor="gray.100"
      p={5}
    >
      <Heading size="md">Bread delivery 🍞💨</Heading>
      <Text fontSize="16px" color="gray.500">
        I'll send you one email every Wednesday with the latest posts.
      </Text>
      <Box height={3} />
      <InputGroup>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fontSize="sm"
          _focus={{ border: "1px", borderColor: "gray.300" }}
          pr="6.3rem"
          placeholder="Enter your email address"
        />
        <InputRightElement textAlign="right" width="6.3rem">
          {status === "SUCCESS" && (
            <Box ml="auto" mr={3}>
              <CheckIcon color="green.500" />
            </Box>
          )}
          {status === "LOADING" && (
            <Spinner size="sm" color="gray.400" ml="auto" mr={3} />
          )}
          {["INITIAL", "ERROR"].includes(status) && (
            <Button type="submit" onClick={handleSubmit} size="sm">
              Subscribe
            </Button>
          )}
        </InputRightElement>
      </InputGroup>
      {status === "ERROR" && (
        <AlertBox bg="red.50" color="red.400">
          Hm, couldn't subscribe you.
        </AlertBox>
      )}
      {status === "SUCCESS" && (
        <AlertBox bg="green.50" color="green.400">
          Thank you for subscribing!
        </AlertBox>
      )}
    </Box>
  );
};

const AlertBox = (props) => {
  return (
    <Box
      mt={3}
      py={2}
      px={4}
      bg="red.50"
      color="red.400"
      fontSize="sm"
      rounded="lg"
      {...props}
    />
  );
};

export default SubscribeForm;
