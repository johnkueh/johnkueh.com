import { CalendarIcon, ChatIcon } from "@chakra-ui/icons";
import React from "react";
import IconBubble from "./IconBubble";

const DailyBreadIcon = ({ type }) => {
  if (type === "Journal")
    return (
      <IconBubble bg="green.400">
        <ChatIcon color="green.50" />
      </IconBubble>
    );

  return (
    <IconBubble bg="blue.400">
      <CalendarIcon color="blue.50" />
    </IconBubble>
  );
};

export default DailyBreadIcon;
