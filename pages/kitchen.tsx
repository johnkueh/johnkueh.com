import { Box, Checkbox, Flex, Heading, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Head from "next/head";
import React from "react";
import { getTodos } from "../shared/api";

dayjs.extend(relativeTime);

function getByStatus(todos, status: string) {
  return todos.filter((todo) => todo.Status === status);
}

export default function Kitchen({ tableData }) {
  console.log(tableData);
  return (
    <div>
      <Head>
        <title>John Kueh - Kitchen</title>
      </Head>
      <Box height={12} />
      <Heading as="h1">Kitchen</Heading>
      <Box height={3} />
      <Text>A list of things I am cooking up for this website</Text>
      <Box height={12} />
      <Heading size="md">Completed</Heading>
      <Box height={3} />
      {getByStatus(tableData, "Completed").map((todo) => {
        return (
          <Flex key={todo.id} align="flex-start" justify="flex-start">
            <Checkbox isChecked pointerEvents="none" colorScheme="gray">
              {todo.Name}
            </Checkbox>
          </Flex>
        );
      })}
      <Box height={12} />
      <Heading size="md">In Progress</Heading>
      <Box height={3} />
      {getByStatus(tableData, "In Progress").map((todo) => {
        return (
          <Flex key={todo.id} align="flex-start" justify="flex-start">
            <Checkbox pointerEvents="none" colorScheme="gray">
              {todo.Name}
            </Checkbox>
          </Flex>
        );
      })}
      <Box height={12} />
      <Heading size="md">Up next</Heading>
      <Box height={3} />
      {getByStatus(tableData, "Next Up").map((todo) => {
        return (
          <Flex key={todo.id} align="flex-start" justify="flex-start">
            <Checkbox pointerEvents="none" colorScheme="gray">
              {todo.Name}
            </Checkbox>
          </Flex>
        );
      })}

      <Box height={12} />
      <Heading size="md">Backlog</Heading>
      <Box height={3} />
      {getByStatus(tableData, undefined).map((todo) => {
        return (
          <Flex key={todo.id} align="flex-start" justify="flex-start">
            <Checkbox pointerEvents="none" colorScheme="gray">
              {todo.Name}
            </Checkbox>
          </Flex>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const data = await getTodos();

  return {
    props: {
      tableData: data,
    },
    revalidate: 60,
  };
}
