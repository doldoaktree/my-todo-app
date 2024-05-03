"use client";
import { useState } from "react";

export default function EnterTasks() {
  const [inputValue, setInputValue] = useState("");

  // const handleInputChange = (event) => {
  //   console.log(event.target.value);
  //   setInputValue(event.target.value);
  // };

  return <div> {inputValue}</div>;
}
