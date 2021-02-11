import { Box, Heading, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { orderBy } from "lodash";
import Head from "next/head";
import React from "react";
import { incrementVote, useTodos } from "../features/kitchen/data";
import TodoCell from "../features/kitchen/TodoCell";
import { getTodosWithVotes, Todo } from "../shared/api";

dayjs.extend(relativeTime);

function getByStatus(todos, status: string) {
  return todos.filter((todo) => todo.Status === status);
}

export default function Kitchen({ tableData }) {
  const { data: todos, mutate } = useTodos(tableData);

  async function handleVote(votedTodo: Todo) {
    const incrementedCount = votedTodo.votes + 1;
    mutate(() => {
      const otherTodos = todos.filter((todo) => todo.id !== votedTodo.id);
      return [...otherTodos, { ...votedTodo, votes: incrementedCount }];
    }, false);
    await incrementVote(votedTodo.id, incrementedCount);
  }

  const sortedTodos = orderBy(todos, "votes", "desc");

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
    </div>
  );
}

export async function getStaticProps() {
  const data = await getTodosWithVotes();

  return {
    props: {
      tableData: data,
    },
    revalidate: 60,
  };
}
