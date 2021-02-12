import { Box, Heading, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { orderBy } from "lodash";
import Head from "next/head";
import React from "react";
import { incrementVote, useTodos, useVotes } from "../features/kitchen/data";
import TodoCell from "../features/kitchen/TodoCell";
import { getTodos, Todo } from "../shared/api";
import PublicLayout from "../shared/PublicLayout";

dayjs.extend(relativeTime);

function getByStatus(todos, status: string) {
  return todos.filter((todo) => todo.Status === status);
}

export default function Kitchen({ tableData }) {
  const { data: votes = {}, mutate } = useVotes(
    tableData.map((todo) => todo.id)
  );
  const { data: todos } = useTodos(tableData);

  async function handleVote(votedTodo: Todo) {
    const incrementedCount = votedTodo.votes + 1;
    mutate(() => {
      return {
        ...votes,
        [votedTodo.id]: incrementedCount,
      };
    }, false);
    await incrementVote(votedTodo.id, incrementedCount);
  }

  const todosWithVotes = todos.map((todo) => {
    todo.votes = votes[todo.id];
    return todo;
  });
  const sortedTodos = orderBy(todosWithVotes, "votes", "desc");

  return (
    <PublicLayout>
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
      {getByStatus(sortedTodos, "In Progress").map((todo) => {
        return (
          <TodoCell
            key={todo.id}
            todo={todo}
            onClickVote={() => handleVote(todo)}
          />
        );
      })}
      <Box height={12} />
      <Heading size="md">Up next</Heading>
      <Box height={3} />
      {getByStatus(sortedTodos, "Next Up").map((todo) => {
        return (
          <TodoCell
            key={todo.id}
            todo={todo}
            onClickVote={() => handleVote(todo)}
          />
        );
      })}

      <Box height={12} />
      <Heading size="md">Backlog</Heading>
      <Box height={3} />
      {getByStatus(sortedTodos, undefined).map((todo) => {
        return (
          <TodoCell
            key={todo.id}
            todo={todo}
            onClickVote={() => handleVote(todo)}
          />
        );
      })}
      <Box height={12} />
      <Heading size="md">Completed</Heading>
      <Box height={3} />
      {getByStatus(sortedTodos, "Completed").map((todo) => {
        return (
          <TodoCell
            key={todo.id}
            todo={todo}
            onClickVote={() => handleVote(todo)}
            isChecked
          />
        );
      })}
      <Box height={12} />
    </PublicLayout>
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
