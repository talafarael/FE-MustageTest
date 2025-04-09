import React from "react";
import { Flex, Text, Button } from "@radix-ui/themes";

export interface ButtonsPops {
  handler?: () => void
  type?: "button" | "submit"
  style?: string
  title: string
}
export const Buttons: React.FC<ButtonsPops> = ({ title, handler, type = "button", style }) => {
  return (
    <Button
      onClick={() => handler && handler()}
      type={type}
      className={`${style}`}
    >{title}</Button>
  );
}
