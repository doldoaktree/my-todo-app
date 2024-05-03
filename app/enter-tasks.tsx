'use client';
import { useState } from "react";

export default function EnterTasks() {
  const [inputValue, setInputValue] = useState("Add a new task");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return <input type="text" value={inputValue} onChange={handleInputChange} />;
}
