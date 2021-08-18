import { BsArrowLeft } from "react-icons/bs";

const Data = [
    { id: "clear", value: "AC", display: "AC" },
    {
        id: "backspace",
        value: "backspace",
        display: <BsArrowLeft aria-hidden={true} focusable={false} />,
    },
    { id: "divide", value: "/", display: "/" },
    { id: "seven", value: "7", display: "7" },
    { id: "eight", value: "8", display: "8" },
    { id: "nine", value: "9", display: "9" },
    { id: "multiply", value: "*", display: "*" },
    { id: "four", value: "4", display: "4" },
    { id: "five", value: "5", display: "5" },
    { id: "six", value: "6", display: "6" },
    { id: "subtract", value: "-", display: "-" },
    { id: "one", value: "1", display: "1" },
    { id: "two", value: "2", display: "2" },
    { id: "three", value: "3", display: "3" },
    { id: "add", value: "+", display: "+" },
    { id: "zero", value: "0", display: "0" },
    { id: "decimal", value: ".", display: "." },
    { id: "equals", value: "=", display: "=" },
    { id: "up", value: "up", display: "up" },
];

export default Data;
