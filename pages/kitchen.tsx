import { Box, Heading, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Head from "next/head";
import React from "react";
import Todo from "../features/kitchen/Todo";
import { getTodos } from "../shared/api";

dayjs.extend(relativeTime);

function getByStatus(todos, status: string) {
  return todos.filter((todo) => todo.Status === status);
}

export default function Kitchen({ tableData }) {
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
      <Heading size="md">In Progress</Heading>
      <Box height={3} />
      {getByStatus(tableData, "In Progress").map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
      <Box height={12} />
      <Heading size="md">Up next</Heading>
      <Box height={3} />
      {getByStatus(tableData, "Next Up").map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}

      <Box height={12} />
      <Heading size="md">Backlog</Heading>
      <Box height={3} />
      {getByStatus(tableData, undefined).map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
      <Box height={12} />
      <Heading size="md">Completed</Heading>
      <Box height={3} />
      {getByStatus(tableData, "Completed").map((todo) => {
        return <Todo key={todo.id} todo={todo} isChecked />;
      })}
      <Box height={12} />
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
