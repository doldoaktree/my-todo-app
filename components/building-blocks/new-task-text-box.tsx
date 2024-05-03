"use client";
import { ChangeEvent, useState } from "react";
import { Button } from "../ui/button";

type Props = {
    onAdd: (value: string) => void;
};

export function NewTaskTextBox(props: Props) {

    const [text, setText] = useState('');

    const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const notifyAdd = () => {
        props.onAdd(text);
        setText('');
    }

    return (
        <div>
            <div className="relative">
              <input
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-xl shadow-sm"
                placeholder="Add a new task"
                value={text}
                onChange={onTextChange}
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={notifyAdd}>
                  Add
                </Button>
              </span>
            </div>
          </div>
    );
}